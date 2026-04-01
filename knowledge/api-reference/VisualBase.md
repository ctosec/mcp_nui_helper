# VisualBase

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Sets whether the actor should be focusable by keyboard navigation.<br />     Visuals reuse geometry, shader etc. across controls. They ensure that the renderer and texture sets exist only when control is on window.<br />     Each visual also responds to actor size and color change, and provides clipping at the renderer level.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Name | `string` | Sets whether the actor should be focusable by keyboard navigation.<br />     Visuals reuse geometry, shader etc. across controls. They ensure that the renderer and texture sets exist only when control is on window.<br />     Each visual also responds to actor size and color change, and provides clipping at the renderer level.<br /> |
| DepthIndex | `int` | The depth index of this visual. |
| Creation | `PropertyMap` | Creates the property map representing this visual. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetTransformAndSize | `void SetTransformAndSize(PropertyMap transform, Vector2 controlSize)` | Sets whether the actor should be focusable by keyboard navigation.<br />     Visuals reuse geometry, shader etc. across controls. They ensure that the renderer and texture sets exist only when control is on window.<br />     Each visual also responds to actor size and color change, and provides clipping at the renderer level.<br /> |
| GetHeightForWidth | `float GetHeightForWidth(float width)` | Returns the height for a given width. |
| GetWidthForHeight | `float GetWidthForHeight(float height)` | Returns the width for a given height. |
| GetNaturalSize | `void GetNaturalSize(Size2D naturalSize)` | Returns the natural size of the visual.<br />         Deriving classes stipulate the natural size and by default a visual has a zero natural size.<br />         A visual may not actually have a natural size until it has been placed on window and acquired all it's resources.<br /> |

