# LottieAnimationView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `ImageView`
**Category:** media

LottieAnimationView renders an animated vector image (Lottie file).

## Properties

| Name | Type | Description |
|------|------|-------------|
| URL | `string` | LottieAnimationView renders an animated vector image (Lottie file). |
| ResourceUrl | `string` | Set or Get resource URL of Lottie file. |
| DesiredWidth | `int` | Gets or sets the desired image width for LottieAnimationView<br /> |
| DesiredHeight | `int` | Gets or sets the desired image height for LottieAnimationView<br /> |
| SynchronousLoading | `bool` | Gets or sets the SynchronousLoading for LottieAnimationView<br />         We should set it before setup ResourceUrl, URL property.<br /> |
| PlayState | `PlayStateType` | Gets the playing state of the LottieAnimationView.         This property returns the current play state of the LottieAnimationView. |
| TotalFrame | `int` | Get the number of total frames.         If resouce is still not be loaded, or invalid resource, the value is 0. |
| CurrentFrame | `int` | Set or get the current frame. When setting a specific frame, it is displayed as a still image. |
| LoopingMode | `LoopingModeType` | Sets or gets the looping mode of Lottie animation. |
| LoopCount | `int` | Sets or gets the loop count. |
| StopBehavior | `StopBehaviorType` | Sets or gets the stop behavior of the LottieAnimationView.         This property determines how the animation behaves when it stops. |
| RedrawInScalingDown | `bool` | Whether to redraw the image when the visual is scaled down. |
| RedrawInScalingUp | `bool` | Whether to redraw the image when the visual is scaled up. |
| EnableFrameCache | `bool` | Whether to AnimatedVectorImageVisual fixed cache or not. |
| NotifyAfterRasterization | `bool` | Whether notify AnimatedVectorImageVisual to render thread after every rasterization or not. |
| FrameSpeedFactor | `float` | Specifies a speed factor for the animated image frame. |
| RenderScale | `float` | Renders a texture at a given scale. |
| Finished | `event EventHandler` | Set the minimum and the maximum frame. |
| PlayStateType | `enum` | Enumeration for what state the vector animation is in |
| StopBehaviorType | `enum` | Invalid |
| LoopingModeType | `enum` | When the animation is stopped, the current frame is shown. |
| VectorProperty | `enum` | When the animation arrives at the end in looping mode, the animation restarts from the beginning. |
| VisualIndex | `int` | Fill color of the object, Type of <see cref="Vector3"/> |
| StartFrame | `int` | A class containing frame informations for a LottieAnimationView. |
| EndFrame | `int` | The end frame of the lottie animation. |
| KeyPath | `string` | Create LottieFrameInfo struct with animation range information |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Finished | `EventHandler` | LottieAnimationView renders an animated vector image (Lottie file). |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetMinMaxFrame | `void SetMinMaxFrame(int minFrame, int maxFrame)` | LottieAnimationView renders an animated vector image (Lottie file). |
| Play | `new void Play()` | Plays the Lottie animation.         This method starts the playback of the Lottie animation. |
| Pause | `new void Pause()` | Pauses the Lottie animation.         This method pauses the animation without resetting its progress. |
| Stop | `new void Stop()` | Stops the Lottie animation.         This method stops the currently playing Lottie animation. |
| GetContentInfo | `List<Tuple<string, int, int>> GetContentInfo()` | Get the list of layers' information such as the start frame and the end frame in the Lottie file. |
| GetMarkerInfo | `List<Tuple<string, int, int>> GetMarkerInfo()` | Get the list of markers' information such as the start frame and the end frame in the Lottie file. |
| SetMinMaxFrameByMarker | `void SetMinMaxFrameByMarker(string marker1, string marker2 = null)` | A marker has its start frame and end frame.         Animation will play between the start frame and the end frame of the marker if one marker is specified.         Or animation will play between the start frame of the first marker and the end frame of the second marker if two markers are specified. |
| GetMinMaxFrame | `Tuple<int, int> GetMinMaxFrame()` | Get MinMax Frame |
| DynamicPropertyCallbackType | `delegate PropertyValue DynamicPropertyCallbackType(int returnType, uint frameNumber)` | Update lottie-image-relative properties synchronously.         After call this API, All image properties updated. |
| LottieFrameInfo | `implicit operator LottieFrameInfo((int, int)` | Actions property value to Jump to the specified frame. |
| LottieFrameInfo | `implicit operator LottieFrameInfo(int stillImageFrame)` | Create a new instance from an int value. |
| LottieFrameInfo | `implicit operator LottieFrameInfo(string pair)` | Create a new instance from string.         Possible input : "0, 10", "10" |
| CreateAnimationRange | `LottieFrameInfo CreateAnimationRange(int startFrame, int endFrame)` | The start frame of the lottie animation. |
| CreateStillImage | `LottieFrameInfo CreateStillImage(int stillImageFrame)` | Create LottieFrameInfo struct with still image information |
| IsStillImage | `bool IsStillImage()` | Inhouse API.         Whether this LottieFrameInfo represents one frame or more. |
| Show | `void Show(LottieAnimationView lottieView, bool noPlay = false)` | Inhouse API.         Play specified LottieAnimationView with this frame information. |

