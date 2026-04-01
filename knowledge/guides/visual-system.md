# Visual System

## Overview

Tizen NUI supports rich visual styling through `PropertyMap`. Complex visuals like gradients are described as property maps and assigned to `view.Background`. Simple solid colors can be set directly via `view.BackgroundColor`.

## Solid Color Background

```csharp
view.BackgroundColor = new Color(0.1f, 0.1f, 0.1f, 1.0f);  // dark gray, fully opaque
view.BackgroundColor = Color.Black;
view.BackgroundColor = Color.Transparent;
```

## Gradient Background

Gradients require a `PropertyMap` describing the visual type and its parameters.

### Linear Gradient

```csharp
var gradientMap = new PropertyMap();
gradientMap.Add(Visual.Property.Type, new PropertyValue((int)Visual.Type.Gradient));

// Direction: top to bottom
gradientMap.Add(GradientVisualProperty.StartPosition, new PropertyValue(new Vector2(0.0f, -1.0f)));
gradientMap.Add(GradientVisualProperty.EndPosition,   new PropertyValue(new Vector2(0.0f,  1.0f)));

// Stop offsets (0.0 = start, 1.0 = end)
var stopOffsets = new PropertyArray();
stopOffsets.Add(new PropertyValue(0.0f));
stopOffsets.Add(new PropertyValue(1.0f));
gradientMap.Add(GradientVisualProperty.StopOffset, new PropertyValue(stopOffsets));

// Stop colors
var stopColors = new PropertyArray();
stopColors.Add(new PropertyValue(new Vector4(0.05f, 0.05f, 0.15f, 1.0f)));  // dark blue
stopColors.Add(new PropertyValue(new Vector4(0.0f,  0.0f,  0.0f,  1.0f)));  // black
gradientMap.Add(GradientVisualProperty.StopColor, new PropertyValue(stopColors));

view.Background = gradientMap;
```

### Diagonal / Horizontal Gradient

Change the direction vectors:

```csharp
// Left to right
gradientMap.Add(GradientVisualProperty.StartPosition, new PropertyValue(new Vector2(-1.0f, 0.0f)));
gradientMap.Add(GradientVisualProperty.EndPosition,   new PropertyValue(new Vector2( 1.0f, 0.0f)));

// Diagonal top-left to bottom-right
gradientMap.Add(GradientVisualProperty.StartPosition, new PropertyValue(new Vector2(-1.0f, -1.0f)));
gradientMap.Add(GradientVisualProperty.EndPosition,   new PropertyValue(new Vector2( 1.0f,  1.0f)));
```

### Three-Stop Gradient

```csharp
var offsets = new PropertyArray();
offsets.Add(new PropertyValue(0.0f));
offsets.Add(new PropertyValue(0.5f));
offsets.Add(new PropertyValue(1.0f));
gradientMap.Add(GradientVisualProperty.StopOffset, new PropertyValue(offsets));

var colors = new PropertyArray();
colors.Add(new PropertyValue(new Vector4(1.0f, 0.0f, 0.0f, 1.0f)));  // red
colors.Add(new PropertyValue(new Vector4(0.0f, 1.0f, 0.0f, 1.0f)));  // green
colors.Add(new PropertyValue(new Vector4(0.0f, 0.0f, 1.0f, 1.0f)));  // blue
gradientMap.Add(GradientVisualProperty.StopColor, new PropertyValue(colors));
```

## Corner Radius

Corner radius can be set via `Visual.Property.CornerRadius` on the background map, or via the view property directly:

```csharp
// Via view property (preferred)
view.CornerRadius = 12.0f;

// Via background PropertyMap
gradientMap.Add(Visual.Property.CornerRadius, new PropertyValue(12.0f));
view.Background = gradientMap;
```

## Borderline

Draw a border without a separate view:

```csharp
view.BorderlineWidth = 2.0f;
view.BorderlineColor = new Color(1.0f, 1.0f, 1.0f, 0.5f);  // semi-transparent white
view.BorderlineOffset = 0.0f;  // 0 = inside, positive = outside
```

This is the recommended way to draw a focus indicator ring.

## Shadow

```csharp
var shadow = new Shadow(
    blurRadius: 10.0f,
    color: new Color(0.0f, 0.0f, 0.0f, 0.7f),
    offset: new Vector2(4.0f, 4.0f)
);
view.BoxShadow = shadow;
```

## Opacity

```csharp
view.Opacity = 1.0f;   // fully visible
view.Opacity = 0.5f;   // 50% transparent
view.Opacity = 0.0f;   // invisible (still in layout)
```

Note: `Opacity = 0` is different from `Visibility = false`. A view with zero opacity is still in the layout and can receive focus.

## Color Constructor

NUI uses float colors in [0, 1] range:

```csharp
new Color(r, g, b, a)           // floats 0.0–1.0
new Vector4(r, g, b, a)         // same, used in PropertyArray for gradients
Color.FromHex("#FF5733")        // hex shorthand
```

## Important Notes

- Assign gradients via `view.Background = propertyMap`, not `view.BackgroundColor`.
- `view.Background` and `view.BackgroundColor` interact — setting one can override the other. Set background last.
- `GradientVisualProperty` requires the `Tizen.NUI` namespace.
- `Visual.Property.CornerRadius` applies to the visual, not the view's clip shape. Use `view.CornerRadius` for clipping.
