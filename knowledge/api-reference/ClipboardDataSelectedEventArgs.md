# ClipboardDataSelectedEventArgs

**Namespace:** `Tizen.NUI`
**Inherits:** `EventArgs`
**Category:** basic

This specifies clipboard event data.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ClipEvent | `struct` | This specifies clipboard event data. |
| MimeType | `string` | The mime type of clipboard event data. |
| Data | `string` | The clipboard event data to receive. |
| MimeType | `string` | ClipboardDataSelectedEventArgs is a class to record clipboard selected event arguments which will be sent to user.<br/>     This is to catch data selection event. |
| Success | `bool` | ClipboardEventArgs is a class to record clipboard event arguments which will be sent to user.<br/>     This is for internal use only. |
| Id | `uint` | The data request id to identify the response by request. |
| ClipEvent | `ClipEvent` | Clipboard event data. |
| Clipboard | `partial class` | Clipboard event. |
| DataSelected | `event EventHandler<ClipboardDataSelectedEventArgs>` | The DataSelected event is emitted when a copy event occurs somewhere.<br/>         In order for this event to operate normally,<br/>         the process using this event must be Secondary Selection. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| DataSelected | `EventHandler<ClipboardDataSelectedEventArgs>` | This specifies clipboard event data. |

