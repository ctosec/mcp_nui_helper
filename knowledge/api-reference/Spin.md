# Spin

**Namespace:** `Tizen.NUI`
**Inherits:** `CustomView`
**Category:** basic

Spins the CustomView class.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Value | `int` | Spins the CustomView class. |
| MinValue | `int` | Minimum value of the spin value. |
| MaxValue | `int` | Maximum value of the spin value. |
| Step | `int` | Increasing, decreasing step of the spin value when up or down keys are pressed. |
| WrappingEnabled | `bool` | Wrapping enabled status. |
| TextPointSize | `int` | Text point size of the spin value. |
| TextColor | `Color` | The color of the spin value. |
| MaxTextLength | `int` | Maximum text length of the spin value. |
| SpinText | `TextField` | Reference of TextField of the spin. |
| IndicatorImage | `string` | Show indicator image, for example, up or down arrow image. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| OnInitialize | `void OnInitialize()` | Spins the CustomView class. |
| GetNaturalSize | `Size2D GetNaturalSize()` | Overrides the method of GetNaturalSize() for the CustomView class.<br />         Returns the natural size of the actor.<br /> |
| TextFieldKeyInputFocusGained | `void TextFieldKeyInputFocusGained(object source, EventArgs e)` | An event handler is used when the TextField in the spin gets the key focus.<br />         Make sure when the current spin that takes input focus, also takes the keyboard focus.<br />         For example, when you tap the spin directly.<br /> |
| TextFieldKeyInputFocusLost | `void TextFieldKeyInputFocusLost(object source, EventArgs e)` | An event handler when the TextField in the spin looses it's key focus. |
| GetNextFocusableView | `View GetNextFocusableView(View currentFocusedView, View.FocusDirection direction, bool loopEnabled)` | Overrides the method of GetNextKeyboardFocusableView() for the CustomView class.<br />         Gets the next key focusable view in this view towards the given direction.<br />         A view needs to override this function in order to support two-dimensional key navigation.<br /> |

