import { describe, it, expect } from "vitest";
import { validateCode } from "../../src/tools/validate.js";

describe("validateCode", () => {
  it("detects ImageView.Image assigned as string (NUI001)", () => {
    const code = `var img = new ImageView();\nimg.Image = "icon.png";`;
    const result = validateCode({ code });
    expect(result.issues.length).toBe(1);
    expect(result.issues[0].id).toBe("NUI001");
    expect(result.issues[0].severity).toBe("error");
    expect(result.issues[0].correct).toContain("ResourceUrl");
  });

  it("detects Xamarin.Forms usage (NUI100)", () => {
    const code = `using Xamarin.Forms;\nclass MyPage : ContentPage {}`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI100")).toBe(true);
  });

  it("detects WPF usage (NUI101)", () => {
    const code = `using System.Windows.Forms;`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI101")).toBe(true);
  });

  it("detects wrong Tizen.NET.Sdk version (NUI300)", () => {
    const code = `<PackageReference Include="Tizen.NET.Sdk" Version="1.2.0" />`;
    const result = validateCode({ code, fileType: "csproj" });
    expect(result.issues.some((i: any) => i.id === "NUI300")).toBe(true);
  });

  it("passes correct Tizen.NET.Sdk version", () => {
    const code = `<PackageReference Include="Tizen.NET.Sdk" Version="1.1.9" />`;
    const result = validateCode({ code, fileType: "csproj" });
    expect(result.issues.some((i: any) => i.id === "NUI300")).toBe(false);
  });

  it("detects Remove without Dispose (NUI200)", () => {
    const code = `parent.Remove(child);\n// no dispose`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI200")).toBe(true);
  });

  it("passes Remove with Dispose present", () => {
    const code = `parent.Remove(child);\nchild.Dispose();`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI200")).toBe(false);
  });

  it("detects Focusable without event handlers (NUI400)", () => {
    const code = `var view = new View { Focusable = true, Size = new Size(100, 100) };`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI400")).toBe(true);
  });

  it("passes Focusable with event handlers", () => {
    const code = `var view = new View { Focusable = true };\nview.FocusGained += OnFocus;\nview.KeyEvent += OnKey;`;
    const result = validateCode({ code });
    expect(result.issues.some((i: any) => i.id === "NUI400")).toBe(false);
  });

  it("returns empty issues for clean code", () => {
    const code = `using Tizen.NUI;\nvar label = new TextLabel { Text = "Hello" };`;
    const result = validateCode({ code });
    expect(result.issues.length).toBe(0);
  });
});
