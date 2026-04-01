# Scrollable

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `View`
**Category:** basic

Base class for derived Scrollable that contains actors that can be scrolled manually     (via touch) or automatically.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ScrollStarted | `event DaliEventHandler<object, StartedEventArgs>` | Base class for derived Scrollable that contains actors that can be scrolled manually     (via touch) or automatically. |
| ScrollUpdated | `event DaliEventHandler<object, UpdatedEventArgs>` | The ScrollUpdated event emitted when the Scrollable has moved (whether by touch or animation). |
| ScrollCompleted | `event DaliEventHandler<object, CompletedEventArgs>` | The ScrollCompleted event emitted when the Scrollable has completed movement         (whether by touch or animation). |
| OvershootEffectColor | `Vector4` | Sets and Gets the color of the overshoot effect. |
| OvershootAnimationSpeed | `float` | Sets and Gets the speed of overshoot animation in pixels per second. |
| OvershootEnabled | `bool` | Checks if scroll overshoot has been enabled or not. |
| OvershootSize | `Vector2` | Gets and Sets OvershootSize property. |
| ScrollToAlphaFunction | `int` | Gets and Sets ScrollToAlphaFunction property. |
| ScrollRelativePosition | `Vector2` | Gets and Sets ScrollRelativePosition property. |
| ScrollPositionMin | `Vector2` | Gets and Sets ScrollPositionMin property. |
| ScrollPositionMax | `Vector2` | Gets and Sets ScrollPositionMax property. |
| CanScrollVertical | `bool` | Gets and Sets CanScrollVertical property. |
| CanScrollHorizontal | `bool` | Gets and Sets CanScrollHorizontal property. |
| Vector2 | `Vector2` | you can override it to clean-up your own resources. |
| Vector2 | `Vector2` | The scrollable updated event arguments. |
| Vector2 | `Vector2` | The scroll animation completed event arguments. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| ScrollStarted | `DaliEventHandler<object, StartedEventArgs>` | Base class for derived Scrollable that contains actors that can be scrolled manually     (via touch) or automatically. |
| ScrollUpdated | `DaliEventHandler<object, UpdatedEventArgs>` | The ScrollUpdated event emitted when the Scrollable has moved (whether by touch or animation). |
| ScrollCompleted | `DaliEventHandler<object, CompletedEventArgs>` | The ScrollCompleted event emitted when the Scrollable has completed movement         (whether by touch or animation). |

