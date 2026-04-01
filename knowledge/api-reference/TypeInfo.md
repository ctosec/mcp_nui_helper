# TypeInfo

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

TypeInfo class for instantiation of registered types and introspection of their actions and signals.

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetName | `string GetName()` | TypeInfo class for instantiation of registered types and introspection of their actions and signals. |
| GetBaseName | `string GetBaseName()` | Retrieves the type name for this type. |
| CreateInstance | `BaseHandle CreateInstance()` | Creates an object from this type. |
| GetPropertyCount | `uint GetPropertyCount()` | Retrieves the number of event side type registered properties for this type.<br />         This count does not include all properties. |
| GetPropertyName | `string GetPropertyName(int index)` | Given a property index, retrieve the property name associated with it. |

