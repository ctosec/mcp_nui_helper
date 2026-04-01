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

## Available Resources

LLM can read these via MCP Resources:

| Resource | Description |
|----------|-------------|
| `guides/*` | NUI development guides (layout, focus, animation, etc.) |
| `patterns/*` | Verified code patterns from real Tizen NUI projects |
| `api-reference/*` | Widget API reference docs |

## Available Prompts

| Prompt | Description |
|--------|-------------|
| `new-tizen-project` | Create a new Tizen NUI project |
| `add-page` | Add a page to an existing project |
| `add-component` | Add a reusable component |
| `review-nui-code` | Review and validate NUI code |

## How It Works

1. Connect this MCP server to ClineSR
2. Use `scaffold` to create a new project (includes `.clinerules` for automatic rule injection)
3. ClineSR's LLM automatically uses MCP tools guided by `.clinerules`
4. `lookup_widget` provides correct API signatures
5. `validate_code` catches common mistakes before they reach the build

## Validation Rules

| Category | What It Catches |
|----------|----------------|
| `wrong_api` | Incorrect API usage (e.g., ImageView.Image = string) |
| `wrong_framework` | Xamarin.Forms/MAUI/WPF namespace usage |
| `missing_pattern` | Missing Dispose(), wrong Timer type |
| `csproj` | Wrong package versions that cause VBS build failures |
| `tv_pattern` | Focusable without key/focus event handlers |

## Verified Package Versions

These versions are confirmed to work with VBS builds:

```xml
<PackageReference Include="Tizen.NET" Version="10.0.0.17693" />
<PackageReference Include="Tizen.NET.Sdk" Version="1.1.9" />
```

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
