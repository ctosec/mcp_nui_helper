# CanvasView

**Namespace:** `Tizen.NUI.BaseComponents.VectorGraphics`
**Inherits:** `View`
**Category:** basic

CanvasView is a class for displaying vector primitives.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ViewBox | `Size2D` | CanvasView is a class for displaying vector primitives. |
| SynchronousLoading | `bool` | Whether we rasterize CanvasView synchronously or not. |
| RasterizationRequestManually | `bool` | Whether we rasterize CanvasView manually or not. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddDrawable | `void AddDrawable(Drawable drawable)` | CanvasView is a class for displaying vector primitives. |
| RemoveDrawable | `void RemoveDrawable(Drawable drawable)` | Remove drawable object to the CanvasView.         This method is similar to deregistration. |
| RemoveAllDrawables | `void RemoveAllDrawables()` | Remove all drawable objects added to the CanvasView. |
| RequestRasterization | `void RequestRasterization()` | Reqeust rasterization manually to the CanvasView. |

