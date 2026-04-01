# Position

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

Position is a three-dimensional vector.

## Properties

| Name | Type | Description |
|------|------|-------------|
| X | `float` | Position is a three-dimensional vector. |
| Y | `float` | The y component. |
| Z | `float` | The z component. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Vector3 | `implicit operator Vector3(Position position)` | Position is a three-dimensional vector. |
| Position | `implicit operator Position(Vector3 vec)` | Converts a Vector3 instance to a position instance. |
| Position | `implicit operator Position(Position2D position2d)` | Implicit type cast operator, Position2D to Position |
| Equals | `bool Equals(System.Object obj)` | Determines whether the specified object is equal to the current object. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Position. |
| EqualTo | `bool EqualTo(Position rhs)` | Compares if rhs is equal to. |
| NotEqualTo | `bool NotEqualTo(Position rhs)` | Compares if rhs is not equal to. |

