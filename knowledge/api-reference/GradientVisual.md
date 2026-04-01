# GradientVisual

**Namespace:** `Tizen.NUI.Visuals`
**Inherits:** `VisualBase`
**Category:** basic

Visual to render gradient.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| StartPosition | `UIVector2` | Visual to render gradient.<br /> |
| EndPosition | `UIVector2` | Gets or sets the end position of a linear gradient.<br />         Mandatory for linear.<br /> |
| Center | `UIVector2` | Gets or sets the center point of a radial gradient.<br />         Mandatory for radial and conic.<br /> |
| Radius | `float` | Gets or sets the size of the radius of a radial gradient.<br />         Mandatory for radial.<br /> |
| StopOffsets | `IList<float>` | Gets or sets all the stop offsets.<br />         A PropertyArray of float.<br />         If not supplied, the default is 0.0f and 1.0f.<br />         Optional. |
| StopColors | `IList<UIColor>` | Gets or sets the color at the stop offsets.<br />         A PropertyArray of color.<br />         At least 2 values are required to show a gradient.<br />         Mandatory. |
| Units | `GradientVisualUnitsType` | Gets or sets descriptions of the coordinate system for certain attributes of the points in a gradient.<br />         If not supplied, the default is GradientVisualUnitsType.ObjectBoundingBox.<br />         Optional. |
| SpreadMethod | `GradientVisualSpreadMethodType` | Gets or sets indications of what happens if the gradient starts or ends inside the bounds of the target rectangle.<br />         If not supplied, the default is GradientVisualSpreadMethodType.Pad.<br />         Optional. |
| StartOffset | `float` | Gets or sets the gradient's start position offset.<br />         If not supplied, the default is 0.0f.<br />         Optional. |
| StartAngle | `float` | Gets or sets the start angle of the conic gradient.<br />         Mandatory for conic.<br />         Optional. |

