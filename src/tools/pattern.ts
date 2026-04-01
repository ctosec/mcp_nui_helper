import { readFileSync } from "fs";
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
