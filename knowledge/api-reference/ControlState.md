# ControlState

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `IEquatable`
**Category:** basic

Class for describing the states of control.     If a non-control view class would want to get the control state, please refer <see cref="View.EnableControlState"/>.

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Create | `ControlState Create(string name)` | Class for describing the states of control.     If a non-control view class would want to get the control state, please refer <see cref="View.EnableControlState"/>. |
| Create | `ControlState Create(params ControlState[] states)` | Create an instance of the <see cref="ControlState"/> with combined states. |
| Contains | `bool Contains(ControlState state)` | Determines whether a state contains a specified state. |
| ConvertFromInvariantString | `object ConvertFromInvariantString(string value)` | Compares whether the two ControlStates are same or not. |

