# FlexLayout

**Namespace:** `Tizen.NUI`
**Inherits:** `LayoutGroup`
**Category:** layout

This class implements a flex layout.     The flex layout implementation is based on open source Facebook Yoga layout engine.     For more information about the flex layout API and how to use it please refer to https://yogalayout.com/docs/     We implement the subset of the API in the class below.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Direction | `FlexDirection` | This class implements a flex layout.     The flex layout implementation is based on open source Facebook Yoga layout engine.     For more information about the flex layout API and how to use it please refer to https://yogalayout.com/docs/     We implement the subset of the API in the class below. |
| Justification | `FlexJustification` | Gets/Sets the justification in the layout.         Justify content describes how to align children within the main axis of their container.<br/>         For example, you can use this property to center a child horizontally within a container with <see cref="Direction"/> set to <see cref="FlexDirection.Row"/>         or vertically within a container with <see cref="Direction"/> set to <see cref="FlexDirection.Column"/>. |
| WrapType | `FlexWrapType` | Gets/Sets the wrap in the layout.         The flex wrap property is set on containers and controls what happens when children overflow the size of the container along the main axis.<br/>         By default children are forced into a single line (which can shrink elements).<br/>         If wrapping is allowed items are wrapped into multiple lines along the main axis if needed. wrap reverse behaves the same, but the order of the lines is reversed.<br/>         When wrapping lines <see cref="Alignment"/> can be used to specify how the lines are placed in the container. |
| Alignment | `AlignmentType` | Gets/Sets the alignment of the layout content.         Alignment defines the distribution of lines along the cross-axis.<br/>         This only has effect when items are wrapped to multiple lines using flex wrap. |
| ItemsAlignment | `AlignmentType` | Gets/Sets the alignment of the layout items.         Items alignment describes how to align children along the cross axis of their container.<br/>         Align items is very similar to <see cref="Justification"/> but instead of applying to the main axis, align items applies to the cross axis. |
| FlexDirection | `enum` | Enumeration for the direction of the main axis in the flex container.         This determines the direction that flex items are laid out in the flex container. |
| FlexJustification | `enum` | The flexible items are displayed vertically as a column |
| FlexWrapType | `enum` | Items are positioned at the beginning of the container. |
| AlignmentType | `enum` | Flex items laid out in single line (shrunk to fit the flex container along the main axis) |
| PositionType | `enum` | Inherits the same alignment from the parent |
| FlexAlignmentSelf | `AlignmentType` | Flex items laid out relatively. |
| FlexAspectRatio | `float` | Gets or sets the aspect ratio of the flex layout item. |
| FlexBasis | `float` | Gets or sets the basis of the flex layout item. |
| FlexShrink | `float` | Gets or sets the shrink of the flex layout item. |
| FlexGrow | `float` | Gets or sets the grow of the flex layout item. |
| FlexItem | `HandleRef` | Gets or sets the item handle of the flex layout item. |
| MarkDirty | `bool` | Gets or sets the mark dirty of the flex layout item. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetFlexAlignmentSelf | `AlignmentType GetFlexAlignmentSelf(View view)` | This class implements a flex layout.     The flex layout implementation is based on open source Facebook Yoga layout engine.     For more information about the flex layout API and how to use it please refer to https://yogalayout.com/docs/     We implement the subset of the API in the class below. |
| GetFlexPositionType | `PositionType GetFlexPositionType(View view)` | Gets the position type of the child view. |
| GetFlexAspectRatio | `float GetFlexAspectRatio(View view)` | Gets the aspect ratio of the child view. |
| GetFlexBasis | `float GetFlexBasis(View view)` | Gets the basis of the child view. |
| GetFlexShrink | `float GetFlexShrink(View view)` | Gets the shrink of the child view. |
| GetFlexGrow | `float GetFlexGrow(View view)` | Gets the grow of the child view. |
| SetFlexAlignmentSelf | `void SetFlexAlignmentSelf(View view, AlignmentType value)` | Sets the alignment self of the child view.<br/>         Alignment self has the same options and effect as <see cref="ItemsAlignment"/> but instead of affecting the children within a container,         you can apply this property to a single child to change its alignment within its parent.<br/>         Alignment self overrides any option set by the parent with <see cref="ItemsAlignment"/>. |
| SetFlexPositionType | `void SetFlexPositionType(View view, PositionType value)` | Sets the position type of the child view.<br/>         The position type of an element defines how it is positioned within its parent.         By default a child is positioned relatively. This means a child is positioned according to the normal flow of the layout,         and then offset relative to that position based on the values of <see cref="View.Margin"/>.<br/>         When positioned absolutely an element doesn't take part in the normal layout flow.         It is instead laid out independent of its siblings. The position is determined based on the <see cref="View.Margin"/>. |
| SetFlexAspectRatio | `void SetFlexAspectRatio(View view, float value)` | Sets the aspect ratio of the child view.         Aspect ratio Defines as the ratio between the width and the height of a node         e.g. if a node has an aspect ratio of 2 then its width is twice the size of its height.<br/>         Aspect ratio accepts any floating point value > 0. this has higher priority than flex grow. |
| SetFlexBasis | `void SetFlexBasis(View view, float value)` | Sets the flex basis of the child view.         Flex basis is an axis-independent way of providing the default size of an item along the main axis.<br/>         Setting the flex basis of a child is similar to setting the width of that child if its parent is a container with <see cref="FlexDirection.Row"/>         or setting the height of a child if its parent is a container with <see cref="FlexDirection.Column"/>.<br/>         The flex basis of an item is the default size of that item, the size of the item before any flex grow and flex shrink calculations are performed. |
| SetFlexShrink | `void SetFlexShrink(View view, float value)` | Sets the flex shrink of the child view.         Flex shrink describes how to shrink children along the main axis in the case that the total size of the children overflow the size of the container on the main axis.<br/>         Flex shrink is very similar to flex grow and can be thought of in the same way if any overflowing size is considered to be negative remaining space.         These two properties also work well together by allowing children to grow and shrink as needed.<br/>         Flex shrink accepts any floating point value >= 0, with 1 being the default value. A container will shrink its children weighted by the child's flex shrink value. |
| SetFlexGrow | `void SetFlexGrow(View view, float value)` | Sets the grow of the child view.         Flex grow describes how any space within a container should be distributed among its children along the main axis.         After laying out its children, a container will distribute any remaining space according to the flex grow values specified by its children.<br/>         Flex grow accepts any floating point value >= 0, with 0 being the default value.<br/>         A container will distribute any remaining space among its children weighted by the child's flex grow value. |
| Dispose | `new void Dispose()` | Hidden API (Inhouse API).         Destructor. |

