# PixelData

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

The PixelData object holds a pixel buffer.<br />     The PixelData takes over the ownership of the pixel buffer.<br />     The buffer memory must not be released outside of this class, instead,     the PixelData object will release it automatically when the reference count falls to zero.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ReleaseFunction | `enum` | The PixelData object holds a pixel buffer.<br />     The PixelData takes over the ownership of the pixel buffer.<br />     The buffer memory must not be released outside of this class, instead,     the PixelData object will release it automatically when the reference count falls to zero. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GenerateUrl | `ImageUrl GenerateUrl()` | The PixelData object holds a pixel buffer.<br />     The PixelData takes over the ownership of the pixel buffer.<br />     The buffer memory must not be released outside of this class, instead,     the PixelData object will release it automatically when the reference count falls to zero. |
| GenerateUrl | `ImageUrl GenerateUrl(bool preMultiplied)` | Generate Url from pixel data with pre-multiplied by alpha information. |
| GetWidth | `uint GetWidth()` | Gets the width of the buffer in pixels. |
| GetHeight | `uint GetHeight()` | Gets the height of the buffer in pixels. |
| GetPixelFormat | `PixelFormat GetPixelFormat()` | Gets the pixel format. |
| GetStrideBytes | `uint GetStrideBytes()` | Gets the stride of the buffer in bytes. 0 means the buffer is tightly packed |

