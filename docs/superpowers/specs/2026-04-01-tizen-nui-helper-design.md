# tizen-nui-helper Design Spec

## Overview

**Name:** tizen-nui-helper
**Purpose:** LLM의 Tizen NUI domain knowledge 부족을 보완하는 MCP Server
**Target Users:** Tizen NUI 개발자 (범용 공개)
**Target Tool:** ClineSR (Samsung 내부 Cline 포크), MCP 지원 도구
**Implementation:** TypeScript (Node.js)
**Connection:** stdio (기본), SSE (옵션)
**Distribution:** GitHub 저장소 클론 (`git clone → npm install → 사용`)

## Problem Statement

LLM 모델들이 Tizen NUI에 대한 domain knowledge가 부족하여 품질이 낮은 코드를 생성한다. 구체적으로:

1. **API 무지** — 존재하지 않는 속성/메서드를 사용하거나 잘못된 타입으로 사용
2. **Tizen 특화 패턴 무지** — TV 리모컨 포커스 네비게이션, Timer 기반 포커스 설정, PropertyMap 비주얼 시스템 등을 모름
3. **csproj 호환성** — 패키지/버전 불일치로 Tizen Emulator에서는 동작하지만 VBS 빌드에서 컴파일 에러 발생

## Architecture

### Approach: Hybrid (Knowledge + Tools + Prompts)

구조화된 JSON DB로 API 정보를 관리하면서, Tools가 이를 활용해 조회/생성/검증을 수행하고, Knowledge 마크다운은 LLM이 컨텍스트로 직접 읽을 수 있도록 Resources로 노출한다.

### Directory Structure

```
tizen-nui-helper/
├── src/
│   ├── index.ts              # MCP Server 엔트리 (stdio + SSE)
│   ├── tools/
│   │   ├── lookup.ts         # lookup_widget, list_widgets
│   │   ├── scaffold.ts       # scaffold (project/page/component)
│   │   ├── validate.ts       # validate_code
│   │   └── pattern.ts        # get_pattern
│   ├── resources/
│   │   └── provider.ts       # knowledge/ → MCP Resource URI 매핑
│   └── prompts/
│       └── provider.ts       # MCP Prompt 템플릿 제공
├── data/
│   ├── widgets.json          # 위젯별 API 구조화 DB
│   ├── rules.json            # 검증 규칙 DB
│   └── templates/
│       ├── project/          # 프로젝트 스캐폴딩 템플릿
│       ├── page/             # 페이지 템플릿
│       └── component/        # 컴포넌트 템플릿
├── knowledge/
│   ├── guides/               # docs.tizen.org 기반 가이드
│   ├── patterns/             # 검증된 코드 패턴 (TravelAgent 프로젝트 추출)
│   └── api-reference/        # GitHub 소스 XML 주석 기반 API 문서
├── scripts/
│   ├── crawl-docs.ts         # docs.tizen.org 크롤러 (유지보수용)
│   └── extract-api.ts        # TizenFX GitHub 소스 XML 주석 추출기 (유지보수용)
├── package.json
├── tsconfig.json
└── README.md
```

### Data Flow

```
LLM (ClineSR)
  ├── Resources 요청 → knowledge/ 마크다운 반환 (가이드, 패턴, API 문서)
  ├── Tools 호출
  │   ├── lookup_widget  → data/widgets.json 조회 → API 시그니처 반환
  │   ├── list_widgets   → data/widgets.json 조회 → 카테고리별 목록 반환
  │   ├── scaffold       → data/templates/ 기반 → 코드 파일들 반환
  │   ├── validate_code  → data/rules.json 기반 → 문제점 + 수정안 반환
  │   └── get_pattern    → knowledge/patterns/ 조회 → 패턴 코드 반환
  └── Prompts 요청 → 워크플로우 템플릿 반환 (사용자 수동 선택)
```

## Tools (5개)

### Tool 1: lookup_widget

위젯의 정확한 API 시그니처를 조회한다.

**Input:**
- `name` (string, required): 위젯 이름 (예: "TextLabel", "View")
- `filter` (string, optional): "properties" | "events" | "methods" | "all" (기본: "all")

**Output:**
- `name`: 위젯 이름
- `namespace`: 네임스페이스 (예: "Tizen.NUI.BaseComponents")
- `inherits`: 상속 클래스
- `properties`: 속성 배열 (name, type, description)
- `events`: 이벤트 배열
- `methods`: 메서드 배열
- `example`: 사용 예시 코드

**Data Source:** `data/widgets.json`

### Tool 2: list_widgets

사용 가능한 위젯 목록을 카테고리별로 반환한다.

**Input:**
- `category` (string, optional): "basic" | "layout" | "input" | "container" | "media" | "all" (기본: "all")

**Output:** 카테고리별 위젯 이름 배열

**Data Source:** `data/widgets.json`

### Tool 3: scaffold

프로젝트, 페이지, 컴포넌트를 생성한다.

**Input:**
- `type` (string, required): "project" | "page" | "component"
- `name` (string, required): 이름
- `options` (object, optional):
  - `resolution` (string): TV 해상도 (기본: "1920x1080")
  - `pages` (string[]): 초기 페이지 목록 (project일 때)
  - `focusable` (boolean): 포커스 네비게이션 포함 (component일 때)
  - `withGradient` (boolean): 그라디언트 배경 포함 (page일 때)

**Output:**
- `files`: 생성할 파일 배열 (path, content)

**project 생성 시 포함되는 파일:**
- `{Name}.sln`
- `{Name}/{Name}.csproj` (검증된 패키지 버전: Tizen.NET 10.0.0.17693 + Tizen.NET.Sdk 1.1.9)
- `{Name}/Program.cs`
- `{Name}/App.cs` (NUIApplication, 페이지 네비게이션)
- `.clinerules` (Tizen NUI 코딩 규칙 자동 주입)

**Data Source:** `data/templates/`

### Tool 4: validate_code

작성된 C# 코드에서 Tizen NUI 관련 문제를 감지한다.

**Input:**
- `code` (string, required): 검증할 C# 코드
- `fileType` (string, optional): "page" | "component" | "app" | "csproj" | "auto" (기본: "auto")

**Output:**
- `issues`: 문제 배열 (severity, line, message, wrong, correct)
- `suggestions`: 제안 배열 (type, message)

**검증 규칙 카테고리:**

| ID 범위 | 카테고리 | 설명 |
|---------|----------|------|
| NUI001-099 | wrong_api | 잘못 사용된 API (예: ImageView.Image에 string 할당) |
| NUI100-199 | wrong_framework | 잘못된 프레임워크 사용 (Xamarin.Forms, MAUI 등) |
| NUI200-299 | missing_pattern | 필수 패턴 누락 (Dispose, Timer 포커스 등) |
| NUI300-399 | csproj | 프로젝트 파일 호환성 (패키지 버전) |
| NUI400-499 | tv_pattern | TV 특화 패턴 위반 (Focusable인데 키 핸들러 없음) |

**Data Source:** `data/rules.json`

### Tool 5: get_pattern

검증된 코드 패턴을 반환한다.

**Input:**
- `pattern` (string, required): "focus" | "gradient" | "animation" | "key_event" | "timer" | "dispose" | "page_navigation" | "async_loading" | "card_component" | "form_input" | "list_carousel"

**Output:**
- `name`: 패턴 이름
- `description`: 패턴 설명
- `code`: 전체 동작하는 코드 예시
- `key_points`: 핵심 포인트 목록

**Data Source:** `knowledge/patterns/`

## Resources

`knowledge/` 디렉토리의 마크다운 파일을 MCP Resource URI로 노출한다.

### URI 체계

```
resources://tizen-nui-helper/guides/{name}
resources://tizen-nui-helper/patterns/{name}
resources://tizen-nui-helper/api-reference/{widget-name}
```

### guides/ (docs.tizen.org 기반)

| 파일 | 내용 |
|------|------|
| getting-started.md | NUI 앱 기본 구조 |
| layout-system.md | LinearLayout, GridLayout, AbsoluteLayout, FlexLayout |
| focus-navigation.md | TV 리모컨 포커스 시스템 |
| animation.md | Animation API 가이드 |
| visual-system.md | PropertyMap, Visual, 그라디언트 |
| image-loading.md | ImageView, 리소스 로딩 |
| text-rendering.md | TextLabel, TextField, TextEditor |
| app-lifecycle.md | NUIApplication 라이프사이클 |
| key-events.md | 키 이벤트 처리 (TV 리모컨) |

### patterns/ (TravelAgent 프로젝트 추출)

| 파일 | 내용 |
|------|------|
| focusable-component.md | 포커스 가능 컴포넌트 패턴 |
| page-navigation.md | 페이지 전환 패턴 |
| async-data-loading.md | 비동기 데이터 로딩 + 스피너 |
| gradient-background.md | PropertyMap 기반 그라디언트 배경 |
| card-component.md | 카드 UI 패턴 |
| form-input.md | 폼 입력 패턴 (FocusableInput) |
| list-carousel.md | 리스트/캐러셀 패턴 |
| dispose-cleanup.md | 리소스 정리 패턴 |

### api-reference/ (GitHub 소스 추출)

위젯별 전체 API 문서. View, TextLabel, ImageView, TextField, TextEditor, Button, ScrollableBase, Window, Animation, Timer 등.

## Prompts (4개)

사용자가 ClineSR에서 수동으로 선택하는 워크플로우 템플릿.

| 이름 | 용도 |
|------|------|
| new-tizen-project | 새 프로젝트 시작 시 scaffold 도구 사용 유도 |
| add-page | 페이지 추가 시 scaffold + App.cs 업데이트 유도 |
| add-component | 컴포넌트 추가 시 Focusable 패턴 유도 |
| review-nui-code | 코드 검토 시 validate_code 실행 유도 |

## .clinerules (자동 주입)

`scaffold`로 프로젝트 생성 시 함께 생성된다. Cline이 매 대화마다 시스템 프롬프트에 자동 포함한다.

**내용:**
- XAML 금지, C# 코드 전용 UI
- csproj 패키지 버전 임의 변경 금지
- 위젯 API 불확실 시 lookup_widget 호출 필수
- 코드 작성 후 validate_code 검증 필수
- TV 개발 규칙 (1920x1080, Focusable, FocusGained/FocusLost, 키 이벤트)
- 리소스 관리 (Remove + Dispose, Animation/Timer Stop + Dispose)

## Data Sources & Collection

모든 데이터는 개발 시점에 수집하여 저장소에 커밋한다. 사용자는 `git clone`만 하면 모든 데이터가 즉시 사용 가능하다.

### widgets.json

- **소스:** TizenFX GitHub 저장소의 C# 소스 파일 XML 주석
- **추출:** `scripts/extract-api.ts`로 public 클래스, 프로퍼티, 메서드, 이벤트 추출
- **업데이트:** Tizen 버전 업데이트 시 프로젝트 관리자가 스크립트 재실행 후 커밋

### rules.json

- **소스:** 수동 작성 (LLM이 자주 틀리는 패턴 수집)
- **업데이트:** 새로운 실수 패턴 발견 시 JSON에 항목 추가 후 커밋

### knowledge/guides/

- **소스:** https://docs.tizen.org/application/dotnet/guides/user-interface/nui
- **추출:** `scripts/crawl-docs.ts`로 마크다운 변환
- **업데이트:** 공식 문서 변경 시 스크립트 재실행 후 커밋

### knowledge/patterns/

- **소스:** TravelAgent 프로젝트 (C:\My_Project\tizen_travel_agent\nui) 에서 추출한 검증된 패턴
- **업데이트:** 새로운 검증된 패턴 발견 시 수동 추가 후 커밋

### knowledge/api-reference/

- **소스:** TizenFX GitHub 저장소 XML 주석 기반
- **추출:** `scripts/extract-api.ts`로 마크다운 생성
- **업데이트:** widgets.json과 함께 업데이트

## Verified Tizen Package Versions

VBS 빌드에서 정상 동작이 확인된 패키지 조합:

```xml
<Project Sdk="Tizen.NET.Sdk/1.1.9">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>tizen10.0</TargetFramework>
    <LangVersion>9.0</LangVersion>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Tizen.NET" Version="10.0.0.17693" />
    <PackageReference Include="Tizen.NET.Sdk" Version="1.1.9" />
  </ItemGroup>
</Project>
```

## Testing Strategy

- **Unit Tests:** 각 Tool의 입출력 검증 (lookup, scaffold, validate, pattern)
- **Integration Tests:** MCP 프로토콜 통신 검증 (stdio)
- **Validation Rule Tests:** rules.json의 각 규칙이 올바른 패턴에 매칭되는지 검증
- **Template Tests:** scaffold 출력물이 유효한 C# 코드인지 검증

## Success Criteria

1. ClineSR에서 MCP 서버 연결 후, LLM이 올바른 Tizen NUI API를 사용하여 코드를 생성한다
2. 생성된 csproj가 VBS 빌드에서 컴파일 에러 없이 통과한다
3. validate_code가 잘못된 API 사용, 프레임워크 혼용, 패턴 누락을 감지한다
4. scaffold로 생성된 프로젝트가 Tizen Emulator에서 즉시 실행 가능하다
