# GraphicsTypeManager

**Namespace:** `Tizen.NUI`
**Category:** basic

GraphicsTypeManager class to manage various types.

## Properties

| Name | Type | Description |
|------|------|-------------|
| GraphicsTypeManager | `class` | GraphicsTypeManager class to manage various types. |
| ScalingFactor | `float` | Constant of low(120) density dpi. |
| Dpi | `int` | Dot per Inch value from system.         See Vector Dpi in <see cref="Tizen.NUI.Window" /> also. |
| ScaledDpi | `int` | Scaled Dpi for GraphicsTypeManager.         ScaledDpi is scaled from Dpi with custom ScalingFactor. |
| BaselineDpi | `int` | Default baseline dpi. Medium(160) density dpi is origianlly provided. |
| Density | `float` | Density of display. |
| ScaledDensity | `float` | Scaled Density of display. |
| Instance | `static GraphicsTypeManager` | An unique Singleton Instance of GraphicsTypeManager |
| Dp | `DpTypeConverter` | Default DpTypeConverter. use this Converter to convert Dp to/from other types.         See <see cref="Tizen.NUI.DpTypeConverter" />. |
| Sp | `SpTypeConverter` | Default SpTypeConverter. use this Converter to convert Sp to/from other types.         See <see cref="Tizen.NUI.SpTypeConverter" />. |
| Sdp | `SdpTypeConverter` | Default SdpTypeConverter. use this Converter to convert Sdp to/from other types.         See <see cref="Tizen.NUI.SdpTypeConverter" />. |
| Point | `PointTypeConverter` | Default PointTypeConverter. use this Converter to convert Point to/from other types.         See <see cref="Tizen.NUI.PointTypeConverter" />. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| ConvertScriptToPixel | `float ConvertScriptToPixel(string scriptValue)` | GraphicsTypeManager class to manage various types. |

