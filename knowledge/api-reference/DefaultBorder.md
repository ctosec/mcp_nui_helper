# DefaultBorder

**Namespace:** `Tizen.NUI`
**Inherits:** `BindableObject`
**Category:** basic

This class creates a border UI.

## Properties

| Name | Type | Description |
|------|------|-------------|
| BorderLineThickness | `uint` | This class creates a border UI. |
| TouchThickness | `uint` | The thickness of the border's touch area. |
| BorderHeight | `float` | The height of the border.         This value is the initial value used when creating borders. |
| MinSize | `Size2D` | The minimum size by which the window will small. |
| MaxSize | `Size2D` | The maximum size by which the window will big. |
| BorderWindow | `Window` | The window with borders added. |
| OverlayMode | `bool` | Whether overlay mode.         If overlay mode is true, the border area is hidden when the window is maximized.         And if you touched at screen, the border area is shown on the screen.         Default value is false; |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| UpdateProperty | `void UpdateProperty()` | This class creates a border UI. |
| CreateTopBorderView | `bool CreateTopBorderView(View topView)` | Creates a default border |
| CreateBottomBorderView | `bool CreateBottomBorderView(View bottomView)` | Create bottom border UI. User can override this method to draw bottom border UI. |
| CreateBorderView | `void CreateBorderView(View borderView)` | Create border UI. User can override this method to draw border UI.         A top border and a bottom border are added to this view. |
| OnLeftTopCornerIconTouched | `bool OnLeftTopCornerIconTouched(object sender, View.TouchEventArgs e)` | This is an event callback when the left top corner icon is touched. |
| OnRightTopCornerIconTouched | `bool OnRightTopCornerIconTouched(object sender, View.TouchEventArgs e)` | This is an event callback when the right bottom corner icon is touched. |
| OnLeftBottomCornerIconTouched | `bool OnLeftBottomCornerIconTouched(object sender, View.TouchEventArgs e)` | This is an event callback when the left bottom corner icon is touched. |
| OnRightBottomCornerIconTouched | `bool OnRightBottomCornerIconTouched(object sender, View.TouchEventArgs e)` | This is an event callback when the right bottom corner icon is touched. |
| OnMinimizeIconTouched | `bool OnMinimizeIconTouched(object sender, View.TouchEventArgs e)` | Minimize border window. |
| OnMaximizeIconTouched | `bool OnMaximizeIconTouched(object sender, View.TouchEventArgs e)` | Maximize border window. |
| OnCloseIconTouched | `bool OnCloseIconTouched(object sender, View.TouchEventArgs e)` | Close border window. |
| OnCreated | `void OnCreated(View borderView)` | Called after the border UI is created. |
| OnRequestResize | `void OnRequestResize()` | Called when requesting a resize |
| OnResized | `void OnResized(int width, int height)` | Called when the window is resized. |
| OnRequestMove | `void OnRequestMove()` | Called when requesting a move |
| OnMoved | `void OnMoved(int x, int y)` | Called when the window is moved. |
| OnMoveCompleted | `void OnMoveCompleted(int x, int y)` | Called when window has been moved the display server. |
| OnResizeCompleted | `void OnResizeCompleted(int width, int height)` | Called when window has been resized the display server. |
| OnMaximize | `void OnMaximize(bool isMaximized)` | Called when the window is maximized. |
| OnMinimize | `void OnMinimize(bool isMinimized)` | Called when the window is minimized. |
| OnOverlayMode | `void OnOverlayMode(bool enabled)` | Called when there is a change in overlay mode. |
| OverlayBorderShow | `bool OverlayBorderShow(uint time = 3000)` | Show the border when OverlayMode is true and the window is now Maximize. |
| OverlayBorderHide | `bool OverlayBorderHide()` | Hide the border when OverlayMode is true and the window is now Maximize. |

