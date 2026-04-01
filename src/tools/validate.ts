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
