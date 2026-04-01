# Geometry

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Geometry is handle to an object that can be used to define a geometric elements.     The geometry is defined by VertexBuffer and IndexBuffer.

## Properties

| Name | Type | Description |
|------|------|-------------|
| PrimitiveType | `PrimitiveType` | Geometry is handle to an object that can be used to define a geometric elements.     The geometry is defined by VertexBuffer and IndexBuffer. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddVertexBuffer | `uint AddVertexBuffer(VertexBuffer vertexBuffer)` | Geometry is handle to an object that can be used to define a geometric elements.     The geometry is defined by VertexBuffer and IndexBuffer. |
| GetNumberOfVertexBuffers | `uint GetNumberOfVertexBuffers()` | Retrieves the number of vertex buffers that have been added to this geometry. |
| RemoveVertexBuffer | `void RemoveVertexBuffer(uint index)` | Removes a vertex buffer. |
| SetIndexBuffer | `void SetIndexBuffer(ushort[] indices, uint count)` | Sets a the index data to be used as a source of indices for the geometry         Setting this buffer will cause the geometry to be rendered using indices. |

