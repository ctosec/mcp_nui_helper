# TransitionGroup

**Namespace:** `Tizen.NUI`
**Inherits:** `TransitionBase`
**Category:** basic

TransitionGroup class is a cluster of properties to use multiple Transitions on a target.     FadeTransition, ScaleTransition, and SlideTransition can be added on this group with AddTransition method.     The transitions can be started at the same time or can be started sequentially in order.

## Properties

| Name | Type | Description |
|------|------|-------------|
| UseGroupTimePeriod | `bool` | TransitionGroup class is a cluster of properties to use multiple Transitions on a target.     FadeTransition, ScaleTransition, and SlideTransition can be added on this group with AddTransition method.     The transitions can be started at the same time or can be started sequentially in order. |
| StepTransition | `bool` | Set/Get whether the child Transitions are started sequentially or not.         If StepTransition is true, the child Transitions starts sequentially with an interval of "TimePeriod.DurationMilliseconds/#ofChildTransitions". |
| UseGroupAlphaFunction | `bool` | Set/Get whether the child Transitions are affected by the AlphaFunction of this TransitionGroup |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddTransition | `void AddTransition(TransitionBase transition)` | TransitionGroup class is a cluster of properties to use multiple Transitions on a target.     FadeTransition, ScaleTransition, and SlideTransition can be added on this group with AddTransition method.     The transitions can be started at the same time or can be started sequentially in order. |

