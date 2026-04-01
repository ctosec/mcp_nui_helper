# KeyFrames

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

A set of key frames for a property that can be animated using DALi animation.<br />     This allows the generation of key frame objects from individual Property::Values.<br />

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `void Add(float progress, object value)` | A set of key frames for a property that can be animated using DALi animation.<br />     This allows the generation of key frame objects from individual Property::Values.<br /> |
| Add | `void Add(float progress, object value, AlphaFunction alpha)` | Adds a key frame. |
| GetType | `new PropertyType GetType()` | Gets the type of the key frame.<br/>         An empty key frame will return PropertyType.None, wheras an initialised<br/>         key frame object will return the type of it's first element. |
| Add | `void Add(float progress, PropertyValue value)` | Adds a key frame. |
| Add | `void Add(float progress, PropertyValue value, AlphaFunction alpha)` | Adds a key frame. |
| GetKeyFrameCount | `uint GetKeyFrameCount()` | Get the number of added key frame. |
| GetKeyFrame | `void GetKeyFrame(uint index, out float progress, PropertyValue value)` | Get the progress and value from specific key frame.<br/>         If index is greater or equal than total key frame count, progress and value is not changed. |
| SetKeyFrameValue | `void SetKeyFrameValue(uint index, PropertyValue value)` | Set the value to specific key frame.<br/>         If index is greater or equal than total key frame count or value's PropertyType is not matched, Nothing happened. |

