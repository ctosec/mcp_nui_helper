# ColorVisual

**Namespace:** `Tizen.NUI.Visuals`
**Inherits:** `VisualBase`
**Category:** basic

Simple visual to render a solid color.

## Properties

| Name | Type | Description |
|------|------|-------------|
| BlurRadius | `float` | Simple visual to render a solid color. |
| CutoutPolicy | `ColorVisualCutoutPolicyType` | Cutout policy of color visual |
| CornerRadius | `Vector4` | The radius for the rounded corners of the visual.         The values in Vector4 are used in clockwise order from top-left to bottom-left : Vector4(top-left-corner, top-right-corner, bottom-right-corner, bottom-left-corner).         Each radius will clamp internally to the half of smaller of the visual's width or height. |
| CornerRadiusPolicy | `VisualTransformPolicyType` | Whether the CornerRadius property value is relative (percentage [0.0f to 0.5f] of the visual size) or absolute (in world units).         It is absolute by default.         When the policy is relative, the corner radius is relative to the smaller of the visual's width and height. |
| CornerSquareness | `Vector4` | The squareness for the rounded corners of the visual.         The values in Vector4 are used in clockwise order from top-left to bottom-left : Vector4(top-left-corner, top-right-corner, bottom-right-corner, bottom-left-corner).         Each radius will clamp internally between 0.0 and 1.0. |
| BorderlineWidth | `float` | The width for the borderline of the visual. |
| BorderlineColor | `Color` | The color for the borderline of the visual.         It is Color.Black by default. |
| BorderlineOffset | `float` | The Relative offset for the borderline of the visual.         Recommended range : [-1.0f to 1.0f].         If -1.0f, draw borderline inside of the visual.         If 1.0f, draw borderline outside of the visual.         If 0.0f, draw borderline half inside and half outside.         It is 0.0f by default. |

