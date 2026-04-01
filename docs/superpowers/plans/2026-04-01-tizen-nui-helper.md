# tizen-nui-helper Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** LLM의 Tizen NUI domain knowledge 부족을 보완하는 MCP Server를 구축한다.

**Architecture:** Hybrid 접근법 — 구조화된 JSON DB(widgets.json, rules.json)를 Tools가 활용하여 API 조회/코드 생성/검증을 수행하고, Knowledge 마크다운은 MCP Resources로 노출한다. stdio 기반 MCP 프로토콜로 ClineSR과 통신한다.

**Tech Stack:** TypeScript, Node.js, @modelcontextprotocol/sdk, vitest (테스트)

**Spec:** `docs/superpowers/specs/2026-04-01-tizen-nui-helper-design.md`

---

## File Structure

```
tizen-nui-helper/
├── src/
│   ├── index.ts                    # MCP Server 엔트리 (stdio + SSE)
│   ├── tools/
│   │   ├── lookup.ts               # lookup_widget, list_widgets
│   │   ├── scaffold.ts             # scaffold (project/page/component)
│   │   ├── validate.ts             # validate_code
│   │   └── pattern.ts              # get_pattern
│   ├── resources/
│   │   └── provider.ts             # knowledge/ → MCP Resource 매핑
│   └── prompts/
│       └── provider.ts             # MCP Prompt 템플릿
├── tests/
│   ├── tools/
│   │   ├── lookup.test.ts
│   │   ├── scaffold.test.ts
│   │   ├── validate.test.ts
│   │   └── pattern.test.ts
│   ├── resources/
│   │   └── provider.test.ts
│   └── prompts/
│       └── provider.test.ts
├── data/
│   ├── widgets.json                # 위젯별 API DB
│   ├── rules.json                  # 검증 규칙 DB
│   └── templates/
│       ├── project/
│       │   ├── SolutionFile.sln.tmpl
│       │   ├── ProjectFile.csproj.tmpl
│       │   ├── Program.cs.tmpl
│       │   └── App.cs.tmpl
│       ├── page/
│       │   └── Page.cs.tmpl
│       ├── component/
│       │   └── Component.cs.tmpl
│       └── clinerules.tmpl
├── knowledge/
│   ├── guides/
│   │   ├── getting-started.md
│   │   ├── layout-system.md
│   │   ├── focus-navigation.md
│   │   ├── animation.md
│   │   ├── visual-system.md
│   │   ├── image-loading.md
│   │   ├── text-rendering.md
│   │   ├── app-lifecycle.md
│   │   └── key-events.md
│   ├── patterns/
│   │   ├── focusable-component.md
│   │   ├── page-navigation.md
│   │   ├── async-data-loading.md
│   │   ├── gradient-background.md
│   │   ├── card-component.md
│   │   ├── form-input.md
│   │   ├── list-carousel.md
│   │   └── dispose-cleanup.md
│   └── api-reference/
│       └── (위젯별 .md 파일)
├── scripts/
│   ├── crawl-docs.ts
│   └── extract-api.ts
├── package.json
├── tsconfig.json
└── vitest.config.ts
```

---

## Task 1: Project Setup

**Files:**
- Create: `package.json`
- Create: `tsconfig.json`
- Create: `vitest.config.ts`
- Create: `.gitignore`

- [ ] **Step 1: Initialize package.json**

```json
{
  "name": "tizen-nui-helper",
  "version": "0.1.0",
  "description": "MCP Server for Tizen NUI development",
  "type": "module",
  "main": "dist/index.js",
  "bin": {
    "tizen-nui-helper": "dist/index.js"
  },
  "scripts": {
    "build": "tsc",
    "dev": "tsx src/index.ts",
    "test": "vitest run",
    "test:watch": "vitest"
  },
  "keywords": ["mcp", "tizen", "nui"],
  "license": "MIT"
}
```

- [ ] **Step 2: Install dependencies**

Run: `npm install @modelcontextprotocol/sdk zod`
Run: `npm install -D typescript tsx vitest @types/node`

Expected: `node_modules/` created, no errors.

- [ ] **Step 3: Create tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "Node16",
    "moduleResolution": "Node16",
    "outDir": "dist",
    "rootDir": ".",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "declaration": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules", "dist", "tests"]
}
```

- [ ] **Step 4: Create vitest.config.ts**

```typescript
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    include: ["tests/**/*.test.ts"],
  },
});
```

- [ ] **Step 5: Create .gitignore**

```
node_modules/
dist/
*.tsbuildinfo
```

- [ ] **Step 6: Verify setup compiles**

Run: `npx tsc --noEmit`
Expected: No errors (no source files yet, clean exit).

- [ ] **Step 7: Commit**

```bash
git add package.json package-lock.json tsconfig.json vitest.config.ts .gitignore
git commit -m "chore: project setup with TypeScript, MCP SDK, vitest"
```

---

## Task 2: Sample Data Files

Tools 테스트에 필요한 최소한의 샘플 데이터를 먼저 만든다. 전체 데이터는 Task 12-13에서 채운다.

**Files:**
- Create: `data/widgets.json`
- Create: `data/rules.json`

- [ ] **Step 1: Create sample widgets.json**

`data/widgets.json` — 테스트에 필요한 3개 위젯만 포함:

```json
{
  "widgets": [
    {
      "name": "View",
      "namespace": "Tizen.NUI.BaseComponents",
      "inherits": null,
      "category": "basic",
      "description": "The base class for all NUI views.",
      "properties": [
        { "name": "Size", "type": "Size", "description": "The size of the view." },
        { "name": "Position", "type": "Position", "description": "The position of the view." },
        { "name": "BackgroundColor", "type": "Color", "description": "The background color." },
        { "name": "Opacity", "type": "float", "description": "The opacity (0.0 ~ 1.0)." },
        { "name": "CornerRadius", "type": "float", "description": "The corner radius." },
        { "name": "Focusable", "type": "bool", "description": "Whether the view can receive focus." },
        { "name": "Padding", "type": "Extents", "description": "The padding." },
        { "name": "Margin", "type": "Extents", "description": "The margin." },
        { "name": "Layout", "type": "LayoutItem", "description": "The layout of the view." },
        { "name": "BorderlineWidth", "type": "float", "description": "The borderline width." },
        { "name": "BorderlineColor", "type": "Color", "description": "The borderline color." },
        { "name": "BorderlineOffset", "type": "float", "description": "The borderline offset (-1 to 1)." },
        { "name": "ClippingMode", "type": "ClippingModeType", "description": "The clipping mode." }
      ],
      "events": [
        { "name": "FocusGained", "signature": "EventHandler<EventArgs>", "description": "Fired when focus is gained." },
        { "name": "FocusLost", "signature": "EventHandler<EventArgs>", "description": "Fired when focus is lost." },
        { "name": "KeyEvent", "signature": "EventHandler<KeyEventArgs>", "description": "Fired when a key event occurs." }
      ],
      "methods": [
        { "name": "Add", "signature": "void Add(View child)", "description": "Add a child view." },
        { "name": "Remove", "signature": "void Remove(View child)", "description": "Remove a child view." },
        { "name": "Dispose", "signature": "void Dispose()", "description": "Dispose the view and release resources." }
      ],
      "example": "var view = new View\n{\n    Size = new Size(400, 300),\n    BackgroundColor = new Color(1f, 1f, 1f, 1f),\n    Layout = new LinearLayout\n    {\n        LinearOrientation = LinearLayout.Orientation.Vertical\n    }\n};"
    },
    {
      "name": "TextLabel",
      "namespace": "Tizen.NUI.BaseComponents",
      "inherits": "View",
      "category": "basic",
      "description": "A view for displaying text.",
      "properties": [
        { "name": "Text", "type": "string", "description": "The text to display." },
        { "name": "PointSize", "type": "float", "description": "The font size in points." },
        { "name": "TextColor", "type": "Color", "description": "The text color." },
        { "name": "FontFamily", "type": "string", "description": "The font family name." },
        { "name": "MultiLine", "type": "bool", "description": "Whether multi-line is enabled." },
        { "name": "Ellipsis", "type": "bool", "description": "Whether ellipsis is enabled." },
        { "name": "HorizontalAlignment", "type": "HorizontalAlignment", "description": "Horizontal text alignment." },
        { "name": "VerticalAlignment", "type": "VerticalAlignment", "description": "Vertical text alignment." }
      ],
      "events": [],
      "methods": [],
      "example": "var label = new TextLabel\n{\n    Text = \"Hello\",\n    PointSize = 20f,\n    TextColor = new Color(1f, 1f, 1f, 1f),\n    FontFamily = \"SamsungOneUI\"\n};"
    },
    {
      "name": "ImageView",
      "namespace": "Tizen.NUI.BaseComponents",
      "inherits": "View",
      "category": "media",
      "description": "A view for displaying an image.",
      "properties": [
        { "name": "ResourceUrl", "type": "string", "description": "The URL of the image resource." },
        { "name": "Image", "type": "PropertyMap", "description": "The image property map. Do NOT assign a string to this." },
        { "name": "DesiredWidth", "type": "int", "description": "The desired image width." },
        { "name": "DesiredHeight", "type": "int", "description": "The desired image height." }
      ],
      "events": [],
      "methods": [],
      "example": "var img = new ImageView\n{\n    Size = new Size(320, 240),\n    ResourceUrl = \"https://example.com/photo.jpg\",\n    DesiredWidth = 320,\n    DesiredHeight = 240\n};"
    }
  ],
  "categories": {
    "basic": ["View", "TextLabel", "ImageView"],
    "layout": ["LinearLayout", "GridLayout", "AbsoluteLayout", "FlexLayout"],
    "input": ["TextField", "TextEditor", "Button", "CheckBox", "RadioButton"],
    "container": ["ScrollableBase", "RecyclerView", "Window"],
    "media": ["ImageView", "VideoView", "LottieAnimationView"]
  }
}
```

- [ ] **Step 2: Create sample rules.json**

`data/rules.json` — 핵심 규칙 7개:

```json
{
  "rules": [
    {
      "id": "NUI001",
      "severity": "error",
      "category": "wrong_api",
      "pattern": "\\.Image\\s*=\\s*\"",
      "message": "ImageView.Image는 PropertyMap 타입입니다. 문자열 경로는 ResourceUrl을 사용하세요.",
      "wrong": "imageView.Image = \"icon.png\"",
      "correct": "imageView.ResourceUrl = \"icon.png\""
    },
    {
      "id": "NUI100",
      "severity": "error",
      "category": "wrong_framework",
      "pattern": "using Xamarin\\.Forms|using Microsoft\\.Maui",
      "message": "Xamarin.Forms/MAUI가 아닌 Tizen.NUI를 사용해야 합니다.",
      "wrong": "using Xamarin.Forms;",
      "correct": "using Tizen.NUI;\nusing Tizen.NUI.BaseComponents;"
    },
    {
      "id": "NUI101",
      "severity": "error",
      "category": "wrong_framework",
      "pattern": "using System\\.Windows\\.Forms|using System\\.Windows\\.Controls",
      "message": "WPF/WinForms가 아닌 Tizen.NUI를 사용해야 합니다.",
      "wrong": "using System.Windows.Forms;",
      "correct": "using Tizen.NUI;\nusing Tizen.NUI.BaseComponents;"
    },
    {
      "id": "NUI200",
      "severity": "warning",
      "category": "missing_pattern",
      "pattern": "\\.Remove\\(",
      "contextNegative": "\\.Dispose\\(",
      "message": "View를 Remove한 후 Dispose()를 호출하지 않았습니다. 메모리 누수를 방지하려면 Remove 후 Dispose()를 호출하세요.",
      "wrong": "parent.Remove(child);",
      "correct": "parent.Remove(child);\nchild.Dispose();"
    },
    {
      "id": "NUI201",
      "severity": "warning",
      "category": "missing_pattern",
      "pattern": "System\\.Threading\\.Timer|new Timer\\(\\)",
      "message": "System.Threading.Timer가 아닌 Tizen.NUI.Timer를 사용하세요. NUI Timer는 UI 스레드에서 실행됩니다.",
      "wrong": "var timer = new System.Threading.Timer(...);",
      "correct": "var timer = new Timer(200);\ntimer.Tick += (s, e) => { /* ... */ return false; };\ntimer.Start();"
    },
    {
      "id": "NUI300",
      "severity": "error",
      "category": "csproj",
      "pattern": "Tizen\\.NET\\.Sdk.*Version=\"(?!1\\.1\\.9\")",
      "message": "Tizen.NET.Sdk 버전은 1.1.9를 사용하세요. 다른 버전은 VBS 빌드 실패를 유발합니다.",
      "wrong": "<PackageReference Include=\"Tizen.NET.Sdk\" Version=\"1.2.0\" />",
      "correct": "<PackageReference Include=\"Tizen.NET.Sdk\" Version=\"1.1.9\" />"
    },
    {
      "id": "NUI400",
      "severity": "warning",
      "category": "tv_pattern",
      "pattern": "Focusable\\s*=\\s*true",
      "contextNegative": "FocusGained|FocusLost|KeyEvent",
      "message": "Focusable=true를 설정했지만 FocusGained/FocusLost/KeyEvent 핸들러가 없습니다. TV에서 포커스 시각적 피드백이 필요합니다.",
      "wrong": "var btn = new View { Focusable = true };",
      "correct": "var btn = new View { Focusable = true };\nbtn.FocusGained += (s, e) => { /* highlight */ };\nbtn.FocusLost += (s, e) => { /* unhighlight */ };\nbtn.KeyEvent += (s, e) => { /* handle Enter/Return */ return false; };"
    }
  ]
}
```

- [ ] **Step 3: Commit**

```bash
git add data/widgets.json data/rules.json
git commit -m "feat: add sample widgets.json and rules.json for tool testing"
```

---

## Task 3: lookup_widget & list_widgets Tool

**Files:**
- Create: `src/tools/lookup.ts`
- Create: `tests/tools/lookup.test.ts`

- [ ] **Step 1: Write failing tests for lookup_widget**

`tests/tools/lookup.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { lookupWidget, listWidgets } from "../../src/tools/lookup.js";

describe("lookupWidget", () => {
  it("returns full widget info when name matches", () => {
    const result = lookupWidget({ name: "TextLabel" });
    expect(result.name).toBe("TextLabel");
    expect(result.namespace).toBe("Tizen.NUI.BaseComponents");
    expect(result.inherits).toBe("View");
    expect(result.properties.length).toBeGreaterThan(0);
    expect(result.example).toContain("TextLabel");
  });

  it("filters by properties only", () => {
    const result = lookupWidget({ name: "View", filter: "properties" });
    expect(result.properties.length).toBeGreaterThan(0);
    expect(result.events).toBeUndefined();
    expect(result.methods).toBeUndefined();
  });

  it("filters by events only", () => {
    const result = lookupWidget({ name: "View", filter: "events" });
    expect(result.events.length).toBeGreaterThan(0);
    expect(result.properties).toBeUndefined();
  });

  it("filters by methods only", () => {
    const result = lookupWidget({ name: "View", filter: "methods" });
    expect(result.methods.length).toBeGreaterThan(0);
    expect(result.properties).toBeUndefined();
  });

  it("returns error for unknown widget", () => {
    const result = lookupWidget({ name: "FakeWidget" });
    expect(result.error).toBeDefined();
    expect(result.error).toContain("FakeWidget");
  });

  it("is case-insensitive", () => {
    const result = lookupWidget({ name: "textlabel" });
    expect(result.name).toBe("TextLabel");
  });
});

describe("listWidgets", () => {
  it("returns all categories when no filter", () => {
    const result = listWidgets({});
    expect(result.basic).toBeDefined();
    expect(result.layout).toBeDefined();
    expect(result.input).toBeDefined();
    expect(result.container).toBeDefined();
    expect(result.media).toBeDefined();
  });

  it("returns only requested category", () => {
    const result = listWidgets({ category: "basic" });
    expect(result.basic).toBeDefined();
    expect(result.layout).toBeUndefined();
  });

  it("returns error for unknown category", () => {
    const result = listWidgets({ category: "unknown" });
    expect(result.error).toBeDefined();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/tools/lookup.test.ts`
Expected: FAIL — module `../../src/tools/lookup.js` not found.

- [ ] **Step 3: Implement lookup.ts**

`src/tools/lookup.ts`:

```typescript
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const dataPath = resolve(__dirname, "../../data/widgets.json");
const db = JSON.parse(readFileSync(dataPath, "utf-8"));

interface WidgetProperty {
  name: string;
  type: string;
  description: string;
}

interface WidgetEvent {
  name: string;
  signature: string;
  description: string;
}

interface WidgetMethod {
  name: string;
  signature: string;
  description: string;
}

interface Widget {
  name: string;
  namespace: string;
  inherits: string | null;
  category: string;
  description: string;
  properties: WidgetProperty[];
  events: WidgetEvent[];
  methods: WidgetMethod[];
  example: string;
}

export function lookupWidget(input: {
  name: string;
  filter?: "properties" | "events" | "methods" | "all";
}): any {
  const widget = db.widgets.find(
    (w: Widget) => w.name.toLowerCase() === input.name.toLowerCase()
  );

  if (!widget) {
    return {
      error: `Widget "${input.name}" not found. Use list_widgets to see available widgets.`,
    };
  }

  const filter = input.filter ?? "all";

  if (filter === "all") {
    return { ...widget };
  }

  const result: any = {
    name: widget.name,
    namespace: widget.namespace,
    inherits: widget.inherits,
    category: widget.category,
    description: widget.description,
    example: widget.example,
  };

  if (filter === "properties") result.properties = widget.properties;
  if (filter === "events") result.events = widget.events;
  if (filter === "methods") result.methods = widget.methods;

  return result;
}

export function listWidgets(input: { category?: string }): any {
  const categories = db.categories as Record<string, string[]>;

  if (!input.category || input.category === "all") {
    return { ...categories };
  }

  if (!(input.category in categories)) {
    return {
      error: `Category "${input.category}" not found. Available: ${Object.keys(categories).join(", ")}`,
    };
  }

  return { [input.category]: categories[input.category] };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/tools/lookup.test.ts`
Expected: All 8 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/tools/lookup.ts tests/tools/lookup.test.ts
git commit -m "feat: add lookup_widget and list_widgets tools with tests"
```

---

## Task 4: validate_code Tool

**Files:**
- Create: `src/tools/validate.ts`
- Create: `tests/tools/validate.test.ts`

- [ ] **Step 1: Write failing tests**

`tests/tools/validate.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { validateCode } from "../../src/tools/validate.js";

describe("validateCode", () => {
  it("detects ImageView.Image assigned as string (NUI001)", () => {
    const code = `var img = new ImageView();\nimg.Image = "icon.png";`;
    const result = validateCode({ code });
    expect(result.issues.length).toBe(1);
    expect(result.issues[0].id).toBe("NUI001");
    expect(result.issues[0].severity).toBe("error");
    expect(result.issues[0].correct).toContain("ResourceUrl");
  });

  it("detects Xamarin.Forms usage (NUI100)", () => {
    const code = `using Xamarin.Forms;\nclass MyPage : ContentPage {}`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI100")).toBe(true);
  });

  it("detects WPF usage (NUI101)", () => {
    const code = `using System.Windows.Forms;`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI101")).toBe(true);
  });

  it("detects wrong Tizen.NET.Sdk version (NUI300)", () => {
    const code = `<PackageReference Include="Tizen.NET.Sdk" Version="1.2.0" />`;
    const result = validateCode({ code, fileType: "csproj" });
    expect(result.issues.some((i: any) => i.id === "NUI300")).toBe(true);
  });

  it("passes correct Tizen.NET.Sdk version", () => {
    const code = `<PackageReference Include="Tizen.NET.Sdk" Version="1.1.9" />`;
    const result = validateCode({ code, fileType: "csproj" });
    expect(result.issues.some((i: any) => i.id === "NUI300")).toBe(false);
  });

  it("detects Remove without Dispose (NUI200)", () => {
    const code = `parent.Remove(child);\n// no dispose`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI200")).toBe(true);
  });

  it("passes Remove with Dispose present", () => {
    const code = `parent.Remove(child);\nchild.Dispose();`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI200")).toBe(false);
  });

  it("detects Focusable without event handlers (NUI400)", () => {
    const code = `var view = new View { Focusable = true, Size = new Size(100, 100) };`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI400")).toBe(true);
  });

  it("passes Focusable with event handlers", () => {
    const code = `var view = new View { Focusable = true };\nview.FocusGained += OnFocus;\nview.KeyEvent += OnKey;`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI400")).toBe(false);
  });

  it("returns empty issues for clean code", () => {
    const code = `using Tizen.NUI;\nvar label = new TextLabel { Text = "Hello" };`;
    const result = validateCode({ code });
    expect(result.issues.length).toBe(0);
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/tools/validate.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement validate.ts**

`src/tools/validate.ts`:

```typescript
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rulesPath = resolve(__dirname, "../../data/rules.json");
const db = JSON.parse(readFileSync(rulesPath, "utf-8"));

interface Rule {
  id: string;
  severity: "error" | "warning";
  category: string;
  pattern: string;
  contextNegative?: string;
  message: string;
  wrong?: string;
  correct?: string;
}

interface Issue {
  id: string;
  severity: "error" | "warning";
  category: string;
  message: string;
  wrong?: string;
  correct?: string;
}

export function validateCode(input: {
  code: string;
  fileType?: "page" | "component" | "app" | "csproj" | "auto";
}): { issues: Issue[] } {
  const { code } = input;
  const issues: Issue[] = [];

  for (const rule of db.rules as Rule[]) {
    const regex = new RegExp(rule.pattern);
    if (!regex.test(code)) continue;

    if (rule.contextNegative) {
      const negativeRegex = new RegExp(rule.contextNegative);
      if (negativeRegex.test(code)) continue;
    }

    issues.push({
      id: rule.id,
      severity: rule.severity,
      category: rule.category,
      message: rule.message,
      wrong: rule.wrong,
      correct: rule.correct,
    });
  }

  return { issues };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/tools/validate.test.ts`
Expected: All 10 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/tools/validate.ts tests/tools/validate.test.ts
git commit -m "feat: add validate_code tool with rules-based pattern matching"
```

---

## Task 5: get_pattern Tool + Knowledge Patterns

**Files:**
- Create: `src/tools/pattern.ts`
- Create: `tests/tools/pattern.test.ts`
- Create: `knowledge/patterns/focusable-component.md`
- Create: `knowledge/patterns/page-navigation.md`
- Create: `knowledge/patterns/gradient-background.md`
- Create: `knowledge/patterns/dispose-cleanup.md`
- Create: `knowledge/patterns/animation.md`
- Create: `knowledge/patterns/key-event.md`
- Create: `knowledge/patterns/timer.md`
- Create: `knowledge/patterns/async-data-loading.md`
- Create: `knowledge/patterns/card-component.md`
- Create: `knowledge/patterns/form-input.md`
- Create: `knowledge/patterns/list-carousel.md`

- [ ] **Step 1: Create pattern markdown files**

Each file follows this structure. Example `knowledge/patterns/focusable-component.md`:

```markdown
# Focusable Component Pattern

## Description

TV 리모컨으로 탐색 가능한 컴포넌트를 만드는 패턴. Focusable=true 설정, FocusGained/FocusLost로 시각적 피드백, KeyEvent로 선택 동작을 처리한다.

## Key Points

- Focusable = true 를 반드시 설정
- FocusGained에서 BorderlineWidth/Color로 하이라이트
- FocusLost에서 BorderlineWidth = 0 으로 복원
- KeyEvent에서 Return/Enter 키로 Clicked 이벤트 발생
- event Action 패턴으로 외부에 이벤트 전달

## Code

```csharp
using System;
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class FocusableCard : View
{
    private readonly View _cardView;
    public event Action Clicked;

    public FocusableCard(string title, float width, float height)
    {
        Focusable = true;
        Size = new Size(width, height);

        _cardView = new View
        {
            Size = new Size(width, height),
            CornerRadius = 16f,
            BackgroundColor = new Color(1f, 1f, 1f, 0.05f),
            BorderlineWidth = 1f,
            BorderlineColor = new Color(1f, 1f, 1f, 0.1f),
            Layout = new LinearLayout
            {
                LinearOrientation = LinearLayout.Orientation.Vertical,
                HorizontalAlignment = HorizontalAlignment.Center,
                VerticalAlignment = VerticalAlignment.Center,
            }
        };

        var label = new TextLabel
        {
            Text = title,
            TextColor = new Color(1f, 1f, 1f, 1f),
            PointSize = 18f,
            FontFamily = "SamsungOneUI",
        };
        _cardView.Add(label);
        Add(_cardView);

        FocusGained += OnFocusGained;
        FocusLost += OnFocusLost;
        KeyEvent += OnKeyEvent;
    }

    private void OnFocusGained(object sender, EventArgs e)
    {
        _cardView.BorderlineWidth = 3f;
        _cardView.BorderlineColor = new Color(192 / 255f, 132 / 255f, 252 / 255f, 1f);
        _cardView.BorderlineOffset = -1f;
    }

    private void OnFocusLost(object sender, EventArgs e)
    {
        _cardView.BorderlineWidth = 1f;
        _cardView.BorderlineColor = new Color(1f, 1f, 1f, 0.1f);
    }

    private bool OnKeyEvent(object sender, KeyEventArgs e)
    {
        if (e.Key.State == Key.StateType.Down &&
            (e.Key.KeyPressedName == "Return" || e.Key.KeyPressedName == "Enter"))
        {
            Clicked?.Invoke();
            return true;
        }
        return false;
    }
}
```
```

Create all 11 pattern files following this structure. Content is extracted from the TravelAgent project (`C:\My_Project\tizen_travel_agent\nui`):

| File | Source in TravelAgent |
|------|---------------------|
| focusable-component.md | Components/FocusableButton.cs |
| page-navigation.md | App.cs (NavigateTo, GoBack) |
| gradient-background.md | Components/GradientBackground.cs |
| dispose-cleanup.md | Pages/DestinationPage.cs (ShowAttractions cleanup) |
| animation.md | Components/LoadingSpinner.cs, ActivityCard.cs |
| key-event.md | App.cs (OnKeyEvent), FocusableButton.cs |
| timer.md | Pages/DestinationPage.cs (focus timer) |
| async-data-loading.md | Pages/DestinationPage.cs (LoadDataAsync + spinner) |
| card-component.md | Components/AttractionCard.cs, FlightCard.cs |
| form-input.md | Components/FocusableInput.cs |
| list-carousel.md | Pages/ItineraryPage.cs (carousel) |

- [ ] **Step 2: Write failing tests**

`tests/tools/pattern.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { getPattern, listPatterns } from "../../src/tools/pattern.js";

describe("getPattern", () => {
  it("returns pattern content for valid name", () => {
    const result = getPattern({ pattern: "focus" });
    expect(result.name).toBeDefined();
    expect(result.description).toBeDefined();
    expect(result.code).toContain("Focusable");
    expect(result.keyPoints.length).toBeGreaterThan(0);
  });

  it("returns pattern for gradient", () => {
    const result = getPattern({ pattern: "gradient" });
    expect(result.code).toContain("PropertyMap");
    expect(result.code).toContain("GradientVisualProperty");
  });

  it("returns error for unknown pattern", () => {
    const result = getPattern({ pattern: "unknown_pattern" });
    expect(result.error).toBeDefined();
  });
});

describe("listPatterns", () => {
  it("returns all available patterns", () => {
    const result = listPatterns();
    expect(result.length).toBeGreaterThan(0);
    expect(result).toContain("focus");
    expect(result).toContain("gradient");
  });
});
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `npx vitest run tests/tools/pattern.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 4: Implement pattern.ts**

`src/tools/pattern.ts`:

```typescript
import { readFileSync, readdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const patternsDir = resolve(__dirname, "../../knowledge/patterns");

const PATTERN_ALIASES: Record<string, string> = {
  focus: "focusable-component",
  gradient: "gradient-background",
  animation: "animation",
  key_event: "key-event",
  timer: "timer",
  dispose: "dispose-cleanup",
  page_navigation: "page-navigation",
  async_loading: "async-data-loading",
  card_component: "card-component",
  form_input: "form-input",
  list_carousel: "list-carousel",
};

interface PatternResult {
  name: string;
  description: string;
  code: string;
  keyPoints: string[];
  error?: undefined;
}

interface PatternError {
  error: string;
  name?: undefined;
}

function parsePatternMd(content: string): {
  description: string;
  code: string;
  keyPoints: string[];
} {
  const descMatch = content.match(
    /## Description\s*\n([\s\S]*?)(?=\n## )/
  );
  const description = descMatch ? descMatch[1].trim() : "";

  const keyPointsMatch = content.match(
    /## Key Points\s*\n([\s\S]*?)(?=\n## )/
  );
  const keyPointsRaw = keyPointsMatch ? keyPointsMatch[1].trim() : "";
  const keyPoints = keyPointsRaw
    .split("\n")
    .filter((l) => l.startsWith("- "))
    .map((l) => l.replace(/^- /, "").trim());

  const codeMatch = content.match(
    /## Code\s*\n```csharp\n([\s\S]*?)```/
  );
  const code = codeMatch ? codeMatch[1].trim() : "";

  return { description, code, keyPoints };
}

export function getPattern(input: {
  pattern: string;
}): PatternResult | PatternError {
  const fileName = PATTERN_ALIASES[input.pattern];
  if (!fileName) {
    const available = Object.keys(PATTERN_ALIASES).join(", ");
    return {
      error: `Pattern "${input.pattern}" not found. Available: ${available}`,
    };
  }

  const filePath = resolve(patternsDir, `${fileName}.md`);
  let content: string;
  try {
    content = readFileSync(filePath, "utf-8");
  } catch {
    return { error: `Pattern file not found: ${fileName}.md` };
  }

  const parsed = parsePatternMd(content);
  const titleMatch = content.match(/^# (.+)/);
  const name = titleMatch ? titleMatch[1] : input.pattern;

  return { name, ...parsed };
}

export function listPatterns(): string[] {
  return Object.keys(PATTERN_ALIASES);
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run tests/tools/pattern.test.ts`
Expected: All 4 tests PASS.

- [ ] **Step 6: Commit**

```bash
git add src/tools/pattern.ts tests/tools/pattern.test.ts knowledge/patterns/
git commit -m "feat: add get_pattern tool with 11 verified code patterns"
```

---

## Task 6: scaffold Tool + Templates

**Files:**
- Create: `src/tools/scaffold.ts`
- Create: `tests/tools/scaffold.test.ts`
- Create: `data/templates/project/SolutionFile.sln.tmpl`
- Create: `data/templates/project/ProjectFile.csproj.tmpl`
- Create: `data/templates/project/Program.cs.tmpl`
- Create: `data/templates/project/App.cs.tmpl`
- Create: `data/templates/page/Page.cs.tmpl`
- Create: `data/templates/component/Component.cs.tmpl`
- Create: `data/templates/clinerules.tmpl`

- [ ] **Step 1: Create template files**

`data/templates/project/ProjectFile.csproj.tmpl`:

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

`data/templates/project/Program.cs.tmpl`:

```csharp
using System;
using Tizen.Applications;

namespace {{NAME}}
{
    class Program
    {
        static void Main(string[] args)
        {
            var app = new App();
            app.Run(args);
        }
    }
}
```

`data/templates/project/App.cs.tmpl`:

```csharp
using System;
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

namespace {{NAME}}
{
    public class App : NUIApplication
    {
        private View _rootView;

        protected override void OnCreate()
        {
            base.OnCreate();

            var win = Window.Instance;
            win.BackgroundColor = new Color(15 / 255f, 23 / 255f, 42 / 255f, 1f);
            win.KeyEvent += OnKeyEvent;

            FocusManager.Instance.EnableDefaultAlgorithm(true);
            FocusManager.Instance.FocusIndicator = new View { Opacity = 0 };

            _rootView = new View
            {
                Size = new Size({{WIDTH}}, {{HEIGHT}}),
                Layout = new AbsoluteLayout()
            };
            win.Add(_rootView);
        }

        private void OnKeyEvent(object sender, Window.KeyEventArgs e)
        {
            if (e.Key.State != Key.StateType.Down) return;

            if (e.Key.KeyPressedName == "Escape" || e.Key.KeyPressedName == "XF86Back")
            {
                Exit();
            }
        }
    }
}
```

`data/templates/project/SolutionFile.sln.tmpl`:

```
Microsoft Visual Studio Solution File, Format Version 12.00
Project("{FAE04EC0-301F-11D3-BF4B-00C04F79EFBC}") = "{{NAME}}", "{{NAME}}\{{NAME}}.csproj", "{{{GUID}}}"
EndProject
Global
	GlobalSection(SolutionConfigurationPlatforms) = preSolution
		Debug|Any CPU = Debug|Any CPU
		Release|Any CPU = Release|Any CPU
	EndGlobalSection
	GlobalSection(ProjectConfigurationPlatforms) = postSolution
		{{{GUID}}}.Debug|Any CPU.ActiveCfg = Debug|Any CPU
		{{{GUID}}}.Debug|Any CPU.Build.0 = Debug|Any CPU
		{{{GUID}}}.Release|Any CPU.ActiveCfg = Release|Any CPU
		{{{GUID}}}.Release|Any CPU.Build.0 = Release|Any CPU
	EndGlobalSection
EndGlobal
```

`data/templates/page/Page.cs.tmpl`:

```csharp
using System;
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

namespace {{NAMESPACE}}
{
    public class {{NAME}} : View
    {
        private readonly App _app;

        public {{NAME}}(App app)
        {
            _app = app;
            BackgroundColor = new Color(0f, 0f, 0f, 0f);
            Layout = new AbsoluteLayout();
            Size = new Size({{WIDTH}}, {{HEIGHT}});

            var main = new View
            {
                Size = new Size({{WIDTH}}, {{HEIGHT}}),
                Padding = new Extents(80, 80, 80, 80),
                Layout = new LinearLayout
                {
                    LinearOrientation = LinearLayout.Orientation.Vertical,
                }
            };

            Add(main);
        }
    }
}
```

`data/templates/component/Component.cs.tmpl`:

```csharp
using System;
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

namespace {{NAMESPACE}}
{
    public class {{NAME}} : View
    {
        private readonly View _inner;

        public {{NAME}}(float width, float height)
        {
            Focusable = true;
            Size = new Size(width, height);

            _inner = new View
            {
                Size = new Size(width, height),
                CornerRadius = 12f,
                BackgroundColor = new Color(1f, 1f, 1f, 0.05f),
                BorderlineWidth = 1f,
                BorderlineColor = new Color(1f, 1f, 1f, 0.1f),
            };
            Add(_inner);

            FocusGained += OnFocusGained;
            FocusLost += OnFocusLost;
            KeyEvent += OnKeyEvent;
        }

        private void OnFocusGained(object sender, EventArgs e)
        {
            _inner.BorderlineWidth = 3f;
            _inner.BorderlineColor = new Color(192 / 255f, 132 / 255f, 252 / 255f, 1f);
        }

        private void OnFocusLost(object sender, EventArgs e)
        {
            _inner.BorderlineWidth = 1f;
            _inner.BorderlineColor = new Color(1f, 1f, 1f, 0.1f);
        }

        private bool OnKeyEvent(object sender, KeyEventArgs e)
        {
            if (e.Key.State == Key.StateType.Down &&
                (e.Key.KeyPressedName == "Return" || e.Key.KeyPressedName == "Enter"))
            {
                return true;
            }
            return false;
        }
    }
}
```

`data/templates/clinerules.tmpl`:

```markdown
# Tizen NUI Project Rules

## Required
- All UI must be written in C# code. Do NOT use XAML.
- Do NOT use Xamarin.Forms, MAUI, WPF, or WinForms namespaces.
- Do NOT change the package versions in the .csproj file.

## MCP Tools Usage
- When unsure about a widget API, call the `lookup_widget` tool.
- When creating new pages/components, use the `scaffold` tool.
- After writing code, validate with the `validate_code` tool.
- For focus, animation, gradient patterns, call the `get_pattern` tool.

## TV Development Rules
- Resolution: 1920x1080.
- All interactive elements must have Focusable = true.
- Provide visual feedback with FocusGained/FocusLost event handlers.
- Handle key events: Return/Enter (select), Escape/XF86Back (back).
- Always call SetCurrentFocusView inside a Timer callback.

## Resource Management
- After Remove(), always call Dispose().
- After using Animation/Timer, call Stop() + Dispose().
```

- [ ] **Step 2: Write failing tests**

`tests/tools/scaffold.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { scaffold } from "../../src/tools/scaffold.js";

describe("scaffold", () => {
  describe("project", () => {
    it("generates all required project files", () => {
      const result = scaffold({
        type: "project",
        name: "MyApp",
      });
      const paths = result.files.map((f: any) => f.path);
      expect(paths).toContain("MyApp.sln");
      expect(paths).toContain("MyApp/MyApp.csproj");
      expect(paths).toContain("MyApp/Program.cs");
      expect(paths).toContain("MyApp/App.cs");
      expect(paths).toContain(".clinerules");
    });

    it("uses correct package versions in csproj", () => {
      const result = scaffold({ type: "project", name: "MyApp" });
      const csproj = result.files.find((f: any) =>
        f.path.endsWith(".csproj")
      );
      expect(csproj.content).toContain('Version="10.0.0.17693"');
      expect(csproj.content).toContain('Tizen.NET.Sdk/1.1.9');
    });

    it("replaces name placeholder in all files", () => {
      const result = scaffold({ type: "project", name: "TravelApp" });
      const program = result.files.find((f: any) =>
        f.path.endsWith("Program.cs")
      );
      expect(program.content).toContain("namespace TravelApp");
      expect(program.content).not.toContain("{{NAME}}");
    });

    it("uses custom resolution", () => {
      const result = scaffold({
        type: "project",
        name: "MyApp",
        options: { resolution: "1280x720" },
      });
      const app = result.files.find((f: any) =>
        f.path.endsWith("App.cs")
      );
      expect(app.content).toContain("1280");
      expect(app.content).toContain("720");
    });
  });

  describe("page", () => {
    it("generates page file with correct name", () => {
      const result = scaffold({ type: "page", name: "SettingsPage" });
      expect(result.files.length).toBe(1);
      expect(result.files[0].path).toBe("Pages/SettingsPage.cs");
      expect(result.files[0].content).toContain("class SettingsPage");
    });
  });

  describe("component", () => {
    it("generates focusable component by default", () => {
      const result = scaffold({ type: "component", name: "MenuCard" });
      expect(result.files.length).toBe(1);
      expect(result.files[0].path).toBe("Components/MenuCard.cs");
      expect(result.files[0].content).toContain("Focusable = true");
      expect(result.files[0].content).toContain("FocusGained");
    });
  });
});
```

- [ ] **Step 3: Run tests to verify they fail**

Run: `npx vitest run tests/tools/scaffold.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 4: Implement scaffold.ts**

`src/tools/scaffold.ts`:

```typescript
import { readFileSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";
import { randomUUID } from "crypto";

const __dirname = dirname(fileURLToPath(import.meta.url));
const templatesDir = resolve(__dirname, "../../data/templates");

function readTemplate(subdir: string, filename: string): string {
  return readFileSync(resolve(templatesDir, subdir, filename), "utf-8");
}

function applyReplacements(
  template: string,
  replacements: Record<string, string>
): string {
  let result = template;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(new RegExp(`\\{\\{${key}\\}\\}`, "g"), value);
  }
  return result;
}

function parseResolution(resolution: string): { width: string; height: string } {
  const [width, height] = resolution.split("x");
  return { width: width || "1920", height: height || "1080" };
}

interface ScaffoldInput {
  type: "project" | "page" | "component";
  name: string;
  options?: {
    resolution?: string;
    pages?: string[];
    focusable?: boolean;
    withGradient?: boolean;
    namespace?: string;
  };
}

interface ScaffoldFile {
  path: string;
  content: string;
}

export function scaffold(input: ScaffoldInput): { files: ScaffoldFile[] } {
  const { type, name, options } = input;
  const resolution = options?.resolution ?? "1920x1080";
  const { width, height } = parseResolution(resolution);
  const namespace = options?.namespace ?? name;

  switch (type) {
    case "project":
      return scaffoldProject(name, width, height);
    case "page":
      return scaffoldPage(name, namespace, width, height);
    case "component":
      return scaffoldComponent(name, namespace);
    default:
      return { files: [] };
  }
}

function scaffoldProject(
  name: string,
  width: string,
  height: string
): { files: ScaffoldFile[] } {
  const guid = randomUUID().toUpperCase();
  const replacements = { NAME: name, WIDTH: width, HEIGHT: height, GUID: guid };

  return {
    files: [
      {
        path: `${name}.sln`,
        content: applyReplacements(
          readTemplate("project", "SolutionFile.sln.tmpl"),
          replacements
        ),
      },
      {
        path: `${name}/${name}.csproj`,
        content: readTemplate("project", "ProjectFile.csproj.tmpl"),
      },
      {
        path: `${name}/Program.cs`,
        content: applyReplacements(
          readTemplate("project", "Program.cs.tmpl"),
          replacements
        ),
      },
      {
        path: `${name}/App.cs`,
        content: applyReplacements(
          readTemplate("project", "App.cs.tmpl"),
          replacements
        ),
      },
      {
        path: ".clinerules",
        content: readTemplate(".", "clinerules.tmpl"),
      },
    ],
  };
}

function scaffoldPage(
  name: string,
  namespace: string,
  width: string,
  height: string
): { files: ScaffoldFile[] } {
  const replacements = { NAME: name, NAMESPACE: namespace, WIDTH: width, HEIGHT: height };
  return {
    files: [
      {
        path: `Pages/${name}.cs`,
        content: applyReplacements(
          readTemplate("page", "Page.cs.tmpl"),
          replacements
        ),
      },
    ],
  };
}

function scaffoldComponent(
  name: string,
  namespace: string
): { files: ScaffoldFile[] } {
  const replacements = { NAME: name, NAMESPACE: namespace };
  return {
    files: [
      {
        path: `Components/${name}.cs`,
        content: applyReplacements(
          readTemplate("component", "Component.cs.tmpl"),
          replacements
        ),
      },
    ],
  };
}
```

- [ ] **Step 5: Run tests to verify they pass**

Run: `npx vitest run tests/tools/scaffold.test.ts`
Expected: All 6 tests PASS.

- [ ] **Step 6: Commit**

```bash
git add src/tools/scaffold.ts tests/tools/scaffold.test.ts data/templates/
git commit -m "feat: add scaffold tool with project/page/component templates"
```

---

## Task 7: Resources Provider

**Files:**
- Create: `src/resources/provider.ts`
- Create: `tests/resources/provider.test.ts`

- [ ] **Step 1: Write failing tests**

`tests/resources/provider.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import {
  listResources,
  readResource,
} from "../../src/resources/provider.js";

describe("listResources", () => {
  it("returns resources from all knowledge directories", () => {
    const resources = listResources();
    expect(resources.length).toBeGreaterThan(0);
    expect(
      resources.some((r: any) => r.uri.includes("/patterns/"))
    ).toBe(true);
  });

  it("each resource has uri, name, and mimeType", () => {
    const resources = listResources();
    for (const r of resources) {
      expect(r.uri).toBeDefined();
      expect(r.name).toBeDefined();
      expect(r.mimeType).toBe("text/markdown");
    }
  });
});

describe("readResource", () => {
  it("returns content for valid pattern resource", () => {
    const content = readResource(
      "resources://tizen-nui-helper/patterns/focusable-component"
    );
    expect(content).toContain("Focusable");
  });

  it("returns error for non-existent resource", () => {
    expect(() =>
      readResource("resources://tizen-nui-helper/patterns/nonexistent")
    ).toThrow();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/resources/provider.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement provider.ts**

`src/resources/provider.ts`:

```typescript
import { readFileSync, readdirSync, existsSync } from "fs";
import { resolve, dirname, basename } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const knowledgeDir = resolve(__dirname, "../../knowledge");

const URI_PREFIX = "resources://tizen-nui-helper";

interface Resource {
  uri: string;
  name: string;
  description: string;
  mimeType: string;
}

function scanDir(subdir: string): Resource[] {
  const dirPath = resolve(knowledgeDir, subdir);
  if (!existsSync(dirPath)) return [];

  return readdirSync(dirPath)
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const name = basename(f, ".md");
      return {
        uri: `${URI_PREFIX}/${subdir}/${name}`,
        name: `${subdir}/${name}`,
        description: `Tizen NUI ${subdir} — ${name}`,
        mimeType: "text/markdown" as const,
      };
    });
}

export function listResources(): Resource[] {
  return [
    ...scanDir("guides"),
    ...scanDir("patterns"),
    ...scanDir("api-reference"),
  ];
}

export function readResource(uri: string): string {
  const path = uri.replace(`${URI_PREFIX}/`, "");
  const filePath = resolve(knowledgeDir, `${path}.md`);

  if (!existsSync(filePath)) {
    throw new Error(`Resource not found: ${uri}`);
  }

  return readFileSync(filePath, "utf-8");
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/resources/provider.test.ts`
Expected: All 4 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/resources/provider.ts tests/resources/provider.test.ts
git commit -m "feat: add MCP resources provider for knowledge files"
```

---

## Task 8: Prompts Provider

**Files:**
- Create: `src/prompts/provider.ts`
- Create: `tests/prompts/provider.test.ts`

- [ ] **Step 1: Write failing tests**

`tests/prompts/provider.test.ts`:

```typescript
import { describe, it, expect } from "vitest";
import { listPrompts, getPrompt } from "../../src/prompts/provider.js";

describe("listPrompts", () => {
  it("returns 4 prompts", () => {
    const prompts = listPrompts();
    expect(prompts.length).toBe(4);
  });

  it("each prompt has name and description", () => {
    const prompts = listPrompts();
    for (const p of prompts) {
      expect(p.name).toBeDefined();
      expect(p.description).toBeDefined();
    }
  });
});

describe("getPrompt", () => {
  it("returns new-tizen-project prompt with scaffold instruction", () => {
    const result = getPrompt("new-tizen-project");
    expect(result.messages.length).toBeGreaterThan(0);
    expect(result.messages[0].content).toContain("scaffold");
  });

  it("returns add-page prompt", () => {
    const result = getPrompt("add-page");
    expect(result.messages[0].content).toContain("scaffold");
    expect(result.messages[0].content).toContain("page");
  });

  it("returns add-component prompt", () => {
    const result = getPrompt("add-component");
    expect(result.messages[0].content).toContain("Focusable");
  });

  it("returns review-nui-code prompt", () => {
    const result = getPrompt("review-nui-code");
    expect(result.messages[0].content).toContain("validate_code");
  });

  it("returns error for unknown prompt", () => {
    expect(() => getPrompt("nonexistent")).toThrow();
  });
});
```

- [ ] **Step 2: Run tests to verify they fail**

Run: `npx vitest run tests/prompts/provider.test.ts`
Expected: FAIL — module not found.

- [ ] **Step 3: Implement provider.ts**

`src/prompts/provider.ts`:

```typescript
interface PromptInfo {
  name: string;
  description: string;
}

interface PromptMessage {
  role: "user" | "assistant";
  content: string;
}

interface PromptResult {
  messages: PromptMessage[];
}

const PROMPTS: Record<string, { description: string; content: string }> = {
  "new-tizen-project": {
    description: "Create a new Tizen NUI project with scaffold tool",
    content: `You are creating a new Tizen NUI project.

Steps:
1. Call the scaffold tool with type="project" and the project name.
2. Write ALL generated files to disk.
3. The .clinerules file has been created — follow its rules for all future code.
4. After creating the project, call validate_code on the generated .csproj to verify package versions.

Important:
- Do NOT use XAML. All UI is C# code.
- Do NOT change package versions in the .csproj.
- Use Tizen.NUI namespace, NOT Xamarin.Forms or MAUI.`,
  },
  "add-page": {
    description: "Add a new page to an existing Tizen NUI project",
    content: `You are adding a new page to a Tizen NUI project.

Steps:
1. Call the scaffold tool with type="page" and the page name.
2. Write the generated file to the Pages/ directory.
3. Update App.cs:
   - Add the new page to the PageType enum.
   - Add a case in the NavigateTo switch expression.
   - Update GoBack logic if needed.
4. Call validate_code on the new page code.

Important:
- Pages inherit from View, NOT Page or ContentPage.
- Use AbsoluteLayout as the root layout for layering (gradient background + content).
- Set Size = new Size(1920, 1080) on the page.`,
  },
  "add-component": {
    description: "Add a new reusable component to a Tizen NUI project",
    content: `You are adding a new reusable component to a Tizen NUI project.

Steps:
1. Call the scaffold tool with type="component" and the component name.
2. Write the generated file to the Components/ directory.
3. If the component needs focus navigation, verify it has:
   - Focusable = true
   - FocusGained/FocusLost event handlers for visual feedback
   - KeyEvent handler for Return/Enter key
4. Call validate_code on the new component code.
5. Call get_pattern with the relevant pattern (focus, card_component, form_input) for reference.

Important:
- Components inherit from View.
- Use event Action for callbacks, NOT EventHandler.
- Use BorderlineWidth/Color for focus indicators.`,
  },
  "review-nui-code": {
    description: "Review and validate Tizen NUI code for common mistakes",
    content: `You are reviewing Tizen NUI code for correctness.

Steps:
1. Read the current file being reviewed.
2. Call validate_code with the file content.
3. For each issue found:
   - Explain why it's wrong.
   - Show the correct pattern from the "correct" field.
   - Apply the fix.
4. After fixing, run validate_code again to confirm no remaining issues.

Common mistakes to watch for:
- ImageView.Image assigned as string (use ResourceUrl instead)
- Xamarin.Forms/MAUI/WPF namespaces
- Missing Dispose() after Remove()
- System.Threading.Timer instead of Tizen.NUI.Timer
- Focusable=true without FocusGained/FocusLost/KeyEvent handlers
- Wrong Tizen.NET.Sdk version in .csproj`,
  },
};

export function listPrompts(): PromptInfo[] {
  return Object.entries(PROMPTS).map(([name, { description }]) => ({
    name,
    description,
  }));
}

export function getPrompt(name: string): PromptResult {
  const prompt = PROMPTS[name];
  if (!prompt) {
    throw new Error(
      `Prompt "${name}" not found. Available: ${Object.keys(PROMPTS).join(", ")}`
    );
  }

  return {
    messages: [{ role: "user", content: prompt.content }],
  };
}
```

- [ ] **Step 4: Run tests to verify they pass**

Run: `npx vitest run tests/prompts/provider.test.ts`
Expected: All 6 tests PASS.

- [ ] **Step 5: Commit**

```bash
git add src/prompts/provider.ts tests/prompts/provider.test.ts
git commit -m "feat: add MCP prompts provider with 4 workflow templates"
```

---

## Task 9: MCP Server Entry (index.ts)

**Files:**
- Create: `src/index.ts`

- [ ] **Step 1: Implement MCP server wiring**

`src/index.ts`:

```typescript
#!/usr/bin/env node

import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { lookupWidget, listWidgets } from "./tools/lookup.js";
import { validateCode } from "./tools/validate.js";
import { getPattern, listPatterns } from "./tools/pattern.js";
import { scaffold } from "./tools/scaffold.js";
import { listResources, readResource } from "./resources/provider.js";
import {
  listPrompts,
  getPrompt,
} from "./prompts/provider.js";

const server = new McpServer({
  name: "tizen-nui-helper",
  version: "0.1.0",
});

// --- Tools ---

server.tool(
  "lookup_widget",
  "Look up a Tizen NUI widget's API: properties, events, methods, and usage example",
  {
    name: z.string().describe("Widget name (e.g. TextLabel, View, ImageView)"),
    filter: z
      .enum(["properties", "events", "methods", "all"])
      .optional()
      .describe("Filter results to a specific section (default: all)"),
  },
  async (input) => ({
    content: [
      { type: "text", text: JSON.stringify(lookupWidget(input), null, 2) },
    ],
  })
);

server.tool(
  "list_widgets",
  "List available Tizen NUI widgets by category",
  {
    category: z
      .enum(["basic", "layout", "input", "container", "media", "all"])
      .optional()
      .describe("Widget category to filter (default: all)"),
  },
  async (input) => ({
    content: [
      { type: "text", text: JSON.stringify(listWidgets(input), null, 2) },
    ],
  })
);

server.tool(
  "scaffold",
  "Generate Tizen NUI project, page, or component from verified templates",
  {
    type: z
      .enum(["project", "page", "component"])
      .describe("What to generate"),
    name: z.string().describe("Name of the project/page/component"),
    options: z
      .object({
        resolution: z
          .string()
          .optional()
          .describe('TV resolution (default: "1920x1080")'),
        pages: z
          .array(z.string())
          .optional()
          .describe("Initial page names (project only)"),
        focusable: z
          .boolean()
          .optional()
          .describe("Include focus navigation (component only)"),
        withGradient: z
          .boolean()
          .optional()
          .describe("Include gradient background (page only)"),
        namespace: z
          .string()
          .optional()
          .describe("C# namespace (default: project name)"),
      })
      .optional(),
  },
  async (input) => ({
    content: [
      { type: "text", text: JSON.stringify(scaffold(input), null, 2) },
    ],
  })
);

server.tool(
  "validate_code",
  "Validate Tizen NUI C# code for common mistakes: wrong APIs, wrong frameworks, missing patterns, csproj issues",
  {
    code: z.string().describe("C# code or .csproj content to validate"),
    fileType: z
      .enum(["page", "component", "app", "csproj", "auto"])
      .optional()
      .describe("File type hint (default: auto)"),
  },
  async (input) => ({
    content: [
      { type: "text", text: JSON.stringify(validateCode(input), null, 2) },
    ],
  })
);

server.tool(
  "get_pattern",
  "Get a verified Tizen NUI code pattern with full working example",
  {
    pattern: z
      .enum([
        "focus",
        "gradient",
        "animation",
        "key_event",
        "timer",
        "dispose",
        "page_navigation",
        "async_loading",
        "card_component",
        "form_input",
        "list_carousel",
      ])
      .describe("Pattern name"),
  },
  async (input) => {
    const result = getPattern(input);
    return {
      content: [{ type: "text", text: JSON.stringify(result, null, 2) }],
    };
  }
);

// --- Resources ---

server.resource(
  "knowledge",
  "resources://tizen-nui-helper/{path+}",
  async (uri) => {
    const content = readResource(uri.href);
    return {
      contents: [{ uri: uri.href, text: content, mimeType: "text/markdown" }],
    };
  }
);

// --- Prompts ---

for (const prompt of listPrompts()) {
  server.prompt(prompt.name, prompt.description, async () => {
    const result = getPrompt(prompt.name);
    return {
      messages: result.messages.map((m) => ({
        role: m.role as "user" | "assistant",
        content: { type: "text" as const, text: m.content },
      })),
    };
  });
}

// --- Start ---

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

main().catch(console.error);
```

- [ ] **Step 2: Build and verify compilation**

Run: `npx tsc`
Expected: No compilation errors. `dist/` directory created.

- [ ] **Step 3: Commit**

```bash
git add src/index.ts
git commit -m "feat: add MCP server entry wiring all tools, resources, and prompts"
```

---

## Task 10: Knowledge Guides (docs.tizen.org content)

**Files:**
- Create: `knowledge/guides/getting-started.md`
- Create: `knowledge/guides/layout-system.md`
- Create: `knowledge/guides/focus-navigation.md`
- Create: `knowledge/guides/animation.md`
- Create: `knowledge/guides/visual-system.md`
- Create: `knowledge/guides/image-loading.md`
- Create: `knowledge/guides/text-rendering.md`
- Create: `knowledge/guides/app-lifecycle.md`
- Create: `knowledge/guides/key-events.md`

- [ ] **Step 1: Create guide markdown files**

Each guide follows this structure and is populated with content from https://docs.tizen.org/application/dotnet/guides/user-interface/nui and the verified TravelAgent project patterns.

Example `knowledge/guides/getting-started.md`:

```markdown
# Getting Started with Tizen NUI

## Project Structure

A Tizen NUI project has this standard structure:

```
MyApp/
├── MyApp.sln
└── MyApp/
    ├── MyApp.csproj
    ├── Program.cs       # Entry point
    ├── App.cs           # NUIApplication subclass
    ├── Pages/           # Page views
    ├── Components/      # Reusable UI components
    ├── Models/          # Data models
    ├── Services/        # Business logic / API calls
    └── Utils/           # Utility classes
```

## Entry Point (Program.cs)

```csharp
using System;
using Tizen.Applications;

namespace MyApp
{
    class Program
    {
        static void Main(string[] args)
        {
            var app = new App();
            app.Run(args);
        }
    }
}
```

## Application (App.cs)

Inherit from `NUIApplication`. Override `OnCreate()` to set up the UI.

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class App : NUIApplication
{
    protected override void OnCreate()
    {
        base.OnCreate();
        var win = Window.Instance;
        win.BackgroundColor = new Color(15/255f, 23/255f, 42/255f, 1f);

        FocusManager.Instance.EnableDefaultAlgorithm(true);
        FocusManager.Instance.FocusIndicator = new View { Opacity = 0 };

        var root = new View
        {
            Size = new Size(1920, 1080),
            Layout = new AbsoluteLayout()
        };
        win.Add(root);
    }
}
```

## .csproj (Verified Package Versions)

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

**WARNING:** Do NOT change these package versions. Other versions cause VBS build failures.
```

Write all 9 guide files with content from the docs.tizen.org NUI section and TravelAgent project patterns.

- [ ] **Step 2: Verify resources provider picks up new guides**

Run: `npx vitest run tests/resources/provider.test.ts`
Expected: PASS — listResources now returns guide resources too.

- [ ] **Step 3: Commit**

```bash
git add knowledge/guides/
git commit -m "feat: add NUI guide documents from docs.tizen.org"
```

---

## Task 11: Scripts — crawl-docs.ts

**Files:**
- Create: `scripts/crawl-docs.ts`

- [ ] **Step 1: Implement docs.tizen.org crawler**

`scripts/crawl-docs.ts`:

```typescript
/**
 * Crawls NUI guide pages from docs.tizen.org and saves as markdown.
 *
 * Usage: npx tsx scripts/crawl-docs.ts
 *
 * This is a maintenance script — run it when Tizen docs are updated,
 * then commit the results. Users never run this.
 */

import { writeFileSync, mkdirSync } from "fs";
import { resolve, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outputDir = resolve(__dirname, "../knowledge/guides");

const BASE_URL =
  "https://docs.tizen.org/application/dotnet/guides/user-interface/nui";

const PAGES = [
  { slug: "overview", output: "getting-started.md" },
  { slug: "nui-components/View", output: "layout-system.md" },
  { slug: "nui-components/ImageView", output: "image-loading.md" },
  { slug: "nui-components/TextLabel", output: "text-rendering.md" },
  { slug: "nui-components/Animation", output: "animation.md" },
];

async function fetchPage(url: string): Promise<string> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}: ${res.status}`);
  return res.text();
}

function htmlToMarkdown(html: string): string {
  // Basic HTML to markdown conversion
  let md = html
    // Remove script/style tags
    .replace(/<script[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?<\/style>/gi, "")
    // Extract main content (article body)
    .replace(/[\s\S]*?<article[^>]*>([\s\S]*?)<\/article>[\s\S]*/i, "$1")
    // Headings
    .replace(/<h1[^>]*>(.*?)<\/h1>/gi, "# $1\n\n")
    .replace(/<h2[^>]*>(.*?)<\/h2>/gi, "## $1\n\n")
    .replace(/<h3[^>]*>(.*?)<\/h3>/gi, "### $1\n\n")
    // Code blocks
    .replace(
      /<pre[^>]*><code[^>]*class="language-(\w+)"[^>]*>([\s\S]*?)<\/code><\/pre>/gi,
      "```$1\n$2\n```\n\n"
    )
    .replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/gi, "```\n$1\n```\n\n")
    .replace(/<code>(.*?)<\/code>/gi, "`$1`")
    // Lists
    .replace(/<li[^>]*>(.*?)<\/li>/gi, "- $1\n")
    // Paragraphs
    .replace(/<p[^>]*>(.*?)<\/p>/gi, "$1\n\n")
    // Links
    .replace(/<a[^>]*href="([^"]*)"[^>]*>(.*?)<\/a>/gi, "[$2]($1)")
    // Bold/italic
    .replace(/<strong>(.*?)<\/strong>/gi, "**$1**")
    .replace(/<em>(.*?)<\/em>/gi, "*$1*")
    // Remove remaining tags
    .replace(/<[^>]+>/g, "")
    // Decode HTML entities
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    // Clean up whitespace
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  return md;
}

async function main() {
  mkdirSync(outputDir, { recursive: true });

  for (const page of PAGES) {
    const url = `${BASE_URL}/${page.slug}`;
    console.log(`Fetching: ${url}`);
    try {
      const html = await fetchPage(url);
      const md = htmlToMarkdown(html);
      const outputPath = resolve(outputDir, page.output);
      writeFileSync(outputPath, md, "utf-8");
      console.log(`  → Saved: ${page.output}`);
    } catch (err) {
      console.error(`  ✗ Failed: ${(err as Error).message}`);
    }
  }

  console.log("\nDone. Review the output files and commit.");
}

main();
```

- [ ] **Step 2: Commit**

```bash
git add scripts/crawl-docs.ts
git commit -m "feat: add docs.tizen.org crawler script for guide maintenance"
```

---

## Task 12: Scripts — extract-api.ts

**Files:**
- Create: `scripts/extract-api.ts`

- [ ] **Step 1: Implement TizenFX API extractor**

`scripts/extract-api.ts`:

```typescript
/**
 * Extracts public API from TizenFX C# source files and generates:
 *   - data/widgets.json (structured API DB)
 *   - knowledge/api-reference/*.md (readable docs)
 *
 * Usage:
 *   1. Clone TizenFX: git clone https://github.com/niceholmesya/niceholmesya.TizenFX.git
 *   2. Run: npx tsx scripts/extract-api.ts /path/to/TizenFX
 *
 * This is a maintenance script — run when Tizen version updates.
 */

import { readFileSync, writeFileSync, mkdirSync, readdirSync, statSync } from "fs";
import { resolve, dirname, basename, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const widgetsOutputPath = resolve(__dirname, "../data/widgets.json");
const apiRefDir = resolve(__dirname, "../knowledge/api-reference");

interface PropertyInfo {
  name: string;
  type: string;
  description: string;
}

interface EventInfo {
  name: string;
  signature: string;
  description: string;
}

interface MethodInfo {
  name: string;
  signature: string;
  description: string;
}

interface WidgetInfo {
  name: string;
  namespace: string;
  inherits: string | null;
  category: string;
  description: string;
  properties: PropertyInfo[];
  events: EventInfo[];
  methods: MethodInfo[];
  example: string;
}

function findCsFiles(dir: string): string[] {
  const results: string[] = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const stat = statSync(full);
    if (stat.isDirectory()) {
      results.push(...findCsFiles(full));
    } else if (entry.endsWith(".cs")) {
      results.push(full);
    }
  }
  return results;
}

function extractSummary(content: string, pattern: RegExp): string {
  const match = content.match(pattern);
  if (!match) return "";
  const summaryMatch = match[0].match(
    /\/\/\/\s*<summary>\s*([\s\S]*?)\s*<\/summary>/
  );
  if (!summaryMatch) return "";
  return summaryMatch[1]
    .replace(/\/\/\/\s*/g, "")
    .replace(/\n/g, " ")
    .trim();
}

function parseClass(content: string, fileName: string): WidgetInfo | null {
  const classMatch = content.match(
    /public\s+(?:partial\s+)?class\s+(\w+)\s*(?::\s*(\w+))?/
  );
  if (!classMatch) return null;

  const name = classMatch[1];
  const inherits = classMatch[2] || null;

  const nsMatch = content.match(/namespace\s+([\w.]+)/);
  const namespace = nsMatch ? nsMatch[1] : "";

  // Only process NUI-related classes
  if (!namespace.includes("Tizen.NUI")) return null;

  const classSummary = extractSummary(
    content,
    /\/\/\/[\s\S]*?public\s+(?:partial\s+)?class/
  );

  // Extract properties
  const properties: PropertyInfo[] = [];
  const propRegex =
    /\/\/\/\s*<summary>([\s\S]*?)<\/summary>[\s\S]*?public\s+(?:new\s+)?(\w[\w<>,\s]*?)\s+(\w+)\s*\{/g;
  let propMatch;
  while ((propMatch = propRegex.exec(content)) !== null) {
    properties.push({
      name: propMatch[3],
      type: propMatch[2].trim(),
      description: propMatch[1].replace(/\/\/\/\s*/g, "").replace(/\n/g, " ").trim(),
    });
  }

  // Extract events
  const events: EventInfo[] = [];
  const eventRegex =
    /\/\/\/\s*<summary>([\s\S]*?)<\/summary>[\s\S]*?public\s+event\s+([\w<>,\s]+)\s+(\w+)/g;
  let eventMatch;
  while ((eventMatch = eventRegex.exec(content)) !== null) {
    events.push({
      name: eventMatch[3],
      signature: eventMatch[2].trim(),
      description: eventMatch[1].replace(/\/\/\/\s*/g, "").replace(/\n/g, " ").trim(),
    });
  }

  // Extract methods
  const methods: MethodInfo[] = [];
  const methodRegex =
    /\/\/\/\s*<summary>([\s\S]*?)<\/summary>[\s\S]*?public\s+(?:virtual\s+|override\s+|static\s+)?(\w[\w<>,\s]*?)\s+(\w+)\s*\(([^)]*)\)/g;
  let methodMatch;
  while ((methodMatch = methodRegex.exec(content)) !== null) {
    const returnType = methodMatch[2].trim();
    const methodName = methodMatch[3];
    const params = methodMatch[4].trim();
    methods.push({
      name: methodName,
      signature: `${returnType} ${methodName}(${params})`,
      description: methodMatch[1].replace(/\/\/\/\s*/g, "").replace(/\n/g, " ").trim(),
    });
  }

  const category = categorizeWidget(name, namespace);

  return {
    name,
    namespace,
    inherits,
    category,
    description: classSummary,
    properties,
    events,
    methods,
    example: "",
  };
}

function categorizeWidget(name: string, namespace: string): string {
  if (/Layout$/.test(name)) return "layout";
  if (/TextField|TextEditor|Button|CheckBox|RadioButton|Slider|Switch/.test(name))
    return "input";
  if (/ScrollableBase|RecyclerView|Window/.test(name)) return "container";
  if (/VideoView|LottieAnimationView|ImageView/.test(name)) return "media";
  return "basic";
}

function generateApiRefMarkdown(widget: WidgetInfo): string {
  let md = `# ${widget.name}\n\n`;
  md += `**Namespace:** \`${widget.namespace}\`\n`;
  if (widget.inherits) md += `**Inherits:** \`${widget.inherits}\`\n`;
  md += `**Category:** ${widget.category}\n\n`;
  md += `${widget.description}\n\n`;

  if (widget.properties.length > 0) {
    md += `## Properties\n\n`;
    md += `| Name | Type | Description |\n|------|------|-------------|\n`;
    for (const p of widget.properties) {
      md += `| ${p.name} | \`${p.type}\` | ${p.description} |\n`;
    }
    md += "\n";
  }

  if (widget.events.length > 0) {
    md += `## Events\n\n`;
    md += `| Name | Signature | Description |\n|------|-----------|-------------|\n`;
    for (const e of widget.events) {
      md += `| ${e.name} | \`${e.signature}\` | ${e.description} |\n`;
    }
    md += "\n";
  }

  if (widget.methods.length > 0) {
    md += `## Methods\n\n`;
    md += `| Name | Signature | Description |\n|------|-----------|-------------|\n`;
    for (const m of widget.methods) {
      md += `| ${m.name} | \`${m.signature}\` | ${m.description} |\n`;
    }
    md += "\n";
  }

  return md;
}

function main() {
  const tizenFxPath = process.argv[2];
  if (!tizenFxPath) {
    console.error("Usage: npx tsx scripts/extract-api.ts /path/to/TizenFX");
    process.exit(1);
  }

  const nuiSrcPath = resolve(tizenFxPath, "src/Tizen.NUI/src/public");
  console.log(`Scanning: ${nuiSrcPath}`);

  const csFiles = findCsFiles(nuiSrcPath);
  console.log(`Found ${csFiles.length} C# files`);

  const widgets: WidgetInfo[] = [];

  for (const file of csFiles) {
    const content = readFileSync(file, "utf-8");
    const widget = parseClass(content, basename(file));
    if (widget && widget.properties.length + widget.events.length + widget.methods.length > 0) {
      widgets.push(widget);
    }
  }

  console.log(`Extracted ${widgets.length} widgets`);

  // Build categories
  const categories: Record<string, string[]> = {};
  for (const w of widgets) {
    if (!categories[w.category]) categories[w.category] = [];
    categories[w.category].push(w.name);
  }

  // Write widgets.json
  writeFileSync(
    widgetsOutputPath,
    JSON.stringify({ widgets, categories }, null, 2),
    "utf-8"
  );
  console.log(`Wrote: ${widgetsOutputPath}`);

  // Write api-reference markdown
  mkdirSync(apiRefDir, { recursive: true });
  for (const w of widgets) {
    const md = generateApiRefMarkdown(w);
    writeFileSync(resolve(apiRefDir, `${w.name}.md`), md, "utf-8");
  }
  console.log(`Wrote ${widgets.length} API reference files to ${apiRefDir}`);
}

main();
```

- [ ] **Step 2: Commit**

```bash
git add scripts/extract-api.ts
git commit -m "feat: add TizenFX API extractor script for widgets.json maintenance"
```

---

## Task 13: Full Data Population

**Files:**
- Modify: `data/widgets.json` (expand with comprehensive widget data)
- Modify: `data/rules.json` (add more rules)

- [ ] **Step 1: Run extract-api.ts against TizenFX source**

First clone TizenFX (if not already):
```bash
git clone --depth 1 https://github.com/niceholmesya/niceholmesya.TizenFX.git /tmp/TizenFX
```

Run:
```bash
npx tsx scripts/extract-api.ts /tmp/TizenFX
```

Expected: `data/widgets.json` updated with comprehensive widget data, `knowledge/api-reference/` populated.

- [ ] **Step 2: Run crawl-docs.ts**

```bash
npx tsx scripts/crawl-docs.ts
```

Expected: `knowledge/guides/` updated from docs.tizen.org.

- [ ] **Step 3: Verify tests still pass**

Run: `npx vitest run`
Expected: All tests PASS with the expanded data.

- [ ] **Step 4: Commit**

```bash
git add data/widgets.json data/rules.json knowledge/
git commit -m "feat: populate comprehensive widget API data and guides"
```

---

## Task 14: Final Integration & README

**Files:**
- Create: `README.md`

- [ ] **Step 1: Run full test suite**

Run: `npx vitest run`
Expected: All tests PASS.

- [ ] **Step 2: Build and verify**

Run: `npx tsc`
Expected: Clean compilation, `dist/` created.

- [ ] **Step 3: Test MCP server starts**

Run: `echo '{"jsonrpc":"2.0","id":1,"method":"initialize","params":{"capabilities":{},"clientInfo":{"name":"test"},"protocolVersion":"2024-11-05"}}' | node dist/index.js`
Expected: JSON response with server info and capabilities.

- [ ] **Step 4: Write README.md**

```markdown
# tizen-nui-helper

MCP Server for Tizen NUI development. Helps LLMs generate correct Tizen NUI code by providing API references, verified code patterns, project scaffolding, and code validation.

## Quick Start

```bash
git clone https://github.com/ctosec/mcp_nui_helper.git
cd mcp_nui_helper
npm install
npm run build
```

## ClineSR Setup

Add to your ClineSR MCP settings (`cline_mcp_settings.json`):

```json
{
  "mcpServers": {
    "tizen-nui-helper": {
      "command": "node",
      "args": ["/absolute/path/to/mcp_nui_helper/dist/index.js"],
      "disabled": false
    }
  }
}
```

## Available Tools

| Tool | Description |
|------|-------------|
| `lookup_widget` | Look up a widget's API (properties, events, methods) |
| `list_widgets` | List available widgets by category |
| `scaffold` | Generate project/page/component from verified templates |
| `validate_code` | Validate code for common Tizen NUI mistakes |
| `get_pattern` | Get verified code patterns (focus, gradient, animation, etc.) |

## Available Prompts

| Prompt | Description |
|--------|-------------|
| `new-tizen-project` | Create a new Tizen NUI project |
| `add-page` | Add a page to an existing project |
| `add-component` | Add a reusable component |
| `review-nui-code` | Review and validate NUI code |

## Maintenance

Update data when Tizen version changes:

```bash
# Update API data from TizenFX source
npx tsx scripts/extract-api.ts /path/to/TizenFX

# Update guides from docs.tizen.org
npx tsx scripts/crawl-docs.ts

# Commit updated data
git add data/ knowledge/
git commit -m "chore: update data for Tizen X.Y"
```

## License

MIT
```

- [ ] **Step 5: Commit and push**

```bash
git add README.md
git commit -m "docs: add README with setup instructions"
git push origin master
```
