# Theme

**Namespace:** `Tizen.NUI`
**Inherits:** `BindableObject`
**Category:** basic

<para>     Basically, the Theme is a dictionary of <seealso cref="ViewStyle"/>s that can decorate NUI <seealso cref="View"/>s.     Each ViewStyle item is identified by a string key that can be matched the <seealso cref="View.StyleName"/>.     </para>     <para>     The main purpose of providing theme is to separate style details from the structure.     Managing style separately makes it easier to customize the look of application by user context.     Also since a theme can be created from xaml file, it can be treated as a resource.     This enables sharing styles with other applications.     </para>

## Properties

| Name | Type | Description |
|------|------|-------------|
| Id | `string` | <para>     Basically, the Theme is a dictionary of <seealso cref="ViewStyle"/>s that can decorate NUI <seealso cref="View"/>s.     Each ViewStyle item is identified by a string key that can be matched the <seealso cref="View.StyleName"/>.     </para>     <para>     The main purpose of providing theme is to separate style details from the structure.     Managing style separately makes it easier to customize the look of application by user context.     Also since a theme can be created from xaml file, it can be treated as a resource.     This enables sharing styles with other applications.     </para> |
| Version | `string` | The version of the Theme. |
| SmallBrokenImageUrl | `string` | The url of small broken image |
| BrokenImageUrl | `string` | The url of broken image |
| LargeBrokenImageUrl | `string` | The url of large broken image |
| XamlResources | `ResourceDictionary` | For Xaml use only.         The bulit-in theme id that will be used as base of this.         View styles with same key are merged. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetEnumerator | `IEnumerator<KeyValuePair<string, ViewStyle>> GetEnumerator()` | <para>     Basically, the Theme is a dictionary of <seealso cref="ViewStyle"/>s that can decorate NUI <seealso cref="View"/>s.     Each ViewStyle item is identified by a string key that can be matched the <seealso cref="View.StyleName"/>.     </para>     <para>     The main purpose of providing theme is to separate style details from the structure.     Managing style separately makes it easier to customize the look of application by user context.     Also since a theme can be created from xaml file, it can be treated as a resource.     This enables sharing styles with other applications.     </para> |
| Clear | `void Clear()` | Removes all styles in the theme. |
| HasStyle | `bool HasStyle(string styleName)` | Determines whether the theme contains the specified style name. |
| RemoveStyle | `bool RemoveStyle(string styleName)` | Removes the style with the specified style name. |
| GetStyle | `ViewStyle GetStyle(string styleName)` | Gets a style of given style name. |
| GetStyle | `ViewStyle GetStyle(Type viewType)` | Gets a style of given view type. |
| AddStyle | `void AddStyle(string styleName, ViewStyle value)` | Adds the specified style name and value to the theme.         This replace existing value if the theme already has a style with given name. |
| Merge | `void Merge(string xamlFile)` | Merge other theme into this. |
| Merge | `void Merge(Theme theme)` | Merge other theme into this. |

