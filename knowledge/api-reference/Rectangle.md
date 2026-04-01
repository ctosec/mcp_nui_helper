# Rectangle

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

The Rectangle class.     This class is used to define and manipulate rectangular areas in graphics or UI components.     It manages the position (x, y coordinates) and size (width, height) of the rectangle, and provides various methods to set or inspect the properties of the rectangle.

## Properties

| Name | Type | Description |
|------|------|-------------|
| X | `int` | The Rectangle class.     This class is used to define and manipulate rectangular areas in graphics or UI components.     It manages the position (x, y coordinates) and size (width, height) of the rectangle, and provides various methods to set or inspect the properties of the rectangle. |
| Y | `int` | The Y position of the rectangle. |
| Width | `int` | The width of the rectangle. |
| Height | `int` | The height of the rectangle. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Rectangle | `implicit operator Rectangle(int value)` | The Rectangle class.     This class is used to define and manipulate rectangular areas in graphics or UI components.     It manages the position (x, y coordinates) and size (width, height) of the rectangle, and provides various methods to set or inspect the properties of the rectangle. |
| Equals | `bool Equals(object o)` | The x position of the rectangle. |
| GetHashCode | `int GetHashCode()` | Serves as the default hash function. |
| Set | `void Set(int newX, int newY, int newWidth, int newHeight)` | Assignment from individual values. |
| IsEmpty | `bool IsEmpty()` | Determines whether or not this rectangle is empty. |
| Left | `int Left()` | Gets the left of the rectangle. |
| Right | `int Right()` | Gets the right of the rectangle. |
| Top | `int Top()` | Gets the top of the rectangle. |
| Bottom | `int Bottom()` | Gets the bottom of the rectangle. |
| Area | `int Area()` | Gets the area of the rectangle. |
| Intersects | `bool Intersects(Rectangle other)` | Determines whether or not this rectangle and the specified rectangle intersect. |
| Contains | `bool Contains(Rectangle other)` | Determines whether or not this rectangle contains the specified rectangle. |

