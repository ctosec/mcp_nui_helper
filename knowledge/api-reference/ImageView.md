# ImageView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `View`
**Category:** media

ImageView is a class for displaying an image resource.<br />     An instance of ImageView can be created using a URL or an image instance.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| ResourceReady | `event EventHandler<ResourceReadyEventArgs>` | ImageView is a class for displaying an image resource.<br />     An instance of ImageView can be created using a URL or an image instance.<br /> |
| LoadingStatusType | `enum` | Enumeration for LoadingStatus of image. |
| MaskingModeType | `enum` | Loading preparing status. |
| ResourceUrl | `string` | Applies alpha masking on rendering time. |
| ImageMap | `PropertyMap` | This will be deprecated, Use Image instead. <br />         ImageView ImageMap, type PropertyMap: string if it is a URL, map otherwise. |
| Image | `PropertyMap` | ImageView Image, type PropertyMap: string if it is a URL, map otherwise. |
| PreMultipliedAlpha | `bool` | ImageView PreMultipliedAlpha, type Boolean.<br />         Image must be initialized.<br /> |
| PixelArea | `RelativeVector4` | ImageView PixelArea, type Vector4 (Animatable property).<br />         Pixel area is a relative value with the whole image area as [0.0, 0.0, 1.0, 1.0].<br /> |
| Border | `Rectangle` | The border of the image in the order: left, right, bottom, top.<br />         If set, ImageMap will be ignored.<br />         For N-Patch images only.<br />         Optional. |
| BorderOnly | `bool` | Gets or sets whether to draw the borders only (if true).<br />         If not specified, the default is false.<br />         For N-Patch images only.<br />         Optional. |
| SynchronosLoading | `bool` | Gets or sets whether to synchronous loading the resourceurl of image.<br /> |
| SynchronousLoading | `bool` | Gets or sets whether the image of the ResourceUrl property will be loaded synchronously.<br /> |
| OrientationCorrection | `bool` | Gets or sets whether to automatically correct the orientation of an image.<br /> |
| SynchronousSizing | `bool` | Gets or sets whether to automatically reload the image as the view size<br />         If we set this value as true, view size will be works as desired size of image.<br /> |
| MaskingMode | `MaskingModeType` | Gets or sets whether to apply mask on GPU or not.<br /> |
| FastTrackUploading | `bool` | Gets or sets whether to apply fast track uploading or not.<br /> |
| AlphaMaskURL | `string` | Gets the loading state of the visual resource. |
| CropToMask | `bool` | Whether to crop image to mask or scale mask to fit image. |
| FittingMode | `FittingModeType` | Actions property value for Reload image. |
| SamplingMode | `SamplingModeType` | Gets or sets filtering options used when resizing images to the sample original pixels.<br />         If not supplied, the default is SamplingModeType.BoxThenLinear.<br />         For normal quad images only.<br />         Optional. |
| DesiredWidth | `int` | This method allows users to configure the blending of two images(previous and currnet) using alpha values. |
| DesiredHeight | `int` | Gets or sets the desired image height.<br />         If not specified, the actual image height is used.<br />         For normal quad images only.<br />         Optional. |
| ReleasePolicy | `ReleasePolicyType` | Gets or sets ReleasePolicy for image.<br />         If not supplied, the default is ReleasePolicyType.Detached.<br /> |
| WrapModeU | `WrapModeType` | Gets or sets the wrap mode for the u coordinate.<br />         It decides how the texture should be sampled when the u coordinate exceeds the range of 0.0 to 1.0.<br />         If not specified, the default is WrapModeType.Default(CLAMP).<br />         For normal quad images only.<br />         Optional. |
| WrapModeV | `WrapModeType` | Gets or sets the wrap mode for the v coordinate.<br />         It decides how the texture should be sampled when the v coordinate exceeds the range of 0.0 to 1.0.<br />         The first two elements indicate the top-left position of the area, and the last two elements are the areas of the width and the height respectively.<br />         If not specified, the default is WrapModeType.Default(CLAMP).<br />         For normal quad images only.         Optional. |
| AdjustViewSize | `bool` | Gets or sets the mode to adjust view size to preserve the aspect ratio of the image resource. |
| PlaceHolderUrl | `string` | ImageView PlaceHolderUrl, type string.         This is one of mandatory property. Even if not set or null set, it sets empty string ("") internally.         When it is set as null, it gives empty string ("") to be read. |
| TransitionEffect | `bool` | Gets or sets whether the image use TransitionEffect or not<br /> |
| TransitionEffectOption | `PropertyMap` | Gets or sets whether the image use TransitionEffect or not<br /> |
| ImageColor | `Color` | The mixed color value for the image. |
| View | `View` | Get attributes, it is abstract function and must be override. |
| AdjustViewSize | `bool` | For Normal Image. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| ResourceReady | `EventHandler<ResourceReadyEventArgs>` | ImageView is a class for displaying an image resource.<br />     An instance of ImageView can be created using a URL or an image instance.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| DownCast | `ImageView DownCast(BaseHandle handle)` | ImageView is a class for displaying an image resource.<br />     An instance of ImageView can be created using a URL or an image instance.<br /> |
| SetImage | `void SetImage(string url)` | Sets this ImageView from the given URL.<br />         If the URL is empty, ImageView will not display anything.<br /> |
| IsResourceReady | `new bool IsResourceReady()` | Queries if all resources required by a control are loaded and ready.<br />         Most resources are only loaded when the control is placed on the stage.<br />         True if the resources are loaded and ready, false otherwise.<br /> |
| Reload | `void Reload()` | Forcefully reloads the image. All the visuals using this image will reload to the latest image. |
| Play | `void Play()` | Plays the animated GIF. This is also the default playback mode. |
| Pause | `void Pause()` | Pauses the animated GIF. |
| Stop | `void Stop()` | Stops the animated GIF. |
| SetTransitionEffectOption | `void SetTransitionEffectOption(object initialImageAlpha,object destinationImageAlpha, float delay, float speed, AlphaFunction.BuiltinFunctions? alphaFunction = null)` | Gets or sets the URL of the alpha mask.<br />         Optional. |

