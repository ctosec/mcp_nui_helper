# AbsoluteLayout

**Namespace:** `Tizen.NUI`
**Inherits:** `LayoutGroup`
**Category:** layout

This class implements a absolute layout, allowing explicit positioning of children.     Positions are from the top left of the layout and can be set using the View.Position and alike.

## Properties

| Name | Type | Description |
|------|------|-------------|
| LayoutBounds | `UIRect` | This class implements a absolute layout, allowing explicit positioning of children.     Positions are from the top left of the layout and can be set using the View.Position and alike. |
| LayoutFlags | `AbsoluteLayoutFlags` | Gets or sets the absolute layout flags of the view. The default absolute layout flags is <see cref="AbsoluteLayoutFlags.None"/>. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetLayoutBounds | `UIRect GetLayoutBounds(View view)` | This class implements a absolute layout, allowing explicit positioning of children.     Positions are from the top left of the layout and can be set using the View.Position and alike. |
| SetLayoutBounds | `void SetLayoutBounds(View view, UIRect rect)` | Sets the layout bounds of the child view. The default layout bounds is 0, 0, LayoutBoundsAutoSized, LayoutBoundsAutoSized.         LayoutBoundsAutoSized for width and height calculates the child view's width and height based on the child view's WidthSpecification and HeightSpecification. |
| GetLayoutFlags | `AbsoluteLayoutFlags GetLayoutFlags(View view)` | Gets the absolute layout flags of the child view. The default absolute layout flags is <see cref="AbsoluteLayoutFlags.None"/>. |
| SetLayoutFlags | `void SetLayoutFlags(View view, AbsoluteLayoutFlags flags)` | Sets the absolute layout flags of the child view. The default absolute layout flags is <see cref="AbsoluteLayoutFlags.None"/>. |

