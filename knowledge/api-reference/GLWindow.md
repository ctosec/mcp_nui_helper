# GLWindow

**Namespace:** `Tizen.NUI`
**Category:** container

FocusChanged event.

## Properties

| Name | Type | Description |
|------|------|-------------|
| FocusChanged | `event EventHandler<FocusChangedEventArgs>` | FocusChanged event. |
| TouchEvent | `event EventHandler<TouchEventArgs>` | Emits the event when the screen is touched and when the touch ends.<br />         If there are multiple touch points then it is emitted when the first touch occurs and         when the last finger is lifted too.<br />         Even though incoming events are interrupted, the event occurs.<br /> |
| KeyEvent | `event EventHandler<KeyEventArgs>` | Emits the event when the key event is received. |
| Resized | `event EventHandler<ResizedEventArgs>` | Emits the event when the window resized. |
| FocusGained | `bool` | Disconnect all native signals |
| Touch | `Touch` | The touch event argument. |
| Key | `Key` | Key event arguments. |
| WindowSize | `Size2D` | Feeds a key event into the window.         This resized event arguments. |
| Visibility | `bool` | VisibilityChangedArgs |
| VisibilityChanged | `event EventHandler<VisibilityChangedEventArgs>` | EffectStart |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| FocusChanged | `EventHandler<FocusChangedEventArgs>` | FocusChanged event. |
| TouchEvent | `EventHandler<TouchEventArgs>` | Emits the event when the screen is touched and when the touch ends.<br />         If there are multiple touch points then it is emitted when the first touch occurs and         when the last finger is lifted too.<br />         Even though incoming events are interrupted, the event occurs.<br /> |
| KeyEvent | `EventHandler<KeyEventArgs>` | Emits the event when the key event is received. |
| Resized | `EventHandler<ResizedEventArgs>` | Emits the event when the window resized. |
| VisibilityChanged | `EventHandler<VisibilityChangedEventArgs>` | Disconnect all native signals |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| VisibiltyChangedSignalEmit | `void VisibiltyChangedSignalEmit(bool visibility)` | FocusChanged event. |

