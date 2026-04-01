# Renderable

**Namespace:** `Tizen.NUI`
**Inherits:** `Animatable`
**Category:** basic

Renderable is a handle to an object used to show content by combining a Geometry, a TextureSet and a shader.

## Properties

| Name | Type | Description |
|------|------|-------------|
| DepthIndex | `int` | Renderable is a handle to an object used to show content by combining a Geometry, a TextureSet and a shader. |
| FaceCullingMode | `FaceCullingMode` | Gets and Sets FaceCullingMode to define which face is culled or not. |
| BlendMode | `BlendMode` | Gets and Sets BlendMode.         BlendMode defines how source and destination colors are blended. |
| BlendEquationRgb | `BlendEquation` | Gets and Sets BlendEquation method for RGB channel.         BlendEquation specifies the mathematical operation for blending. |
| BlendEquationAlpha | `BlendEquation` | Gets and Sets BlendEquation method for Alpha channel.         BlendEquation specifies the mathematical operation for blending. |
| BlendFactorSrcRgb | `BlendFactor` | Gets and Sets BlendFactor for Rgb channel of Source.         BlendFactor determines the weight of source and destination colors. |
| BlendFactorDestRgb | `BlendFactor` | Gets and Sets BlendFactor for Rgb channel of Destination.         BlendFactor determines the weight of source and destination colors. |
| BlendFactorSrcAlpha | `BlendFactor` | Gets and Sets BlendFactor for Alpha channel of Source.         BlendFactor determines the weight of source and destination colors. |
| BlendFactorDestAlpha | `BlendFactor` | Gets and Sets BlendFactor for Alpha channel of Destination.         BlendFactor determines the weight of source and destination colors. |
| BlendColor | `Vector4` | Gets and Sets BlendColor. |
| BlendPreMultipliedAlpha | `bool` | Gets and Sets BlendPreMultipliedAlpha.         If it is true, it denotes the RGB color values are aleady multiplied by the alpha value.         It improves blending accuracy and avoidng artifacts in transparent areas. |
| FirstIndex | `int` | Gets and Sets first index to define effective range of indices to draw from bound index buffer. |
| IndexCount | `int` | Gets and Sets index count of effective range of indices to draw from bound index buffer. |
| DepthWriteMode | `DepthWriteMode` | Gets and Sets DepthWriteMode.         This property controls wheter depth buffer writing is enabled. |
| DepthFunction | `DepthFunction` | Gets and Sets DepthFunction.         This property defines the comparison function for depth testing |
| DepthTestMode | `DepthTestMode` | Gets and Sets DepthTestMode.         This property specifies how depth testing is applied to fragments. |
| RenderMode | `RenderMode` | Gets and Sets RenderMode.         This property specifies what aspects of rendering are enabled. |
| StencilFunction | `StencilFunction` | Gets and Sets Stencil Function.         This property specifies the test function for stencil buffering |
| StencilFunctionMask | `int` | Gets and Sets StencilFunctionMask.         A bitmask applied to the stencil test function |
| StencilFunctionReference | `int` | Gets and Sets StencilFunctionReference.         The reference value used in the stencil test. |
| StencilMask | `int` | Gets and Sets StencilMask.         This property controls which bits of the stencil buffer can be modified. |
| StencilOperationOnFail | `StencilOperation` | Gets and Sets StencilOperationOnFail.         Action when the stencil test fails. |
| StencilOperationOnZFail | `StencilOperation` | Gets and Sets StencilOperationOnZFail.         Action when the depth test fails but the stencil test passed. |
| StencilOperationOnZPass | `StencilOperation` | Gets and Sets StencilOperationOnZPass property.         Action when both stencil and depth tests pass. |
| UpdateArea | `UIExtents` | Gets and Sets extents of partial update area. |
| Geometry | `Geometry` | Gets and Sets Geometry of this Renderable. |
| Shader | `Shader` | Gets and Sets Shader of this Renderable. |
| TextureSet | `TextureSet` | Gets and Sets Textures of this Renderable. |

