# FlexContainer

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `View`
**Category:** basic

FlexContainer implements a subset of the flexbox spec (defined by W3C):https://www.w3.org/TR/css3-flexbox/<br />     It aims at providing a more efficient way to layout, align, and distribute space among items in the container, even when their size is unknown or dynamic.<br />     FlexContainer has the ability to alter the width and the height of its children (i.e., flex items) to fill the available space in the best possible way on different screen sizes.<br />     FlexContainer can expand items to fill available free space, or shrink them to prevent overflow.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| FlexDirectionType | `enum` | FlexContainer implements a subset of the flexbox spec (defined by W3C):https://www.w3.org/TR/css3-flexbox/<br />     It aims at providing a more efficient way to layout, align, and distribute space among items in the container, even when their size is unknown or dynamic.<br />     FlexContainer has the ability to alter the width and the height of its children (i.e., flex items) to fill the available space in the best possible way on different screen sizes.<br />     FlexContainer can expand items to fill available free space, or shrink them to prevent overflow.<br /> |
| ContentDirectionType | `enum` | The flexible items are displayed vertically as a column. |
| Justification | `enum` | Inherits the same direction from the parent. |
| Alignment | `enum` | Items are positioned at the beginning of the container. |
| WrapType | `enum` | Inherits the same alignment from the parent (only valid for "alignSelf" property). |
| ContentDirection | `ContentDirectionType` | Flex items laid out in single line (shrunk to fit the flex container along the main axis). |
| FlexDirection | `FlexDirectionType` | The direction of the main axis which determines the direction that flex items are laid out. |
| FlexWrap | `WrapType` | Whether the flex items should wrap or not if there is no enough room for them on one flex line. |
| JustifyContent | `Justification` | The alignment of flex items when the items do not use all available space on the main axis. |
| AlignItems | `Alignment` | The alignment of flex items when the items do not use all available space on the cross axis. |
| AlignContent | `Alignment` | Similar to "alignItems", but it aligns flex lines; so only works when there are multiple lines. |

