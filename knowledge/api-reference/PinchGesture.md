# PinchGesture

**Namespace:** `Tizen.NUI`
**Inherits:** `Gesture`
**Category:** basic

A PinchGesture is emitted when the user moves two fingers towards or away from each other.<br />     A pinch gesture will continue to be sent to the actor under the center point of the pinch until the pinch ends.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Scale | `float` | A PinchGesture is emitted when the user moves two fingers towards or away from each other.<br />     A pinch gesture will continue to be sent to the actor under the center point of the pinch until the pinch ends.<br /> |
| Speed | `float` | The speed at which the user is moving their fingers.<br />         This is the pixel movement per second.<br /> |
| ScreenCenterPoint | `Vector2` | The center point of the two points that caused the pinch gesture in screen coordinates. |
| LocalCenterPoint | `Vector2` | The center point of the two points that caused the pinch gesture in local actor coordinates. |

