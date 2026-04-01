# Position2D

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

Position2D is a two-dimensional vector.

## Properties

| Name | Type | Description |
|------|------|-------------|
| X | `int` | Position2D is a two-dimensional vector. |
| Y | `int` | The y component. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| ConvertFromString | `Position2D ConvertFromString(System.String value)` | Position2D is a two-dimensional vector. |
| Position2D | `implicit operator Position2D(System.String value)` | Constructor a Position2D from a string. |
| Equals | `bool Equals(System.Object obj)` | The addition operator. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Position2D. |
| EqualTo | `bool EqualTo(Position2D rhs)` | Compares if the rhs is equal to. |
| NotEqualTo | `bool NotEqualTo(Position2D rhs)` | Compares if the rhs is not equal to. |
| Vector2 | `implicit operator Vector2(Position2D position2d)` | Converts a Position2D instance to a Vector2 instance. |
| Position2D | `implicit operator Position2D(Vector2 vec)` | Converts a Vector2 instance to a Position2D instance. |
| Position2D | `implicit operator Position2D(Position position)` | Implicit type cast operator, Position to Position2D |

