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
