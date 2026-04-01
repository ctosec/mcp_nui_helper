# RendererParameters

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `Disposable`
**Category:** basic

Class with the text and style parameters to be rendered into a pixel buffer.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Text | `string` | Class with the text and style parameters to be rendered into a pixel buffer. |
| HorizontalAlignment | `HorizontalAlignment` | The horizontal alignment: one of HorizontalAlignment. |
| VerticalAlignment | `VerticalAlignment` | The vertical alignment: one of VerticalAlignment. |
| FontFamily | `string` | The font's family. |
| FontWeight | `string` | The font's weight: one of {"thin", "ultraLight", "extraLight", "light", "demiLight", "semiLight", "book", "normal", "regular", "medium", "demiBold", "semiBold", "bold", "ultraBold", "extraBold", "black", "heavy", "extraBlack"}. |
| FontWidth | `string` | The font's width: one of {"ultraCondensed", "extraCondensed", "condensed", "semiCondensed", "normal", "semiExpanded", "expanded", "extraExpanded", "ultraExpanded"}. |
| FontSlant | `string` | The font's slant. one of {"normal", "roman", "italic", "oblique"} |
| Layout | `TextLayout` | The type of layout: one of TextLayout {"singleLine", "multiLine", "circular"} |
| CircularAlignment | `CircularAlignment` | The text alignment within the arc: one of CircularAlignment. The @p horizontalAlignment and @p verticalAlignment can be used to align the text within the text area. |
| TextColor | `Vector4` | The default text's color. Default is white. |
| FontSize | `float` | The font's size (in points). |
| TextWidth | `uint` | The width in pixels of the boundaries where the text is going to be laid-out. |
| TextHeight | `uint` | The height in pixels of the boundaries where the text is going to be laid-out. |
| Radius | `uint` | The radius in pixels of the circular text. |
| BeginAngle | `float` | The begin angle in degrees of the text area on the circle. The top of the circle is 0°, the right side 90°, the bottom 180° and the left 270°. |
| IncrementAngle | `float` | The increment angle in degrees of the text area on the circle. The @p incrementAngle defines a direction. If positive, the text will be laid out clockwise. |
| EllipsisEnabled | `bool` | Whether the ellipsis layout option is enabled. |
| MarkupEnabled | `bool` | Whether the mark-up processor is enabled. |
| IsTextColorSet | `bool` | Whether a default color has been set. |
| MinLineSize | `float` | Minimum size of line. |
| Padding | `Extents` | Padding of TextLabel. |
| CharacterIndex | `uint` | Class with info of the embedded items layout. |
| GlyphIndex | `uint` | Index to the glyph |
| Position | `Vector2` | The layout position within the buffer (top, left corner). |
| Size | `Size` | The size within the buffer of the embedded item. |
| RotatedSize | `Size` | The rotated size within the buffer of the embedded item. |
| Angle | `Degree` | Rotation angle of the pixel buffer in degrees. |
| Input | `PixelBuffer` | Whether the color of the image is multiplied by the color of the text. |
| TextColor | `Vector4` | The color of the text. |
| Color | `Vector4` | The color of the shadow. |
| Offset | `Vector2` | The offset of the shadow. |
| blendShadow | `bool` | Whether to blend the shadow. |
| TextUtils | `static partial class` |  |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Render | `PixelBuffer Render(RendererParameters textParameters, ref EmbeddedItemInfo[] embeddedItemLayout)` | Class with the text and style parameters to be rendered into a pixel buffer. |
| CreateShadow | `PixelBuffer CreateShadow(ShadowParameters shadowParameters)` | Creates a shadow for the text given in the input pixel buffer.         The function returns a RGBA8888 pixel buffer with the text and its shadow rendered on it.         The pixel format of the @e input pixel buffer could be an A8 or an RGBA8888. If it's         an A8 pixel buffer, it uses the given @e textColor to give color to the text. Otherwise         it uses the color of the @e input pixel buffer. |
| ConvertToRgba8888 | `PixelBuffer ConvertToRgba8888(PixelBuffer pixelBuffer, Vector4 color, bool multiplyByAlpha)` | Converts a @p pixelBuffer with pixel format A8 to RGBA8888 using the given @p color.         @note Does nothing if the @p pixelBuffer is not A8. |
| UpdateBuffer | `void UpdateBuffer(PixelBuffer src, PixelBuffer dst, uint x, uint y, bool blend)` | Updates the @p dst pixel buffer with the data from @p src pixel buffer.         @note Both pixel buffers must have the same pixel format. Does nothing if both pixel format are different.         @note The function does nothing if the @p src pixel buffer doesn't fit into the @p dst pixel buffer.         The @p src pixel buffer could be blended with the @p dst pixel buffer if @p blend is set to @e true. |
| GetFontInfoList | `List<FontInfo> GetFontInfoList(PropertyArray fontArray)` | Splits the text in pages of the size given in @p textParameters         @note The returned indices are indices to utf32 characters. The input text is encoded in utf8.         <returns> An array with the indices of the last character of each page </returns> |
| GetMapToTextFitArray | `TextFitArray GetMapToTextFitArray(PropertyMap textFitArrayMap)` | This method converts a TextFitArray property map to a TextFitArray and returns it.         <param name="textFitArrayMap">The TextFitArray PropertyMap.</param>         <returns> A TextFitArray struct. </returns> |
| GetFontSizeScale | `float GetFontSizeScale(SystemSettingsFontSize systemSettingsFontSize)` | It returns a float value according to SystemSettingsFontSize.         The returned value can be used for FontSizeScale property.         <param name="systemSettingsFontSize">The SystemSettingsFontSize enum value.</param>         <returns> A float value for FontSizeScale property. </returns> |
| CopyToClipboard | `string CopyToClipboard(TextEditor textEditor)` | Copy the previously selected text from the text control into the clipboard. |
| CopyToClipboard | `string CopyToClipboard(TextField textField)` | Copy the previously selected text from the text control into the clipboard. |
| CutToClipboard | `string CutToClipboard(TextEditor textEditor)` | Cut the previously selected text from the text control into the clipboard. |
| CutToClipboard | `string CutToClipboard(TextField textField)` | Cut the previously selected text from the text control into the clipboard. |
| PasteTo | `void PasteTo(TextEditor textEditor)` | Paste the most recently copied/cut text item from the clipboard into the text control. |
| PasteTo | `void PasteTo(TextField textField)` | Paste the most recently copied/cut text item from the clipboard into the text control. |

