# PropertyMap

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A map of property values, the key type could be string or Property::Index.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Keys | `IList<PropertyKey>` | A map of property values, the key type could be string or Property::Index. |
| Values | `IList<PropertyValue>` | Retrieves all values. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Count | `uint Count()` | A map of property values, the key type could be string or Property::Index. |
| Empty | `bool Empty()` | Returns whether the map is empty. |
| Insert | `void Insert(string key, PropertyValue value)` | Inserts the key-value pair in the map, with the key type as string.<br />         The error message would be shown if the pair with the same key already exists. |
| Insert | `void Insert(int key, PropertyValue value)` | Inserts the key-value pair in the map, with the key type as index.<br />         The error message would be shown if the pair with the same key already exists. |
| Add | `PropertyMap Add(string key, PropertyValue value)` | Inserts the key-value pair in the map, with the key type as string.<br />         The error message would be shown if the pair with the same key already exists. |
| Add | `PropertyMap Add(int key, PropertyValue value)` | Inserts the key-value pair in the map, with the key type as string.<br />         The error message would be shown if the pair with the same key already exists. |
| Add | `PropertyMap Add(KeyValue keyValue)` | Inserts the keyvalue to the map.<br />         The exception would be thrown if the pair with the same key already exists. |
| Append | `PropertyMap Append(int key, bool value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, int value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, float value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, string value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, Vector2 value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, UIVector2 value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, Vector3 value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, Vector4 value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, UIColor value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, UICorner value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Append | `PropertyMap Append(int key, PropertyMap value)` | Append the key-value pair to the map.         Does not check for duplicates. |
| Remove | `bool Remove(PropertyKey key)` | Removes the element by the specified key. |
| Remove | `bool Remove(int key)` | Removes the element by the specified integer key. |
| Contains | `bool Contains(PropertyKey key)` | Determines whether the PropertyMap contains the specified key. |
| GetValue | `PropertyValue GetValue(uint position)` | Retrieves the value at the specified position. |
| GetKeyAt | `PropertyKey GetKeyAt(uint position)` | Retrieves the key at the specified position. |
| Find | `PropertyValue Find(string stringKey)` | Finds the value for the specified string key if it exists. |
| Find | `PropertyValue Find(int key)` | Finds the value for the specified key if it exists. |
| Find | `PropertyValue Find(int indexKey, string stringKey)` | Finds the value for the specified keys if either exist. |
| Clear | `void Clear()` | Clears the map.         This method removes all key-value pairs from the PropertyMap. |
| Merge | `void Merge(PropertyMap from)` | Merges values from the map 'from' to the current.<br />         Any values in 'from' will overwrite the values in the current map.<br /> |

