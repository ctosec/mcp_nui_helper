# ScriptableProperty

**Namespace:** `Tizen.NUI`
**Inherits:** `System`
**Category:** basic

Adds this attribute to any property belonging to a view (control) you want to be scriptable from JSON.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ScriptableType | `enum` | Adds this attribute to any property belonging to a view (control) you want to be scriptable from JSON. |
| CustomViewRegistry | `sealed class` | Read Writable, non-animatable property, event thread only. |
| Instance | `static CustomViewRegistry` | Lookup table to match C# types to DALi types, used for the automatic property registration. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Register | `void Register(Func<CustomView> createFunction, System.Type viewType)` | Adds this attribute to any property belonging to a view (control) you want to be scriptable from JSON. |

