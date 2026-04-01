# RelativeVector3

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

RelativeVector3 is a three-dimensional vector.     All values (x, y, z and w) should be between [0, 1].

## Properties

| Name | Type | Description |
|------|------|-------------|
| X | `float` | RelativeVector3 is a three-dimensional vector.     All values (x, y, z and w) should be between [0, 1]. |
| Y | `float` | The y component. |
| Z | `float` | The z component. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Vector3 | `implicit operator Vector3(RelativeVector3 relativeVector3)` | RelativeVector3 is a three-dimensional vector.     All values (x, y, z and w) should be between [0, 1]. |
| RelativeVector3 | `implicit operator RelativeVector3(Vector3 vec)` | Implicitly converts a Vector3 instance to a RelativeVector3 instance. |
| Equals | `bool Equals(System.Object obj)` | The const array subscript operator overload. Should be 0, 1 or 2. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this RelativeVector3. |
| EqualTo | `bool EqualTo(RelativeVector3 rhs)` | Compares if the rhs is equal to. |
| NotEqualTo | `bool NotEqualTo(RelativeVector3 rhs)` | Compares if the rhs is not equal to. |

