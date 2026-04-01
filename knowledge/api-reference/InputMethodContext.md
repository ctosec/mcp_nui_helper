# InputMethodContext

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Specifically manages the input method framework (IMF) that enables the virtual or hardware keyboards.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Activated | `event EventHandler<ActivatedEventArgs>` | Specifically manages the input method framework (IMF) that enables the virtual or hardware keyboards. |
| EventReceived | `event EventHandlerWithReturnType<object, EventReceivedEventArgs, CallbackData>` | This event handler is used to receive events related to the InputMethodContext. |
| StatusChanged | `event EventHandler<StatusChangedEventArgs>` | The StatusChanged event is triggered when the input method context status changes. |
| Resized | `event EventHandler<ResizedEventArgs>` | Event handler for the InputMethodContext resized event. |
| LanguageChanged | `event EventHandler<LanguageChangedEventArgs>` | This event is triggered when the language of the InputMethodContext changes. |
| KeyboardTypeChanged | `event EventHandler<KeyboardTypeChangedEventArgs>` | Event handler for InputMethodContext keyboard type changed. |
| ContentReceived | `event EventHandler<ContentReceivedEventArgs>` | InputMethodContext content received. |
| TextDirection | `enum` | Enumeration for the direction of the text. |
| EventType | `enum` | Left to right. |
| State | `enum` | No event. |
| KeyboardType | `enum` | Unknown state. |
| InputPanelLanguage | `enum` | Software keyboard (virtual keyboard) is default. |
| InputPanelAlign | `enum` | IME Language is automatically set depending on the system display. |
| TextPrediction | `bool` | The top-left corner. |
| FullScreenMode | `bool` | Gets or sets whether the input panel should be shown in fullscreen mode. |
| PredictiveString | `string` | Destroys the context of the IMF.<br/> |
| CursorOffset | `int` | The name of the event from the IMF. |
| NumberOfChars | `int` | The number of characters to delete from the cursorOffset. |
| CurrentText | `string` | You can override it to clean-up your own resources. |
| CursorPosition | `int` | The current cursor position. |
| Update | `bool` | The state if the cursor position needs to be updated. |
| PreeditResetRequired | `bool` | Flags if the pre-edit reset is required. |
| InputMethodContext | `InputMethodContext` | You can override it to clean-up your own resources. |
| InputMethodContext | `InputMethodContext` | InputMethodContext event receives event arguments. |
| EventData | `EventData` | The event data of IMF |
| StatusChanged | `bool` | InputMethodContext status changed event arguments. |
| Resized | `int` | InputMethodContext resized event arguments. |
| LanguageChanged | `int` | InputMethodContext language changed event arguments. |
| KeyboardType | `KeyboardType` | InputMethodContext keyboard type changed event arguments. |
| Content | `string` | InputMethodContext content received event arguments. |
| Description | `string` | The description of content |
| MimeType | `string` | The mime type of content, such as jpg, png, and so on |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Activated | `EventHandler<ActivatedEventArgs>` | Specifically manages the input method framework (IMF) that enables the virtual or hardware keyboards. |
| EventReceived | `EventHandlerWithReturnType<object, EventReceivedEventArgs, CallbackData>` | This event handler is used to receive events related to the InputMethodContext. |
| StatusChanged | `EventHandler<StatusChangedEventArgs>` | The StatusChanged event is triggered when the input method context status changes. |
| Resized | `EventHandler<ResizedEventArgs>` | Event handler for the InputMethodContext resized event. |
| LanguageChanged | `EventHandler<LanguageChangedEventArgs>` | This event is triggered when the language of the InputMethodContext changes. |
| KeyboardTypeChanged | `EventHandler<KeyboardTypeChangedEventArgs>` | Event handler for InputMethodContext keyboard type changed. |
| ContentReceived | `EventHandler<ContentReceivedEventArgs>` | InputMethodContext content received. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| DestroyContext | `void DestroyContext()` | Specifically manages the input method framework (IMF) that enables the virtual or hardware keyboards. |
| Activate | `void Activate()` | Activates the IMF.<br/>         It means that the text editing has started.<br/>         If the hardware keyboard is not connected, then it shows the virtual keyboard. |
| Deactivate | `void Deactivate()` | Deactivates the IMF.<br/>         It means that the text editing is complete. |
| RestoreAfterFocusLost | `bool RestoreAfterFocusLost()` | Gets the restoration status, which controls if the keyboard is restored after the focus is lost and then regained.<br/>         If true, then the keyboard will be restored (activated) after the focus is regained. |
| SetRestoreAfterFocusLost | `void SetRestoreAfterFocusLost(bool toggle)` | Sets the status whether the IMF has to restore the keyboard after losing focus. |
| Reset | `new void Reset()` | Sends a message reset to the pre-edit state or the IMF module. |
| NotifyCursorPosition | `void NotifyCursorPosition()` | Notifies the IMF context that the cursor position has changed, required for features such as auto-capitalization. |
| SetCursorPosition | `void SetCursorPosition(uint cursorPosition)` | Sets the cursor position stored in VirtualKeyboard, this is required by the IMF context. |
| GetCursorPosition | `uint GetCursorPosition()` | Gets the cursor position stored in VirtualKeyboard, this is required by the IMF context. |
| SetSurroundingText | `void SetSurroundingText(string text)` | A method to store the string required by the IMF, this is used to provide predictive word suggestions. |
| GetSurroundingText | `string GetSurroundingText()` | Gets the current text string set within the IMF manager, this is used to offer predictive suggestions. |
| NotifyTextInputMultiLine | `void NotifyTextInputMultiLine(bool multiLine)` | Notifies the IMF context that text input is set to multiline or not. |
| GetInputMethodArea | `Rectangle GetInputMethodArea()` | Returns the text direction of the current input language of the keyboard. |
| SetInputPanelUserData | `void SetInputPanelUserData(string text)` | Sets up the input panel specific data. |
| GetInputPanelUserData | `void GetInputPanelUserData(out string text)` | Gets the specific data of the current active input panel. |
| SetReturnKeyState | `void SetReturnKeyState(bool visible)` | Gets the state of the current active input panel. |
| AutoEnableInputPanel | `void AutoEnableInputPanel(bool enabled)` | Enables to show the input panel automatically when focused. |
| ShowInputPanel | `void ShowInputPanel()` | Shows the input panel. |
| HideInputPanel | `void HideInputPanel()` | Hides the input panel.         This method hides the on-screen keyboard or input panel associated with the current InputMethodContext instance. |
| GetInputPanelLocale | `string GetInputPanelLocale()` | Gets the keyboard type.<br/>         The default keyboard type is SoftwareKeyboard. |
| SetMIMEType | `void SetMIMEType(string mimeType)` | Sets the allowed MIME Type to deliver to the input panel. <br/>         For example, string mimeType = "text/plain,image/png,image/gif,application/pdf"; |
| SetInputPanelPosition | `void SetInputPanelPosition(uint x, uint y)` | Sets the x,y coordinates of the input panel. |
| SetInputPanelPositionAlign | `bool SetInputPanelPositionAlign(int x, int y, InputMethodContext.InputPanelAlign align)` | Sets the alignment and its x,y coordinates of the input panel.<br/>         Regardless of the rotation degree, the x, y values of the top-left corner on the screen are based on 0, 0.<br/>         When the IME size is changed, its size will change according to the set alignment. |
| SetInputPanelLanguage | `void SetInputPanelLanguage(InputMethodContext.InputPanelLanguage language)` | Sets the language of the input panel. |

