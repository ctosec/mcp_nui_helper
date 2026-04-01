# ImageVisual

**Namespace:** `Tizen.NUI.Visuals`
**Inherits:** `VisualBase`
**Category:** basic

The visual which can display an image resource.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ResourceUrl | `string` | The visual which can display an image resource. |
| PixelArea | `Vector4` | Gets or sets the image area to be displayed.<br />         It is a rectangular area.<br />         The first two elements indicate the top-left position of the area, and the last two elements are the areas of the width and the height respectively.<br />         If not specified, the default value is Vector4 (0.0, 0.0, 1.0, 1.0), i.e., the entire area of the image.<br />         For normal quad images only.<br />         Optional. |
| PreMultipliedAlpha | `bool` | ImageView PreMultipliedAlpha, type Boolean.<br />         Image must be initialized.<br /> |
| SynchronousLoading | `bool` | Synchronously load the image for the visual. |
| OrientationCorrection | `bool` | Gets or sets whether to automatically correct the orientation of an image.<br /> |
| SynchronousSizing | `bool` | Gets or sets whether to automatically reload the image as the visual size.<br />         If we set this value as true, Visual size will be works as desired size of image.<br /> |
| AlphaMaskUrl | `string` | Gets or sets the URL of the alpha mask.<br />         Optional. |
| MaskContentScale | `float` | Gets or sets scale factor to apply to the content image before masking. |
| CropToMask | `bool` | Whether to crop image to mask or scale mask to fit image. |
| FastTrackUploading | `bool` | Gets or sets whether to apply mask on GPU or not.<br /> |
| ReleasePolicy | `ReleasePolicyType` | Gets or sets the Image Visual release policy.<br/>         It decides if a texture should be released from the cache or kept to reduce the loading time.<br/> |
| SamplingMode | `SamplingModeType` | Gets or sets filtering options used when resizing images to the sample original pixels.<br />         If not supplied, the default is SamplingModeType.BoxThenLinear.<br />         For normal quad images only.<br />         Optional. |
| DesiredWidth | `int` | Gets or sets the desired image width.<br />         If not specified, the actual image width is used.<br />         For normal quad images only.<br />         Optional. |
| DesiredHeight | `int` | Gets or sets the desired image height.<br />         If not specified, the actual image height is used.<br />         For normal quad images only.<br />         Optional. |
| LoadPolicy | `LoadPolicyType` | Gets or sets the Image Visual image loading policy.<br />         It decides if a texture should be loaded immediately after source set or only after the visual is added to the window.<br /> |
| WrapModeU | `WrapModeType` | Gets or sets the wrap mode for the u coordinate.<br />         It decides how the texture should be sampled when the u coordinate exceeds the range of 0.0 to 1.0.<br />         If not specified, the default is WrapModeType.Default(CLAMP).<br />         For normal quad images only.<br />         Optional. |
| WrapModeV | `WrapModeType` | Gets or sets the wrap mode for the v coordinate.<br />         It decides how the texture should be sampled when the v coordinate exceeds the range of 0.0 to 1.0.<br />         The first two elements indicate the top-left position of the area, and the last two elements are the areas of the width and the height respectively.<br />         If not specified, the default is WrapModeType.Default(CLAMP).<br />         For normal quad images only.         Optional. |
| CornerRadius | `Vector4` | The radius for the rounded corners of the visual.         The values in Vector4 are used in clockwise order from top-left to bottom-left : Vector4(top-left-corner, top-right-corner, bottom-right-corner, bottom-left-corner).         Each radius will clamp internally to the half of smaller of the visual's width or height. |
| CornerRadiusPolicy | `VisualTransformPolicyType` | Whether the CornerRadius property value is relative (percentage [0.0f to 0.5f] of the visual size) or absolute (in world units).         It is absolute by default.         When the policy is relative, the corner radius is relative to the smaller of the visual's width and height. |
| CornerSquareness | `Vector4` | The squareness for the rounded corners of the visual.         The values in Vector4 are used in clockwise order from top-left to bottom-left : Vector4(top-left-corner, top-right-corner, bottom-right-corner, bottom-left-corner).         Each radius will clamp internally between [0.0f to 1.0f]. |
| BorderlineWidth | `float` | The width for the borderline of the visual. |
| BorderlineColor | `Color` | The color for the borderline of the visual.         It is Color.Black by default. |
| BorderlineOffset | `float` | The Relative offset for the borderline of the visual.         Recommended range : [-1.0f to 1.0f].         If -1.0f, draw borderline inside of the visual.         If 1.0f, draw borderline outside of the visual.         If 0.0f, draw borderline half inside and half outside.         It is 0.0f by default. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Reload | `void Reload()` | The visual which can display an image resource. |

