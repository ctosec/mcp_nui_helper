# LayoutGroup

**Namespace:** `Tizen.NUI`
**Inherits:** `LayoutItem`
**Category:** basic

LayoutGroup class providing container functionality.

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `void Add(LayoutItem childLayout)` | LayoutGroup class providing container functionality. |
| RemoveAll | `void RemoveAll()` | Remove all layout children.<br /> |
| Remove | `void Remove(LayoutItem layoutItem)` | From ILayoutParent |
| ChangeLayoutChildOrder | `void ChangeLayoutChildOrder(LayoutItem child, int order)` | Sets the order of the child layout in the layout group. |
| GetChildMeasureSpecification | `MeasureSpecification GetChildMeasureSpecification(MeasureSpecification parentMeasureSpec, LayoutLength padding, LayoutLength childDimension)` | If the child has a layout then it is removed from the parent layout. |
| SetAttachedValue | `void SetAttachedValue(Binding.BindableObject bindable, Binding.BindableProperty property, object value)` | Measure the layout and its content to determine the measured width and the measured height.<br />         If this method is overridden, it is the subclass's responsibility to make         sure the measured height and width are at least the layout's minimum height         and width. <br /> |

