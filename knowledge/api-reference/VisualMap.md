# VisualMap

**Namespace:** `Tizen.NUI`
**Inherits:** `IDisposable`
**Category:** basic

A class encapsulating the transform map of the visual.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Size | `Size2D` | A class encapsulating the transform map of the visual. |
| Position | `Vector2` | Gets or sets the offset of the visual.<br />         It can be either relative (percentage of the parent)         or absolute (in world units).<br />         Optional. |
| RelativeSize | `RelativeVector2` | Gets or sets the relative size of the visual<br />         (percentage [0.0f to 1.0f] of the control).<br />         Optional. |
| RelativePosition | `RelativeVector2` | Gets or sets the relative offset of the visual<br />         (percentage [0.0f to 1.0f] of the control).<br />         Optional. |
| PositionPolicy | `VisualTransformPolicyType` | Gets or sets whether the x and y offset values are relative<br />         (percentage [0.0f to 1.0f] of the control) or absolute (in world units).<br />         By default, both the x and the y offset are relative.<br />         Optional. |
| PositionPolicyX | `VisualTransformPolicyType` | Gets or sets whether the x offset values are relative<br />         (percentage [0.0f to 1.0f] of the control) or absolute (in world units).<br />         By default, the x offset is relative.<br />         Optional. |
| PositionPolicyY | `VisualTransformPolicyType` | Gets or sets whether the y offset values are relative<br />         (percentage [0.0f to 1.0f] of the control) or absolute (in world units).<br />         By default, the y offset is relative.<br />         Optional. |
| SizePolicy | `VisualTransformPolicyType` | Gets or sets whether the size values of the width or the height are relative<br />         (percentage [0.0f to 1.0f] of the control) or absolute (in world units).<br />         By default, offsets of both the width and the height are relative to the control's size.<br />         Optional. |
| SizePolicyWidth | `VisualTransformPolicyType` | Gets or sets whether size values of the width are relative.<br />         (percentage [0.0f to 1.0f] of the control) or absolute (in world units).<br />         By default, the value of the width is relative to the control's width.<br />         Optional. |
| SizePolicyHeight | `VisualTransformPolicyType` | Gets or sets whether size values of the height are relative<br />         (percentage [0.0f to 1.0f] of the control) or absolute (in world units).<br />         By default, the height value is relative to the control's height.<br />         Optional. |
| DepthIndex | `int` | Gets or sets the origin of the visual within its control area.<br />         By default, the origin is AlignType.TopBegin.<br />         Optional. |
| OutputTransformMap | `PropertyMap` | Gets the transform map used by the visual. |
| OutputVisualMap | `PropertyMap` | Gets the property map to create the visual. |
| Shader | `PropertyMap` | The shader to use in the visual. |
| PremultipliedAlpha | `bool` | Enables or disables the premultiplied alpha. <br />         The premultiplied alpha is false by default unless this behavior is modified by the derived visual type. |
| MixColor | `Color` | Mix color is a blend color for any visual. |
| Opacity | `float` | Opacity is the alpha component of the mix color discussed above. |
| VisualFittingMode | `VisualFittingModeType` | The fitting mode of the visual.         The default is defined by the type of visual (if it is suitable to be stretched or not). |
| CornerRadius | `Vector4` | The corner radius of the visual. |
| CornerRadiusPolicy | `VisualTransformPolicyType` | Whether the CornerRadius property value is relative (percentage [0.0f to 0.5f] of the view size) or absolute (in world units).         It is absolute by default.         When the policy is relative, the corner radius is relative to the smaller of the view's width and height. |
| BorderlineWidth | `float` | The borderline width of the visual. |
| BorderlineColor | `Color` | The borderline color of the visual. |
| BorderlineOffset | `float` | The borderline offset of the visual. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Dispose | `void Dispose()` | A class encapsulating the transform map of the visual. |

