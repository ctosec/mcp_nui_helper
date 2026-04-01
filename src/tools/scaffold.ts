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
