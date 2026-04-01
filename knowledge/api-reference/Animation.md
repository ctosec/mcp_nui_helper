# Animation

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Animation can be used to animate the properties of any number of objects, typically view.<br />     If the "Finished" event is connected to a member function of an object, it must be disconnected before the object is destroyed.<br />     This is typically done in the object destructor, and requires either the animation handle to be stored.<br />     The overall animation time is superseded by the values given in the animation time used when calling the AnimateTo(), AnimateBy(), AnimateBetween() and AnimatePath() methods.<br />     If any of the individual calls to those functions exceeds the overall animation time (Duration), then the overall animation time is automatically extended.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Finished | `event EventHandler` | Animation can be used to animate the properties of any number of objects, typically view.<br />     If the "Finished" event is connected to a member function of an object, it must be disconnected before the object is destroyed.<br />     This is typically done in the object destructor, and requires either the animation handle to be stored.<br />     The overall animation time is superseded by the values given in the animation time used when calling the AnimateTo(), AnimateBy(), AnimateBetween() and AnimatePath() methods.<br />     If any of the individual calls to those functions exceeds the overall animation time (Duration), then the overall animation time is automatically extended.<br /> |
| ProgressReached | `event EventHandler` | Event for the ProgressReached signal, which can be used to subscribe or unsubscribe the event handler.<br />         The ProgressReached signal is emitted when the animation has reached a given progress percentage, this is set in the api SetProgressNotification.<br /> |
| EndActions | `enum` | Enumeration for what to do when the animation ends, stopped, or destroyed. |
| Interpolation | `enum` | When the animation ends, the animated property values are saved. |
| States | `enum` | Values in between key frames are interpolated using a linear polynomial. (Default) |
| LoopingModes | `enum` | The animation has stopped. |
| Duration | `int` | When the animation arrives at the end in looping mode, the animation restarts from the beginning. (Default) |
| DefaultAlphaFunction | `AlphaFunction` | Gets or sets the default alpha function for the animation.         This DefaultAlphaFunction is only applied to the animations are added after the DefaultAlphaFunction is set. |
| State | `States` | Queries the state of the animation. |
| LoopCount | `int` | Set: Enables looping for a specified number of repeats. A zero is the same as Looping = true; i.e., repeat forever.<br />         This property resets the looping value and should not be used with the Looping property.<br />         Setting this parameter does not cause the animation to Play().<br />         Get: Gets the loop count. A zero is the same as Looping = true; i.e., repeat forever.<br />         The loop count is initially 1 for play once.<br /> |
| Looping | `bool` | Gets or sets the status of whether the animation will loop.<br />         This property resets the loop count and should not be used with the LoopCount property.<br />         Setting this parameter does not cause the animation to Play().<br /> |
| EndAction | `EndActions` | Gets or sets the end action of the animation.<br />         This action is performed when the animation ends or if it is stopped.<br />         The default end action is EndActions.Cancel.<br /> |
| CurrentLoop | `int` | Gets the current loop count.<br />         A value 0 indicating the current loop count when looping.<br /> |
| DisconnectAction | `EndActions` | Gets or sets the disconnect action.<br />         If any of the animated property owners are disconnected from the stage while the animation is being played, then this action is performed.<br />         The default action is EndActions.StopFinal.<br /> |
| CurrentProgress | `float` | Gets or sets the progress of the animation.<br />         The animation will play (or continue playing) from this point.<br />         The progress must be in the 0-1 interval or in the play range interval if defined<br />         otherwise, it will be ignored.<br /> |
| SpeedFactor | `float` | Gets or sets specifications of a speed factor for the animation.<br />         The speed factor is a multiplier of the normal velocity of the animation.<br />         Values between [0, 1] will slow down the animation and values above one will speed up the animation.<br />         It is also possible to specify a negative multiplier to play the animation in reverse.<br /> |
| PlayRange | `RelativeVector2` | Gets or sets the playing range.<br />         Animation will play between the values specified. Both values (range.x and range.y ) should be between 0-1,         otherwise they will be ignored. If the range provided is not in proper order (minimum, maximum ), it will be reordered.<br /> |
| ProgressNotification | `float` | Gets or sets the progress notification marker which triggers the ProgressReachedSignal.<br />         Percentage of animation progress should be greater than 0 and less than 1, for example, 0.3 for 30%<br />         One notification can be set on each animation. |
| LoopingMode | `LoopingModes` | Enumeration for what looping mode is in. |
| BlendPoint | `float` | Sets and Gets the blend point to interpolate animate property         BlendPoint is a value between [0,1], If the value of the keyframe whose progress is 0 is different from the current value,         the property is animated as it smoothly blends until the progress reaches the blendPoint. |
| ID | `uint` | Gets the animation's ID. 0 if animation is invalid.         Read-only |
| PropertyList | `IList<string>` | Gets or sets the properties of the animation. |
| DestValueList | `IList<string>` | Get the list of the destination value for each property of the animation. |
| StartTimeList | `IList<int>` | Get the list of the start time for each property of the animation. |
| EndTimeList | `IList<int>` | Get the list of end time for each property of the animation. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Finished | `EventHandler` | Animation can be used to animate the properties of any number of objects, typically view.<br />     If the "Finished" event is connected to a member function of an object, it must be disconnected before the object is destroyed.<br />     This is typically done in the object destructor, and requires either the animation handle to be stored.<br />     The overall animation time is superseded by the values given in the animation time used when calling the AnimateTo(), AnimateBy(), AnimateBetween() and AnimatePath() methods.<br />     If any of the individual calls to those functions exceeds the overall animation time (Duration), then the overall animation time is automatically extended.<br /> |
| ProgressReached | `EventHandler` | Event for the ProgressReached signal, which can be used to subscribe or unsubscribe the event handler.<br />         The ProgressReached signal is emitted when the animation has reached a given progress percentage, this is set in the api SetProgressNotification.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Stop | `void Stop(EndActions action)` | Animation can be used to animate the properties of any number of objects, typically view.<br />     If the "Finished" event is connected to a member function of an object, it must be disconnected before the object is destroyed.<br />     This is typically done in the object destructor, and requires either the animation handle to be stored.<br />     The overall animation time is superseded by the values given in the animation time used when calling the AnimateTo(), AnimateBy(), AnimateBetween() and AnimatePath() methods.<br />     If any of the individual calls to those functions exceeds the overall animation time (Duration), then the overall animation time is automatically extended.<br /> |
| AnimateBy | `void AnimateBy(Animatable target, string property, object relativeValue, AlphaFunction alphaFunction = null)` | Animates a property value by a relative amount.<br /> |
| AnimateBy | `void AnimateBy(Animatable target, string property, object relativeValue, int startTime, int endTime, AlphaFunction alphaFunction = null)` | Animates a property value by a relative amount.<br /> |
| AnimateBy | `void AnimateBy(View target, string property, object relativeValue, AlphaFunction alphaFunction = null)` | Animates a property value by a relative amount.<br /> |
| AnimateBy | `void AnimateBy(View target, string property, object relativeValue, int startTime, int endTime, AlphaFunction alphaFunction = null)` | Animates a property value by a relative amount.<br /> |
| AnimateTo | `void AnimateTo(Animatable target, string property, object destinationValue, AlphaFunction alphaFunction = null)` | Animates a property to a destination value.<br /> |
| AnimateTo | `void AnimateTo(Animatable target, string property, object destinationValue, int startTime, int endTime, AlphaFunction alphaFunction = null)` | Animates a property to a destination value.<br /> |
| AnimateTo | `void AnimateTo(View target, string property, object destinationValue, AlphaFunction alphaFunction = null)` | Animates a property to a destination value.<br /> |
| AnimateTo | `void AnimateTo(View target, string property, object destinationValue, int startTime, int endTime, AlphaFunction alphaFunction = null)` | Animates a property to a destination value.<br /> |
| PlayAnimateTo | `void PlayAnimateTo(View target)` | Animates one or more properties to a destination value.<br /> |
| AnimateBetween | `void AnimateBetween(Animatable target, string property, KeyFrames keyFrames, Interpolation interpolation = Interpolation.Linear, AlphaFunction alphaFunction = null)` | Animates a property between keyframes. |
| AnimateBetween | `void AnimateBetween(Animatable target, string property, KeyFrames keyFrames, int startTime, int endTime, Interpolation interpolation = Interpolation.Linear, AlphaFunction alphaFunction = null)` | Animates a property between keyframes. |
| AnimateBetween | `void AnimateBetween(View target, string property, KeyFrames keyFrames, Interpolation interpolation = Interpolation.Linear, AlphaFunction alphaFunction = null)` | Animates a property between keyframes. |
| AnimateBetween | `void AnimateBetween(View target, string property, KeyFrames keyFrames, int startTime, int endTime, Interpolation interpolation = Interpolation.Linear, AlphaFunction alphaFunction = null)` | Animates a property between keyframes. |
| AnimatePath | `void AnimatePath(View view, Path path, Vector3 forward, AlphaFunction alphaFunction = null)` | Animates the view's position and orientation through a predefined path.<br />         The view will rotate to orient the supplied forward vector with the path's tangent.<br />         If forward is the zero vector then no rotation will happen.<br /> |
| AnimatePath | `void AnimatePath(View view, Path path, Vector3 forward, int startTime, int endTime, AlphaFunction alphaFunction = null)` | Animates the view's position and orientation through a predefined path.<br />         The view will rotate to orient the supplied forward vector with the path's tangent.<br />         If forward is the zero vector then no rotation will happen.<br /> |
| Play | `void Play()` | Creates an initialized animation.<br />         The animation will not loop.<br />         The default end action is "Cancel".<br />         The default alpha function is linear.<br /> |
| PlayFrom | `void PlayFrom(float progress)` | Plays the animation from a given point.<br />         The progress must be in the 0-1 interval or in the play range interval if defined,         otherwise, it will be ignored.<br /> |
| PlayAfter | `void PlayAfter(int delayMilliseconds)` | Plays the animation after a given delay time.<br/>         The delay time is not included in the looping time.<br/>         When the delay time is a negative value, it would treat as play immediately.<br/> |
| Pause | `void Pause()` | Pauses the animation. |
| Stop | `void Stop()` | Stops the animation. |
| Clear | `void Clear()` | Clears the animation.<br />         This disconnects any objects that were being animated, effectively stopping the animation.<br /> |

