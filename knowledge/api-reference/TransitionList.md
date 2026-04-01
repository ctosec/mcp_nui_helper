# TransitionList

**Namespace:** `Tizen.NUI`
**Inherits:** `List`
**Category:** basic

Define a List of LayoutTransitions

## Properties

| Name | Type | Description |
|------|------|-------------|
| TransitionCondition | `enum` | Define a List of LayoutTransitions |
| AnimatableProperties | `enum` | Default when a condition has not been set. |
| LayoutTransition | `class` | Position property. |
| Condition | `TransitionCondition` | LayoutTransition default constructor. |
| AnimatableProperty | `AnimatableProperties` | Property to animate. |
| Animator | `TransitionComponents` | Components of the Animator. |
| TargetValue | `object` | Target value to animate to. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetDuration | `void SetDuration(int duration)` | Define a List of LayoutTransitions |
| GetDuration | `int GetDuration()` | Get the time transition should execute for . Milliseconds. |
| SetDelay | `void SetDelay(int delay)` | Set the delay before the transition executes. Milliseconds. |
| GetDelay | `int GetDelay()` | Get the delay before the transition executes. Milliseconds. |
| SetAlphaFunction | `void SetAlphaFunction(AlphaFunction alphaFunction)` | Set the function to alter the transition path over time. |
| GetAlphaFunction | `AlphaFunction GetAlphaFunction()` | Get the function to alter the transition path over time. |
| AddTransitionForCondition | `void AddTransitionForCondition(Dictionary<TransitionCondition, TransitionList> targetTransitionList,
                              TransitionCondition condition,
                              LayoutTransition transition,
                              bool explicitlySet)` | LayoutTransition stores the animation setting for a transition condition. |
| GetTransitionsListForCondition | `bool GetTransitionsListForCondition(Dictionary<TransitionCondition, TransitionList> sourceTransitionCollection,
                              TransitionCondition condition,
                              TransitionList transitionsForCondition)` | Retrieve the transition list for the given condition. |
| CopyTransitions | `void CopyTransitions(TransitionList sourceTransitionList, TransitionList targetTransitionList)` | Copy the transitions in the source list to the target list |

