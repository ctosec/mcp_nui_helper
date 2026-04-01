# VisualFactory

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

The VisualFactory is a singleton object that provides and shares visuals between views.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Instance | `static VisualFactory` | The VisualFactory is a singleton object that provides and shares visuals between views. |
| DefaultCreationOptions | `VisualFactoryCreationOptions` | Do not use this, that will be deprecated. Use VisualFactory.Instance instead. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Get | `VisualFactory Get()` | The VisualFactory is a singleton object that provides and shares visuals between views. |
| CreateVisual | `VisualBase CreateVisual(PropertyMap propertyMap)` | Default creation options for the visual factory. |
| UsePreCompiledShader | `void UsePreCompiledShader()` | Compile the visual shader in advance. Afterwards,         when a visual using a new shader is requested, the pre-compiled shader is used. |
| AddPrecompileShader | `bool AddPrecompileShader(PropertyMap option)` | Adds a list of pre-compiled shaders to the visual factory. |

