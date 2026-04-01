# GridLayout

**Namespace:** `Tizen.NUI`
**Inherits:** `LayoutGroup`
**Category:** layout

GridLayout is a 2D grid pattern layout that consists of a set of rows and columns.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Orientation | `enum` | GridLayout is a 2D grid pattern layout that consists of a set of rows and columns. |
| ColumnSpacing | `float` | Horizontal (row) |
| RowSpacing | `float` | The distance between rows. |
| GridOrientation | `Orientation` | Get/Set the orientation in the layout |
| Columns | `int` | GridLayout Constructor. |
| Rows | `int` | Gets or Sets the number of rows in the grid. |
| StretchFlags | `enum` | Measure the layout and its content to determine the measured width and the measured height.<br /> |
| Alignment | `enum` | Respect measured size of the child. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GetColumn | `int GetColumn(View view)` | GridLayout is a 2D grid pattern layout that consists of a set of rows and columns. |
| GetColumnSpan | `int GetColumnSpan(View view)` | Gets the column span. |
| GetRow | `int GetRow(View view)` | Gets the row index. |
| GetRowSpan | `int GetRowSpan(View view)` | Gets the row span. |
| GetHorizontalStretch | `StretchFlags GetHorizontalStretch(View view)` | Gets the value how child is resized within its horizontal space. |
| GetVerticalStretch | `StretchFlags GetVerticalStretch(View view)` | Gets the value how child is resized within its vertical space. |
| GetHorizontalAlignment | `Alignment GetHorizontalAlignment(View view)` | Gets the horizontal alignment of this child. |
| GetVerticalAlignment | `Alignment GetVerticalAlignment(View view)` | Gets the vertical alignment of this child. |
| SetColumn | `void SetColumn(View view, int value)` | Sets the column index the child occupies. A default column is <see cref="AutoColumn"/>.<br/>         If column is a <see cref="AutoColumn"/>, child will be automatically laid out depending on <see cref="GridOrientation"/>. |
| SetColumnSpan | `void SetColumnSpan(View view, int value)` | Sets the column span the child occupies. the default value is 1. |
| SetRow | `void SetRow(View view, int value)` | Sets the row index the child occupies. A default row index is <see cref="AutoRow"/>.<br/>         If row is a <see cref="AutoRow"/>, child will be automatically laid out depending on <see cref="GridOrientation"/>. |
| SetRowSpan | `void SetRowSpan(View view, int value)` | Sets the row span the child occupies. the default value is 1. |
| SetHorizontalStretch | `void SetHorizontalStretch(View view, StretchFlags value)` | Sets the value how child is resized within its horizontal space. <see cref="StretchFlags.None"/> by default. |
| SetVerticalStretch | `void SetVerticalStretch(View view, StretchFlags value)` | Set the value how child is resized within its vertical space. <see cref="StretchFlags.None"/> by default. |
| SetHorizontalAlignment | `void SetHorizontalAlignment(View view, Alignment value)` | Set the horizontal alignment of this child inside the cells. <see cref="Alignment.Start"/> by default. |
| SetVerticalAlignment | `void SetVerticalAlignment(View view, Alignment value)` | Set the vertical alignment of this child inside the cells. |
| ToFloat | `float ToFloat(this GridLayout.Alignment align)` | The distance between columns. |

