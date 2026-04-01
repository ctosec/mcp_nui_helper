# AnimatedImageVisual

**Namespace:** `Tizen.NUI.Visuals`
**Inherits:** `ImageVisual`
**Category:** basic

The visual which can display and control an animated image resource.     We can also set image sequences by using ResourceUrlList and FrameDelay property.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ResourceUrlList | `ObservableCollection<string>` | The visual which can display and control an animated image resource.     We can also set image sequences by using ResourceUrlList and FrameDelay property. |
| FrameDelay | `int` | The number of milliseconds between each frame in the Image-Array animation. |
| LoopCount | `int` | Gets and sets the number of times the AnimatedImageVisual will be looped.         The default is -1. If the number is less than 0 then it loops unlimited,otherwise loop loopCount times. |
| FrameSpeedFactor | `float` | Sets or gets the stop behavior. |
| TotalFrame | `int` | Get the number of total frames.         Or -1 if image is invalid, or not loaded yet. |
| CurrentFrame | `int` | Set or get the current frame. When setting a specific frame, it is displayed as a still image. |
| BatchSize | `int` | Gets and Sets the batch size for pre-loading images in the AnimatedImageVisual. (Advanced) |
| CacheSize | `int` | Gets and Sets the cache size for loading images in the AnimatedImageVisual. (Advanced) |
| Finished | `event EventHandler` | Play the animated image. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Finished | `EventHandler` | The visual which can display and control an animated image resource.     We can also set image sequences by using ResourceUrlList and FrameDelay property. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Play | `void Play()` | The visual which can display and control an animated image resource.     We can also set image sequences by using ResourceUrlList and FrameDelay property. |
| Pause | `void Pause()` | Pause the animated image. |
| Stop | `void Stop()` | Stop the animated image. |

