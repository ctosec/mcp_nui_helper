# GLView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `View`
**Category:** basic

GLView allows drawing with OpenGL.     GLView creates a context, a surface, and a render thread.     The render thread invokes user's callbacks.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ColorFormat | `enum` | GLView allows drawing with OpenGL.     GLView creates a context, a surface, and a render thread.     The render thread invokes user's callbacks. |
| RenderingMode | `GLRenderingMode` | 8 red bits, 8 green bits, 8 blue bits |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| GLInitializeDelegate | `delegate void GLInitializeDelegate()` | GLView allows drawing with OpenGL.     GLView creates a context, a surface, and a render thread.     The render thread invokes user's callbacks. |
| GLRenderFrameDelegate | `delegate int GLRenderFrameDelegate()` | Type of callback to render the frame with OpenGLES APIs.         If the return value of this callback is not 0, the eglSwapBuffers() will be called. |
| GLTerminateDelegate | `delegate void GLTerminateDelegate()` | Type of callback to clean up GL resource. |
| ViewResizeDelegate | `delegate void ViewResizeDelegate(int w, int h)` | Type of resize callback |
| RegisterGLCallbacks | `void RegisterGLCallbacks(GLInitializeDelegate glInit, GLRenderFrameDelegate glRenderFrame, GLTerminateDelegate glTerminate)` | Creates an initialized GLView. |
| SetResizeCallback | `void SetResizeCallback(ViewResizeDelegate callback)` | Sets the resize callback to the GLView.         When GLView is resized, the callback is invoked and it passes the width and height. |
| SetGraphicsConfig | `bool SetGraphicsConfig(bool depth, bool stencil, int msaa, GLESVersion version)` | Sets graphics configuration for the GLView |
| RenderOnce | `void RenderOnce()` | Renders once more, even when paused. |
| Terminate | `void Terminate()` | Terminate gl calls forcibly. |

