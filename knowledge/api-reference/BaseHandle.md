# BaseHandle

**Namespace:** `Tizen.NUI`
**Inherits:** `Element`
**Category:** basic

BaseHandle is a handle to an internal Dali resource.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Focus | `bool` | BaseHandle is a handle to an internal Dali resource. |
| Result | `bool` | Gets or sets a value that indicates the ending focus state of the element for which a focus change is requested. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| PropertySet | `PropertyChangedEventHandler` | BaseHandle is a handle to an internal Dali resource. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| true | `bool operator true(BaseHandle handle)` | BaseHandle is a handle to an internal Dali resource. |
| false | `bool operator false(BaseHandle handle)` | Returns the bool false  to indicate that an operand is false and returns true otherwise. |
| bool | `explicit operator bool(BaseHandle handle)` | Explicit conversion from Handle to bool. |
| Equals | `bool Equals(object o)` | Equality operator |
| GetHashCode | `int GetHashCode()` | Gets the hash code of this baseHandle. |
| Dispose | `void Dispose()` | Dispose. |
| DoAction | `bool DoAction(string actionName, PropertyMap attributes)` | Hidden API (Inhouse API).         Dispose.         Releases any unmanaged resources used by this object. Can also dispose any other disposable objects. |
| GetTypeName | `string GetTypeName()` | Returns the type name for the Handle.<br />         Will return an empty string if the typename does not exist. This will happen for types that         have not registered with type-registry. |
| GetTypeInfo | `bool GetTypeInfo(Tizen.NUI.TypeInfo info)` | Returns the type info for the Handle.<br /> |
| Reset | `void Reset()` | Resets the handle. |
| EqualTo | `bool EqualTo(BaseHandle rhs)` | To check the BaseHandle instance is equal or not. |
| NotEqualTo | `bool NotEqualTo(BaseHandle rhs)` | To check the BaseHandle instance is equal or not. |
| HasBody | `bool HasBody()` | To check the BaseHandle instance has body or not. |
| IsEqual | `bool IsEqual(BaseHandle rhs)` | To check the BaseHandle instance is equal or not. |

