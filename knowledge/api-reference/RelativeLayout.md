# RelativeLayout

**Namespace:** `Tizen.NUI`
**Inherits:** `LayoutGroup`
**Category:** layout

RelativeLayout calculates the size and position of all the children based on their relationship to each other.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Alignment | `enum` | RelativeLayout calculates the size and position of all the children based on their relationship to each other. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetLeftTarget | `View GetLeftTarget(BindableObject view)` | RelativeLayout calculates the size and position of all the children based on their relationship to each other. |
| GetRightTarget | `View GetRightTarget(BindableObject view)` | Gets right target object whose size and position is being used as reference. |
| GetTopTarget | `View GetTopTarget(BindableObject view)` | Gets top target object whose size and position is being used as reference. |
| GetBottomTarget | `View GetBottomTarget(BindableObject view)` | Gets bottom target object whose size and position is being used as reference. |
| GetLeftRelativeOffset | `float GetLeftRelativeOffset(View view)` | Gets left relative offset. |
| GetRightRelativeOffset | `float GetRightRelativeOffset(View view)` | Gets right relative offset. |
| GetTopRelativeOffset | `float GetTopRelativeOffset(View view)` | Gets top relative offset. |
| GetBottomRelativeOffset | `float GetBottomRelativeOffset(View view)` | Gets bottom relative offset. |
| GetHorizontalAlignment | `Alignment GetHorizontalAlignment(View view)` | Gets the horizontal alignment |
| GetVerticalAlignment | `Alignment GetVerticalAlignment(View view)` | Gets the vertical alignment |
| GetFillHorizontal | `bool GetFillHorizontal(View view)` | Gets the boolean value whether child fills its horizontal space. |
| GetFillVertical | `bool GetFillVertical(View view)` | Gets the boolean value whether child fills its vertical space. |
| SetLeftTarget | `void SetLeftTarget(View view, View reference)` | Specifies the left side edge of the child view relative to the target view. <br/>         null <paramref name="reference"/> means parent relative layout. |
| SetRightTarget | `void SetRightTarget(View view, View reference)` | Specifies the right side edge of the child view relative to the target view. <br/>         null <paramref name="reference"/> means parent relative layout. |
| SetTopTarget | `void SetTopTarget(View view, View reference)` | Specifies the top side edge of the child view relative to the target view. <br/>         null <paramref name="reference"/> means parent relative layout. |
| SetBottomTarget | `void SetBottomTarget(View view, View reference)` | Specifies the bottom side edge of the child view relative to the target view. <br/>         null <paramref name="reference"/> means parent relative layout. |
| SetLeftRelativeOffset | `void SetLeftRelativeOffset(View view, float value)` | Sets the relative offset for left target.         When <paramref name="value"/> is 0 the left edges of the left target and <paramref name="view"/> are aligned.<br/>         When <paramref name="value"/> is 1 the left edge of the <paramref name="view"/> is aligned to the right edge of the left target. |
| SetRightRelativeOffset | `void SetRightRelativeOffset(View view, float value)` | Sets the relative offset for right target.         When <paramref name="value"/> is 0 the right edge of the <paramref name="view"/> is aligned to the left edge of the right target.<br/>         When <paramref name="value"/> is 1 the right edges of the right target and <paramref name="view"/> are aligned. |
| SetTopRelativeOffset | `void SetTopRelativeOffset(View view, float value)` | Sets the relative offset for top target.         When <paramref name="value"/> is 0 the top edges of the top target and <paramref name="view"/> are aligned.<br/>         When <paramref name="value"/> is 1 the top edge of the <paramref name="view"/> is aligned to the bottom edge of the top target. |
| SetBottomRelativeOffset | `void SetBottomRelativeOffset(View view, float value)` | Sets the relative offset for bottom target.         When <paramref name="value"/> is 0 the bottom edge of the <paramref name="view"/> is aligned to the top edge of the bottom target.<br/>         When <paramref name="value"/> is 1 the bottom edges of the bottom target and <paramref name="view"/> are aligned. |
| SetHorizontalAlignment | `void SetHorizontalAlignment(View view, Alignment value)` | Sets the horizontal alignment of this child view. |
| SetVerticalAlignment | `void SetVerticalAlignment(View view, Alignment value)` | Sets the vertical alignment of this child view. |
| SetFillHorizontal | `void SetFillHorizontal(View view, bool value)` | Sets the boolean value whether child fills its horizontal space. |
| SetFillVertical | `void SetFillVertical(View view, bool value)` | Sets the boolean value whether child fills its vertical space. |
| ToFloat | `float ToFloat(this RelativeLayout.Alignment align)` | The alignment of the relative layout child. |

