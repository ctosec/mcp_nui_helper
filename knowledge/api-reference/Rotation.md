# Rotation

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

The Rotation class represents a rotation of a UI Component.

## Properties

| Name | Type | Description |
|------|------|-------------|
| IDENTITY | `static Rotation` | The Rotation class represents a rotation of a UI Component. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Dot | `float Dot(Rotation q1, Rotation q2)` | The Rotation class represents a rotation of a UI Component. |
| Lerp | `Rotation Lerp(Rotation q1, Rotation q2, float t)` | The linear interpolation (using a straight line between the two rotations). |
| Slerp | `Rotation Slerp(Rotation q1, Rotation q2, float progress)` | The spherical linear interpolation (using the shortest arc of a great circle between the two rotations). |
| SlerpNoInvert | `Rotation SlerpNoInvert(Rotation q1, Rotation q2, float t)` | This version of slerp, used by squad, does not check for theta > 90. |
| Squad | `Rotation Squad(Rotation start, Rotation end, Rotation ctrl1, Rotation ctrl2, float t)` | The spherical cubic interpolation. |
| AngleBetween | `float AngleBetween(Rotation q1, Rotation q2)` | Returns the shortest angle between two rotations in radians. |
| Normalize | `Rotation Normalize(Rotation rotation)` | Returns a new rotation that is the normalized version of the specified rotation.         The original rotation remains unchanged. |
| Inverse | `Rotation Inverse(Rotation rotation)` | Returns a new rotation that is the inverse of the specified rotation.         The original rotation remains unchanged. |
| Rotate | `Vector3 Rotate(Vector3 vector)` | Rotate a vector3 with the Rotation.         For example, if this Rotation has (0, 1, 0) rotation axis and Math.PI radian angle and the input vector is (1, 0, 0),         this Rotation method returns (-1, 0, 0) that is rotated along Y axis amount of Math.PI. |
| Rotate | `Vector4 Rotate(Vector4 vector)` | Rotate a vector4 with the Rotation.         For example, if this Rotation has (0, 1, 0) rotation axis and Math.PI radian angle and the input vector is (1, 0, 0, 0),         this Rotation method returns (-1, 0, 0, 0) that is rotated along Y axis amount of Math.PI. |
| IsIdentity | `bool IsIdentity()` | Helper to check if this is an identity quaternion. |
| GetAxisAngle | `bool GetAxisAngle(Vector3 axis, Radian angle)` | Converts the quaternion to an axis or angle pair. |
| SetEulerAngle | `void SetEulerAngle(Radian pitch, Radian yaw, Radian roll)` | Set the quaternion from Euler angles. |
| GetEulerAngle | `void GetEulerAngle(Radian pitch, Radian yaw, Radian roll)` | Get the Euler angles from this quaternion. |
| Length | `float Length()` | Returns the length of the rotation. |
| LengthSquared | `float LengthSquared()` | Returns the squared length of the rotation. |
| Normalize | `void Normalize()` | Normalizes this to unit length. |
| Normalized | `Rotation Normalized()` | Normalized. |
| Conjugate | `void Conjugate()` | Conjugates this rotation.         This method computes the conjugate of the current rotation. |
| Invert | `void Invert()` | Inverts this rotation.         This method computes the invert of the current rotation. |
| Log | `Rotation Log()` | Performs the logarithm of a rotation. |
| Exp | `Rotation Exp()` | Performs an exponent. |

