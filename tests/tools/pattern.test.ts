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
