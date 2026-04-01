# Matrix

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

The Matrix class represents transformations and projections. <br/>     The matrix is stored as a flat array and is Column Major, i.e. the storage order is as follows (numbers represent indices of array): <br/>     <code>     0   4   8   12     1   5   9   13     2   6   10  14     3   7   11  15     </code>     Each axis is contiguous in memory, so the x-axis corresponds to elements 0, 1, 2 and 3, the y-axis corresponds to     elements 4, 5, 6, 7, the z-axis corresponds to elements 12, 13, 14 and 15, and the translation vector corresponds to     elements 12, 13 and 14.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Identity | `static Matrix` | The Matrix class represents transformations and projections. <br/>     The matrix is stored as a flat array and is Column Major, i.e. the storage order is as follows (numbers represent indices of array): <br/>     <code>     0   4   8   12     1   5   9   13     2   6   10  14     3   7   11  15     </code>     Each axis is contiguous in memory, so the x-axis corresponds to elements 0, 1, 2 and 3, the y-axis corresponds to     elements 4, 5, 6, 7, the z-axis corresponds to elements 12, 13, 14 and 15, and the translation vector corresponds to     elements 12, 13 and 14. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetIdentity | `void SetIdentity()` | The Matrix class represents transformations and projections. <br/>     The matrix is stored as a flat array and is Column Major, i.e. the storage order is as follows (numbers represent indices of array): <br/>     <code>     0   4   8   12     1   5   9   13     2   6   10  14     3   7   11  15     </code>     Each axis is contiguous in memory, so the x-axis corresponds to elements 0, 1, 2 and 3, the y-axis corresponds to     elements 4, 5, 6, 7, the z-axis corresponds to elements 12, 13, 14 and 15, and the translation vector corresponds to     elements 12, 13 and 14. |
| SetIdentityAndScale | `void SetIdentityAndScale(Vector3 scale)` | Make matrix as identity and multiply scale. |
| InvertTransform | `void InvertTransform(Matrix result)` | Inverts a transform Matrix.<br/>         Any Matrix representing only a rotation and/or translation         can be inverted using this function. It is faster and more accurate then using Invert(). |
| Invert | `bool Invert()` | Generic brute force matrix invert. |
| Transpose | `void Transpose()` | Swaps the rows to columns. |
| GetXAxis | `Vector3 GetXAxis()` | Returns the X Axis from a Transform matrix. |
| GetYAxis | `Vector3 GetYAxis()` | Returns the Y Axis from a Transform matrix. |
| GetZAxis | `Vector3 GetZAxis()` | Returns the Z Axis from a Transform matrix. |
| SetXAxis | `void SetXAxis(Vector3 axis)` | Sets the X Axis to a Transform matrix.<br/>         This assumes the matrix is a transform matrix. |
| SetYAxis | `void SetYAxis(Vector3 axis)` | Sets the Y Axis to a Transform matrix.<br/>         This assumes the matrix is a transform matrix. |
| SetZAxis | `void SetZAxis(Vector3 axis)` | Sets the Z Axis to a Transform matrix.<br/>         This assumes the matrix is a transform matrix. |
| GetTranslation | `Vector4 GetTranslation()` | Gets the translate from a Transform matrix.<br/>         This assumes the matrix is a transform matrix. |
| GetTranslation3 | `Vector3 GetTranslation3()` | Gets the x, y, and z components of translate from a Transform matrix.<br/>         This assumes the matrix is a transform matrix. |
| SetTranslation | `void SetTranslation(Vector4 translation)` | Sets the translate to a Transform matrix.<br/>         This assumes the matrix is a transform matrix. |
| SetTranslation | `void SetTranslation(Vector3 translation)` | Sets the translate to a Transform matrix.<br/>         This assumes the matrix is a transform matrix. |
| OrthoNormalize | `void OrthoNormalize()` | Makes the axes of the matrix orthogonal to each other and of unit length.<br/>         This function is used to correct floating point errors which would otherwise accumulate         as operations are applied to the matrix.<br/>         This assumes the matrix is a transform matrix. |
| Multiply | `void Multiply(Matrix result, Matrix lhs, Matrix rhs)` | Function to multiply two matrices and store the result onto third.<br/>         Use this method in time critical path as it does not require temporaries.<br/> |
| Multiply | `void Multiply(Matrix result, Matrix lhs, Rotation rhs)` | Function to multiply a matrix and rotataion and store the result onto third.<br/>         Use this method in time critical path as it does not require temporaries.<br/> |
| Multiply | `Vector4 Multiply(Vector4 rhs)` | Multiply the Matrix and Vector4. |
| Multiply | `Matrix Multiply(Matrix rhs)` | Multiply the Matrix and Matrix. |
| MultiplyAssign | `void MultiplyAssign(Matrix rhs)` | Multiply the Matrix and Matrix. Result will be stored into this Matrix. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Matrix. |
| EqualTo | `bool EqualTo(Matrix rhs)` | Compares if rhs is equal to. |
| NotEqualTo | `bool NotEqualTo(Matrix rhs)` | Compares if rhs is not equal to. |
| SetTransformComponents | `void SetTransformComponents(Vector3 scale, Rotation rotation, Vector3 translation)` | Sets this matrix to contain the position, scale and rotation components.<br/>         Performs scale, rotation, then translation |
| SetInverseTransformComponents | `void SetInverseTransformComponents(Vector3 scale, Rotation rotation, Vector3 translation)` | Sets this matrix to contain the inverse of the position, scale and rotation components.<br/>         Performs scale, rotation, then translation |
| SetInverseTransformComponents | `void SetInverseTransformComponents(Vector3 xAxis, Vector3 yAxis, Vector3 zAxis, Vector3 translation)` | Sets this matrix to contain the inverse of the orthonormal basis and position components.<br/>         Performs scale, rotation, then translation |
| GetTransformComponents | `void GetTransformComponents(Vector3 position, Rotation rotation, Vector3 scale)` | Gets the position, scale and rotation components from the given transform matrix.<br/> |
| ValueOfIndex | `float ValueOfIndex(uint index)` | Get the value of matrix by it's index. |
| ValueOfIndex | `float ValueOfIndex(uint indexRow, uint indexColumn)` | Get the value of matrix by it's row index and column index. |
| SetValueAtIndex | `void SetValueAtIndex(uint index, float value)` | Set the value at matrix by it's index. |
| SetValueAtIndex | `void SetValueAtIndex(uint indexRow, uint indexColumn, float value)` | Set the value at matrix by it's row index and column index. |

