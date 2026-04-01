# Touch

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Touch events are a collection of points at a specific moment in time.<br />     When a multi-touch event occurs, each point represents the points that are currently being     touched or the points where a touch has stopped.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| MouseButton | `enum` | Touch events are a collection of points at a specific moment in time.<br />     When a multi-touch event occurs, each point represents the points that are currently being     touched or the points where a touch has stopped.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetTime | `uint GetTime()` | Touch events are a collection of points at a specific moment in time.<br />     When a multi-touch event occurs, each point represents the points that are currently being     touched or the points where a touch has stopped.<br /> |
| GetPointCount | `uint GetPointCount()` | Returns the total number of points in this TouchData.         Point means the touched point.         If there is one touch point, the point index is 0.         If there are two touch points, the point index has 0 and 1. |
| GetDeviceId | `int GetDeviceId(uint point)` | Returns the ID of the device used for the point specified.<br />         Each point has a unique device ID, which specifies the device used for that         point. This is returned by this method.<br />         If a point is greater than GetPointCount(), then this method will return -1.<br /> |
| GetState | `PointStateType GetState(uint point)` | Retrieves the state of the point specified.<br />         If a point is greater than GetPointCount(), then this method will return PointState.Finished.<br /> |
| GetHitView | `View GetHitView(uint point)` | Retrieves the view that was underneath the point specified.<br />         If a point is greater than GetPointCount(), then this method will return an empty handle.<br /> |
| GetLocalPosition | `Vector2 GetLocalPosition(uint point)` | Retrieves the coordinates relative to the top-left of the hit view at the point specified.<br />         The top-left of an view is (0.0, 0.0, 0.5).<br />         If you require the local coordinates of another view (for example, the parent of the hit view),         then you should use ScreenToLocal().<br />         If a point is greater than GetPointCount(), then this method will return Vector2.Zero.<br /> |
| GetScreenPosition | `Vector2 GetScreenPosition(uint point)` | Retrieves the coordinates relative to the top-left of the screen of the point specified.<br />         If a point is greater than GetPointCount(), then this method will return Vector2.Zero.<br /> |
| GetRadius | `float GetRadius(uint point)` | Retrieves the radius of the press point.<br />         This is the average of both the horizontal and vertical radii of the press point.<br />         If point is greater than GetPointCount(), then this method will return 0.0f.<br /> |
| GetEllipseRadius | `Vector2 GetEllipseRadius(uint point)` | Retrieves both the horizontal and the vertical radii of the press point.<br />         If a point is greater than GetPointCount(), then this method will return Vector2.Zero.<br /> |
| GetPressure | `float GetPressure(uint point)` | Retrieves the touch pressure.<br />         The pressure range starts at 0.0f.<br />         Normal pressure is defined as 1.0f.<br />         A value between 0.0f and 1.0f means light pressure has been applied.<br />         A value greater than 1.0f means more pressure than normal has been applied.<br />         If point is greater than GetPointCount(), then this method will return 1.0f.<br /> |
| GetMouseButton | `MouseButton GetMouseButton(uint point)` | Get mouse device's button value (for example, right or left button) |
| GetDeviceClass | `DeviceClassType GetDeviceClass(uint point)` | Gets the device class type from which the mouse/touch event is originated. |
| GetDeviceSubClass | `DeviceSubClassType GetDeviceSubClass(uint point)` | Gets the subclass type of the device from which the mouse/touch event is originated. |
| GetDeviceName | `string GetDeviceName(uint point)` | Gets the device name from which the mouse/touch event is originated. |
| SetTime | `void SetTime(uint time)` | sets the time (in ms) that the touch event occurred. |

