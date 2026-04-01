# Hover

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Hover events are a collection of points at a specific moment in time.<br />     When a multi-event occurs, each point represents the points that are currently being     hovered or the points where a hover has stopped.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Time | `uint` | Hover events are a collection of points at a specific moment in time.<br />     When a multi-event occurs, each point represents the points that are currently being     hovered or the points where a hover has stopped.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetDeviceId | `int GetDeviceId(uint point)` | Hover events are a collection of points at a specific moment in time.<br />     When a multi-event occurs, each point represents the points that are currently being     hovered or the points where a hover has stopped.<br /> |
| GetState | `PointStateType GetState(uint point)` | Retrieves the state of the point specified.<br />         If a point is greater than GetPointCount(), then this method will return PointState.Finished.<br /> |
| GetHitView | `View GetHitView(uint point)` | Retrieves the view that was underneath the point specified.<br />         If a point is greater than GetPointCount(), then this method will return an empty handle.<br /> |
| GetLocalPosition | `Vector2 GetLocalPosition(uint point)` | Retrieves the coordinates relative to the top-left of the hit-view at the point specified. |
| GetScreenPosition | `Vector2 GetScreenPosition(uint point)` | Retrieves the coordinates relative to the top-left of the screen of the point specified. |
| GetPointCount | `uint GetPointCount()` | Returns the total number of points. |
| GetDeviceClass | `DeviceClassType GetDeviceClass(uint point)` | Gets the device class type from which the mouse/Hover event is originated. |
| GetDeviceSubClass | `DeviceSubClassType GetDeviceSubClass(uint point)` | Gets the subclass type of the device from which the mouse/Hover event is originated. |
| GetDeviceName | `string GetDeviceName(uint point)` | Gets the device name from which the mouse/Hover event is originated. |

