# DragAndDrop

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

DragAndDrop controls the drag object and data.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Instance | `static DragAndDrop` | DragAndDrop controls the drag object and data. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SourceEventHandler | `delegate void SourceEventHandler(DragSourceEventType sourceEventType)` | DragAndDrop controls the drag object and data. |
| DragAndDropEventHandler | `delegate void DragAndDropEventHandler(View targetView, DragEvent nativeDragEvent)` | Delegate representing the method that will handle drag and drop events. |
| StartDragAndDrop | `void StartDragAndDrop(View sourceView, View shadowView, DragData dragData, SourceEventHandler callback)` | Gets the singleton instance of DragAndDrop. |
| AddListener | `void AddListener(View targetView, DragAndDropEventHandler callback)` | Adds listener for drop targets |
| AddListener | `void AddListener(View targetView, string mimeType, DragAndDropEventHandler callback)` | Adds listener for drop targets |
| RemoveListener | `void RemoveListener(View targetView, DragAndDropEventHandler _)` | Removes listener for drop targets |
| AddListener | `void AddListener(Window targetWindow, DragAndDropWindowEventHandler callback)` | Adds listener for drop targets |
| AddListener | `void AddListener(Window targetWindow, string mimeType, DragAndDropWindowEventHandler callback)` | Adds listener for drop targets |
| RemoveListener | `void RemoveListener(Window targetWindow, DragAndDropWindowEventHandler _)` | Removes listener for drop targets |
| SetDragWindowOffset | `void SetDragWindowOffset(int x, int y)` | Sets drag window offset |

