# RelativeVector4

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

RelativeVector4 is a four-dimensional vector.     All values (x, y, and z) should be between [0, 1].

## Properties

| Name | Type | Description |
|------|------|-------------|
| X | `float` | RelativeVector4 is a four-dimensional vector.     All values (x, y, and z) should be between [0, 1]. |
| Y | `float` | The y component. |
| Z | `float` | The z component. |
| W | `float` | The w component. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Vector4 | `implicit operator Vector4(RelativeVector4 relativeVector4)` | RelativeVector4 is a four-dimensional vector.     All values (x, y, and z) should be between [0, 1]. |
| RelativeVector4 | `implicit operator RelativeVector4(Vector4 vec)` | Implicitly converts a Vector4 instance to a RelativeVector4 instance. |
| Equals | `bool Equals(System.Object obj)` | The const array subscript operator overload. Should be 0, 1 3 or 3. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this RelativeVector4. |
| EqualTo | `bool EqualTo(RelativeVector4 rhs)` | Compares if the rhs is equal to. |
| NotEqualTo | `bool NotEqualTo(RelativeVector4 rhs)` | Compares if the rhs is not equal to. |

