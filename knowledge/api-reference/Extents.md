# Extents

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

Extents class describing the a collection of uint16_t.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Start | `ushort` | Extents class describing the a collection of uint16_t. |
| End | `ushort` | The End extend. |
| Top | `ushort` | The Top extend. |
| Bottom | `ushort` | The Bottom Extend. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Extents | `implicit operator Extents(ushort value)` | Extents class describing the a collection of uint16_t. |
| CopyFrom | `void CopyFrom(Extents that)` | Constructor.         <param name="start">The start extent value horizontally.</param>         <param name="end">The end extent value horizontally.</param>         <param name="top">The top extent value vertically.</param>         <param name="bottom">The bottom extent value vertically.</param> |
| ExtentsChangedCallback | `delegate void ExtentsChangedCallback(ushort start, ushort end, ushort top, ushort bottom)` | Constructor |
| EqualTo | `bool EqualTo(Extents rhs)` | The Start extent. |
| NotEqualTo | `bool NotEqualTo(Extents rhs)` | Inequality operator. |

