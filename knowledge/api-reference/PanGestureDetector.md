# PanGestureDetector

**Namespace:** `Tizen.NUI`
**Inherits:** `GestureDetector`
**Category:** basic

This class emits a signals when a pan gesture occurs.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Detected | `event DaliEventHandler<object, DetectedEventArgs>` | This class emits a signals when a pan gesture occurs.<br /> |
| DirectionLeft | `static Radian` | For a left pan (-PI Radians). |
| DirectionRight | `static Radian` | For a right pan (0 Radians). |
| DirectionUp | `static Radian` | For an up pan (-0.5 * PI Radians). |
| DirectionDown | `static Radian` | For a down pan (0.5 * PI Radians). |
| DirectionHorizontal | `static Radian` | For a left and right pan (PI Radians). Useful for AddDirection(). |
| DirectionVertical | `static Radian` | For an up and down pan (-0.5 * PI Radians). Useful for AddDirection(). |
| DefaultThreshold | `static Radian` | The default threshold is PI * 0.25 radians (or 45 degrees). |
| ScreenPosition | `Vector2` | Retrieves the screen position. |
| ScreenDisplacement | `Vector2` | Retrieves the screen displacement. |
| ScreenVelocity | `Vector2` | Retrieves the screen velocity. |
| LocalPosition | `Vector2` | Retrieves the local position. |
| LocalDisplacement | `Vector2` | Retrieves the local displacement |
| LocalVelocity | `Vector2` | Retrieves the local velocity. |
| Panning | `bool` | Retrieves the panning flag. |
| View | `View` | This is the minimum number of touches required for the pan gesture to be detected. |
| PanGesture | `PanGesture` | The PanGesture. |
| Handled | `bool` | Gets or sets a value that indicates whether the event handler has completely handled the event or whether the system should continue its own processing. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Detected | `DaliEventHandler<object, DetectedEventArgs>` | This class emits a signals when a pan gesture occurs.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetMinimumTouchesRequired | `void SetMinimumTouchesRequired(uint minimum)` | This class emits a signals when a pan gesture occurs.<br /> |
| SetMaximumTouchesRequired | `void SetMaximumTouchesRequired(uint maximum)` | This is the maximum number of touches required for the pan gesture to be detected. |
| SetMaximumMotionEventAge | `void SetMaximumMotionEventAge(uint maximumAgeMilliSecond)` | Set a maximum duration of motion event that is able to live on the pan gesture event queue.         If duration exceed it, the motion event is discarded. |
| GetMinimumTouchesRequired | `uint GetMinimumTouchesRequired()` | Retrieves the minimum number of touches required for the pan gesture to be detected. |
| GetMaximumTouchesRequired | `uint GetMaximumTouchesRequired()` | Retrieves the maximum number of touches required for the pan gesture to be detected. |
| GetMaximumMotionEventAge | `uint GetMaximumMotionEventAge()` | Retrieves the maximum age for the pan gesture motion as milliseconds. |
| AddAngle | `void AddAngle(Radian angle, Radian threshold)` | The pan gesture is only emitted if the pan occurs in the direction specified by this method with a +/- threshold allowance.<br />         If an angle of 0.0 degrees is specified and the threshold is 45 degrees then the acceptable direction range is from -45 to 45 degrees.<br />         The angle added using this API is only checked when the gesture first starts, after that, this detector will emit the gesture regardless of what angle the pan is moving.         The user can add as many angles as they require. |
| AddAngle | `void AddAngle(Radian angle)` | The pan gesture is only emitted if the pan occurs in the direction specified by this method with a +/- threshold allowance. The default threshold (PI * 0.25) is used.<br />         The angle added using this API is only checked when the gesture first starts, after that, this detector will emit the gesture regardless of what angle the pan is moving.<br />         The user can add as many angles as they require.<br /> |
| AddDirection | `void AddDirection(Radian direction, Radian threshold)` | A helper method for adding bi-directional angles where the pan should take place.<br />         In other words, if 0 is requested, then PI will also be added so that we have both left and right scrolling.<br /> |
| AddDirection | `void AddDirection(Radian direction)` | A helper method for adding bi-directional angles where the pan should take place.         In other words, if 0 is requested, then PI will also be added so that we have both left and right scrolling.<br />         The default threshold (PI * 0.25) is used. |
| GetAngleCount | `uint GetAngleCount()` | Returns the count of angles that this pan gesture detector emits a signal. |
| ClearAngles | `void ClearAngles()` | Clears any directional angles that are used by the gesture detector. |
| RemoveAngle | `void RemoveAngle(Radian angle)` | Removes the angle specified from the container. This will only remove the first instance of the angle found from the container. |
| RemoveDirection | `void RemoveDirection(Radian direction)` | Removes the two angles that make up the direction from the container. |
| SetPanGestureProperties | `void SetPanGestureProperties(PanGesture pan)` | Allows setting of the pan properties that are returned in constraints. |

