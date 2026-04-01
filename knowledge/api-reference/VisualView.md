# VisualView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `CustomView`
**Category:** basic

A visual view control if a user adds any visual to it.

## Properties

| Name | Type | Description |
|------|------|-------------|
| NumberOfVisuals | `int` | A visual view control if a user adds any visual to it. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| OnInitialize | `void OnInitialize()` | A visual view control if a user adds any visual to it. |
| AddVisual | `void AddVisual(string visualName, VisualMap visualMap)` | Adds or updates a visual to visual view. |
| RemoveVisual | `void RemoveVisual(string visualName)` | Removes a visual by name. |
| RemoveAll | `void RemoveAll()` | This method removes all visuals associated with the VisualView instance. |
| OnRelayout | `void OnRelayout(Vector2 size, RelayoutContainer container)` | Overrides the method of OnRelayout() for CustomView class.<br />         Called after the size negotiation has been finished for this control.<br />         The control is expected to assign this given size to itself or its children.<br />         Should be overridden by derived classes if they need to layout actors differently after certain operations like add or remove actors, resize, or after changing specific properties.<br /> |
| AnimateVisual | `Animation AnimateVisual(VisualMap target, string property, object destinationValue, int startTime, int endTime, AlphaFunction.BuiltinFunctions? alphaFunction = null, object initialValue = null)` | Creates a visual animation (transition) with the input parameters. |
| AnimateVisualAdd | `void AnimateVisualAdd(VisualMap target, string property, object destinationValue, int startTime, int endTime, AlphaFunction.BuiltinFunctions? alphaFunction = null, object initialValue = null)` | Adds a group visual animation (transition) map with the input parameters. |
| AnimateVisualAddFinish | `Animation AnimateVisualAddFinish()` | Finishes to add a visual animation (transition) map and creates a transition animation. |
| VisualAnimate | `Animation VisualAnimate(Tizen.NUI.VisualAnimator visualMap)` | Applies an animation to the specified visual map properties. |

