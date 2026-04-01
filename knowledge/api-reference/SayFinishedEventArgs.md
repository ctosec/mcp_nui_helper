# SayFinishedEventArgs

**Namespace:** `Tizen.NUI.Accessibility`
**Inherits:** `EventArgs`
**Category:** basic

Accessibility provides Dali-ATSPI interface which has functionality of Screen-Reader and general accessibility.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Accessibility | `static class` | Accessibility provides Dali-ATSPI interface which has functionality of Screen-Reader and general accessibility. |
| IsEnabled | `static bool` | Flag to check whether the state of Accessibility is enabled or not. |
| IsScreenReaderEnabled | `static bool` | Flag to check whether the state of Screen Reader is enabled or not. |
| SayFinishedState | `enum` | Start to speak. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Say | `void Say(string sentence, bool discardable)` | Accessibility provides Dali-ATSPI interface which has functionality of Screen-Reader and general accessibility. |
| PauseResume | `void PauseResume(bool pause)` | To make Say be paused or resumed. |
| StopReading | `void StopReading(bool alsoNonDiscardable)` | Cancels anything screen-reader is reading / has queued to read. |
| SuppressScreenReader | `bool SuppressScreenReader(bool suppress)` | Suppress reading of screen-reader. |
| BridgeEnableAutoInit | `void BridgeEnableAutoInit()` | Re-enables auto-initialization of AT-SPI bridge. |
| BridgeDisableAutoInit | `void BridgeDisableAutoInit()` | Blocks auto-initialization of AT-SPI bridge. |
| GetHighlightFrameView | `View GetHighlightFrameView()` | Get View that is used to highlight widget. |
| SetHighlightFrameView | `void SetHighlightFrameView(View view)` | Set view that will be used to highlight widget. |
| SetCustomHighlightOverlay | `void SetCustomHighlightOverlay(View view, Position2D position, Size2D size)` | Sets a custom highlight overlay at the specified position and size.         This functionality is only applicable when the CustomHighlight Overlay is a child of the scene-view.         In other words, the position and size of the highlight indicator can only be set if the CustomHighlight Overlay is part of the scene-view. |
| ResetCustomHighlightOverlay | `void ResetCustomHighlightOverlay(View view)` | Resets the custom highlight overlay         This functionality is only applicable when the CustomHighlight Overlay is a child of the scene-view. |
| GetCurrentlyHighlightedView | `View GetCurrentlyHighlightedView()` | Get highligted View. |
| ClearCurrentlyHighlightedView | `bool ClearCurrentlyHighlightedView()` | Clear highlight. |

