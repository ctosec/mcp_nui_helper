# LongPressGestureDetector

**Namespace:** `Tizen.NUI`
**Inherits:** `GestureDetector`
**Category:** basic

This class emits a signals when a long press gesture occurs that meets the requirements set by the application.<br />     For any valid long press, two signals will be emitted:<br />     - First identifying the beginning (state = Started) i.e. when fingers held down for the required time.<br />     - Second identifying the ending (state = Finished) i.e. when fingers are released.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Detected | `event DaliEventHandler<object, DetectedEventArgs>` | This class emits a signals when a long press gesture occurs that meets the requirements set by the application.<br />     For any valid long press, two signals will be emitted:<br />     - First identifying the beginning (state = Started) i.e. when fingers held down for the required time.<br />     - Second identifying the ending (state = Finished) i.e. when fingers are released.<br /> |
| View | `View` | Sets the number of touches required.<br />         The number of touches corresponds to the number of fingers a user has on the screen. The default is 1.<br /> |
| LongPressGesture | `LongPressGesture` | The LongPressGesture. |
| Handled | `bool` | Gets or sets a value that indicates whether the event handler has completely handled the event or whether the system should continue its own processing. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Detected | `DaliEventHandler<object, DetectedEventArgs>` | This class emits a signals when a long press gesture occurs that meets the requirements set by the application.<br />     For any valid long press, two signals will be emitted:<br />     - First identifying the beginning (state = Started) i.e. when fingers held down for the required time.<br />     - Second identifying the ending (state = Finished) i.e. when fingers are released.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetTouchesRequired | `void SetTouchesRequired(uint touches)` | This class emits a signals when a long press gesture occurs that meets the requirements set by the application.<br />     For any valid long press, two signals will be emitted:<br />     - First identifying the beginning (state = Started) i.e. when fingers held down for the required time.<br />     - Second identifying the ending (state = Finished) i.e. when fingers are released.<br /> |
| SetTouchesRequired | `void SetTouchesRequired(uint minTouches, uint maxTouches)` | Sets the minimum and maximum touches required. |
| GetMinimumTouchesRequired | `uint GetMinimumTouchesRequired()` | Retrieves the minimum number of touches required. |
| GetMaximumTouchesRequired | `uint GetMaximumTouchesRequired()` | Retrieves the maximum number of touches required. |

