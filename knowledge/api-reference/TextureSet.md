# TextureSet

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

TextureSet is a handle to an object that specifies the set of images used as textures by a renderer.<br />     The images have to be ordered in the same order they are declared in the shader.

## Properties

| Name | Type | Description |
|------|------|-------------|
| TextureCount | `uint` | TextureSet is a handle to an object that specifies the set of images used as textures by a renderer.<br />     The images have to be ordered in the same order they are declared in the shader. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetTexture | `void SetTexture(uint index, Texture texture)` | TextureSet is a handle to an object that specifies the set of images used as textures by a renderer.<br />     The images have to be ordered in the same order they are declared in the shader. |
| RemoveTexture | `void RemoveTexture(uint index)` | Removes the texture at position "index". |
| GetTexture | `Texture GetTexture(uint index)` | Gets the image at position "index". |
| SetSampler | `void SetSampler(uint index, Sampler sampler)` | Sets the sampler to be used by the image at position "index". |
| RemoveSampler | `void RemoveSampler(uint index)` | Removes the sampler at position "index". |
| GetSampler | `Sampler GetSampler(uint index)` | Sets the sampler to be used by the image at position "index". |

