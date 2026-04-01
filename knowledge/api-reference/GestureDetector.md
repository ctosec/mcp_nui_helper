# GestureDetector

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

GestureDetectors analyses a stream of touch events and attempt to determine the intention of the user.<br />     An view is attached to a gesture detector and if the detector recognises a pattern in its analysis, it will     trigger a detected event to the application.<br />     This is the base class for different gesture detectors available and provides functionality that is common to all the gesture detectors.<br />

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Attach | `void Attach(View view)` | GestureDetectors analyses a stream of touch events and attempt to determine the intention of the user.<br />     An view is attached to a gesture detector and if the detector recognises a pattern in its analysis, it will     trigger a detected event to the application.<br />     This is the base class for different gesture detectors available and provides functionality that is common to all the gesture detectors.<br /> |
| Detach | `void Detach(View view)` | Detaches the attached view from the gesture detector. |
| DetachAll | `void DetachAll()` | Detaches all the views that have been attached to the gesture detector. |
| GetAttachedViewCount | `uint GetAttachedViewCount()` | Returns the number of views attached to the gesture detector. |
| GetAttachedView | `View GetAttachedView(uint index)` | Returns an view by index. An empty handle if the index is not valid. |
| HandleEvent | `bool HandleEvent(View view, Touch touch)` | Handles the event for a given view and touch input.         This method should only be called when SetGeometryHittestEnabled is set to true.         It processes the touch input and attempts to recognize gestures based on the provided view and touch data. |
| CancelAllOtherGestureDetectors | `void CancelAllOtherGestureDetectors()` | Cancels all other gesture detectors that are currently recognizing gestures by HandleEvent(View view, Touch touch) api |

