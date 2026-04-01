# VideoView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `View`
**Category:** media

VideoView is a control for video playback and display.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Finished | `event EventHandler<FinishedEventArgs>` | VideoView is a control for video playback and display. |
| Video | `PropertyMap` | Video file setting type of PropertyMap. |
| Looping | `bool` | The looping status, true or false. |
| Muted | `bool` | The mute status, true or false. |
| Volume | `PropertyMap` | The left and the right volume scalar as float type, PropertyMap with two values ( "left" and "right" ). |
| Underlay | `bool` | Video rendering by underlay, true or false.<br />         This shows video composited underneath the window by the system. This means it may ignore rotation of the video-view. |
| ResourceUrl | `string` | Video file URL as string type. |
| IsAutoRotationEnabled | `bool` | Enables auto rotation of the video based on the orientation of the video contents. |
| IsLetterBoxEnabled | `bool` | Enables letter box of the video based on the aspect of the video contents. |
| NativeHandle | `SafeHandle` | Gets or sets the time interval for frame interpolation in seconds. |
| VideoView | `VideoView` | Dispose.         Releases unmanaged and optionally managed resources. |
| IsInvalid | `override bool` | Contains and encapsulates Native Player handle. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Finished | `EventHandler<FinishedEventArgs>` | VideoView is a control for video playback and display. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetVideoFrameBuffer | `void SetVideoFrameBuffer(NativeImageSource nativeImageSource)` | VideoView is a control for video playback and display. |
| EnableOffscreenFrameRendering | `void EnableOffscreenFrameRendering(bool useOffScreenFrame)` | Enables or disables offscreen frame rendering for video interpolation.         When enabled, the video player will use offscreen rendering for frame interpolation,         which can improve visual quality for certain video content. |
| Play | `void Play()` | Starts the video playback. |
| Pause | `void Pause()` | Pauses the video playback. |
| Stop | `void Stop()` | Stops the video playback. |
| Forward | `void Forward(int millisecond)` | Seeks forward by the specified number of milliseconds. |
| Backward | `void Backward(int millisecond)` | Seeks backward by the specified number of milliseconds. |

