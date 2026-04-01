# PropertyKey

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

A key type which can be either a std::string or a Property::Index.

## Properties

| Name | Type | Description |
|------|------|-------------|
| KeyType | `enum` | A key type which can be either a std::string or a Property::Index. |
| IndexKey | `int` | The type of key is index. |
| StringKey | `string` | Returns the string key. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| EqualTo | `bool EqualTo(string rhs)` | A key type which can be either a std::string or a Property::Index. |
| EqualTo | `bool EqualTo(int rhs)` | Compares if rhs is equal to. |
| EqualTo | `bool EqualTo(PropertyKey rhs)` | Compares if rhs is equal to |
| NotEqualTo | `bool NotEqualTo(string rhs)` | Compares if rhs is not equal to. |
| NotEqualTo | `bool NotEqualTo(int rhs)` | Compares if rhs is not equal to. |
| NotEqualTo | `bool NotEqualTo(PropertyKey rhs)` | Compares if rhs is not equal to. |

