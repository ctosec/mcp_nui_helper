# NUIWidgetComponent

**Namespace:** `Tizen.NUI`
**Inherits:** `WidgetComponent`
**Category:** basic

The class for showing UI module

## Properties

| Name | Type | Description |
|------|------|-------------|
| Window | `Window` | The class for showing UI module |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| CreateWindowInfo | `IWindowProxy CreateWindowInfo(int width, int height)` | The class for showing UI module |
| OnCreate | `bool OnCreate(int width, int height)` | Overrides this method to handle behavior when the component is launched. |
| OnStart | `void OnStart(bool restarted)` | Overrides this method if you want to handle behavior when the component receives the appcontrol message. |
| OnResume | `void OnResume()` | Overrides this method if you want to handle the behavior when the component is resumed. |
| OnPause | `void OnPause()` | Overrides this method if you want to handle the behavior when the component is paused. |
| OnStop | `void OnStop()` | Overrides this method if you want to handle the behavior when the component is stopped. |
| OnDestroy | `void OnDestroy(bool permanent)` | Overrides this method if want to handle behavior when the component is destroyed. |

