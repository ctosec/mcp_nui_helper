import { describe, it, expect } from "vitest";
import { scaffold } from "../../src/tools/scaffold.js";

describe("scaffold", () => {
  describe("project", () => {
    it("generates all required project files", () => {
      const result = scaffold({
        type: "project",
        name: "MyApp",
      });
      const paths = result.files.map((f: any) => f.path);
      expect(paths).toContain("MyApp.sln");
      expect(paths).toContain("MyApp/MyApp.csproj");
      expect(paths).toContain("MyApp/Program.cs");
      expect(paths).toContain("MyApp/App.cs");
      expect(paths).toContain(".clinerules");
    });

    it("uses correct package versions in csproj", () => {
      const result = scaffold({ type: "project", name: "MyApp" });
      const csproj = result.files.find((f: any) =>
        f.path.endsWith(".csproj")
      );
      expect(csproj.content).toContain('Version="10.0.0.17693"');
      expect(csproj.content).toContain('Tizen.NET.Sdk/1.1.9');
    });

    it("replaces name placeholder in all files", () => {
      const result = scaffold({ type: "project", name: "TravelApp" });
      const program = result.files.find((f: any) =>
        f.path.endsWith("Program.cs")
      );
      expect(program.content).toContain("namespace TravelApp");
      expect(program.content).not.toContain("{{NAME}}");
    });

    it("uses custom resolution", () => {
      const result = scaffold({
        type: "project",
        name: "MyApp",
        options: { resolution: "1280x720" },
      });
      const app = result.files.find((f: any) =>
        f.path.endsWith("App.cs")
      );
      expect(app.content).toContain("1280");
      expect(app.content).toContain("720");
    });
  });

  describe("page", () => {
    it("generates page file with correct name", () => {
      const result = scaffold({ type: "page", name: "SettingsPage" });
      expect(result.files.length).toBe(1);
      expect(result.files[0].path).toBe("Pages/SettingsPage.cs");
      expect(result.files[0].content).toContain("class SettingsPage");
    });
  });

  describe("component", () => {
    it("generates focusable component by default", () => {
      const result = scaffold({ type: "component", name: "MenuCard" });
      expect(result.files.length).toBe(1);
      expect(result.files[0].path).toBe("Components/MenuCard.cs");
      expect(result.files[0].content).toContain("Focusable = true");
      expect(result.files[0].content).toContain("FocusGained");
    });
  });
});
