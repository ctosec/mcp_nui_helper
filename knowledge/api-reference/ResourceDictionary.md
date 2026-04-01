# ResourceDictionary

**Namespace:** `Tizen.NUI.Binding`
**Inherits:** `IResourceDictionary`
**Category:** basic



## Properties

| Name | Type | Description |
|------|------|-------------|
| MergedWith | `Type` | Gets or sets the type of object with which the resource dictionary is merged. |
| Source | `Uri` | Gets or sets the URI of the merged resource dictionary. |
| MergedDictionaries | `ICollection<ResourceDictionary>` | To set and load source. |
| Keys | `ICollection<string>` | Gets or sets the value according to index. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetAndLoadSource | `void SetAndLoadSource(Uri value, string resourcePath, Assembly assembly, System.Xml.IXmlLineInfo lineInfo)` | Gets or sets the type of object with which the resource dictionary is merged. |
| Remove | `bool Remove(string key)` | Gets or sets the value according to index. |

