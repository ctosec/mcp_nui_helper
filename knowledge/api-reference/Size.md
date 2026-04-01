# Size

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A three-dimensional size.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Width | `float` | A three-dimensional size. |
| Height | `float` | The Height property for the height component of size. |
| Depth | `float` | The Depth property for the depth component of size. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Equals | `bool Equals(System.Object obj)` | A three-dimensional size. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Size. |
| EqualTo | `bool EqualTo(Size rhs)` | Checks equality.<br />         Utilizes appropriate machine epsilon values.<br /> |
| NotEqualTo | `bool NotEqualTo(Size rhs)` | Checks inequality.<br />         Utilizes appropriate machine epsilon values.<br /> |
| Vector3 | `implicit operator Vector3(Size size)` | The type cast operator, Size to Vector3. |
| Size | `implicit operator Size(Vector3 vec)` | The type cast operator, Vector3 to Size type. |
| Size | `implicit operator Size(Size2D size2d)` | Implicit type cast operator, Size2D to Size |

