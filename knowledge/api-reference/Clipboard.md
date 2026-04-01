# Clipboard

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

This class provides methods to interact with the system clipboard, allowing users to get and set clipboard content.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Instance | `static Clipboard` | This class provides methods to interact with the system clipboard, allowing users to get and set clipboard content. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| ClipboardCallback | `delegate void ClipboardCallback(bool success, ClipEvent clipEvent)` | This class provides methods to interact with the system clipboard, allowing users to get and set clipboard content. |
| SetData | `bool SetData(string mimeType, string data)` | Gets the singleton instance of Clipboard. |
| OnClipboardDataReceived | `void OnClipboardDataReceived(bool success, ClipEvent clipEvent)` | Request get data of the specified mime type from clipboard<br/>         and invokes the given callback with the received clipboard data. |

