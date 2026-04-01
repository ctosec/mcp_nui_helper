# tizen-nui-helper 사용 설명서

## 1. 개요

`tizen-nui-helper`는 LLM이 Tizen NUI 코드를 올바르게 생성할 수 있도록 도와주는 MCP(Model Context Protocol) Server입니다.

### 해결하는 문제

| 문제 | 해결 방법 |
|------|----------|
| LLM이 Tizen NUI API를 모르거나 잘못 사용 | `lookup_widget` 도구로 정확한 API 시그니처 제공 |
| TV 특화 패턴(포커스, 키 이벤트 등)을 모름 | `get_pattern` 도구로 검증된 코드 패턴 제공 |
| csproj 패키지 버전 불일치로 VBS 빌드 실패 | `scaffold` 도구로 검증된 프로젝트 생성 |
| 잘못된 프레임워크(Xamarin, MAUI) 코드 생성 | `validate_code` 도구로 실시간 검증 |

### 지원 환경

- **Target**: Tizen 10.0, TV 해상도 (1920x1080)
- **언어**: C# (LangVersion 9.0), XAML 미사용
- **개발 도구**: ClineSR (Samsung 내부 Cline 포크) 또는 MCP를 지원하는 모든 도구

---

## 2. 설치

### 2.1 사전 요구사항

- Node.js 18 이상
- Git

### 2.2 설치 과정

```bash
# 1. 저장소 클론
git clone https://github.com/ctosec/mcp_nui_helper.git
cd mcp_nui_helper

# 2. 의존성 설치
npm install

# 3. 빌드
npm run build
```

### 2.3 설치 확인

```bash
# 테스트 실행
npm test

# MCP 서버 동작 확인 (JSON 응답이 나오면 정상)
echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"capabilities":{},"clientInfo":{"name":"test","version":"1.0"},"protocolVersion":"2024-11-05"}}' | node dist/index.js
```

---

## 3. ClineSR 연동

### 3.1 MCP 설정 파일 찾기

ClineSR의 MCP 설정 파일은 일반적으로 다음 경로에 있습니다:

- **Windows**: `%APPDATA%\Code\User\globalStorage\saoudrizwan.claude-dev\settings\cline_mcp_settings.json`
- **Linux/Mac**: `~/.config/Code/User/globalStorage/saoudrizwan.claude-dev/settings/cline_mcp_settings.json`

> ClineSR의 설정 경로가 다를 수 있습니다. ClineSR 설정에서 MCP 서버 설정 위치를 확인하세요.

### 3.2 MCP 서버 등록

`cline_mcp_settings.json`에 다음을 추가합니다:

```json
{
  "mcpServers": {
    "tizen-nui-helper": {
      "command": "node",
      "args": ["C:/path/to/mcp_nui_helper/dist/index.js"],
      "disabled": false
    }
  }
}
```

> `args`의 경로를 실제 설치 경로로 변경하세요.

### 3.3 연결 확인

1. ClineSR (VS Code)을 재시작합니다
2. ClineSR 채팅창 하단에 MCP 서버 연결 상태가 표시됩니다
3. `tizen-nui-helper`가 연결됨으로 표시되면 성공입니다

---

## 4. 사용 방법

### 4.1 새 프로젝트 만들기

ClineSR 채팅에서 자연어로 요청하면 됩니다:

```
"Tizen NUI 프로젝트를 만들어줘. 이름은 WeatherApp이야."
```

LLM이 자동으로 `scaffold` 도구를 호출하여 다음 파일을 생성합니다:

```
WeatherApp/
├── WeatherApp.sln
├── WeatherApp/
│   ├── WeatherApp.csproj    ← 검증된 패키지 버전
│   ├── Program.cs
│   └── App.cs               ← NUIApplication, 포커스 설정 포함
└── .clinerules              ← Tizen NUI 코딩 규칙 (자동 주입)
```

`.clinerules` 파일이 생성되면, 이후 **모든 대화에서 Tizen NUI 코딩 규칙이 자동으로 적용**됩니다.

### 4.2 페이지 추가

```
"메인 페이지를 추가해줘. 이름은 MainPage."
```

LLM이 `scaffold` 도구로 `Pages/MainPage.cs`를 생성하고, `App.cs`에 페이지 네비게이션을 추가합니다.

### 4.3 컴포넌트 추가

```
"메뉴 카드 컴포넌트를 만들어줘."
```

LLM이 `scaffold` 도구로 포커스 가능한 컴포넌트를 생성합니다. 생성된 컴포넌트에는:
- `Focusable = true`
- `FocusGained`/`FocusLost` 이벤트 핸들러
- `KeyEvent` 핸들러 (Return/Enter 처리)

가 기본 포함됩니다.

### 4.4 코드 검토 요청

```
"현재 파일의 Tizen NUI 코드를 검토해줘."
```

LLM이 `validate_code` 도구를 호출하여 다음을 검출합니다:

| 검출 항목 | 예시 |
|----------|------|
| 잘못된 API 사용 | `ImageView.Image = "icon.png"` → `ResourceUrl` 사용 필요 |
| 잘못된 프레임워크 | `using Xamarin.Forms;` → `using Tizen.NUI;` 사용 필요 |
| Dispose 누락 | `Remove()` 후 `Dispose()` 미호출 |
| 잘못된 Timer | `System.Threading.Timer` → `Tizen.NUI.Timer` 사용 필요 |
| csproj 버전 오류 | 잘못된 Tizen.NET.Sdk 버전 |
| TV 패턴 누락 | `Focusable=true`인데 포커스 이벤트 핸들러 없음 |

### 4.5 API 조회

```
"ScrollableBase 위젯의 속성과 이벤트를 알려줘."
```

LLM이 `lookup_widget` 도구를 호출하여 정확한 API 시그니처를 반환합니다.

### 4.6 코드 패턴 참조

```
"그라디언트 배경 패턴을 보여줘."
```

LLM이 `get_pattern` 도구를 호출합니다. 사용 가능한 패턴:

| 패턴 이름 | 설명 |
|-----------|------|
| `focus` | TV 리모컨 포커스 네비게이션 |
| `gradient` | PropertyMap 기반 그라디언트 배경 |
| `animation` | Animation API (Scale, Opacity, Position) |
| `key_event` | TV 리모컨 키 이벤트 처리 |
| `timer` | NUI Timer로 지연 작업 실행 |
| `dispose` | View 제거 시 리소스 정리 |
| `page_navigation` | 페이지 전환 (NavigateTo/GoBack) |
| `async_loading` | 비동기 데이터 로딩 + 스피너 |
| `card_component` | 이미지 + 텍스트 카드 UI |
| `form_input` | 편집 가능한 입력 필드 |
| `list_carousel` | 캐러셀/리스트 UI |

---

## 5. MCP Prompts 사용

ClineSR에서 MCP Prompt를 수동 선택하여 특정 워크플로우를 시작할 수 있습니다.

| Prompt | 용도 | 사용 시점 |
|--------|------|----------|
| `new-tizen-project` | 새 프로젝트 시작 | 프로젝트를 처음 만들 때 |
| `add-page` | 페이지 추가 | 새 화면이 필요할 때 |
| `add-component` | 컴포넌트 추가 | 재사용 가능한 UI 요소가 필요할 때 |
| `review-nui-code` | 코드 검토 | 작성한 코드를 검증하고 싶을 때 |

Prompt를 선택하면 LLM에 상세한 작업 지시가 주입되어, 올바른 순서로 MCP 도구를 활용합니다.

---

## 6. .clinerules 동작 방식

`scaffold`로 프로젝트를 생성하면 `.clinerules` 파일이 프로젝트 루트에 생성됩니다. 이 파일은 **ClineSR이 매 대화마다 자동으로 시스템 프롬프트에 포함**시키므로, 사용자가 별도로 신경 쓸 필요 없이 다음 규칙이 항상 적용됩니다:

### 자동 적용되는 규칙

- XAML 사용 금지 — 모든 UI는 C# 코드로 작성
- Xamarin.Forms, MAUI, WPF 네임스페이스 사용 금지
- csproj 패키지 버전 임의 변경 금지
- 위젯 API 불확실 시 `lookup_widget` 호출
- 코드 작성 후 `validate_code` 검증
- 해상도 1920x1080 기준
- 인터랙티브 요소에 `Focusable = true` 설정
- `FocusGained`/`FocusLost`로 시각적 피드백 제공
- `Return`/`Enter` (선택), `Escape`/`XF86Back` (뒤로) 키 이벤트 처리
- `SetCurrentFocusView`는 Timer 콜백 안에서 호출
- `Remove()` 후 반드시 `Dispose()` 호출
- `Animation`/`Timer` 사용 후 `Stop()` + `Dispose()` 호출

---

## 7. 전체 동작 흐름

```
사용자가 ClineSR에서 자연어로 요청
         │
         ▼
ClineSR LLM이 .clinerules 읽음 (자동)
         │
         ▼
.clinerules의 지시에 따라 MCP 도구 호출
         │
         ├─ scaffold        → 검증된 템플릿으로 코드 생성
         ├─ lookup_widget   → 정확한 API 시그니처 조회
         ├─ get_pattern     → 검증된 코드 패턴 참조
         └─ validate_code   → 생성된 코드 검증
         │
         ▼
올바른 Tizen NUI 코드 반환
```

---

## 8. 검증된 패키지 버전

VBS 빌드에서 정상 동작이 확인된 패키지 조합입니다. **이 버전을 변경하지 마세요.**

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

---

## 9. 데이터 업데이트 (관리자용)

Tizen 버전이 업데이트되면 데이터를 갱신해야 합니다.

### 9.1 위젯 API 데이터 업데이트

```bash
# TizenFX 소스 클론
git clone --depth 1 https://github.com/Samsung/TizenFX.git /tmp/TizenFX

# API 추출 스크립트 실행
npx tsx scripts/extract-api.ts /tmp/TizenFX

# 결과:
#   - data/widgets.json 업데이트
#   - knowledge/api-reference/*.md 생성
```

### 9.2 가이드 문서 업데이트

```bash
# docs.tizen.org 크롤링
npx tsx scripts/crawl-docs.ts

# 결과:
#   - knowledge/guides/*.md 업데이트
```

### 9.3 업데이트 커밋

```bash
git add data/ knowledge/
git commit -m "chore: update data for Tizen X.Y"
git push
```

---

## 10. 검증 규칙 추가 (관리자용)

LLM이 자주 틀리는 새로운 패턴을 발견하면 `data/rules.json`에 규칙을 추가합니다.

### 규칙 형식

```json
{
  "id": "NUI002",
  "severity": "error",
  "category": "wrong_api",
  "pattern": "정규식 패턴",
  "contextNegative": "이 패턴이 있으면 규칙 무시 (선택)",
  "message": "사용자에게 보여줄 메시지",
  "wrong": "잘못된 코드 예시",
  "correct": "올바른 코드 예시"
}
```

### 규칙 카테고리

| ID 범위 | 카테고리 | 설명 |
|---------|----------|------|
| NUI001-099 | `wrong_api` | 잘못 사용된 API |
| NUI100-199 | `wrong_framework` | 잘못된 프레임워크 사용 |
| NUI200-299 | `missing_pattern` | 필수 패턴 누락 |
| NUI300-399 | `csproj` | 프로젝트 파일 호환성 |
| NUI400-499 | `tv_pattern` | TV 특화 패턴 위반 |

---

## 11. 문제 해결

### MCP 서버가 연결되지 않음

1. `node dist/index.js`로 직접 실행하여 에러 메시지 확인
2. `npm run build`로 빌드가 성공하는지 확인
3. `cline_mcp_settings.json`의 경로가 정확한지 확인
4. Node.js 18 이상인지 확인: `node --version`

### LLM이 MCP 도구를 사용하지 않음

1. `.clinerules` 파일이 프로젝트 루트에 있는지 확인
2. ClineSR 설정에서 MCP 서버가 활성화(`disabled: false`)되어 있는지 확인
3. ClineSR을 재시작해보세요

### validate_code가 문제를 감지하지 못함

- `data/rules.json`에 해당 패턴이 없을 수 있습니다
- 새 규칙을 추가하세요 (10장 참조)

### scaffold로 생성한 프로젝트가 빌드되지 않음

- `npm run build`로 MCP 서버를 재빌드한 후 다시 시도하세요
- Tizen SDK가 올바르게 설치되어 있는지 확인하세요

---

## 12. 프로젝트 구조

```
mcp_nui_helper/
├── src/                        # MCP 서버 소스 코드
│   ├── index.ts                #   엔트리 포인트
│   ├── tools/                  #   MCP 도구 구현
│   │   ├── lookup.ts           #     lookup_widget, list_widgets
│   │   ├── validate.ts         #     validate_code
│   │   ├── pattern.ts          #     get_pattern
│   │   └── scaffold.ts         #     scaffold
│   ├── resources/              #   MCP 리소스 제공자
│   │   └── provider.ts         #     knowledge/ → MCP Resource 매핑
│   └── prompts/                #   MCP 프롬프트 제공자
│       └── provider.ts         #     워크플로우 템플릿
├── data/                       # 구조화된 데이터
│   ├── widgets.json            #   위젯 API DB (239개 위젯)
│   ├── rules.json              #   검증 규칙 DB (7개 규칙)
│   └── templates/              #   스캐폴딩 템플릿
│       ├── project/            #     프로젝트 템플릿 (sln, csproj, Program.cs, App.cs)
│       ├── page/               #     페이지 템플릿
│       └── component/          #     컴포넌트 템플릿
├── knowledge/                  # LLM 참조 문서 (마크다운)
│   ├── guides/                 #   NUI 개발 가이드 (9개)
│   ├── patterns/               #   검증된 코드 패턴 (11개)
│   └── api-reference/          #   위젯별 API 문서 (239개)
├── scripts/                    # 유지보수 스크립트
│   ├── crawl-docs.ts           #   docs.tizen.org 크롤러
│   └── extract-api.ts          #   TizenFX API 추출기
├── tests/                      # 테스트
├── docs/                       # 설계 문서 및 계획
├── package.json
└── tsconfig.json
```
