# PixelBuffer

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

The PixelBuffer object holds a pixel buffer.     The PixelBuffer keeps ownership of its initial buffer. However, the     user is free to modify the pixel data, either directly or via image operations.     In order to upload the pixel data to the texture memory, there are two     possibilities, either convert it back to a PixelData object, which     releases the PixelBuffer object, leaving the user with an empty handle     (ideal for one-time indirect image manipulation) or create a new     PixelData object from this object, leaving the buffer intact (ideal     for continuous manipulation).

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Convert | `PixelData Convert(PixelBuffer pixelBuffer)` | The PixelBuffer object holds a pixel buffer.     The PixelBuffer keeps ownership of its initial buffer. However, the     user is free to modify the pixel data, either directly or via image operations.     In order to upload the pixel data to the texture memory, there are two     possibilities, either convert it back to a PixelData object, which     releases the PixelBuffer object, leaving the user with an empty handle     (ideal for one-time indirect image manipulation) or create a new     PixelData object from this object, leaving the buffer intact (ideal     for continuous manipulation). |
| CreatePixelData | `PixelData CreatePixelData()` | Copy the data from this object into a new PixelData object, which could be         used for uploading to a texture. |
| GetWidth | `uint GetWidth()` | Gets the width of the buffer in pixels. |
| GetHeight | `uint GetHeight()` | Gets the height of the buffer in pixels. |
| GetPixelFormat | `PixelFormat GetPixelFormat()` | Gets the pixel format. |
| GetStrideBytes | `uint GetStrideBytes()` | Gets the stride of the buffer in bytes. 0 means the buffer is tightly packed |
| ApplyMask | `void ApplyMask(PixelBuffer mask, float contentScale, bool cropToMask)` | Apply the mask to this pixel data and return a new pixel data that contains         the masked image. If this PixelBuffer does not have an alpha channel, then         the resultant PixelBuffer will be converted to a format that supports at         least the width of the color channels and the alpha channel from the mask.         If cropToMask is set to <c>true</c>, then the contentScale is applied first to         this buffer, and the target buffer is cropped to the size of the mask. If         it is set to <c>false</c>, then the mask is scaled to match the size of this buffer         before the mask is applied. |
| ApplyMask | `void ApplyMask(PixelBuffer mask, float contentScale)` | Apply the mask to this pixel data and return a new pixel data containing         the masked image. If this PixelBuffer does not have an alpha channel, then         the resultant PixelBuffer will be converted to a format that supports at         least the width of the color channels and the alpha channel from the mask.         If cropToMask is set to <c>true</c>, then the contentScale is applied first to         this buffer, and the target buffer is cropped to the size of the mask. If         it is set to <c>false</c>, then the mask is scaled to match the size of this buffer         before the mask is applied. |
| ApplyMask | `void ApplyMask(PixelBuffer mask)` | Apply the mask to this pixel data and return a new pixel data containing         the masked image. If this PixelBuffer does not have an alpha channel, then         the resultant PixelBuffer will be converted to a format that supports at         least the width of the color channels and the alpha channel from the mask.         If cropToMask is set to <c>true</c>, then the contentScale is applied first to         this buffer, and the target buffer is cropped to the size of the mask. If         it is set to <c>false</c>, then the mask is scaled to match the size of this buffer         before the mask is applied. |
| ApplyGaussianBlur | `void ApplyGaussianBlur(float blurRadius)` | Apply a Gaussian blur to this pixel data with the given radius.         A bigger radius will yield a blurrier image. Only works for pixel data in RGBA format. |
| Crop | `void Crop(ushort x, ushort y, ushort width, ushort height)` | Crops this buffer to the given crop rectangle. |
| Resize | `void Resize(ushort width, ushort height)` | Resizes the buffer to the given dimensions. |
| Rotate | `bool Rotate(Degree angle)` | Rotate the buffer by the given angle. |
| GetBrightness | `uint GetBrightness()` | Gets the pixel buffer |

