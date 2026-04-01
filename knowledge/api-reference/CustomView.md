# CustomView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `ViewWrapper`
**Category:** basic

CustomView provides some common functionality required by all views.

## Properties

| Name | Type | Description |
|------|------|-------------|
| FocusNavigationSupport | `bool` | CustomView provides some common functionality required by all views. |
| FocusGroup | `bool` | Sets or gets whether this control is a focus group for keyboard navigation. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetBackground | `void SetBackground(Tizen.NUI.PropertyMap map)` | CustomView provides some common functionality required by all views. |
| EnableGestureDetection | `void EnableGestureDetection(Gesture.GestureType type)` | Allows deriving classes to enable any of the gesture detectors that are available.<br />         Gesture detection can be enabled one at a time or in a bitwise format.<br /> |
| OnInitialize | `void OnInitialize()` | This method is called after the CustomView has been initialized.<br />         After OnInitialize, the view will apply the style if it exists in the theme or it was given from constructor.<br />         Derived classes should do any second phase initialization by overriding this method.<br /> |
| OnStageConnection | `void OnStageConnection(int depth)` | Called after the view has been connected to the stage.<br />         When a view is connected, it will be directly or indirectly parented to the root view.<br />         The root view is provided automatically by Tizen.NUI.Stage, and is always considered to be connected.<br />         When the parent of a set of views is connected to the stage, then all of the children will receive this callback.<br /> |
| OnStageDisconnection | `void OnStageDisconnection()` | Called after the view has been disconnected from the stage.<br />         If a view is disconnected, it either has no parent, or is parented to a disconnected view.<br />         When the parent of a set of views is disconnected to the stage, then all of the children will receive this callback, starting with the leaf views.<br /> |
| OnSceneConnection | `void OnSceneConnection(int depth)` | Called after the view has been connected to the scene.<br />         When a view is connected, it will be directly or indirectly parented to the root view.<br />         The root view is provided automatically by Tizen.NUI.Window, and is always considered to be connected.<br />         When the parent of a set of views is connected to the scene, then all of the children will receive this callback.<br /> |
| OnSceneDisconnection | `void OnSceneDisconnection()` | Called after the view has been disconnected from the scene.<br />         If a view is disconnected, it either has no parent, or is parented to a disconnected view.<br />         When the parent of a set of views is disconnected to the scene, then all of the children will receive this callback, starting with the leaf views.<br /> |
| OnChildAdd | `void OnChildAdd(View view)` | Called after a child has been added to the owning view. |
| OnChildRemove | `void OnChildRemove(View view)` | Called after the owning view has attempted to remove a child( regardless of whether it succeeded or not ). |
| OnPropertySet | `void OnPropertySet(int index, Tizen.NUI.PropertyValue propertyValue)` | Called when the owning view property is set. |
| OnSizeSet | `void OnSizeSet(Vector3 targetSize)` | Called when the owning view's size is set, for example, using View.SetSize(). |
| OnSizeAnimation | `void OnSizeAnimation(Animation animation, Vector3 targetSize)` | Called when the owning view's size is animated, for example, using Animation::AnimateTo( Property ( view, View::Property::SIZE ), ... ). |
| OnTouch | `bool OnTouch(Touch touch)` | Called after a touch event is received by the owning view.<br />         CustomViewBehaviour.REQUIRES_TOUCH_EVENTS must be enabled during construction. See CustomView(ViewWrapperImpl.CustomViewBehaviour behaviour).<br /> |
| OnHover | `bool OnHover(Hover hover)` | Called after a hover event is received by the owning view.<br />         CustomViewBehaviour.REQUIRES_HOVER_EVENTS must be enabled during construction. See CustomView(ViewWrapperImpl.CustomViewBehaviour behaviour).<br /> |
| OnKey | `bool OnKey(Key key)` | Called after a key event is received by the view that has had its focus set. |
| OnWheel | `bool OnWheel(Wheel wheel)` | Called after a wheel event is received by the owning view.<br />         CustomViewBehaviour.REQUIRES_WHEEL_EVENTS must be enabled during construction. See CustomView(ViewWrapperImpl.CustomViewBehaviour behaviour).<br /> |
| OnRelayout | `void OnRelayout(Vector2 size, RelayoutContainer container)` | Called after the size negotiation has been finished for this control.<br />         The control is expected to assign this given size to itself or its children.<br />         Should be overridden by derived classes if they need to layout views differently after certain operations like add or remove views, resize, or after changing specific properties.<br />         As this function is called from inside the size negotiation algorithm, you cannot call RequestRelayout (the call would just be ignored).<br /> |
| OnSetResizePolicy | `void OnSetResizePolicy(ResizePolicyType policy, DimensionType dimension)` | Notification for deriving classes. |
| GetNaturalSize | `new virtual Size2D GetNaturalSize()` | Returns the natural size of the view. |
| CalculateChildSize | `float CalculateChildSize(View child, DimensionType dimension)` | Calculates the size for a child. |
| GetHeightForWidth | `new virtual float GetHeightForWidth(float width)` | This method is called during size negotiation when a height is required for a given width.<br />         Derived classes should override this if they wish to customize the height returned.<br /> |
| GetWidthForHeight | `new virtual float GetWidthForHeight(float height)` | This method is called during size negotiation when a width is required for a given height.<br />         Derived classes should override this if they wish to customize the width returned.<br /> |
| RelayoutDependentOnChildren | `bool RelayoutDependentOnChildren(DimensionType dimension)` | Determines if this view is dependent on it's children for relayout. |
| RelayoutDependentOnChildren | `bool RelayoutDependentOnChildren()` | Determines if this view is dependent on it's children for relayout from the base class. |
| OnCalculateRelayoutSize | `void OnCalculateRelayoutSize(DimensionType dimension)` | The virtual method to notify deriving classes that relayout dependencies have been         met and the size for this object is about to be calculated for the given dimension. |
| OnLayoutNegotiated | `void OnLayoutNegotiated(float size, DimensionType dimension)` | The virtual method to notify deriving classes that the size for a dimension has just been negotiated. |
| OnStyleChange | `void OnStyleChange(StyleManager styleManager, StyleChangeType change)` | This method should be overridden by deriving classes requiring notifications when the style changes. |
| OnFocusGained | `void OnFocusGained()` | Called when the control gain key input focus. Should be overridden by derived classes if they need to customize what happens when the focus is gained. |
| OnFocusLost | `void OnFocusLost()` | Called when the control loses key input focus. Should be overridden by derived classes if they need to customize what happens when the focus is lost. |
| GetNextFocusableView | `View GetNextFocusableView(View currentFocusedView, View.FocusDirection direction, bool loopEnabled)` | Gets the next keyboard focusable view in this control towards the given direction.<br />         A control needs to override this function in order to support two dimensional keyboard navigation.<br /> |
| OnFocusChangeCommitted | `void OnFocusChangeCommitted(View commitedFocusableView)` | Informs this control that its chosen focusable view will be focused.<br />         This allows the application to preform any actions it wishes before the focus is actually moved to the chosen view.<br /> |
| OnKeyboardEnter | `bool OnKeyboardEnter()` | This method is called when the control has enter pressed on it.<br />         Derived classes should override this to perform custom actions.<br /> |
| OnPan | `void OnPan(PanGesture pan)` | Called whenever a pan gesture is detected on this control.<br />         This should be overridden by deriving classes when pan detection is enabled.<br />         There is no default behavior with panning.<br />         Pan detection should be enabled via EnableGestureDetection().<br /> |
| OnTap | `void OnTap(TapGesture tap)` | Called whenever a tap gesture is detected on this control.<br />         This should be overridden by deriving classes when tap detection is enabled.<br />         There is no default behavior with a tap.<br />         Tap detection should be enabled via EnableGestureDetection().<br /> |

