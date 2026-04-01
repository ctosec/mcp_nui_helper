# Animatable

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

The class that represents an object capable of animation is the parent class of the minimum unit of visual, View.     When a property is an animatable property, it means that its value can change continuously as the target of an animation.     In this case, if a property notification callback is set, you can receive the callback according to the changing values.     Additionally, users can also add their own properties.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Capability | `enum` | The class that represents an object capable of animation is the parent class of the minimum unit of visual, View.     When a property is an animatable property, it means that its value can change continuously as the target of an animation.     In this case, if a property notification callback is set, you can receive the callback according to the changing values.     Additionally, users can also add their own properties. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetPropertyName | `string GetPropertyName(int index)` | The class that represents an object capable of animation is the parent class of the minimum unit of visual, View.     When a property is an animatable property, it means that its value can change continuously as the target of an animation.     In this case, if a property notification callback is set, you can receive the callback according to the changing values.     Additionally, users can also add their own properties. |
| GetPropertyIndex | `int GetPropertyIndex(string name)` | Queries the index of a property. |
| IsPropertyWritable | `bool IsPropertyWritable(int index)` | Queries whether a property can be writable. |
| IsPropertyAnimatable | `bool IsPropertyAnimatable(int index)` | whether a writable property can be the target of an animation. |
| GetPropertyType | `PropertyType GetPropertyType(int index)` | whether a writable property can be the source of an constraint. |
| SetProperty | `void SetProperty(int index, PropertyValue propertyValue)` | Sets the value of an existing property. |
| SetProperty | `void SetProperty(string name, PropertyValue propertyValue)` | Sets the value of an existing property. |
| SetProperties | `void SetProperties(PropertyMap propertyMap)` | Sets the map of values immediately. |
| RegisterProperty | `int RegisterProperty(string name, PropertyValue propertyValue)` | Registers a new animatable property. |
| RegisterProperty | `int RegisterProperty(string name, PropertyValue propertyValue, PropertyAccessMode accessMode)` | Registers a new animatable property. |
| GetProperty | `PropertyValue GetProperty(int index)` | Retrieves a property value. |
| GetCurrentProperty | `PropertyValue GetCurrentProperty(int index)` | Retrieves the latest rendered frame value of the property. |
| AddPropertyNotification | `PropertyNotification AddPropertyNotification(string property, PropertyCondition condition)` | Adds a property notification to this object. |
| RemovePropertyNotification | `void RemovePropertyNotification(PropertyNotification propertyNotification)` | Removes a property notification from this object. |
| RemovePropertyNotifications | `void RemovePropertyNotifications()` | Removes a property notification from this object. |

