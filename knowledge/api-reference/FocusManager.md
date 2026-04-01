# FocusManager

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Provides the functionality of handling keyboard navigation and maintaining the two-dimensional keyboard focus chain.<br />     It provides functionality of setting the focus and moving the focus in four directions( i.e., left, right, up, and down).<br />     It also draws a highlight for the focused view and sends an event when the focus is changed.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| PreFocusChange | `event EventHandlerWithReturnType<object, PreFocusChangeEventArgs, View>` | Provides the functionality of handling keyboard navigation and maintaining the two-dimensional keyboard focus chain.<br />     It provides functionality of setting the focus and moving the focus in four directions( i.e., left, right, up, and down).<br />     It also draws a highlight for the focused view and sends an event when the focus is changed.<br /> |
| FocusChanging | `event EventHandler<FocusChangingEventArgs>` | FocusChanging will be triggered before the focus is going to be changed.<br />         The FocusManager makes the best guess for which view to focus towards the given direction, but applications might want to change that.<br />         By connecting with this event, they can check the proposed view to focus and assign a different view if they wish.<br />         This event is only triggered when the navigation key is pressed and FocusManager tries to move the focus automatically.<br />         It won't be emitted for focus movement by calling the SetCurrentFocusView directly.<br /> |
| FocusChanged | `event EventHandler<FocusChangedEventArgs>` | The FocusChanged will be triggered after the current focused view has been changed. |
| FocusGroupChanged | `event EventHandler<FocusGroupChangedEventArgs>` | The FocusGroupChanged will be triggered when the focus group has been changed.<br />         If the current focus group has a parent layout control, the FocusManager will make the best guess for the next focus group to move the focus to in the given direction (forward or backward).<br />         If not, the application has to set the new focus.<br /> |
| FocusedViewActivated | `event EventHandler<FocusedViewActivatedEventArgs>` | The FocusedViewActivated will be triggered when the current focused view has the enter key pressed on it. |
| FocusedViewEnterKeyPressed | `event EventHandler<FocusedViewActivatedEventArgs>` | [Obsolete("Do not use this, that will be deprecated.")] |
| ICustomFocusAlgorithm | `interface` | ICustomFocusAlgorithm is used to provide the custom keyboard focus algorithm for retrieving the next focusable view.<br />         The application can implement the interface and override the keyboard focus behavior.<br />         If the focus is changing within a layout container, then the layout container is queried first to provide the next focusable view.<br />         If this does not provide a valid view, then the Keyboard FocusManager will check focusable properties to determine the next focusable actor.<br />         If focusable properties are not set, then the keyboard FocusManager calls the GetNextFocusableView() method of this interface.<br /> |
| FocusGroupLoop | `bool` | Get the next focus actor. |
| FocusIndicator | `View` | Gets or sets the focus indicator view.<br />         This will replace the default focus indicator view in the FocusManager and will be added to the focused view as a highlight.<br /> |
| ClearFocusOnWindowFocusLost | `bool` | Gets or sets whether to clear focus when window loses focus.         By default, this is enabled.         When disabled, the focus state is preserved even when the window loses focus. |
| Instance | `static FocusManager` | Gets the singleton of the FocusManager object. |
| CurrentView | `View` | Moves the keyboard focus to the given view.<br />         Only one view can be focused at the same time.<br />         The view must be in the stage already and keyboard focusable.<br /> |
| ProposedView | `View` | The  proposed view. |
| CurrentView | `View` | The focus move direction. |
| NextView | `View` | The next focus view. |
| Previous | `View` | The previously focused view. |
| Current | `View` | The current focused view after focus changed. |
| CurrentView | `View` | Event arguments that passed via the FocusGroupChanged signal. |
| ForwardDirection | `bool` | The forward direction. |
| View | `View` | Event arguments that passed via the FocusedViewEnterKey signal. |
| View | `View` | Do not use this, that will be deprecated. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| PreFocusChange | `EventHandlerWithReturnType<object, PreFocusChangeEventArgs, View>` | Provides the functionality of handling keyboard navigation and maintaining the two-dimensional keyboard focus chain.<br />     It provides functionality of setting the focus and moving the focus in four directions( i.e., left, right, up, and down).<br />     It also draws a highlight for the focused view and sends an event when the focus is changed.<br /> |
| FocusChanging | `EventHandler<FocusChangingEventArgs>` | FocusChanging will be triggered before the focus is going to be changed.<br />         The FocusManager makes the best guess for which view to focus towards the given direction, but applications might want to change that.<br />         By connecting with this event, they can check the proposed view to focus and assign a different view if they wish.<br />         This event is only triggered when the navigation key is pressed and FocusManager tries to move the focus automatically.<br />         It won't be emitted for focus movement by calling the SetCurrentFocusView directly.<br /> |
| FocusChanged | `EventHandler<FocusChangedEventArgs>` | The FocusChanged will be triggered after the current focused view has been changed. |
| FocusGroupChanged | `EventHandler<FocusGroupChangedEventArgs>` | The FocusGroupChanged will be triggered when the focus group has been changed.<br />         If the current focus group has a parent layout control, the FocusManager will make the best guess for the next focus group to move the focus to in the given direction (forward or backward).<br />         If not, the application has to set the new focus.<br /> |
| FocusedViewActivated | `EventHandler<FocusedViewActivatedEventArgs>` | The FocusedViewActivated will be triggered when the current focused view has the enter key pressed on it. |
| FocusedViewEnterKeyPressed | `EventHandler<FocusedViewActivatedEventArgs>` | [Obsolete("Do not use this, that will be deprecated.")] |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetCurrentFocusView | `bool SetCurrentFocusView(View view)` | Provides the functionality of handling keyboard navigation and maintaining the two-dimensional keyboard focus chain.<br />     It provides functionality of setting the focus and moving the focus in four directions( i.e., left, right, up, and down).<br />     It also draws a highlight for the focused view and sends an event when the focus is changed.<br /> |
| GetCurrentFocusView | `View GetCurrentFocusView()` | Gets the current focused view. |
| MoveFocus | `bool MoveFocus(View.FocusDirection direction)` | Moves the focus to the next focusable view in the focus chain in the given direction (according to the focus traversal order). |
| ClearFocus | `void ClearFocus()` | Clears the focus from the current focused view if any, so that no view is focused in the focus chain.<br />         It will emit the FocusChanged event without the current focused view.<br /> |
| MoveFocusBackward | `void MoveFocusBackward()` | Move the focus to previous focused view. |
| SetAsFocusGroup | `void SetAsFocusGroup(View view, bool isFocusGroup)` | Sets whether the view is a focus group that can limit the scope of the focus movement to its child views in the focus chain.<br />         Layout controls set themselves as focus groups by default.<br /> |
| IsFocusGroup | `bool IsFocusGroup(View view)` | Checks whether the view is set as a focus group or not. |
| GetFocusGroup | `View GetFocusGroup(View view)` | Returns the closest ancestor of the given view that is a focus group. |
| SetCustomAlgorithm | `void SetCustomAlgorithm(ICustomFocusAlgorithm arg0)` | Provides the implementation of a custom focus algorithm interface to allow the application to define the focus logic.<br /> |
| EnableDefaultAlgorithm | `void EnableDefaultAlgorithm(bool enable)` | Sets to use the automatic focus moveing algorithm. <br />         It moves the focus to the view closest to the keyboard movement direction. |
| IsDefaultAlgorithmEnabled | `bool IsDefaultAlgorithmEnabled()` | Checks default focus moveing algorithm is enabled or not |
| GetNearestFocusableActor | `View GetNearestFocusableActor(View rootView, View focusedView, View.FocusDirection direction)` | Get the nearest focusable view. |
| SetFocusFinderRootView | `void SetFocusFinderRootView(View rootView)` | Sets the root view to start moving focus when DefaultAlgorithm is enabled.         This will only look for focusable Views within that View tree when looking for the next focus. |
| ResetFocusFinderRootView | `void ResetFocusFinderRootView()` | Reset the root view that starts moving focus when DefaultAlgorithm is enabled.         When reset, the window becomes root. |
| EnableFocusIndicator | `void EnableFocusIndicator(bool enable)` | Decide using focus indicator or not |
| IsFocusIndicatorEnabled | `bool IsFocusIndicatorEnabled()` | Check focus indicator is enabled or not |
| GetDefaultFocusIndicator | `View GetDefaultFocusIndicator()` | Get a default focus indicator |
| GetLastFocusChangeDevice | `FocusDeviceType GetLastFocusChangeDevice()` | Gets the device of the last focus change.         This method returns what caused the most recent focus change,         allowing applications to differentiate between different input methods. |
| GetLastFocusChangeDeviceName | `string GetLastFocusChangeDeviceName()` | Gets the device name that caused the last focus change.         This method returns the name of the input device that caused         the most recent focus change. For non-device inputs (like programmatic focus changes), an empty string may be returned. |
| SetFocusAlgorithm | `void SetFocusAlgorithm(FocusManager.ICustomFocusAlgorithm customFocusAlgorithm)` | Do not use this, that will be deprecated. |

