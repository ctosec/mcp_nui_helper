# NUIApplication

**Namespace:** `Tizen.NUI`
**Inherits:** `CoreApplication`
**Category:** basic

Represents an application that have a UI screen. The NUIApplication class has a default stage.

## Properties

| Name | Type | Description |
|------|------|-------------|
| IsUsingXaml | `bool` | Represents an application that have a UI screen. The NUIApplication class has a default stage. |
| IsUsingThemeManager | `static bool` | Set to true if NUI ThemeManager is used.         The default value is true. |
| SupportPreInitializedCreation | `static bool` | Set to true if NUI DisposeQueue dispose items incrementally.         The default value is false. |
| WindowMode | `enum` | The instance of ResourceManager. |
| CurrentLoadedXaml | `static string` | Opaque |
| Window | `Window` | The MultilingualResourceManager property provides access to a System.Resources.ResourceManager instance that can be used to manage resources for different languages. |
| AppId | `string` | Gets the Application Id. |
| State | `States` | Gets the state of current application. |
| States | `enum` | Gets the default window. |
| Graphics | `class` | Invalid |
| BackendType | `enum` | Graphics Backend Type. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Resumed | `EventHandler` | Represents an application that have a UI screen. The NUIApplication class has a default stage. |
| Paused | `EventHandler` | The event handler that gets called when the application is paused.         This event is triggered when the application transitions to a paused state. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| XamlLoadedHandler | `delegate void XamlLoadedHandler(string xamlName)` | Represents an application that have a UI screen. The NUIApplication class has a default stage. |
| GetDefaultWindow | `Window GetDefaultWindow()` | Initializes a new instance of the <see cref="NUIApplication"/> class.         This is the default constructor that initializes the NUI application using the NUICoreBackend. |
| RegisterAssembly | `void RegisterAssembly(Assembly assembly)` | Registers the specified assembly to XAML, allowing types within the assembly to be used in XAML files. |
| Run | `void Run(string[] args)` | This method starts the main loop of the application, allowing it to receive events and run its lifecycle. |
| Exit | `void Exit()` | Exits the NUIApplication.         This method causes the application to terminate gracefully. |
| AddIdle | `bool AddIdle(System.Delegate func)` | Ensures that the function passed in is called from the main loop when it is idle. |
| RemoveIdle | `void RemoveIdle(System.Delegate func)` | Remove delegate what we added by AddIdle. |
| FlushUpdateMessages | `void FlushUpdateMessages()` | Flush render/update thread messages synchronously. |
| SetRenderRefreshRate | `void SetRenderRefreshRate(uint numberOfVSyncsPerRender)` | Sets the number of frames per render. |
| SetMaximumRenderFrameRate | `void SetMaximumRenderFrameRate(float maximumRenderFrameRate)` | Set the maximum value of frames per seconds. |
| GetScreenSize | `Size GetScreenSize()` | Gets the screen size |
| SetGeometryHittestEnabled | `void SetGeometryHittestEnabled(bool enable)` | Sets the geometry hit-testing enabled or disabled for the application. |
| IsGeometryHittestEnabled | `bool IsGeometryHittestEnabled()` | Checks whether geometry hit-testing is enabled for the application. |
| Preload | `void Preload()` | Retrieves a list of all currently available screens.         This function queries the window system for all connected and active screens,         providing essential information for each. It is primarily intended for use         in multi-screen environments where an application might need to manage         windows across different displays. |

