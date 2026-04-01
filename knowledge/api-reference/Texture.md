# Texture

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Texture represents a texture object used as input or output by shaders.

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Upload | `bool Upload(PixelData pixelData)` | Texture represents a texture object used as input or output by shaders. |
| Upload | `bool Upload(PixelData pixelData, TextureUploadProperties properties)` | Uploads data to the texture from a PixelData object. |
| GenerateMipmaps | `void GenerateMipmaps()` | Generates mipmaps for the texture.<br />         This will auto generate all the mipmaps for the texture based on the data in the base level. |
| GetWidth | `uint GetWidth()` | Returns the width of the texture.<br /> |
| GetHeight | `uint GetHeight()` | Returns the height of the texture..<br /> |
| GenerateUrl | `ImageUrl GenerateUrl()` | Generate Url from texture. For default, we assume that texture is pre-multiplied by alpha. |
| GenerateUrl | `ImageUrl GenerateUrl(bool preMultiplied)` | Generate Url from texture with pre-multiplied by alpha information. |

