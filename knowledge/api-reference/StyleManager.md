# StyleManager

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

The StyleManager informs applications of the system theme change, and supports application theme change at runtime.<br />     Applies various styles to controls using the properties system.<br />     On theme change, it automatically updates all controls, then raises a event to inform the application.<br />     If the application wants to customize the theme, RequestThemeChange needs to be called.<br />     It provides the path to the application resource root folder, from there the filename can be specified along with any subfolders, for example, Images, Models, etc.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| StyleChanged | `event EventHandler<StyleChangedEventArgs>` | The StyleManager informs applications of the system theme change, and supports application theme change at runtime.<br />     Applies various styles to controls using the properties system.<br />     On theme change, it automatically updates all controls, then raises a event to inform the application.<br />     If the application wants to customize the theme, RequestThemeChange needs to be called.<br />     It provides the path to the application resource root folder, from there the filename can be specified along with any subfolders, for example, Images, Models, etc.<br /> |
| Instance | `static StyleManager` | Gets the singleton of the StyleManager object. |
| StyleManager | `StyleManager` | Gets the singleton of StyleManager object. |
| StyleChange | `StyleChangeType` | StyleChange - contains the style change information (default font changed or             default font size changed or theme has changed).<br /> |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| StyleChanged | `EventHandler<StyleChangedEventArgs>` | The StyleManager informs applications of the system theme change, and supports application theme change at runtime.<br />     Applies various styles to controls using the properties system.<br />     On theme change, it automatically updates all controls, then raises a event to inform the application.<br />     If the application wants to customize the theme, RequestThemeChange needs to be called.<br />     It provides the path to the application resource root folder, from there the filename can be specified along with any subfolders, for example, Images, Models, etc.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Get | `StyleManager Get()` | The StyleManager informs applications of the system theme change, and supports application theme change at runtime.<br />     Applies various styles to controls using the properties system.<br />     On theme change, it automatically updates all controls, then raises a event to inform the application.<br />     If the application wants to customize the theme, RequestThemeChange needs to be called.<br />     It provides the path to the application resource root folder, from there the filename can be specified along with any subfolders, for example, Images, Models, etc.<br /> |
| ApplyTheme | `void ApplyTheme(string themeFile)` | Applies a new theme to the application.<br />         This will be merged on the top of the default Toolkit theme.<br />         If the application theme file doesn't style all controls that the         application uses, then the default Toolkit theme will be used         instead for those controls.<br /> |
| ApplyDefaultTheme | `void ApplyDefaultTheme()` | Applies the default Toolkit theme. |
| AddConstant | `void AddConstant(string key, PropertyValue value)` | Sets a constant for use when building styles. |
| GetConstant | `bool GetConstant(string key, PropertyValue valueOut)` | Returns the style constant set for a specific key. |
| ApplyStyle | `void ApplyStyle(View control, string jsonFileName, string styleName)` | Applies the specified style to the control. |

