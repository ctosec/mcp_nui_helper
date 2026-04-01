# LayoutItem

**Namespace:** `Tizen.NUI`
**Inherits:** `IDisposable`
**Category:** basic

Base class for layouts. It is used to layout a View     It can be laid out by a LayoutGroup.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Owner | `View` | Base class for layouts. It is used to layout a View     It can be laid out by a LayoutGroup. |
| LayoutWithTransition | `bool` | Use transition for layouting child |
| SetPositionByLayout | `bool` | Set position by layouting result |
| Margin | `Extents` | Margin for this LayoutItem |
| Padding | `Extents` | Padding for this LayoutItem |
| MeasuredWidth | `MeasuredSize` | Default constructor of LayoutItem class. |
| MeasuredHeight | `MeasuredSize` | Get the measured height (without any measurement flags).<br />         This method should be used only during measurement and layout calculations.<br /> |
| SuggestedMinimumWidth | `LayoutLength` | Returns the suggested minimum width that the layout should use.<br />         This returns the maximum of the layout's minimum width and the owner's natural width.<br /> |
| SuggestedMinimumHeight | `LayoutLength` | Returns the suggested minimum height that the layout should use.<br />         This returns the maximum of the layout's minimum height and the owner's natural height.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Measure | `void Measure(MeasureSpecification widthMeasureSpec, MeasureSpecification heightMeasureSpec)` | Base class for layouts. It is used to layout a View     It can be laid out by a LayoutGroup. |
| Layout | `void Layout(LayoutLength left, LayoutLength top, LayoutLength right, LayoutLength bottom)` | Assign a size and position to a layout and all of its descendants. <br />         This is the second phase of the layout mechanism.  (The first is measuring). In this phase, each parent         calls layout on all of its children to position them.  This is typically done using the child<br />         measurements that were stored in the measure pass.<br /> |
| Layout | `void Layout(LayoutLength left, LayoutLength top, LayoutLength right, LayoutLength bottom, bool independent)` | Assign a size and position to a layout and all of its descendants. <br />         This is the second phase of the layout mechanism.  (The first is measuring). In this phase, each parent         calls layout on all of its children to position them.  This is typically done using the child<br />         measurements that were stored in the measure pass.<br /> |
| GetDefaultSize | `LayoutLength GetDefaultSize(LayoutLength size, MeasureSpecification measureSpecification)` | Utility to return a default size.<br />         Uses the supplied size if the MeasureSpecification imposed no constraints. Will get larger if allowed by the         MeasureSpecification.<br /> |
| GetParent | `ILayoutParent GetParent()` | Get the Layouts parent |
| RequestLayout | `void RequestLayout()` | Request that this layout is re-laid out.<br />         This will make this layout and all it's parent layouts dirty.<br /> |
| Dispose | `void Dispose()` | Predicate to determine if this layout has been requested to re-layout.<br /> |
| ChangeLayoutSiblingOrder | `void ChangeLayoutSiblingOrder(int order)` | Sets the sibling order of the layout item so the layout can be defined within the same parent. |
| IsPaddingHandledByNative | `bool IsPaddingHandledByNative()` | Indicates if padding is handled by native.         By default, padding is not handled by native if layout is set to view.         Instead, padding is handled by layout if layout is set to view.         If padding is not handled by native, then view padding is copied to layout padding and         view padding is initialized to zero not to make native handle padding.         If padding is handled by native, then view padding is preserved and padding is handled         by native. |

