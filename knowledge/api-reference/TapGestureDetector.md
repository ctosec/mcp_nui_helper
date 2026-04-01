# TapGestureDetector

**Namespace:** `Tizen.NUI`
**Inherits:** `GestureDetector`
**Category:** basic

This class emits a signal when a tap gesture occurs that meets the requirements set by the application.<br />     A TapGesture is a discrete gesture, which means it does not have any state information attached.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Detected | `event DaliEventHandler<object, DetectedEventArgs>` | This class emits a signal when a tap gesture occurs that meets the requirements set by the application.<br />     A TapGesture is a discrete gesture, which means it does not have any state information attached.<br /> |
| View | `View` | Sets the minimum number of taps required. The tap count is the number of times a user should "tap" the screen.<br />         The default is 1.<br /> |
| TapGesture | `TapGesture` | The TapGesture. |
| Handled | `bool` | Gets or sets a value that indicates whether the event handler has completely handled the event or whether the system should continue its own processing. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Detected | `DaliEventHandler<object, DetectedEventArgs>` | This class emits a signal when a tap gesture occurs that meets the requirements set by the application.<br />     A TapGesture is a discrete gesture, which means it does not have any state information attached.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetMinimumTapsRequired | `void SetMinimumTapsRequired(uint minimumTaps)` | This class emits a signal when a tap gesture occurs that meets the requirements set by the application.<br />     A TapGesture is a discrete gesture, which means it does not have any state information attached.<br /> |
| SetMaximumTapsRequired | `void SetMaximumTapsRequired(uint maximumTaps)` | Sets the maximum number of taps required. The tap count is the number of times a user should "tap" the screen.<br />         The default is 1.<br /> |
| GetMinimumTapsRequired | `uint GetMinimumTapsRequired()` | Retrieves the minimum number of taps required. |
| GetMaximumTapsRequired | `uint GetMaximumTapsRequired()` | Retrieves the maximum number of taps required. |

