# Text Rendering

## Overview

Tizen NUI provides three text views: `TextLabel` for display text, `TextField` for single-line user input, and `TextEditor` for multi-line input. All are in the `Tizen.NUI.BaseComponents` namespace.

## TextLabel

Use `TextLabel` for any non-editable text.

```csharp
using Tizen.NUI.BaseComponents;

var label = new TextLabel
{
    Text         = "Hello, World!",
    PointSize    = 28.0f,
    TextColor    = Color.White,
    FontFamily   = "SamsungOneUI",
    MultiLine    = false,
    Ellipsis     = true,
    HorizontalAlignment = HorizontalAlignment.Begin,
    VerticalAlignment   = VerticalAlignment.Center,
    Size = new Size(600, 50)
};
```

### Key Properties

| Property | Type | Description |
|---|---|---|
| `Text` | string | The displayed string |
| `PointSize` | float | Font size in points |
| `TextColor` | Color | Text color |
| `FontFamily` | string | Font name |
| `MultiLine` | bool | Allow text to wrap |
| `Ellipsis` | bool | Show `...` when text overflows |
| `HorizontalAlignment` | HorizontalAlignment | Begin / Center / End |
| `VerticalAlignment` | VerticalAlignment | Top / Center / Bottom |

### Multi-line Text

```csharp
var body = new TextLabel
{
    Text      = "This is a longer description that may wrap across multiple lines.",
    PointSize = 20.0f,
    TextColor = new Color(0.8f, 0.8f, 0.8f, 1.0f),
    MultiLine = true,
    Ellipsis  = false,
    LineWrapMode = LineWrapMode.Word,
    Size = new Size(800, 200)
};
```

### Padding for Text Insets

Add internal spacing around text by setting `Padding` on the label:

```csharp
label.Padding = new Extents(16, 16, 8, 8);  // left, right, top, bottom
```

## TextField

Use `TextField` for single-line text input (e.g., search boxes, form fields).

```csharp
var input = new TextField
{
    PlaceholderText      = "Search...",
    PlaceholderTextColor = new Color(0.5f, 0.5f, 0.5f, 1.0f),
    TextColor            = Color.White,
    PointSize            = 22.0f,
    MaxLength            = 100,
    EnableSelection      = true,
    BackgroundColor      = new Color(0.15f, 0.15f, 0.15f, 1.0f),
    Size = new Size(500, 60),
    Focusable = true
};
```

### Listening for Changes

```csharp
input.TextChanged += (s, e) =>
{
    string current = input.Text;
    // filter list, trigger search, etc.
};
```

### Key Properties

| Property | Type | Description |
|---|---|---|
| `Text` | string | Current text value |
| `PlaceholderText` | string | Hint shown when empty |
| `PlaceholderTextColor` | Color | Placeholder color |
| `MaxLength` | int | Maximum character count |
| `EnableSelection` | bool | Allow text selection |
| `HorizontalAlignment` | HorizontalAlignment | Text alignment |

### Input Style

```csharp
input.FontFamily  = "SamsungOneUI";
input.HorizontalAlignment = HorizontalAlignment.Begin;
input.VerticalAlignment   = VerticalAlignment.Center;
input.Padding = new Extents(12, 12, 0, 0);
```

## TextEditor

Use `TextEditor` for multi-line editable text.

```csharp
var editor = new TextEditor
{
    Text      = "",
    PointSize = 20.0f,
    TextColor = Color.White,
    BackgroundColor = new Color(0.15f, 0.15f, 0.15f, 1.0f),
    MultiLine = true,
    Size      = new Size(800, 300),
    Focusable = true
};

editor.TextChanged += (s, e) =>
{
    string content = editor.Text;
};
```

## Font Sizes

Common sizes for a 1920x1080 TV display:

| Use | PointSize |
|---|---|
| Page title | 36–48 |
| Section heading | 28–32 |
| Body text | 20–24 |
| Caption / metadata | 16–18 |
| Button label | 22–26 |

## Common Patterns

### Centered Label

```csharp
var title = new TextLabel
{
    Text = "Now Playing",
    PointSize = 40.0f,
    TextColor = Color.White,
    HorizontalAlignment = HorizontalAlignment.Center,
    VerticalAlignment   = VerticalAlignment.Center,
    Size = new Size(1920, 100)
};
```

### Label with Truncation

```csharp
var subtitle = new TextLabel
{
    Text      = someLongTitle,
    PointSize = 22.0f,
    TextColor = new Color(0.7f, 0.7f, 0.7f, 1.0f),
    MultiLine = false,
    Ellipsis  = true,
    Size = new Size(400, 32)
};
```

## Notes

- `TextLabel` is read-only — do not set `Focusable = true` unless you need the label to receive key events.
- `PointSize` is in points, not pixels. At 1920x1080 on a TV, 24pt is roughly equivalent to 32px.
- `TextField` shows the software keyboard on mobile; on TV it typically relies on a D-pad input or a custom on-screen keyboard.
