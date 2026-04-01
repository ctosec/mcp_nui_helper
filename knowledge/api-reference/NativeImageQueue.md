# NativeImageQueue

**Namespace:** `Tizen.NUI`
**Inherits:** `NativeImageInterface`
**Category:** basic

NativeImageQueue is a class for displaying an image resource using queue.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ColorFormat | `enum` | NativeImageQueue is a class for displaying an image resource using queue. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetQueueCount | `uint GetQueueCount()` | NativeImageQueue is a class for displaying an image resource using queue. |
| GenerateUrl | `ImageUrl GenerateUrl()` | Generate Url from native image queue. |
| GenerateUrl | `ImageUrl GenerateUrl(bool preMultiplied)` | Generate Url from native image queue with pre-multiplied by alpha information. |
| CanDequeueBuffer | `bool CanDequeueBuffer()` | Checks if the buffer can be got from the queue. |
| DequeueBuffer | `IntPtr DequeueBuffer(ref int width, ref int height, ref int stride)` | Dequeue buffer from the queue. |
| EnqueueBuffer | `bool EnqueueBuffer(IntPtr buffer)` | Enqueue buffer to the queue. |

