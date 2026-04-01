# PropertyArray

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

An array of property values.

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Size | `uint Size()` | An array of property values. |
| Count | `uint Count()` | Retrieves the number of elements in the array. |
| Empty | `bool Empty()` | Returns whether the array is empty. |
| Clear | `void Clear()` | Clears the array.         This method removes all elements from the PropertyArray, resulting in an empty array. |
| Reserve | `void Reserve(uint size)` | Increases the capacity of the array. |
| Resize | `void Resize(uint size)` | Resizes to size. |
| Capacity | `uint Capacity()` | Retrieves the capacity of the array. |
| PushBack | `void PushBack(PropertyValue value)` | Adds an element to the array. |
| Add | `PropertyArray Add(KeyValue value)` | Adds an keyvalue to the array.         This function should be first |
| Add | `PropertyArray Add(PropertyValue value)` | Adds an element to the array. |
| GetElementAt | `PropertyValue GetElementAt(uint index)` | Accesses an element. |

