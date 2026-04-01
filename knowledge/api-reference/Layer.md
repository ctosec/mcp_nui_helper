# Layer

**Namespace:** `Tizen.NUI`
**Inherits:** `Container`
**Category:** basic

Layers provide a mechanism for overlaying groups of actors on top of each other.

## Properties

| Name | Type | Description |
|------|------|-------------|
| LayerBehavior | `enum` | Layers provide a mechanism for overlaying groups of actors on top of each other. |
| Viewport | `Rectangle` | UI control rendering mode (default mode).             This mode is designed for UI controls that can overlap. In this             mode renderer order will be respective to the tree hierarchy of             Actors.<br />             The rendering order is depth first, so for the following actor tree,             A will be drawn first, then B, D, E, then C, F.  This ensures that             overlapping actors are drawn as expected (whereas, with breadth first             traversal, the actors would interleave).<br /> |
| Opacity | `float` | Retrieves and sets the layer's opacity.<br /> |
| Visibility | `bool` | Retrieves and sets the layer's visibility. |
| ChildCount | `uint` | Get the number of children held by the layer. |
| Name | `string` | Gets or sets the layer's name. |
| Depth | `uint` | Queries the depth of the layer.<br />         0 is the bottommost layer, higher number is on the top.<br /> |
| ID | `uint` | Gets the Layer's ID         Readonly |
| Ignored | `bool` | Gets of sets the flag to identify the Layer will be ignored or not.         If the Layer is marked as ignored, it will not be rendered and will be excluded from render thread computation.         So, the render thread properties like WorldPosition and WorldColor become inaccurate. |
| VisibilityChanged | `event EventHandler<VisibilityChangedEventArgs>` | Gets the number of currently alived Layer object. |
| AggregatedVisibilityChanged | `event EventHandler<AggregatedVisibilityChangedEventArgs>` | An event for aggregated visibility change which can be used to subscribe or unsubscribe the event handler.<br />         This event is sent when visible property of this or any of its parents (right up to the root) and Window changes.<br /> |
| Layer | `Layer` | Event arguments of visibility changed. |
| Visibility | `bool` | Whether the layer is now visible or not. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| VisibilityChanged | `EventHandler<VisibilityChangedEventArgs>` | Layers provide a mechanism for overlaying groups of actors on top of each other. |
| AggregatedVisibilityChanged | `EventHandler<AggregatedVisibilityChangedEventArgs>` | An event for aggregated visibility change which can be used to subscribe or unsubscribe the event handler.<br />         This event is sent when visible property of this or any of its parents (right up to the root) and Window changes.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `void Add(View child)` | Layers provide a mechanism for overlaying groups of actors on top of each other. |
| Remove | `void Remove(View child)` | Removes a child view from this layer. If the view was not a child of this layer, this is a no-op. |
| GetChildAt | `View GetChildAt(uint index)` | Retrieves a child view by the index. |
| GetParent | `Container GetParent()` | Get parent of the layer. |
| GetChildCount | `uint GetChildCount()` | Get the child count of the layer. |
| DownCast | `Layer DownCast(BaseHandle handle)` | Downcasts a handle to layer handle. |
| FindChildById | `View FindChildById(uint id)` | Search through this layer's hierarchy for a view with the given unique ID. |
| Raise | `void Raise()` | Increments the depth of the layer. |
| Lower | `void Lower()` | Decrements the depth of the layer. |
| RaiseToTop | `void RaiseToTop()` | Raises the layer to the top. |
| LowerToBottom | `void LowerToBottom()` | Lowers the layer to the bottom. |
| MoveAbove | `void MoveAbove(Layer target)` | Moves the layer directly above the given layer.<br />         After the call, this layer's depth will be immediately above target.<br /> |
| MoveBelow | `void MoveBelow(Layer target)` | Moves the layer directly below the given layer.<br />         After the call, this layer's depth will be immediately below target.<br /> |
| SetTouchConsumed | `void SetTouchConsumed(bool consume)` | Inhouse API.         This allows the user to specify whether this layer should consume touch (including gestures).         If set, any layers behind this layer will not be hit-test. |
| SetHoverConsumed | `void SetHoverConsumed(bool consume)` | Inhouse API.         This allows the user to specify whether this layer should consume hover.         If set, any layers behind this layer will not be hit-test. |

