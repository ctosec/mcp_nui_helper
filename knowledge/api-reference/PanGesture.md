# PanGesture

**Namespace:** `Tizen.NUI`
**Inherits:** `Gesture`
**Category:** basic

A PanGesture is emitted when the user moves one or more fingers in a particular direction.<br />     A pan gesture will end in the following ways:<br />     - User releases the primary finger (the first touch).<br />     - User has more fingers on the screen than the maximum specified.<br />     - User has less fingers on the screen than the minimum specified.<br />     - Cancelled by the system.<br />     A pan gesture will continue to be sent to the actor under than initial pan until it ends.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Velocity | `Vector2` | A PanGesture is emitted when the user moves one or more fingers in a particular direction.<br />     A pan gesture will end in the following ways:<br />     - User releases the primary finger (the first touch).<br />     - User has more fingers on the screen than the maximum specified.<br />     - User has less fingers on the screen than the minimum specified.<br />     - Cancelled by the system.<br />     A pan gesture will continue to be sent to the actor under than initial pan until it ends.<br /> |
| Displacement | `Vector2` | This is a Vector2 showing how much the user has panned (dragged) since the last pan gesture or,         if the gesture has just started, then the amount panned since the user touched the screen.<br />         A positive x value shows that the user is panning to the right, a negative x value means the opposite.<br />         A positive y value shows that the user is panning downwards, a negative y value means upwards.<br /> |
| Position | `Vector2` | The current touch position of the primary touch point in local actor coordinates. |
| ScreenVelocity | `Vector2` | The velocity at which the user is moving their fingers.<br />         This is represented as a Vector2 and is the pixel movement per millisecond.<br />         A positive x value shows that the user is panning to the right, a negative x value means the opposite.<br />         A positive y value shows that the user is panning downwards, a negative y values means upwards.<br />         This value represents the screen coordinates.<br /> |
| ScreenDisplacement | `Vector2` | This is a Vector2 showing how much the user has panned (dragged) since the last pan gesture or,         if the gesture has just started, then the amount panned since the user touched the screen.<br />         A positive x value shows that the user is panning to the right, a negative x value means the opposite.<br />         A positive y value shows that the user is panning downwards, a negative y value means upwards.<br />         This value is in screen coordinates.<br /> |
| ScreenPosition | `Vector2` | The current touch position of the primary touch point in screen coordinates. |
| NumberOfTouches | `uint` | The total number of fingers touching the screen in a pan gesture. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetSpeed | `float GetSpeed()` | A PanGesture is emitted when the user moves one or more fingers in a particular direction.<br />     A pan gesture will end in the following ways:<br />     - User releases the primary finger (the first touch).<br />     - User has more fingers on the screen than the maximum specified.<br />     - User has less fingers on the screen than the minimum specified.<br />     - Cancelled by the system.<br />     A pan gesture will continue to be sent to the actor under than initial pan until it ends.<br /> |
| GetDistance | `float GetDistance()` | Returns the distance the user has panned (dragged) since the last pan gesture or,         if the gesture has just started, then the distance moved since the user touched the screen.<br />         This is always a positive value.<br /> |
| GetScreenSpeed | `float GetScreenSpeed()` | Returns the speed at which the user is moving their fingers relative to screen coordinates.<br />         This is the pixel movement per millisecond.<br /> |
| GetScreenDistance | `float GetScreenDistance()` | Returns the distance the user has panned (dragged) since the last pan gesture in screen         coordinates or, if the gesture has just started, then the distance in screen coordinates moved         since the user touched the screen.<br />         This is always a positive value.<br /> |

