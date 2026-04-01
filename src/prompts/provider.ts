interface PromptInfo {
  name: string;
  description: string;
}

interface PromptMessage {
  role: "user" | "assistant";
  content: string;
}

interface PromptResult {
  messages: PromptMessage[];
}

const PROMPTS: Record<string, { description: string; content: string }> = {
  "new-tizen-project": {
    description: "Create a new Tizen NUI project with scaffold tool",
    content: `You are creating a new Tizen NUI project.

Steps:
1. Call the scaffold tool with type="project" and the project name.
2. Write ALL generated files to disk.
3. The .clinerules file has been created — follow its rules for all future code.
4. After creating the project, call validate_code on the generated .csproj to verify package versions.

Important:
- Do NOT use XAML. All UI is C# code.
- Do NOT change package versions in the .csproj.
- Use Tizen.NUI namespace, NOT Xamarin.Forms or MAUI.`,
  },
  "add-page": {
    description: "Add a new page to an existing Tizen NUI project",
    content: `You are adding a new page to a Tizen NUI project.

Steps:
1. Call the scaffold tool with type="page" and the page name.
2. Write the generated file to the Pages/ directory.
3. Update App.cs:
   - Add the new page to the PageType enum.
   - Add a case in the NavigateTo switch expression.
   - Update GoBack logic if needed.
4. Call validate_code on the new page code.

Important:
- Pages inherit from View, NOT Page or ContentPage.
- Use AbsoluteLayout as the root layout for layering (gradient background + content).
- Set Size = new Size(1920, 1080) on the page.`,
  },
  "add-component": {
    description: "Add a new reusable component to a Tizen NUI project",
    content: `You are adding a new reusable component to a Tizen NUI project.

Steps:
1. Call the scaffold tool with type="component" and the component name.
2. Write the generated file to the Components/ directory.
3. If the component needs focus navigation, verify it has:
   - Focusable = true
   - FocusGained/FocusLost event handlers for visual feedback
   - KeyEvent handler for Return/Enter key
4. Call validate_code on the new component code.
5. Call get_pattern with the relevant pattern (focus, card_component, form_input) for reference.

Important:
- Components inherit from View.
- Use event Action for callbacks, NOT EventHandler.
- Use BorderlineWidth/Color for focus indicators.`,
  },
  "review-nui-code": {
    description: "Review and validate Tizen NUI code for common mistakes",
    content: `You are reviewing Tizen NUI code for correctness.

Steps:
1. Read the current file being reviewed.
2. Call validate_code with the file content.
3. For each issue found:
   - Explain why it's wrong.
   - Show the correct pattern from the "correct" field.
   - Apply the fix.
4. After fixing, run validate_code again to confirm no remaining issues.

Common mistakes to watch for:
- ImageView.Image assigned as string (use ResourceUrl instead)
- Xamarin.Forms/MAUI/WPF namespaces
- Missing Dispose() after Remove()
- System.Threading.Timer instead of Tizen.NUI.Timer
- Focusable=true without FocusGained/FocusLost/KeyEvent handlers
- Wrong Tizen.NET.Sdk version in .csproj`,
  },
};

export function listPrompts(): PromptInfo[] {
  return Object.entries(PROMPTS).map(([name, { description }]) => ({
    name,
    description,
  }));
}

export function getPrompt(name: string): PromptResult {
  const prompt = PROMPTS[name];
  if (!prompt) {
    throw new Error(
      `Prompt "${name}" not found. Available: ${Object.keys(PROMPTS).join(", ")}`
    );
  }

  return {
    messages: [{ role: "user", content: prompt.content }],
  };
}
