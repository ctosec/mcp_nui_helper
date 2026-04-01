# Vector2

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A two-dimensional vector.

## Properties

| Name | Type | Description |
|------|------|-------------|
| X | `float` | A two-dimensional vector. |
| Width | `float` | The width. |
| Y | `float` | The y component. |
| Height | `float` | The height. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Equals | `bool Equals(System.Object obj)` | A two-dimensional vector. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Vector2. |
| Length | `float Length()` | Returns the length of the vector. |
| LengthSquared | `float LengthSquared()` | Returns the length of the vector squared.<br />         This is more efficient than Length() for threshold         testing as it avoids the use of a square root.<br /> |
| Normalize | `void Normalize()` | Sets the vector to be the unit length, whilst maintaining its direction. |
| Clamp | `void Clamp(Vector2 min, Vector2 max)` | Clamps the vector between minimum and maximum vectors. |

