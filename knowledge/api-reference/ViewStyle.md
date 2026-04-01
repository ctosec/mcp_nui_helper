# ViewStyle

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `BindableObject`
**Category:** basic

The base class of style attributes for a view.     This class provides a base for defining styles that can be applied to views.

## Properties

| Name | Type | Description |
|------|------|-------------|
| IncludeDefaultStyle | `bool` | The base class of style attributes for a view.     This class provides a base for defining styles that can be applied to views. |
| BackgroundImage | `Selector<string>` | Gets or sets the image resource url of the background of view.         The mutually exclusive with "BackgroundColor". Setting it overwrites existing "BackgroundColor". |
| Size2D | `Size2D` | Whether the children of this view can be focusable by keyboard navigation. If user sets this to false, the children of this view will not be focused.         Note : Default value is true. |
| Position2D | `Position2D` | Defines view's opacity value.         This property allows you to specify different opacity values for various states of the view,         such as normal, pressed, focused, etc. |
| ParentOrigin | `Position` | Determines whether the pivot point should be used to determine the position of the view. |
| PivotPoint | `Position` | Gets or sets the pivot point of a view.<br />         This is expressed in unit coordinates, such that (0.0, 0.0, 0.5) is the top-left corner of the view, and (1.0, 1.0, 0.5) is the bottom-right corner.<br />         The default pivot point is PivotPoint.Center (0.5, 0.5, 0.5).<br />         A view position is the distance between its parent origin and this pivot point.<br />         A view's orientation is the rotation from its default orientation, the rotation is centered around its pivot point.<br /> |
| Position | `Position` | Gets or sets the width of the view. |
| SizeModeFactor | `Vector3` | Gets or sets the relative to parent size factor of the view.<br />         This factor is only used when ResizePolicyType is set to either: ResizePolicyType.SizeRelativeToParent or ResizePolicyType.SizeFixedOffsetFromParent.<br />         This view's size is set to the view's size multiplied by or added to this factor, depending on ResizePolicyType.<br /> |
| Padding | `Extents` | Gets or sets the width resize policy to be used. |
| MinimumSize | `Size2D` | Gets or sets the minimum size the view can be assigned in size negotiation. |
| MaximumSize | `Size2D` | Gets or sets the maximum size the view can be assigned in size negotiation. |
| Size | `Size` | Sets the size of a view for the width, the height, and the depth. |
| Margin | `Extents` | Gets or sets the Margin for use in layout. |
| BackgroundColor | `Selector<Color>` | Gets or sets the color of the background of view.         The mutually exclusive with "BackgroundImage". Setting it overwrites existing "BackgroundImage". |
| Color | `Selector<Color>` | Color |
| BackgroundImageBorder | `Selector<Rectangle>` | View BackgroundBorder |
| ImageShadow | `Selector<ImageShadow>` | Describes a shadow as an image for a View.         It is null by default. |
| BoxShadow | `Selector<Shadow>` | Describes a box shaped shadow drawing for a View. |
| CornerRadius | `Vector4` | The radius for the rounded corners of the View.         The values in Vector4 are used in clockwise order from top-left to bottom-left : Vector4(top-left-corner, top-right-corner, bottom-right-corner, bottom-left-corner).         Each radius will clamp internally to the half of smaller of the view's width or height. |
| BorderlineColor | `Color` | Whether the CornerRadius property value is relative (percentage [0.0f to 0.5f] of the view size) or absolute (in world units).         It is absolute by default.         When the policy is relative, the corner radius is relative to the smaller of the view's width and height. |
| BorderlineColorSelector | `Selector<Color>` | The color selector for the borderline of the View. |
| SolidNull | `bool` | The Relative offset for the borderline of the View.         Recommended range : [-1.0f to 1.0f].         If -1.0f, draw borderline inside of the View.         If 1.0f, draw borderline outside of the View.         If 0.0f, draw borderline half inside and half outside. |
| ViewStyleExtension | `static class` | HashSet of dirty properties. Internal use only. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Clone | `ViewStyle Clone()` | The base class of style attributes for a view.     This class provides a base for defining styles that can be applied to views. |
| Dispose | `void Dispose()` | Releases all resources used by the ViewStyle instance.         The Dispose method releases all resources used by the ViewStyle instance. |

