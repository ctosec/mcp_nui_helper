# Vector4

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A four-dimensional vector.

## Properties

| Name | Type | Description |
|------|------|-------------|
| X | `float` | A four-dimensional vector. |
| R | `float` | The red component. |
| S | `float` | The s component. |
| Y | `float` | The y component. |
| G | `float` | The green component. |
| T | `float` | The t component. |
| Z | `float` | The z component. |
| B | `float` | The blue component. |
| P | `float` | The p component. |
| W | `float` | The w component. |
| A | `float` | The alpha component. |
| Q | `float` | The q component. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Vector4 | `implicit operator Vector4(float value)` | A four-dimensional vector. |
| Equals | `bool Equals(System.Object obj)` | Determines whether the specified object is equal to the current object. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Vector4. |
| Length | `float Length()` | Returns the length of the vector. |
| Length3 | `float Length3()` | Returns the length of the xyz components of vector. |
| LengthSquared | `float LengthSquared()` | Returns the length of the vector squared.<br />         This is faster than using Length() when performing         threshold checks as it avoids use of the square root.<br /> |
| LengthSquared3 | `float LengthSquared3()` | Returns the length of the vector squared.<br />         This is faster than using Length() when performing         threshold checks as it avoids use of the square root.<br /> |
| Normalize | `void Normalize()` | Normalizes the vector.<br />         Sets the vector to unit length whilst maintaining its direction.<br /> |
| Normalize3 | `void Normalize3()` | Normalizes the vector of xyz components.<br />         Sets the vector to unit length whilst maintaining its direction.<br /> |
| Clamp | `void Clamp(Vector4 min, Vector4 max)` | Clamps the vector between minimum and maximum vectors. |
| Dot | `float Dot(Vector3 other)` | Calculates the dot product of this vector and a Vector3.         The W component of this vector is not used in the calculation. |
| Dot | `float Dot(Vector4 other)` | Calculates the dot product of this vector and another Vector4. |
| Dot3 | `float Dot3(Vector4 other)` | Calculates the 3D dot product of this vector and another Vector4 using only the x, y, and z components.         a.x*b.x + a.y*b.y + a.z*b.z (without w) |
| Cross | `Vector4 Cross(Vector4 other)` | Calculates the cross product of this vector and another Vector4.         The W component is treated as 0.0f for the calculation, and the resulting vector's W component will be 0.0f. |
| Distance | `float Distance(Vector4 a, Vector4 b)` | Calculates the Euclidean distance between two 4D vectors. |
| Distance3 | `float Distance3(Vector4 a, Vector4 b)` | Calculates the 3D Euclidean distance between the xyz components of two 4D vectors.         The W component is ignored. |
| Normalize | `Vector4 Normalize(Vector4 vector)` | Returns a new vector that is the normalized version of the specified 4D vector.         The original vector remains unchanged. |
| Normalize3 | `Vector4 Normalize3(Vector4 vector)` | Returns a new vector that is the normalized version of the xyz components of the specified 4D vector.         The original vector remains unchanged. The W component of the result is the same as the original vector's W component. |

