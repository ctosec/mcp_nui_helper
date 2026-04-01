# Matrix3

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A 3x3 matrix. <br/>     The matrix is stored as a flat array and is Column Major, i.e. the storage order is as follows (numbers represent indices of array): <br/>     <code>     0   3   6     1   4   7     2   5   8     </code>     Each axis is contiguous in memory, so the x-axis corresponds to elements 0, 1, and 2, the y-axis corresponds to     elements 3, 4, 5, the z-axis corresponds to elements 6, 7, and 8.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Identity | `static Matrix3` | A 3x3 matrix. <br/>     The matrix is stored as a flat array and is Column Major, i.e. the storage order is as follows (numbers represent indices of array): <br/>     <code>     0   3   6     1   4   7     2   5   8     </code>     Each axis is contiguous in memory, so the x-axis corresponds to elements 0, 1, and 2, the y-axis corresponds to     elements 3, 4, 5, the z-axis corresponds to elements 6, 7, and 8. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetIdentity | `void SetIdentity()` | A 3x3 matrix. <br/>     The matrix is stored as a flat array and is Column Major, i.e. the storage order is as follows (numbers represent indices of array): <br/>     <code>     0   3   6     1   4   7     2   5   8     </code>     Each axis is contiguous in memory, so the x-axis corresponds to elements 0, 1, and 2, the y-axis corresponds to     elements 3, 4, 5, the z-axis corresponds to elements 6, 7, and 8. |
| Invert | `bool Invert()` | Generic brute force matrix invert. |
| Transpose | `bool Transpose()` | Swaps the rows to columns. |
| Scale | `void Scale(float scale)` | Multiplies all elements of the matrix by the scale value. |
| Magnitude | `float Magnitude()` | Magnitude returns the average of the absolute values of the elements * 3.0f.         The Magnitude of the unit matrix is therefore 1. |
| ScaledInverseTranspose | `bool ScaledInverseTranspose()` | If the matrix is invertible, then this method inverts, transposes         and scales the matrix such that the resultant element values         average 1. <br/>         If the matrix is not invertible, then the matrix is left unchanged. |
| Multiply | `void Multiply(Matrix3 result, Matrix3 lhs, Matrix3 rhs)` | Function to multiply two matrices and store the result onto third.<br/>         Use this method in time critical path as it does not require temporaries.<br/> |
| Multiply | `Vector3 Multiply(Vector3 rhs)` | Multiply the Matrix3 and Vector3. |
| Multiply | `Matrix3 Multiply(Matrix3 rhs)` | Multiply the Matrix3 and Matrix3. |
| MultiplyAssign | `void MultiplyAssign(Matrix3 rhs)` | Multiply the Matrix3 and Matrix3. Result will be stored into this Matrix3. |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this Matrix3. |
| EqualTo | `bool EqualTo(Matrix3 rhs)` | Compares if rhs is equal to. |
| NotEqualTo | `bool NotEqualTo(Matrix3 rhs)` | Compares if rhs is not equal to. |
| ValueOfIndex | `float ValueOfIndex(uint index)` | Get the value of matrix by it's index. |
| ValueOfIndex | `float ValueOfIndex(uint indexRow, uint indexColumn)` | Get the value of matrix by it's row index and column index. |
| SetValueAtIndex | `void SetValueAtIndex(uint index, float value)` | Set the value at matrix by it's index. |
| SetValueAtIndex | `void SetValueAtIndex(uint indexRow, uint indexColumn, float value)` | Set the value at matrix by it's row index and column index. |

