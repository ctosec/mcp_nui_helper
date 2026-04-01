# GaussianBlurEffect

**Namespace:** `Tizen.NUI`
**Inherits:** `RenderEffect`
**Category:** basic

Gaussian blur effect of a View.     Applications can apply GaussianBlurEffect as the example below :     <code>     GaussianBlurEffect effect = new GaussianBlurEffect();     view.SetRenderEffect(effect);     </code>

## Properties

| Name | Type | Description |
|------|------|-------------|
| BlurOnce | `bool` | Gaussian blur effect of a View.     Applications can apply GaussianBlurEffect as the example below :     <code>     GaussianBlurEffect effect = new GaussianBlurEffect();     view.SetRenderEffect(effect);     </code> |
| Finished | `event EventHandler` | Event when blur once finishes rendering. Does nothing when blur once is set to false(which redraws every frame). |
| BlurRadius | `float` | The property is blur radius value.         The unit is pixel, but the property is in float type since many other platforms use float for blur effect radius. |
| BlurDownscaleFactor | `float` | The property downscales input texture's width and height to enhance performance.         The value should be bigger than 0.0f and lower than 1.0f. Note that values near zero may ignore blur calculation. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Finished | `EventHandler` | Gaussian blur effect of a View.     Applications can apply GaussianBlurEffect as the example below :     <code>     GaussianBlurEffect effect = new GaussianBlurEffect();     view.SetRenderEffect(effect);     </code> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddBlurStrengthAnimation | `void AddBlurStrengthAnimation(Animation animation, AlphaFunction alphaFunction, TimePeriod timePeriod, float fromValue, float toValue)` | Gaussian blur effect of a View.     Applications can apply GaussianBlurEffect as the example below :     <code>     GaussianBlurEffect effect = new GaussianBlurEffect();     view.SetRenderEffect(effect);     </code> |
| AddBlurOpacityAnimation | `void AddBlurOpacityAnimation(Animation animation, AlphaFunction alphaFunction, TimePeriod timePeriod, float fromValue, float toValue)` | Adds blur opacity animation to the effect.         Basically it is to animate blurring clear texture, but when starting value(fromValue) is bigger than the end value(toValue),         it may show a reversed animation that instead clarifies blurred texture. |

