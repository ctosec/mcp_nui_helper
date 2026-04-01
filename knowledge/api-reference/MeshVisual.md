# MeshVisual

**Namespace:** `Tizen.NUI`
**Inherits:** `VisualMap`
**Category:** basic

A class encapsulating the property map of the mesh visual.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ObjectURL | `string` | A class encapsulating the property map of the mesh visual. |
| MaterialURL | `string` | Gets or sets the location of the ".mtl" file.<br />         If not specified, then a textureless object is assumed.<br />         Optional. |
| MaterialtURL | `string` | Gets or sets the location of the ".mtl" file.<br />         If not specified, then a textureless object is assumed.<br />         Optional. |
| TexturesPath | `string` | Gets or sets the path to the directory the textures (including gloss and normal) are stored in.<br />         Mandatory if using material.<br /> |
| ShadingMode | `MeshVisualShadingModeValue` | Gets or sets the type of shading mode that the mesh will use.<br />         If anything the specified shading mode requires is missing, a simpler mode that can be handled with what has been supplied will be used instead.<br />         If not specified, it will use the best it can support (will try MeshVisualShadingModeValue.TexturedWithDetailedSpecularLighting first).<br />         Optional. |
| UseMipmapping | `bool` | Gets or sets whether to use mipmaps for textures or not.<br />         If not specified, the default is true.<br />         Optional. |
| UseSoftNormals | `bool` | Gets or sets whether to average normals at each point to smooth textures or not.<br />         If not specified, the default is true.<br />         Optional. |
| LightPosition | `Vector3` | Gets or sets the position, in the stage space, of the point light that applies lighting to the model.<br />         This is based off the stage's dimensions, so using the width and the height of the stage halved will correspond to the center,         and using all zeroes will place the light at the top-left corner.<br />         If not specified, the default is an offset outwards from the center of the screen.<br />         Optional. |

