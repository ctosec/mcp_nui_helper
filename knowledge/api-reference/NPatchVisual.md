# NPatchVisual

**Namespace:** `Tizen.NUI.Visuals`
**Inherits:** `ImageVisual`
**Category:** basic

The visual which can display an n-patch image resource.     It will be used when we want to display n-patch image, border only n-patch, or make regular image stretched.

## Properties

| Name | Type | Description |
|------|------|-------------|
| BorderOnly | `bool` | The visual which can display an n-patch image resource.     It will be used when we want to display n-patch image, border only n-patch, or make regular image stretched. |
| Border | `Rectangle` | The border of the regular image is in the order: left, right, bottom, top.<br /> |
| AuxiliaryImageUrl | `string` | Overlays the auxiliary image on top of an NPatch image.         The resulting visual image will be at least as large as the smallest possible n-patch or the auxiliary image, whichever is larger. |
| AuxiliaryImageAlpha | `float` | An alpha value for mixing between the masked main NPatch image and the auxiliary image. |

