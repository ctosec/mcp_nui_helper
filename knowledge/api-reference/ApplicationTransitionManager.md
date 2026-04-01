# ApplicationTransitionManager

**Namespace:** `Tizen.NUI`
**Inherits:** `IDisposable`
**Category:** basic

This ApplicationTransitionManager class is a class to control transition motion of application.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Instance | `static ApplicationTransitionManager` | This ApplicationTransitionManager class is a class to control transition motion of application. |
| SourceView | `View` | Initializes the ApplicationTransitionManager class. |
| TransitionWindow | `Window` | Configures the transition window. |
| AppearingTransition | `TransitionBase` | Enable FrameBroker(Caller) or FrameProvider(Callee) |
| DisappearingTransition | `TransitionBase` | Transition properties for the transition of Window during new application is exited. |
| FrameType | `enum` | AnimationEventHandler for FrameBroker animation |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| FrameBrokerAnimationInitialized | `AnimationEventHandler` | This ApplicationTransitionManager class is a class to control transition motion of application. |
| FrameBrokerAnimationFinished | `AnimationEventHandler` | Emits the event when the animation is finished. |
| FrameProviderShown | `EventHandler` | Occurs whenever the window is shown on caller application. |
| FrameProviderHidden | `EventHandler` | Occurs whenever the window is hidden on caller application. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AnimationEventHandler | `delegate void AnimationEventHandler(bool direction)` | This ApplicationTransitionManager class is a class to control transition motion of application. |
| LaunchRequestWithTransition | `void LaunchRequestWithTransition(AppControl appControl)` | Emits the event when the animation is started. |
| Dispose | `void Dispose()` | Hidden API (Inhouse API).         Dispose. |

