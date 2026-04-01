# AnimatedVectorImageView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `LottieAnimationView`
**Category:** media

AnimatedVectorImageView is a class for displaying a vector resource.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ResourceURL | `string` | AnimatedVectorImageView is a class for displaying a vector resource. |
| ResourceUrl | `string` | Set Resource URL |
| RepeatCount | `int` | RepeatCount of animation.         The repeat count is 0 by default.         If the RepeatCount is 0, the animation is never repeated.         If the RepeatCount is greater than 0, the repeat mode will be taken into account.         If RepeatCount is -1, animation is infinite loops. |
| TotalFrame | `int` | TotalFrame of animation.         If resouce is still not be loaded, or invalid resource, the value is 0. |
| CurrentFrame | `int` | CurrentFrame of animation. |
| RepeatMode | `RepeatModes` | RepeatMode of animation. |
| AnimationState | `AnimationStates` | Get state of animation. |
| RepeatModes | `enum` | Set minimum frame and maximum frame |
| EndActions | `enum` | When the animation reaches the end and RepeatCount is nonZero, the animation restarts from the beginning. |
| AnimationStates | `enum` | End action is Cancel, Animation Stops at the Current Frame. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetMinAndMaxFrame | `void SetMinAndMaxFrame(int minFrame, int maxFrame)` | AnimatedVectorImageView is a class for displaying a vector resource. |
| SetMinAndMaxFrameByMarker | `void SetMinAndMaxFrameByMarker(string marker1, string marker2 = null)` | Set minimum frame and maximum frame by marker.         Animation will play between the start frame and the end frame of the marker if one marker is specified.         Or animation will play between the start frame of the first marker and the end frame of the second marker if two markers are specified. |
| SetMinMaxFrame | `new void SetMinMaxFrame(int minFrame, int maxFrame)` | SetMinMaxFrame(int startFrame, int endFrame) |
| SetMinMaxFrameByMarker | `new void SetMinMaxFrameByMarker(string marker1, string marker2 = null)` | A marker has its start frame and end frame.         Animation will play between the start frame and the end frame of the marker if one marker is specified.         Or animation will play between the start frame of the first marker and the end frame of the second marker if two markers are specified. |
| Play | `new void Play()` | Play Animation. |
| Pause | `new void Pause()` | Pause Animation. |
| Stop | `void Stop(EndActions endAction = EndActions.Cancel)` | Stop Animation. |

