# Wheel

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

The wheel event structure is used to store a wheel rolling, it facilitates processing of the wheel rolling and passing to other libraries like Toolkit.<br />     There is a key modifier which relates to keys like Alt, Shift, and Ctrl functions are supplied to check if they have been pressed when the wheel is being rolled.<br />     We support a mouse device and there may be another custom device that support the wheel event. The device type is specified as \e type.<br />     The mouse wheel event can be sent to the specific actor but the custom wheel event will be sent to the window.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| WheelType | `enum` | The wheel event structure is used to store a wheel rolling, it facilitates processing of the wheel rolling and passing to other libraries like Toolkit.<br />     There is a key modifier which relates to keys like Alt, Shift, and Ctrl functions are supplied to check if they have been pressed when the wheel is being rolled.<br />     We support a mouse device and there may be another custom device that support the wheel event. The device type is specified as \e type.<br />     The mouse wheel event can be sent to the specific actor but the custom wheel event will be sent to the window.<br /> |
| Direction | `int` | Mouse wheel event. |
| Modifiers | `uint` | Modifier keys pressed during the event (such as Shift, Alt, and Ctrl). |
| Point | `Vector2` | The coordinates of the cursor relative to the top-left of the screen. |
| Z | `int` | The offset of rolling (positive value means roll down or clockwise, and negative value means roll up or counter-clockwise). |
| TimeStamp | `uint` | The time the wheel is being rolled. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| IsShiftModifier | `bool IsShiftModifier()` | The wheel event structure is used to store a wheel rolling, it facilitates processing of the wheel rolling and passing to other libraries like Toolkit.<br />     There is a key modifier which relates to keys like Alt, Shift, and Ctrl functions are supplied to check if they have been pressed when the wheel is being rolled.<br />     We support a mouse device and there may be another custom device that support the wheel event. The device type is specified as \e type.<br />     The mouse wheel event can be sent to the specific actor but the custom wheel event will be sent to the window.<br /> |
| IsCtrlModifier | `bool IsCtrlModifier()` | Checks to see if Ctrl (control) key modifier has been supplied. |
| IsAltModifier | `bool IsAltModifier()` | Checks to see if Alt key modifier has been supplied. |

