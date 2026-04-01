# Selector

**Namespace:** `Tizen.NUI.BaseComponents`
**Category:** basic

The selector class is a collection of a <see cref="ControlState" /> and a T value pair.

## Properties

| Name | Type | Description |
|------|------|-------------|
| All | `T` | The selector class is a collection of a <see cref="ControlState" /> and a T value pair. |
| Normal | `T` | Normal State. |
| Pressed | `T` | Pressed State. |
| Focused | `T` | Focused State. |
| Selected | `T` | Selected State. |
| Disabled | `T` | Disabled State. |
| DisabledFocused | `T` | DisabledFocused State. |
| SelectedFocused | `T` | Gets or sets the value associated with the SelectedFocused state. |
| DisabledSelected | `T` | DisabledSelected State. |
| SelectedPressed | `T` | SelectedPressed State. |
| Other | `T` | Other State. |
| State | `ControlState` | Gets the number of elements. |
| Value | `T` | The value associated with control state. |
| SelectorExtensions | `static class` | Extension class for <see cref="Selector{T}"/>. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `void Add(ControlState state, T value)` | The selector class is a collection of a <see cref="ControlState" /> and a T value pair. |
| Add | `void Add(SelectorItem<T> item)` | Adds the specified state and value to the selector. |
| Remove | `bool Remove(SelectorItem<T> item)` | Remove an item from the selector. |
| Contains | `bool Contains(SelectorItem<T> item)` | Determines whether the selector contains a specific value. |
| CopyTo | `void CopyTo(SelectorItem<T>[] items, int startIndex)` | Copies the elements of the selector to an Array, starting at a particular Array index. |
| GetEnumerator | `IEnumerator<SelectorItem<T>> GetEnumerator()` | Returns an enumerator that iterates through the collection. |
| GetValue | `bool GetValue(ControlState state, out T result)` | Returns an enumerator that iterates through a collection. |
| Clear | `void Clear()` | Removes all elements. |
| ToString | `string ToString()` | Converts the Selector object to its string representation. |
| Clone | `Selector<T> Clone()` | Clone itself.         If type T implements ICloneable, it calls Clone() method to clone values, otherwise use operator=. |
| Clone | `void Clone(Selector<T> other)` | Clone with type converter. |
| Equals | `bool Equals(object other)` | Determines whether the specified object is equal to the current object. |
| GetHashCode | `int GetHashCode()` | Serves as the default hash function. |
| Get | `Selector<T> Get()` | This will be attached to a View to detect ControlState change. |
| Reset | `void Reset(View view)` | Reset selector and listeners. |
| ToString | `string ToString()` | The selector item class that stores a control state and a T value pair. |

