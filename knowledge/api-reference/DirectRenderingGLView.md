# DirectRenderingGLView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `View`
**Category:** basic

DirectRenderingGLView allows drawing with OpenGL. You can render to a Window directly.     DirectRenderingGLView creates a context.

## Properties

| Name | Type | Description |
|------|------|-------------|
| RenderCallbackInput | `class` | DirectRenderingGLView allows drawing with OpenGL. You can render to a Window directly.     DirectRenderingGLView creates a context. |
| Mvp | `Matrix` | MVP matrix |
| Projection | `Matrix` | Projection matrix |
| Size | `Vector2` | The size of the DirectRenderingGLView |
| WorldColor | `Color` | The World color of the DirectRenderingGLView |
| ClippingBox | `Rectangle` | The area of DirectRenderingGLView. You can use this for glScissor() |
| TextureBindings | `ReadOnlyCollection<int>` | Texture bindings |
| ColorFormat | `enum` | Type of callback to initialize OpenGLES. |
| BackendMode | `enum` | 8 red bits, 8 green bits, 8 blue bits |
| RenderingMode | `GLRenderingMode` | DirectRendering mode executes GL code within DALi graphics             pipeline but creates isolated context hence it doesn't alter any             DALi rendering state. When Renderer is about to be drawn, the callback             will be executed and the custom code "injected" into the pipeline.             This allows rendering directly to the surface rather than offscreen. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GLInitializeDelegate | `delegate void GLInitializeDelegate()` | DirectRenderingGLView allows drawing with OpenGL. You can render to a Window directly.     DirectRenderingGLView creates a context. |
| GLRenderFrameDelegate | `delegate int GLRenderFrameDelegate(in RenderCallbackInput input)` | Type of callback to render the frame with OpenGLES APIs.         If the return value of this callback is not 0, the eglSwapBuffers() will be called. |
| GLTerminateDelegate | `delegate void GLTerminateDelegate()` | Type of callback to clean up GL resource. |
| RegisterGLCallbacks | `void RegisterGLCallbacks(GLInitializeDelegate glInit, GLRenderFrameDelegate glRenderFrame, GLTerminateDelegate glTerminate)` | Creates an initialized DirectRenderingGLView. |
| BindTextureResources | `void BindTextureResources(List<Texture> textures)` | Binds textures to own context.         You can get the bind IDs in RenderCallbackInput in the glRenderFrame callback. |
| SetGraphicsConfig | `bool SetGraphicsConfig(bool depth, bool stencil, int msaa, GLESVersion version)` | Sets graphics configuration for the DirectRenderingGLView |
| RenderOnce | `void RenderOnce()` | Renders once more, even when paused. |
| Terminate | `void Terminate()` | Terminate gl calls forcibly. |

