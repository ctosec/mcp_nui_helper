# MaskEffect

**Namespace:** `Tizen.NUI`
**Inherits:** `RenderEffect`
**Category:** basic

Mask effect of a View.     <note>     MaskEffect uses the target's camera to render both target and source.<br />     To apply the mask correctly, align the source's size and position with the target.<br />     Use 'targetMaskOnce' / 'sourceMaskOnce' to skip re-rendering static inputs.<br />     </note>     Applications can apply MaskEffect as the example below :     <code>     MaskEffect effect = new MaskEffect();     view.SetRenderEffect(effect);     </code>

## Properties

| Name | Type | Description |
|------|------|-------------|
| TargetMaskOnce | `bool` | Mask effect of a View.     <note>     MaskEffect uses the target's camera to render both target and source.<br />     To apply the mask correctly, align the source's size and position with the target.<br />     Use 'targetMaskOnce' / 'sourceMaskOnce' to skip re-rendering static inputs.<br />     </note>     Applications can apply MaskEffect as the example below :     <code>     MaskEffect effect = new MaskEffect();     view.SetRenderEffect(effect);     </code> |
| SourceMaskOnce | `bool` | The property determines whether the source should be rendered once or every frame. |

