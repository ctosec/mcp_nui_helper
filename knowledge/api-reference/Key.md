# Key

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

The key structure is used to store a key press.

## Properties

| Name | Type | Description |
|------|------|-------------|
| StateType | `enum` | The key structure is used to store a key press. |
| DeviceName | `string` | Key Down. |
| KeyPressedName | `string` | Gets or sets the name given to the key pressed. |
| LogicalKey | `string` | Get the logical key string. (eg. shift + 1 == "exclamation") |
| KeyPressed | `string` | Get the actual string returned that should be used for input editors. |
| KeyString | `string` | Get the actual string returned that should be used for input editors. |
| KeyCode | `int` | Keycode for the key pressed. |
| KeyModifier | `int` | Special keys like Shift, Alt, and Ctrl which modify the next key pressed. |
| Time | `uint` | The time (in ms) that the key event occurred. |
| DeviceClass | `DeviceClassType` | Gests or sets the state of the key event. |
| DeviceSubClass | `DeviceSubClassType` | Get the device subclass the key event originated from. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| IsShiftModifier | `bool IsShiftModifier()` | The key structure is used to store a key press. |
| IsCtrlModifier | `bool IsCtrlModifier()` | Checks to see if Ctrl (control) key modifier has been supplied. |
| IsAltModifier | `bool IsAltModifier()` | Checks to see if Alt key modifier has been supplied. |

