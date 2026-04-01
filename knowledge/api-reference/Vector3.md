# Vector3

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A three-dimensional vector.

## Properties

| Name | Type | Description |
|------|------|-------------|
| X | `float` | A three-dimensional vector. |
| Width | `float` | The width component. |
| R | `float` | The red component. |
| Y | `float` | The y component. |
| Height | `float` | The height component. |
| G | `float` | The green component. |
| Z | `float` | The z component. |
| Depth | `float` | The depth component. |
| B | `float` | The blue component. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Equals | `bool Equals(System.Object obj)` | A three-dimensional vector. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Vector3. |
| Length | `float Length()` | Returns the length of the vector. |
| LengthSquared | `float LengthSquared()` | Returns the length of the vector squared.<br />         This is more efficient than Length() for threshold         testing as it avoids the use of a square root.<br /> |
| Normalize | `void Normalize()` | Sets the vector to be unit length, whilst maintaining its direction. |
| Clamp | `void Clamp(Vector3 min, Vector3 max)` | Clamps the vector between minimum and maximum vectors. |
| GetVectorXY | `Vector2 GetVectorXY()` | Returns the x and y components (or width and height, or r and g) as a Vector2. |
| GetVectorYZ | `Vector2 GetVectorYZ()` | Returns the y and z components (or height and depth, or g and b) as a Vector2. |
| Dot | `float Dot(Vector3 other)` | Calculates the dot product of this vector and another vector. |
| Cross | `Vector3 Cross(Vector3 other)` | Calculates the cross product of this vector and another vector.         The result is a vector that is perpendicular to the two input vectors. |
| Distance | `float Distance(Vector3 a, Vector3 b)` | Calculates the Euclidean distance between two vectors. |
| Normalize | `Vector3 Normalize(Vector3 vector)` | Returns a new vector that is the normalized version of the specified vector.         The original vector remains unchanged. |
| Reflect | `Vector3 Reflect(Vector3 incident, Vector3 normal)` | Calculates the reflection vector given an incident vector and a surface normal.         The normal vector should be normalized. |

