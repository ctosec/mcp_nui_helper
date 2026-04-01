# TableView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `View`
**Category:** basic

TableView is a layout container for aligning child actors in a grid like layout.<br />     TableView constraints the X and the Y position and the width and the height of the child actors.<br />     The Z position and depth are left intact so that the 3D model actors can also be laid out     in a grid without loosing their depth scaling.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| LayoutPolicy | `enum` | TableView is a layout container for aligning child actors in a grid like layout.<br />     TableView constraints the X and the Y position and the width and the height of the child actors.<br />     The Z position and depth are left intact so that the 3D model actors can also be laid out     in a grid without loosing their depth scaling.<br /> |
| Rows | `int` | Fixed with the given value. |
| Columns | `int` | The amount of columns in the table. |
| CellPadding | `Vector2` | Gets or sets the padding between cells in the TableView.         The padding vector specifying the horizontal and vertical padding. |
| LayoutRows | `PropertyMap` | This property allows setting the number of rows in the table view layout, which can affect how child views are arranged within the table. |
| LayoutColumns | `PropertyMap` | Gets or sets the number of layout columns. |
| rowIndex | `uint` | Adds a child to the table.<br />         If the row or column index is outside the table, the table gets resized bigger.<br /> |
| RowIndex | `uint` | Gets or sets the index or position of a row. |
| columnIndex | `uint` | Gets or sets the index of a column. |
| ColumnIndex | `uint` | Gets or sets the index or position of a column. |
| rowSpan | `uint` | The span of a row. |
| RowSpan | `uint` | Gets or sets the span of a row. |
| columnSpan | `uint` | Gets or sets the span of a column. |
| ColumnSpan | `uint` | Gets or sets the span of a column. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddChild | `bool AddChild(View child, TableView.CellPosition position)` | TableView is a layout container for aligning child actors in a grid like layout.<br />     TableView constraints the X and the Y position and the width and the height of the child actors.<br />     The Z position and depth are left intact so that the 3D model actors can also be laid out     in a grid without loosing their depth scaling.<br /> |
| GetChildAt | `View GetChildAt(TableView.CellPosition position)` | Returns a child from the given layout position. |
| RemoveChildAt | `View RemoveChildAt(TableView.CellPosition position)` | Removes a child from the given layout position. |
| FindChildPosition | `bool FindChildPosition(View child, TableView.CellPosition position)` | Finds the child's layout position. |
| InsertRow | `void InsertRow(uint rowIndex)` | Inserts a new row to the given index. |
| DeleteRow | `void DeleteRow(uint rowIndex)` | Deletes a row from the given index.<br />         Removed elements are deleted.<br /> |
| InsertColumn | `void InsertColumn(uint columnIndex)` | Inserts a new column to the given index. |
| DeleteColumn | `void DeleteColumn(uint columnIndex)` | Deletes a column from the given index.<br />         Removed elements are deleted.<br /> |
| Resize | `void Resize(uint rows, uint columns)` | Resizes the TableView. |
| SetCellPadding | `void SetCellPadding(Size2D padding)` | Sets the horizontal and the vertical padding between cells. |
| GetCellPadding | `Vector2 GetCellPadding()` | Gets the current padding as width and height. |
| SetFitHeight | `void SetFitHeight(uint rowIndex)` | Specifies this row as fitting its height to its children. |
| IsFitHeight | `bool IsFitHeight(uint rowIndex)` | Checks if the row is a fit row. |
| SetFitWidth | `void SetFitWidth(uint columnIndex)` | Specifies this column as fitting its width to its children. |
| IsFitWidth | `bool IsFitWidth(uint columnIndex)` | Checks if the column is a fit column. |
| SetFixedHeight | `void SetFixedHeight(uint rowIndex, float height)` | Sets a row to have a fixed height.<br />         Setting a fixed height of 0 has no effect.<br /> |
| GetFixedHeight | `float GetFixedHeight(uint rowIndex)` | Gets a row's fixed height. |
| SetRelativeHeight | `void SetRelativeHeight(uint rowIndex, float heightPercentage)` | Sets a row to have a relative height. Relative height means percentage of         the remainder of the table height after subtracting padding and fixed height rows.<br />         Setting a relative height of 0 has no effect.<br /> |
| GetRelativeHeight | `float GetRelativeHeight(uint rowIndex)` | Gets a row's relative height. |
| SetFixedWidth | `void SetFixedWidth(uint columnIndex, float width)` | Sets a column to have a fixed width.<br />         Setting a fixed width of 0 has no effect.<br /> |
| GetFixedWidth | `float GetFixedWidth(uint columnIndex)` | Gets a column's fixed width. |
| SetRelativeWidth | `void SetRelativeWidth(uint columnIndex, float widthPercentage)` | Sets a column to have a relative width. Relative width means percentage of         the remainder of the table width after subtracting padding and fixed width columns.<br />         Setting a relative width of 0 has no effect.<br /> |
| GetRelativeWidth | `float GetRelativeWidth(uint columnIndex)` | Gets a column's relative width. |
| SetCellAlignment | `void SetCellAlignment(TableView.CellPosition position, HorizontalAlignmentType horizontal, VerticalAlignmentType vertical)` | Sets the alignment on a cell.<br />         Cells without calling this function have the default values of left and top respectively.<br /> |

