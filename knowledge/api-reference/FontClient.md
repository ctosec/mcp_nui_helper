# FontClient

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

FontClient provides access to font information and resources.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Instance | `static FontClient` | FontClient provides access to font information and resources. |
| Width | `uint` | This is used to pre-cache FontConfig in order to improve the runtime performance of the application. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| PreCache | `void PreCache(List<string> fallbackFamilyList, List<string> extraFamilyList, string localeFamily, bool useThread, bool syncCreation = true)` | FontClient provides access to font information and resources. |
| FontPreLoad | `void FontPreLoad(List<string> fontPathList, List<string> memoryFontPathList, bool useThread, bool syncCreation = true)` | This is used to pre-load FreeType font face in order to improve the runtime performance of the application.         <note>         The fonts in the fontPathList perform FT_New_Face during pre-loading, which can provide some performace benefits.<br />         The fonts in the memoryFontPathList read the font file and cache the buffer in memory during pre-load.<br />         This enables the use of FT_New_Memory_Face during runtime and provides a performance boost.<br />         It requires memory equivalent to the size of each font file.         </note> |
| EnableDesignCompatibility | `void EnableDesignCompatibility()` | Enable font specific design compatibility mode globally.         <remarks>         When enabled, FontMetrics will adjust ascender/descender values at construction         to ensure design compatibility rules.         </remarks>         <note>         This is a one-way switch. Once enabled, it cannot be disabled again during the lifetime of the process.         This function must be called before any text is rendered.         </note> |
| ResetSystemDefaults | `void ResetSystemDefaults()` | Called when the user changes the system defaults. |
| GetPointSize | `uint GetPointSize(uint id)` | Retrieves the font point size of a given font id. |
| IsCharacterSupportedByFont | `bool IsCharacterSupportedByFont(uint fontId, uint character)` | Whether the given character is supported by the font. |
| FindDefaultFont | `uint FindDefaultFont(uint charcode, uint requestedPointSize, bool preferColor)` | Finds the default font for displaying a UTF-32 character. |
| FindDefaultFont | `uint FindDefaultFont(uint charcode, uint requestedPointSize)` | Find the default font for displaying a UTF-32 character. |
| FindDefaultFont | `uint FindDefaultFont(uint charcode)` | Find the default font for displaying a UTF-32 character. |
| GetFontId | `uint GetFontId(string path, uint requestedPointSize, uint faceIndex)` | Retrieve the unique identifier for a font. |
| GetFontId | `uint GetFontId(string path, uint requestedPointSize)` | Retrieve the unique identifier for a font. |
| GetFontId | `uint GetFontId(string path)` | Retrieve the unique identifier for a font. |
| IsScalable | `bool IsScalable(string path)` | Check to see if a font is scalable. |
| AddCustomFontDirectory | `bool AddCustomFontDirectory(string path)` | Adds custom fonts directory. |
| GetSystemFonts | `List<FontInfo> GetSystemFonts()` | Retrieve the list of font info supported by the system. |

