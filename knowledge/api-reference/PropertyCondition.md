# PropertyCondition

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

A condition that can be evaluated on a Property Value

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetArgumentCount | `uint GetArgumentCount()` | A condition that can be evaluated on a Property Value |
| GetArgument | `float GetArgument(uint index)` | Retrieves the arguments that this condition uses |
| LessThan | `PropertyCondition LessThan(float arg)` | LessThan condition compares whether property is less than arg. |
| GreaterThan | `PropertyCondition GreaterThan(float arg)` | GreaterThan condition compares whether property is greater than arg. |
| Inside | `PropertyCondition Inside(float arg0, float arg1)` | Inside condition compares whether property is greater than arg0 and less than arg1. |
| Outside | `PropertyCondition Outside(float arg0, float arg1)` | Outside condition compares whether property is less than arg0 or greater than arg1 |
| Step | `PropertyCondition Step(float stepAmount, float initialValue)` | Detects when a property changes by stepAmount from initialValue, in both positive and negative directions. This will continue checking for multiples of stepAmount. |
| Step | `PropertyCondition Step(float stepAmount)` | Receives notifications as a property goes above/below the inputted values. Values must be ordered and can be either ascending or descending. |

