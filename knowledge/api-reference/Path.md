# Path

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

A 3D parametric curve.     Paths can be used to animate the position and orientation of views.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Points | `PropertyArray` | A 3D parametric curve.     Paths can be used to animate the position and orientation of views. |
| ControlPoints | `PropertyArray` | Gets or sets the control points of the path.         The property value represents the array of control points defining the path. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddPoint | `void AddPoint(Position point)` | A 3D parametric curve.     Paths can be used to animate the position and orientation of views. |
| AddControlPoint | `void AddControlPoint(Vector3 point)` | Adds a control point to the path. |
| GenerateControlPoints | `void GenerateControlPoints(float curvature)` | Automatic generation of control points. Generated control points which result in a smooth join between the splines of each segment.<br />         The generating algorithm is as follows:<br />         For a given knot point K[N], find the vector that bisects K[N-1],[N] and [N],[N+1].<br />         Calculate the tangent vector by taking the normal of this bisector.<br />         The in control point is the length of the preceding segment back along this bisector multiplied by the curvature.<br />         The out control point is the length of the succeeding segment forward along this bisector multiplied by the curvature.<br /> |
| Sample | `void Sample(float progress, Vector3 position, Vector3 tangent)` | Sample path at a given progress. Calculates the position and tangent at that point of the curve. |
| GetPoint | `Vector3 GetPoint(uint index)` | An accessor for the interpolation points. |
| GetControlPoint | `Vector3 GetControlPoint(uint index)` | An accessor for the control points. |
| GetPointCount | `uint GetPointCount()` | Gets the number of interpolation points in the path. |

