# Size2D

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A two-dimensional size.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Width | `int` | A two-dimensional size. |
| Height | `int` | The property for the height component of a size. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Vector2 | `implicit operator Vector2(Size2D size)` | A two-dimensional size. |
| Size2D | `implicit operator Size2D(Vector2 vector2)` | The type cast operator, Vector2 to Size2D type. |
| Size2D | `implicit operator Size2D(Size size)` | Implicit type cast operator, Size to Size2D |
| Equals | `bool Equals(System.Object obj)` | The array subscript operator. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Size2D. |
| EqualTo | `bool EqualTo(Size2D rhs)` | Checks equality.<br />         Utilizes appropriate machine epsilon values.<br /> |
| NotEqualTo | `bool NotEqualTo(Size2D rhs)` | Checks inequality.<br />         Utilizes appropriate machine epsilon values.<br /> |

