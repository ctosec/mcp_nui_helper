# WidgetView

**Namespace:** `Tizen.NUI`
**Inherits:** `View`
**Category:** basic

The WidgetView is a class for displaying the widget image and controlling the widget.<br />     Input events that the WidgetView gets are delivered to the widget.

## Properties

| Name | Type | Description |
|------|------|-------------|
| WidgetAdded | `event EventHandler<WidgetViewEventArgs>` | The WidgetView is a class for displaying the widget image and controlling the widget.<br />     Input events that the WidgetView gets are delivered to the widget. |
| WidgetContentUpdated | `event EventHandler<WidgetViewEventArgs>` | An event for the WidgetContentUpdated signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget content is updated.<br /> |
| WidgetDeleted | `event EventHandler<WidgetViewEventArgs>` | An event for the WidgetDeleted signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget is deleted.<br /> |
| WidgetCreationAborted | `event EventHandler<WidgetViewEventArgs>` | An event for the WidgetCreationAborted signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget creation is aborted.<br /> |
| WidgetUpdatePeriodChanged | `event EventHandler<WidgetViewEventArgs>` | An event for the WidgetUpdatePeriodChanged signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget update period is changed.<br /> |
| WidgetFaulted | `event EventHandler<WidgetViewEventArgs>` | An event for the WidgetFaulted signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget process is not running.<br /> |
| WidgetID | `string` | Gets the ID of the widget. |
| InstanceID | `string` | Gets the ID of the instance. |
| ContentInfo | `string` | Gets the content info. |
| Title | `string` | Gets the title. |
| UpdatePeriod | `float` | Gets the update period. |
| Preview | `bool` | Gets or sets the preview. |
| LoadingText | `bool` | Gets or sets the loading text. |
| WidgetStateFaulted | `bool` | Gets or sets whether the widget state is faulted or not. |
| PermanentDelete | `bool` | Gets or sets whether the widget is to delete permanently or not. |
| RetryText | `PropertyMap` | Gets or sets retry text. |
| Effect | `PropertyMap` | Gets or sets effect. |
| KeepWidgetSize | `bool` | Gets or sets KeepWidgetSize         if this value is true, WidgetView keep widget instance's size and don't resize even if WidgetView is resized. |
| WidgetView | `WidgetView` | Pauses a given widget. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| WidgetAdded | `EventHandler<WidgetViewEventArgs>` | The WidgetView is a class for displaying the widget image and controlling the widget.<br />     Input events that the WidgetView gets are delivered to the widget. |
| WidgetContentUpdated | `EventHandler<WidgetViewEventArgs>` | An event for the WidgetContentUpdated signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget content is updated.<br /> |
| WidgetDeleted | `EventHandler<WidgetViewEventArgs>` | An event for the WidgetDeleted signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget is deleted.<br /> |
| WidgetCreationAborted | `EventHandler<WidgetViewEventArgs>` | An event for the WidgetCreationAborted signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget creation is aborted.<br /> |
| WidgetUpdatePeriodChanged | `EventHandler<WidgetViewEventArgs>` | An event for the WidgetUpdatePeriodChanged signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget update period is changed.<br /> |
| WidgetFaulted | `EventHandler<WidgetViewEventArgs>` | An event for the WidgetFaulted signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when the widget process is not running.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| CreateWidgetView | `WidgetView CreateWidgetView(string widgetId, string contentInfo, int width, int height, float updatePeriod)` | The WidgetView is a class for displaying the widget image and controlling the widget.<br />     Input events that the WidgetView gets are delivered to the widget. |
| PauseWidget | `bool PauseWidget()` | Creates a new WidgetView. |
| ResumeWidget | `bool ResumeWidget()` | Resumes a given widget. |
| CancelTouchEvent | `bool CancelTouchEvent()` | Cancels the touch event procedure.         If you call this function after feed the touch down event, the widget will get ON_HOLD events.         If a widget gets ON_HOLD event, it will not do anything even if you feed touch up event. |
| ActivateFaultedWidget | `void ActivateFaultedWidget()` | Activates a widget in the faulted state.         A widget in faulted state must be activated before adding the widget. |
| TerminateWidget | `bool TerminateWidget()` | Terminate a widget instance. |

