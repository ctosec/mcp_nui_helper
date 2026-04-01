# AsyncImageLoader

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Loader class to loading image asynchronously.     Request to load image, and get result as PixelData or PixelBuffer

## Properties

| Name | Type | Description |
|------|------|-------------|
| ImageLoaded | `event EventHandler<ImageLoadedEventArgs>` | Loader class to loading image asynchronously.     Request to load image, and get result as PixelData or PixelBuffer |
| PixelBufferLoaded | `event EventHandler<PixelBufferLoadedEventArgs>` | Event when pixel buffers are loaded.         null or empty PixelBuffer list if load failed. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| ImageLoaded | `EventHandler<ImageLoadedEventArgs>` | Loader class to loading image asynchronously.     Request to load image, and get result as PixelData or PixelBuffer |
| PixelBufferLoaded | `EventHandler<PixelBufferLoadedEventArgs>` | Event when pixel buffers are loaded.         null or empty PixelBuffer list if load failed. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Load | `uint Load(string url)` | Loader class to loading image asynchronously.     Request to load image, and get result as PixelData or PixelBuffer |

