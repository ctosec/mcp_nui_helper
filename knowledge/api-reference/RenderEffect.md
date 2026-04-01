# RenderEffect

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Enumeration for selecting how the mask source interprets pixel data     Alpha: Uses the alpha channel of the mask texture. (Default)     Luminance: Converts RGB to grayscale and uses the luminance as mask value.

## Properties

| Name | Type | Description |
|------|------|-------------|
| MaskEffectMode | `enum` | Enumeration for selecting how the mask source interprets pixel data     Alpha: Uses the alpha channel of the mask texture. (Default)     Luminance: Converts RGB to grayscale and uses the luminance as mask value. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Activate | `void Activate()` | Enumeration for selecting how the mask source interprets pixel data     Alpha: Uses the alpha channel of the mask texture. (Default)     Luminance: Converts RGB to grayscale and uses the luminance as mask value. |
| Deactivate | `void Deactivate()` | Deactivates render effect |
| Refresh | `void Refresh()` | Refreshes render effect |
| IsActivated | `bool IsActivated()` | Check whether effect is activated or not. |
| CreateBackgroundBlurEffect | `BackgroundBlurEffect CreateBackgroundBlurEffect(float blurRadius)` | Create a background blur effect |
| CreateGaussianBlurEffect | `GaussianBlurEffect CreateGaussianBlurEffect(float blurRadius)` | Create a blur effect |
| CreateMaskEffect | `MaskEffect CreateMaskEffect(View control)` | Create a mask effect |
| CreateMaskEffect | `MaskEffect CreateMaskEffect(View control, MaskEffectMode maskMode, float positionX = 0.0f, float positionY = 0.0f, float scaleX = 1.0f, float scaleY = 1.0f)` | Create a mask effect |

