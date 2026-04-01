# AnimatedImageView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `ImageView`
**Category:** media

AnimatedImageView is a class for displaying Animated-GIF and Image-Array

## Properties

| Name | Type | Description |
|------|------|-------------|
| URLs | `List<string>` | AnimatedImageView is a class for displaying Animated-GIF and Image-Array |
| BatchSize | `int` | Defines the batch size for pre-loading images in the Image-Array animation.         number of images to pre-load before starting to play. Default value: 1. |
| CacheSize | `int` | Defines the cache size for loading images in the Image-Array animation.         number of images to keep cached ahead during playback. Default value: 1. |
| FrameDelay | `int` | The number of milliseconds between each frame in the Image-Array animation.         The number of milliseconds between each frame. |
| LoopCount | `int` | The number of looping. |
| StopBehavior | `StopBehaviorType` | Sets or gets the stop behavior. |
| FrameSpeedFactor | `float` | Specifies a speed factor for the animated image frame. |
| TotalFrame | `int` | Get the number of total frames |
| CurrentFrame | `int` | Set or get the current frame. When setting a specific frame, it is displayed as a still image. |
| AnimationState | `AnimationStates` | Get state of animation. |
| Finished | `event EventHandler` | To make the properies be set. This should be called after the properties are set. |
| StopBehaviorType | `enum` | Enumeration for what to do when the animation is stopped. |
| AnimationStates | `enum` | When the animation is stopped, the current frame is shown. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Finished | `EventHandler` | AnimatedImageView is a class for displaying Animated-GIF and Image-Array |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetValues | `void SetValues()` | AnimatedImageView is a class for displaying Animated-GIF and Image-Array |
| Play | `new void Play()` | Play Animation. |
| Pause | `new void Pause()` | Pause Animation. |
| Stop | `new void Stop()` | Stop Animation. |

