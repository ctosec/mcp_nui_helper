import { describe, it, expect } from "vitest";
import { lookupWidget, listWidgets } from "../../src/tools/lookup.js";

describe("lookupWidget", () => {
  it("returns full widget info when name matches", () => {
    const result = lookupWidget({ name: "TextLabel" });
    expect(result.name).toBe("TextLabel");
    expect(result.namespace).toBe("Tizen.NUI.BaseComponents");
    expect(result.inherits).toBe("View");
    expect(result.properties.length).toBeGreaterThan(0);
    expect(result.example).toBeDefined();
  });

  it("filters by properties only", () => {
    const result = lookupWidget({ name: "View", filter: "properties" });
    expect(result.properties.length).toBeGreaterThan(0);
    expect(result.events).toBeUndefined();
    expect(result.methods).toBeUndefined();
  });

  it("filters by events only", () => {
    const result = lookupWidget({ name: "View", filter: "events" });
    expect(result.events.length).toBeGreaterThan(0);
    expect(result.properties).toBeUndefined();
  });

  it("filters by methods only", () => {
    const result = lookupWidget({ name: "View", filter: "methods" });
    expect(result.methods.length).toBeGreaterThan(0);
    expect(result.properties).toBeUndefined();
  });

  it("returns error for unknown widget", () => {
    const result = lookupWidget({ name: "FakeWidget" });
    expect(result.error).toBeDefined();
    expect(result.error).toContain("FakeWidget");
  });

  it("is case-insensitive", () => {
    const result = lookupWidget({ name: "textlabel" });
    expect(result.name).toBe("TextLabel");
  });
});

describe("listWidgets", () => {
  it("returns all categories when no filter", () => {
    const result = listWidgets({});
    expect(result.basic).toBeDefined();
    expect(result.layout).toBeDefined();
    expect(result.input).toBeDefined();
    expect(result.container).toBeDefined();
    expect(result.media).toBeDefined();
  });

  it("returns only requested category", () => {
    const result = listWidgets({ category: "basic" });
    expect(result.basic).toBeDefined();
    expect(result.layout).toBeUndefined();
  });

  it("returns error for unknown category", () => {
    const result = listWidgets({ category: "unknown" });
    expect(result.error).toBeDefined();
  });
});
