# Image Loading

## Overview

Tizen NUI provides the `ImageView` class for displaying images. Images can be loaded from the local filesystem or from remote URLs. Understanding the correct properties to use is important — assigning the wrong property type causes silent failures.

## Basic ImageView

```csharp
using Tizen.NUI.BaseComponents;

var image = new ImageView
{
    Size = new Size(300, 200),
    Position = new Position(100, 100)
};
```

## Loading from a File Path

Use the `ResourceUrl` property (a plain string) to set the image source:

```csharp
image.ResourceUrl = "/path/to/image.png";
image.ResourceUrl = Tizen.Applications.Application.Current.DirectoryInfo.Resource + "images/banner.jpg";
```

`ResourceUrl` accepts a string path. This is the correct property for file-based images.

## Loading from a Remote URL

```csharp
image.ResourceUrl = "https://example.com/poster.jpg";
```

Remote URLs are supported. The image is fetched asynchronously. Listen to `ResourceReady` to know when loading is complete:

```csharp
image.ResourceReady += (s, e) =>
{
    // Image is loaded and displayed
};
```

## IMPORTANT: Do Not Assign a String to `Image`

The `Image` property accepts a `PropertyMap`, not a string. This is a common mistake:

```csharp
// WRONG — will not work
image.Image = "/path/to/image.png";  // compile error or silent failure

// CORRECT
image.ResourceUrl = "/path/to/image.png";
```

## Sizing and Fitting

```csharp
var image = new ImageView
{
    ResourceUrl = "/res/banner.jpg",
    Size = new Size(400, 300),
    DesiredWidth  = 400,   // hint for decode resolution
    DesiredHeight = 300
};
```

`DesiredWidth` and `DesiredHeight` hint the decoder to scale the image during decode, saving memory. They do not crop the image.

## Fit Mode

Control how the image fills its bounds:

```csharp
image.FittingMode = FittingModeType.ScaleToFill;   // fill and crop
image.FittingMode = FittingModeType.FitWidth;       // fit to width
image.FittingMode = FittingModeType.FitHeight;      // fit to height
image.FittingMode = FittingModeType.ShrinkToFit;    // scale down only
```

## Rounded Corners via ClippingMode

To display an image with rounded corners, set `CornerRadius` on the `ImageView` and enable clipping:

```csharp
var avatar = new ImageView
{
    ResourceUrl = "/res/avatar.png",
    Size = new Size(120, 120),
    CornerRadius = 60.0f,  // half of size = circle
    ClippingMode = ClippingModeType.ClipToBoundingBox
};
```

`ClipToBoundingBox` clips child content and the view itself to its corner-radius shape.

## Placeholder and Loading States

NUI does not have a built-in placeholder property. A common pattern is to stack a placeholder view behind the image and hide it on `ResourceReady`:

```csharp
var placeholder = new View
{
    Size = new Size(300, 200),
    BackgroundColor = Color.Gray
};
container.Add(placeholder);

var image = new ImageView
{
    Size = new Size(300, 200),
    ResourceUrl = "https://example.com/photo.jpg",
    Opacity = 0
};
image.ResourceReady += (s, e) =>
{
    image.Opacity = 1;
    placeholder.Opacity = 0;
};
container.Add(image);
```

## Image via PropertyMap (Advanced)

If you need to configure the image visual through a `PropertyMap` (for synchronous loading or special options):

```csharp
var imageMap = new PropertyMap();
imageMap.Add(Visual.Property.Type, new PropertyValue((int)Visual.Type.Image));
imageMap.Add(ImageVisualProperty.URL, new PropertyValue("/res/photo.jpg"));
imageMap.Add(ImageVisualProperty.FittingMode, new PropertyValue((int)FittingModeType.ScaleToFill));
imageMap.Add(ImageVisualProperty.SynchronousLoading, new PropertyValue(true));

image.Image = imageMap;  // PropertyMap is valid here
```

## Supported Formats

- JPEG (.jpg, .jpeg)
- PNG (.png)
- GIF (.gif) — animated GIFs may animate
- BMP (.bmp)
- WebP (.webp)

## Notes

- Always set `Size` explicitly — `ImageView` does not auto-size to image dimensions by default.
- Prefer `ResourceUrl` over the `Image` `PropertyMap` for simple use cases.
- `DesiredWidth`/`DesiredHeight` help reduce memory for large images displayed small.
