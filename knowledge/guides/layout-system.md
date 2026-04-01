# Layout System

## Overview

Tizen NUI uses layout objects assigned to a `View.Layout` property. Each layout type controls how child views are positioned. Views can also be positioned manually using `Position` when no layout is set or when using `AbsoluteLayout`.

## Core Sizing and Positioning Properties

```csharp
view.Size     = new Size(width, height);        // Size2D also works
view.Position = new Position(x, y);             // top-left origin
view.Padding  = new Extents(left, right, top, bottom);  // inner spacing
view.Margin   = new Extents(left, right, top, bottom);  // outer spacing
```

## AbsoluteLayout

Children are placed at the coordinates specified by their `Position` property. This is ideal for layering or when precise pixel placement is required.

```csharp
var container = new View
{
    Size = new Size(1920, 1080),
    Layout = new AbsoluteLayout()
};

var card = new View
{
    Size = new Size(400, 300),
    Position = new Position(100, 200),
    BackgroundColor = Color.White
};
container.Add(card);
```

Use `AbsoluteLayout` as the root layout when building complex layered screens.

## LinearLayout

Stacks children either horizontally or vertically. Children are sized by their own `Size` property; the layout controls spacing and alignment.

```csharp
var row = new View
{
    Size = new Size(1920, 100),
    Layout = new LinearLayout
    {
        LinearOrientation = LinearLayout.Orientation.Horizontal,
        CellPadding = new Size2D(20, 0),                 // gap between cells
        HorizontalAlignment = HorizontalAlignment.Begin,
        VerticalAlignment = VerticalAlignment.Center
    }
};

var col = new View
{
    Size = new Size(300, 1080),
    Layout = new LinearLayout
    {
        LinearOrientation = LinearLayout.Orientation.Vertical,
        CellPadding = new Size2D(0, 16),
        HorizontalAlignment = HorizontalAlignment.Center,
        VerticalAlignment = VerticalAlignment.Top
    }
};
```

### LinearLayout Alignment Values

- `HorizontalAlignment`: `Begin`, `Center`, `End`
- `VerticalAlignment`: `Top`, `Center`, `Bottom`

## GridLayout

Arranges children in a fixed-column grid. Row count grows automatically.

```csharp
var grid = new View
{
    Size = new Size(1200, 800),
    Layout = new GridLayout
    {
        Columns = 4,
        ColumnSpacing = 24,
        RowSpacing = 24
    }
};

for (int i = 0; i < 12; i++)
{
    var cell = new View
    {
        Size = new Size(270, 180),
        BackgroundColor = Color.Gray
    };
    grid.Add(cell);
}
```

## FlexLayout

A flexible layout that distributes space among children. Useful for dynamic or unknown child counts.

```csharp
var flex = new View
{
    Size = new Size(1920, 200),
    Layout = new FlexLayout
    {
        Direction = FlexLayout.FlexDirection.Row,
        Justification = FlexLayout.FlexJustification.SpaceBetween,
        Alignment = FlexLayout.AlignmentType.Center,
        WrapType = FlexLayout.FlexWrapType.NoWrap
    }
};
```

## Nesting Layouts

Layouts can be nested freely. A common pattern for TV UIs is an `AbsoluteLayout` root with `LinearLayout` panels inside it:

```csharp
var root = new View
{
    Size = new Size(1920, 1080),
    Layout = new AbsoluteLayout()
};

var sidebar = new View
{
    Size = new Size(300, 1080),
    Position = new Position(0, 0),
    Layout = new LinearLayout
    {
        LinearOrientation = LinearLayout.Orientation.Vertical,
        CellPadding = new Size2D(0, 8)
    }
};
root.Add(sidebar);

var content = new View
{
    Size = new Size(1620, 1080),
    Position = new Position(300, 0),
    Layout = new AbsoluteLayout()
};
root.Add(content);
```

## Notes

- `Padding` and `Margin` take `Extents(left, right, top, bottom)` — note the order (not top/right/bottom/left).
- Setting `Layout = null` removes any layout and lets you manage child positions manually.
- Avoid mixing manual `Position` assignments on children inside a `LinearLayout` or `GridLayout` as the layout will override them.
