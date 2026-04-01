# NUIWidgetApplication

**Namespace:** `Tizen.NUI`
**Inherits:** `CoreApplication`
**Category:** basic

Represents an application that have UI screen. The NUIWidgetApplication class has a default stage.

## Properties

| Name | Type | Description |
|------|------|-------------|
| IsUsingXaml | `bool` | Represents an application that have UI screen. The NUIWidgetApplication class has a default stage. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddWidgetType | `void AddWidgetType(System.Type widgetType)` | Represents an application that have UI screen. The NUIWidgetApplication class has a default stage. |
| AddWidgetType | `void AddWidgetType(Dictionary<System.Type, string> widgetTypes)` | Add WidgetInfo in runtime |
| Run | `void Run(string[] args)` | Set to true if XAML is used.         This must be called before or immediately after the NUIWidgetApplication constructor is called.         The default value is true. |
| Exit | `void Exit()` | The Exit method of NUIWidgetApplication. |
| FlushUpdateMessages | `void FlushUpdateMessages()` | Flush render/update thread messages synchronously. |

