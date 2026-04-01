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
