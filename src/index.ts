#!/usr/bin/env node

import { McpServer, ResourceTemplate } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";

import { lookupWidget, listWidgets } from "./tools/lookup.js";
import { validateCode } from "./tools/validate.js";
import { getPattern, listPatterns } from "./tools/pattern.js";
import { scaffold } from "./tools/scaffold.js";
import { listResources, readResource } from "./resources/provider.js";
import { listPrompts, getPrompt } from "./prompts/provider.js";

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
  new ResourceTemplate("resources://tizen-nui-helper/{+path}", {
    list: async () => ({
      resources: listResources(),
    }),
  }),
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
