# PinchGestureDetector

**Namespace:** `Tizen.NUI`
**Inherits:** `GestureDetector`
**Category:** basic

It tries to detect when the user moves two touch points towards or away from each other.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Detected | `event DaliEventHandler<object, DetectedEventArgs>` | It tries to detect when the user moves two touch points towards or away from each other. |
| View | `View` | override it to clean-up your own resources. |
| PinchGesture | `PinchGesture` | The PinchGesture. |
| Handled | `bool` | Gets or sets a value that indicates whether the event handler has completely handled the event or whether the system should continue its own processing. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Detected | `DaliEventHandler<object, DetectedEventArgs>` | It tries to detect when the user moves two touch points towards or away from each other. |

