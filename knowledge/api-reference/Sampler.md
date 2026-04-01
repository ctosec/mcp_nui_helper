# Sampler

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Sampler is a handle to an object that can be used to provide the sampling parameters to sample textures.

## Properties

| Name | Type | Description |
|------|------|-------------|
| MinificationFilter | `SamplerFilter` | Sampler is a handle to an object that can be used to provide the sampling parameters to sample textures. |
| MagnificationFilter | `SamplerFilter` | Determines how a texture is sampled when scaled up |
| MipmapFilter | `MipmapFilter` | Specifies how mipmaps are used for texture sampling |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| SetWrapMode | `void SetWrapMode(WrapModeType uWrap, WrapModeType vWrap)` | Sampler is a handle to an object that can be used to provide the sampling parameters to sample textures. |
| SetWrapMode | `void SetWrapMode(WrapModeType rWrap, WrapModeType sWrap, WrapModeType tWrap)` | Sets the wrap modes for this sampler. |

