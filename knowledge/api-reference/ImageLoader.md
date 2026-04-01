# ImageLoader

**Namespace:** `Tizen.NUI`
**Category:** basic

A class containing methods providing image loading

## Properties

| Name | Type | Description |
|------|------|-------------|
| ImageLoader | `class` | A class containing methods providing image loading |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| LoadImageFromFile | `PixelBuffer LoadImageFromFile(string url, Size2D size, FittingModeType fittingMode, SamplingModeType samplingMode, bool orientationCorrection)` | A class containing methods providing image loading |
| LoadImageFromFile | `PixelBuffer LoadImageFromFile(string url, Size2D size, FittingModeType fittingMode, SamplingModeType samplingMode)` | Load an image synchronously from local file. |
| LoadImageFromFile | `PixelBuffer LoadImageFromFile(string url, Size2D size, FittingModeType fittingMode)` | Load an image synchronously from local file. |
| LoadImageFromFile | `PixelBuffer LoadImageFromFile(string url, Size2D size)` | Load an image synchronously from local file. |
| LoadImageFromFile | `PixelBuffer LoadImageFromFile(string url)` | Load an image synchronously from local file. |
| LoadImageFromBuffer | `PixelBuffer LoadImageFromBuffer(System.IO.Stream stream, Size2D size, FittingModeType fittingMode, SamplingModeType samplingMode, bool orientationCorrection)` | Load an image synchronously from Stream. Load from current position to end of stream. |
| LoadImageFromBuffer | `PixelBuffer LoadImageFromBuffer(System.IO.Stream stream, Size2D size, FittingModeType fittingMode, SamplingModeType samplingMode)` | Load an image synchronously from Stream. Load from current position to end of stream. |
| LoadImageFromBuffer | `PixelBuffer LoadImageFromBuffer(System.IO.Stream stream, Size2D size, FittingModeType fittingMode)` | Load an image synchronously from Stream. Load from current position to end of stream. |
| LoadImageFromBuffer | `PixelBuffer LoadImageFromBuffer(System.IO.Stream stream, Size2D size)` | Load an image synchronously from Stream. Load from current position to end of stream. |
| LoadImageFromBuffer | `PixelBuffer LoadImageFromBuffer(System.IO.Stream stream)` | Load an image synchronously from Stream. Load from current position to end of stream. |
| GetClosestImageSize | `Size2D GetClosestImageSize(string filename, Size2D size, FittingModeType fittingMode, SamplingModeType samplingMode, bool orientationCorrection)` | Determine the size of an image that LoadImageFromFile will provide when given the same image loading parameters. |
| GetClosestImageSize | `Size2D GetClosestImageSize(string filename, Size2D size, FittingModeType fittingMode, SamplingModeType samplingMode)` | Determine the size of an image that LoadImageFromFile will provide when given the same image loading parameters. |
| GetClosestImageSize | `Size2D GetClosestImageSize(string filename, Size2D size, FittingModeType fittingMode)` | Determine the size of an image that LoadImageFromFile will provide when given the same image loading parameters. |
| GetClosestImageSize | `Size2D GetClosestImageSize(string filename, Size2D size)` | Determine the size of an image that LoadImageFromFile will provide when given the same image loading parameters. |
| GetClosestImageSize | `Size2D GetClosestImageSize(string filename)` | Determine the size of an image that LoadImageFromFile will provide when given the same image loading parameters. |
| GetOriginalImageSize | `Size2D GetOriginalImageSize(string filename)` | Get the size of an original image rotated according to image metadata |
| GetOriginalImageSize | `Size2D GetOriginalImageSize(string filename, bool orientationCorrection)` | Get the size of an original image rotated according to image metadata |
| DownloadImageSynchronously | `PixelBuffer DownloadImageSynchronously(string url, Size2D size, FittingModeType fittingMode, SamplingModeType samplingMode, bool orientationCorrection)` | Load an image synchronously from a remote resource. |
| DownloadImageSynchronously | `PixelBuffer DownloadImageSynchronously(string url, Size2D size, FittingModeType fittingMode, SamplingModeType samplingMode)` | Load an image synchronously from a remote resource. |
| DownloadImageSynchronously | `PixelBuffer DownloadImageSynchronously(string url, Size2D size, FittingModeType fittingMode)` | Load an image synchronously from a remote resource. |
| DownloadImageSynchronously | `PixelBuffer DownloadImageSynchronously(Uri uri, Size2D size, FittingModeType fittingMode)` | Hidden API (Inhouse API).         Using Uri class to provide safe service and secure API.         Load an image synchronously from a remote resource. |
| DownloadImageSynchronously | `PixelBuffer DownloadImageSynchronously(string url, Size2D size)` | Load an image synchronously from a remote resource. |
| DownloadImageSynchronously | `PixelBuffer DownloadImageSynchronously(string url)` | Load an image synchronously from a remote resource. |

