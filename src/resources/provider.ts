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
