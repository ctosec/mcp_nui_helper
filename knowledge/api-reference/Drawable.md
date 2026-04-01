# Drawable

**Namespace:** `Tizen.NUI.BaseComponents.VectorGraphics`
**Inherits:** `BaseHandle`
**Category:** basic

Drawable is a object class for drawing a vector primitive.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Opacity | `float` | Drawable is a object class for drawing a vector primitive. |
| BoundingBox | `Vector4` | The bounding box of the drawable object to which no transformation has been applied. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| ClipPath | `void ClipPath(Drawable clip)` | Drawable is a object class for drawing a vector primitive. |
| Mask | `void Mask(Drawable mask, MaskType type)` | The pixels of mask drawable and own drawable are blended according to MaskType. |
| Rotate | `bool Rotate(float degree)` | Set the angle of rotation transformation. |
| Scale | `bool Scale(float factor)` | Set the scale value of scale transformation. |
| Transform | `bool Transform(float[] matrix)` | Set the matrix value for affine transform. |
| Translate | `bool Translate(float x, float y)` | Set the x, y movement value of translate transformation. |

