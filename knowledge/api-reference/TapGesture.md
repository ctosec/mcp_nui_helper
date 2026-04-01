# TapGesture

**Namespace:** `Tizen.NUI`
**Inherits:** `Gesture`
**Category:** basic

A TapGesture is emitted when the user taps the screen with the stated number of fingers a stated number of times.

## Properties

| Name | Type | Description |
|------|------|-------------|
| NumberOfTaps | `uint` | A TapGesture is emitted when the user taps the screen with the stated number of fingers a stated number of times. |
| NumberOfTouches | `uint` | The number of touches property (read-only). |
| ScreenPoint | `Vector2` | The screen point property (read-only). |
| LocalPoint | `Vector2` | The local point property (read-only). |
| SourceType | `GestureSourceType` | The gesture source type of touches property (read-only).         If you touch with a mouse button, this will tell you which mouse input you touched.         Primary(Left), Secondary(Right). Tertiary(Wheel).         Deprecated. This api will be deleted without notice. Please do not use it. |
| GestureSourceType | `enum` | Gets the TapGesture from the pointer. |

