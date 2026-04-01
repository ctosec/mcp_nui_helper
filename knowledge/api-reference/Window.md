# Window

**Namespace:** `Tizen.NUI`
**Category:** container

The window class is used internally for drawing.<br />     The window has an orientation and indicator properties.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Window | `partial class` | The window class is used internally for drawing.<br />     The window has an orientation and indicator properties.<br /> |
| FocusChanged | `event EventHandler<FocusChangedEventArgs>` | This event is triggered when the focus changes on the window. |
| TouchEvent | `event EventHandler<TouchEventArgs>` | Emits the event when the screen is touched and when the touch ends.<br />         If there are multiple touch points then it is emitted when the first touch occurs and         when the last finger is lifted too.<br />         Even though incoming events are interrupted, the event occurs.<br /> |
| InterceptTouchEvent | `event ReturnTypeEventHandler<object, TouchEventArgs, bool>` | An event for the touched signal which can be used to subscribe or unsubscribe the event handler provided by the user.<br />         The touched signal is emitted when the touch input is received.<br />         This can receive touch events before child. <br />         If it returns false, the child can receive the touch event. If it returns true, the touch event is intercepted. So child cannot receive touch event.<br /> |
| WheelEvent | `event EventHandler<WheelEventArgs>` | Emits the event when the wheel event is received. |
| InterceptWheelEvent | `event ReturnTypeEventHandler<object, WheelEventArgs, bool>` | An event for the wheel event signal which can be used to subscribe or unsubscribe the event handler provided by the user.<br />         The wheel event signal is emitted when the wheel input is received.<br />         This can receive wheel events before child. <br />         If it returns false, the child can receive the wheel event. If it returns true, the wheel event is intercepted. So child cannot receive wheel event.<br /> |
| KeyEvent | `event EventHandler<KeyEventArgs>` | Emits the event when the key event is received. |
| InterceptKeyEvent | `event ReturnTypeEventHandler<object, KeyEventArgs, bool>` | Intercepts KeyEvents in the window before dispatching KeyEvents to the child.<br />         If it returns true(consumed), no KeyEvent is delivered to the child. |
| Resized | `event EventHandler<ResizedEventArgs>` | Emits the event when window is resized by user or the display server.<br /> |
| HoverEvent | `event EventHandler<HoverEventArgs>` | An event for the hovered signal which can be used to subscribe or unsubscribe the event handler provided by the user.<br />         The hovered signal is emitted when the hover input is received.<br /> |
| WindowFocusChanged | `event EventHandler<FocusChangedEventArgs>` | Do not use this, that will be deprecated. Use 'FocusChanged' event instead. |
| TransitionEffect | `event EventHandler<TransitionEffectEventArgs>` | EffectStart |
| Moved | `event EventHandler<WindowMovedEventArgs>` | Emits the event when window is moved by user or the display server.<br /> |
| OrientationChanged | `event EventHandler<WindowOrientationChangedEventArgs>` | Window Orientation Changed event         This event is for per windows |
| KeyboardRepeatSettingsChanged | `event EventHandler` | Keyboard Repeat Settings Changed |
| MouseInOutEvent | `event EventHandler<MouseInOutEventArgs>` | MouseInOutEvent event. |
| MoveCompleted | `event EventHandler<WindowMoveCompletedEventArgs>` | Emits the event when window has been moved by the display server.<br />         To make the window move by display server, RequestMoveToServer() should be called.<br />         After the moving job is completed, this signal will be emitted.<br /> |
| ResizeCompleted | `event EventHandler<WindowResizeCompletedEventArgs>` | Emits the event when window has been resized by the display server.<br />         To make the window resize by display server, RequestResizeToServer() should be called.<br />         After the resizing job is completed, this signal will be emitted.<br /> |
| MouseRelativeEvent | `event EventHandler<MouseRelativeEventArgs>` | Emits the event when relative mouse movement occurs in the window.<br /> |
| PointerConstraintsEvent | `event EventHandler<PointerConstraintsEventArgs>` | Emits the event when pointer is locked/unlocked<br /> |
| DispatchTouchMotion | `bool` | Gets or sets the status of whether motion event of Touch can be dispatched.         If a Window's DispatchTouchMotion is set to false, then it's can not will receive motion event of TouchEvent. |
| DispatchHoverMotion | `bool` | Gets or sets the status of whether motion event of Hover can be dispatched.         If a Window's DispatchHoverMotion is set to false, then it's can not will receive motion event of HoverEvent. |
| FocusGained | `bool` | System-level key event interception that occurs before the user-level InterceptKeyEvent.<br />         This event is intended for internal framework use and provides the highest priority for intercepting key events.<br />         When this event returns true (consumed), it prevents the key event from being dispatched to both InterceptKeyEvent and child views.<br />         Multiple handlers can be registered, and their return values are OR'd together.<br />         This event is marked as internal and should not be used by application code. |
| Touch | `Touch` | The touch event argument. |
| Wheel | `Wheel` | The Wheel event arguments. |
| Key | `Key` | The Key event arguments. |
| WindowSize | `Size2D` | Feeds a key event into the window.         This resized event arguments. |
| MouseInOut | `MouseInOut` | The MouseInOut evnet arguments. |
| MouseRelative | `MouseRelative` | The MouseRelative evnet arguments. |
| PointerConstraints | `PointerConstraints` | The PointerConstraints evnet arguments. |
| Hover | `Hover` | Event arguments that passed via the hover signal. |
| FocusGained | `bool` | Do not use this, that will be deprecated. |
| IsInvalid | `override bool` | Contains and encapsulates Native Window handle. |
| State | `EffectState` | Release handle itself. |
| Type | `EffectType` | Type |
| Visibility | `bool` | VisibilityChangedArgs |
| VisibilityChanged | `event EventHandler<VisibilityChangedEventArgs>` | EffectStart |
| AuxiliaryMessage | `event EventHandler<AuxiliaryMessageEventArgs>` | VisibiltyChangedSignalEmit |
| InsetsPartType | `enum` | The type of insets part. |
| InsetsPartState | `enum` | The state of insets part. |
| PartType | `InsetsPartType` | InsetsChangedEventArgs |
| PartState | `InsetsPartState` | The state of insets part.             e.g. Invisible or Visible |
| Insets | `Extents` | The extents value of window insets |
| InsetsChanged | `event EventHandler<InsetsChangedEventArgs>` | Emits the event when the window insets changes by status bar, virtual keyboard, or clipboard appears and disappears. |
| AccessibilityHighlight | `bool` | AccessibilityHighlightArgs |
| AccessibilityHighlight | `event EventHandler<AccessibilityHighlightEventArgs>` | Emits the event when the window needs to grab or clear highlight. |
| WindowPosition | `Position2D` | Move event is sent when window is resized by user or the display server. |
| WindowCompletedPosition | `Position2D` | OrientationChangedArgs |
| WindowCompletedSize | `Size2D` | Resize Completed event is sent when window has been resized the display server.     It is triggered by calling RequestResizeToServer(). |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| FocusChanged | `EventHandler<FocusChangedEventArgs>` | The window class is used internally for drawing.<br />     The window has an orientation and indicator properties.<br /> |
| TouchEvent | `EventHandler<TouchEventArgs>` | Emits the event when the screen is touched and when the touch ends.<br />         If there are multiple touch points then it is emitted when the first touch occurs and         when the last finger is lifted too.<br />         Even though incoming events are interrupted, the event occurs.<br /> |
| InterceptTouchEvent | `ReturnTypeEventHandler<object, TouchEventArgs, bool>` | An event for the touched signal which can be used to subscribe or unsubscribe the event handler provided by the user.<br />         The touched signal is emitted when the touch input is received.<br />         This can receive touch events before child. <br />         If it returns false, the child can receive the touch event. If it returns true, the touch event is intercepted. So child cannot receive touch event.<br /> |
| WheelEvent | `EventHandler<WheelEventArgs>` | Emits the event when the wheel event is received. |
| InterceptWheelEvent | `ReturnTypeEventHandler<object, WheelEventArgs, bool>` | An event for the wheel event signal which can be used to subscribe or unsubscribe the event handler provided by the user.<br />         The wheel event signal is emitted when the wheel input is received.<br />         This can receive wheel events before child. <br />         If it returns false, the child can receive the wheel event. If it returns true, the wheel event is intercepted. So child cannot receive wheel event.<br /> |
| KeyEvent | `EventHandler<KeyEventArgs>` | Emits the event when the key event is received. |
| InterceptKeyEvent | `ReturnTypeEventHandler<object, KeyEventArgs, bool>` | Intercepts KeyEvents in the window before dispatching KeyEvents to the child.<br />         If it returns true(consumed), no KeyEvent is delivered to the child. |
| Resized | `EventHandler<ResizedEventArgs>` | Emits the event when window is resized by user or the display server.<br /> |
| HoverEvent | `EventHandler<HoverEventArgs>` | An event for the hovered signal which can be used to subscribe or unsubscribe the event handler provided by the user.<br />         The hovered signal is emitted when the hover input is received.<br /> |
| WindowFocusChanged | `EventHandler<FocusChangedEventArgs>` | Do not use this, that will be deprecated. Use 'FocusChanged' event instead. |
| TransitionEffect | `EventHandler<TransitionEffectEventArgs>` | EffectStart |
| Moved | `EventHandler<WindowMovedEventArgs>` | Emits the event when window is moved by user or the display server.<br /> |
| OrientationChanged | `EventHandler<WindowOrientationChangedEventArgs>` | Window Orientation Changed event         This event is for per windows |
| KeyboardRepeatSettingsChanged | `EventHandler` | Keyboard Repeat Settings Changed |
| MouseInOutEvent | `EventHandler<MouseInOutEventArgs>` | MouseInOutEvent event. |
| MoveCompleted | `EventHandler<WindowMoveCompletedEventArgs>` | Emits the event when window has been moved by the display server.<br />         To make the window move by display server, RequestMoveToServer() should be called.<br />         After the moving job is completed, this signal will be emitted.<br /> |
| ResizeCompleted | `EventHandler<WindowResizeCompletedEventArgs>` | Emits the event when window has been resized by the display server.<br />         To make the window resize by display server, RequestResizeToServer() should be called.<br />         After the resizing job is completed, this signal will be emitted.<br /> |
| MouseRelativeEvent | `EventHandler<MouseRelativeEventArgs>` | Emits the event when relative mouse movement occurs in the window.<br /> |
| PointerConstraintsEvent | `EventHandler<PointerConstraintsEventArgs>` | Emits the event when pointer is locked/unlocked<br /> |
| VisibilityChanged | `EventHandler<VisibilityChangedEventArgs>` | Gets or sets the status of whether motion event of Touch can be dispatched.         If a Window's DispatchTouchMotion is set to false, then it's can not will receive motion event of TouchEvent. |
| AuxiliaryMessage | `EventHandler<AuxiliaryMessageEventArgs>` | VisibiltyChangedSignalEmit |
| InsetsChanged | `EventHandler<InsetsChangedEventArgs>` | The type of insets part. |
| AccessibilityHighlight | `EventHandler<AccessibilityHighlightEventArgs>` | AccessibilityHighlightArgs |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| VisibiltyChangedSignalEmit | `void VisibiltyChangedSignalEmit(bool visibility)` | The window class is used internally for drawing.<br />     The window has an orientation and indicator properties.<br /> |

