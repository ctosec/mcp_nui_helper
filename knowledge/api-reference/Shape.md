# Shape

**Namespace:** `Tizen.NUI.BaseComponents.VectorGraphics`
**Inherits:** `Drawable`
**Category:** basic

Shape is a command list for drawing one shape groups It has own path data and properties for sync/asynchronous drawing

## Properties

| Name | Type | Description |
|------|------|-------------|
| FillColor | `Color` | Shape is a command list for drawing one shape groups It has own path data and properties for sync/asynchronous drawing |
| FillGradient | `Gradient` | The gradient to use for filling the path.         Even if FillColor is set, Gradient setting takes precedence. |
| FillRule | `FillRuleType` | Gets or sets the fill rule type for the shape.         The fill rule type which determines how the interior of a shape is determined. |
| StrokeWidth | `float` | The stroke width to use for stroking the path. |
| StrokeColor | `Color` | The color to use for stroking the path. |
| StrokeGradient | `Gradient` | The gradient to use for stroking the path.         Even if StrokeColor is set, Gradient setting takes precedence. |
| StrokeCap | `StrokeCapType` | The cap style to use for stroking the path. The cap will be used for capping the end point of a open subpath. |
| StrokeJoin | `StrokeJoinType` | The join style to use for stroking the path.         The join style will be used for joining the two line segment while stroking the path. |
| StrokeDash | `ReadOnlyCollection<float>` | The stroke dash pattern. The dash pattern is specified dash pattern. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddRect | `bool AddRect(float x, float y, float width, float height, float roundedCornerX, float roundedCornerY)` | Shape is a command list for drawing one shape groups It has own path data and properties for sync/asynchronous drawing |
| AddCircle | `bool AddCircle(float x, float y, float radiusX, float radiusY)` | Append a circle with given center and x,y-axis radius |
| AddArc | `bool AddArc(float x, float y, float radius, float startAngle, float sweep, bool pie)` | Append the arcs. |
| AddMoveTo | `bool AddMoveTo(float x, float y)` | Add a point that sets the given point as the current point,         implicitly starting a new subpath and closing the previous one. |
| AddLineTo | `bool AddLineTo(float x, float y)` | Adds a straight line from the current position to the given end point.         After the line is drawn, the current position is updated to be at the         end point of the line.         If no current position present, it draws a line to itself, basically * a point. |
| AddCubicTo | `bool AddCubicTo(float controlPoint1X, float controlPoint1Y, float controlPoint2X, float controlPoint2Y, float endPointX, float endPointY)` | Adds a cubic Bezier curve between the current position and the         given end point (lineEndPoint) using the control points specified by         (controlPoint1), and (controlPoint2). After the path is drawn,         the current position is updated to be at the end point of the path. |
| AddPath | `void AddPath(PathCommands pathCommands)` | Appends a given sub-path to the path.         The current point value is set to the last point from the sub-path.         @note The interface is designed for optimal path setting if the caller has a completed path commands already. |
| Close | `bool Close()` | Closes the current subpath by drawing a line to the beginning of the         subpath, automatically starting a new path. The current point of the         new path is (0, 0).         If the subpath does not contain any points, this function does nothing. |
| ResetPath | `bool ResetPath()` | Reset the added path(rect, circle, path, etc...) information.         Color and Stroke information are keeped. |

