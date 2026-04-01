# PrimitiveVisual

**Namespace:** `Tizen.NUI`
**Inherits:** `VisualMap`
**Category:** basic

A class encapsulating the property map of the primitive visual.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Shape | `PrimitiveVisualShapeType` | A class encapsulating the property map of the primitive visual. |
| MixColor | `Color` | Gets or sets the color of the shape.<br />         If not specified, the default is Color (0.5, 0.5, 0.5, 1.0).<br />         Applies to all shapes.<br />         Optional. |
| Slices | `int` | Gets or sets the number of slices as you go around the shape.<br />         For spheres and conical frustums, this determines how many divisions there are as you go around the object.<br />         If not specified, the default is 128.<br />         The range is from 1 to 255.<br />         Optional. |
| Stacks | `int` | Gets or sets the number of stacks as you go down the shape.<br />         For spheres, 'stacks' determines how many layers there are as you go down the object.<br />         If not specified, the default is 128.<br />         The range is from 1 to 255.<br />         Optional. |
| ScaleTopRadius | `float` | Gets or sets the scale of the radius of the top circle of a conical frustum.<br />         If not specified, the default is 1.0f.<br />         Applies to: - PrimitiveVisualShapeType.ConicalFrustrum<br />         Only values greater than or equal to 0.0f are accepted.<br />         Optional. |
| ScaleBottomRadius | `float` | Gets or sets the scale of the radius of the bottom circle of a conical frustum.<br />         If not specified, the default is 1.5f.<br />         Applies to:  - PrimitiveVisualShapeType.ConicalFrustrum<br />         - PrimitiveVisualShapeType.Cone<br />         Only values greater than or equal to 0.0f are accepted.<br />         Optional. |
| ScaleHeight | `float` | Gets or sets the scale of the height of a conic.<br />         If not specified, the default is 3.0f.<br />         Applies to:<br />         - PrimitiveVisualShapeType.ConicalFrustrum<br />         - PrimitiveVisualShapeType.Cone<br />         - PrimitiveVisualShapeType.Cylinder<br />         Only values greater than or equal to 0.0f are accepted.<br />         Optional. |
| ScaleRadius | `float` | Gets or sets the scale of the radius of a cylinder.<br />         If not specified, the default is 1.0f.<br />         Applies to:<br />         - PrimitiveVisualShapeType.Cylinder<br />         Only values greater than or equal to 0.0f are accepted.<br />         Optional. |
| ScaleDimensions | `Vector3` | Gets or sets the dimensions of a cuboid. Scales in the same fashion as a 9-patch image.<br />         If not specified, the default is Vector3.One.<br />         Applies to:<br />         - PrimitiveVisualShapeType.Cube<br />         - PrimitiveVisualShapeType.Octahedron<br />         - PrimitiveVisualShapeType.BevelledCube<br />         Each Vector3 parameter should be greater than or equal to 0.0f.<br />         Optional. |
| BevelPercentage | `float` | Gets or sets determines how bevelled the cuboid should be, based off the smallest dimension.<br />         Bevel percentage ranges from 0.0 to 1.0. It affects the ratio of the outer face widths to the width of the overall cube.<br />         If not specified, the default is 0.0f (no bevel).<br />         Applies to:<br />         - PrimitiveVisualShapeType.BevelledCube<br />         The range is from 0.0f to 1.0f.<br />         Optional. |
| BevelSmoothness | `float` | Gets or sets descriptions of how smooth the bevelled edges should be.<br />         If not specified, the default is 0.0f (sharp edges).<br />         Applies to:<br />         - PrimitiveVisualShapeType.BevelledCube<br />         The range is from 0.0f to 1.0f.<br />         Optional. |
| LightPosition | `Vector3` | Gets or sets the position, in the stage space, of the point light that applies lighting to the model.<br />         This is based off the stage's dimensions, so using the width and the height of the stage halved will correspond to the center,         and using all zeroes will place the light at the top-left corner.<br />         If not specified, the default is an offset outwards from the center of the screen.<br />         Applies to all shapes.<br />         Optional. |

