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

  if (!namespace.includes("Tizen.NUI")) return null;

  const classSummary = extractSummary(
    content,
    /\/\/\/[\s\S]*?public\s+(?:partial\s+)?class/
  );

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

  const categories: Record<string, string[]> = {};
  for (const w of widgets) {
    if (!categories[w.category]) categories[w.category] = [];
    categories[w.category].push(w.name);
  }

  writeFileSync(
    widgetsOutputPath,
    JSON.stringify({ widgets, categories }, null, 2),
    "utf-8"
  );
  console.log(`Wrote: ${widgetsOutputPath}`);

  mkdirSync(apiRefDir, { recursive: true });
  for (const w of widgets) {
    const md = generateApiRefMarkdown(w);
    writeFileSync(resolve(apiRefDir, `${w.name}.md`), md, "utf-8");
  }
  console.log(`Wrote ${widgets.length} API reference files to ${apiRefDir}`);
}

main();
