# AccessibilityRange

**Namespace:** `Tizen.NUI.BaseComponents`
**Category:** basic

AccessibilityRange is used to store data related with Text.

## Properties

| Name | Type | Description |
|------|------|-------------|
| AccessibilityRange | `class` | AccessibilityRange is used to store data related with Text. |
| StartOffset | `int` | Start position in stored text. |
| EndOffset | `int` | End position in stored text. |
| Content | `string` | Text content in stored text. |
| View | `partial class` | View is the base class for all views. |
| AccessibilitySuppressedEvents | `AccessibilityEvents` | Dictionary of accessibility attributes (key-value pairs of strings). |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AppendAccessibilityAttribute | `void AppendAccessibilityAttribute(string key, string value)` | AccessibilityRange is used to store data related with Text. |
| RemoveAccessibilityAttribute | `void RemoveAccessibilityAttribute(string key)` | Removes an accessibility attribute with a given key. |
| ClearAccessibilityHighlight | `bool ClearAccessibilityHighlight()` | Clears accessibility highlight. |
| GrabAccessibilityHighlight | `bool GrabAccessibilityHighlight()` | Grabs accessibility highlight. |
| AppendAccessibilityRelation | `void AppendAccessibilityRelation(View second, AccessibilityRelationType relation)` | Flag to check whether this view is highlighted or not. |
| RemoveAccessibilityRelation | `void RemoveAccessibilityRelation(View second, AccessibilityRelationType relation)` | Removes accessibility relation. |
| ClearAccessibilityRelations | `void ClearAccessibilityRelations()` | Removes all previously appended relations. |
| GetAccessibilityRelations | `Dictionary<AccessibilityRelationType, List<View>> GetAccessibilityRelations()` | Gets accessibility collection connected with the current object. |
| SetAccessibilityReadingInfoTypes | `void SetAccessibilityReadingInfoTypes(AccessibilityReadingInfoTypes type)` | Sets accessibility reading information. |
| GetAccessibilityReadingInfoTypes | `AccessibilityReadingInfoTypes GetAccessibilityReadingInfoTypes()` | Gets accessibility reading information. |
| NotifyAccessibilityStatesChange | `void NotifyAccessibilityStatesChange(AccessibilityStates states, AccessibilityStatesNotifyMode notifyMode)` | Notifies sending notifications about the current states to accessibility clients. |
| GetAccessibilityStates | `AccessibilityStates GetAccessibilityStates()` | Gets Accessibility States. |
| EmitAccessibilityEvent | `void EmitAccessibilityEvent(AccessibilityPropertyChangeEvent changeEvent)` | Emits accessibility property changed event. |
| EmitAccessibilityStateChangedEvent | `void EmitAccessibilityStateChangedEvent(AccessibilityState state, bool equal)` | Emits accessibility states changed event. |
| EmitTextInsertedEvent | `void EmitTextInsertedEvent(int cursorPosition, int length, string content)` | Emits accessibility text inserted event. |
| EmitTextDeletedEvent | `void EmitTextDeletedEvent(int cursorPosition, int length, string content)` | Emits accessibility text deleted event. |
| EmitTextCursorMovedEvent | `void EmitTextCursorMovedEvent(int cursorPosition)` | Emits accessibility text cursor moved event. |
| EmitScrollStartedEvent | `void EmitScrollStartedEvent()` | Emits accessibility scroll started event. |
| EmitScrollFinishedEvent | `void EmitScrollFinishedEvent()` | Emits accessibility scroll finished event. |
| RegisterDefaultLabel | `void RegisterDefaultLabel()` | Modifiable collection of suppressed AT-SPI events (D-Bus signals). |
| UnregisterDefaultLabel | `void UnregisterDefaultLabel()` | Unregisters component that has been registered previously as a source of an accessibility "default label".         The "Default label" is a text that could be read by screen-reader immediately         after the navigation context has changed (window activates, popup shows up, tab changes)         and before first UI element is highlighted. |

