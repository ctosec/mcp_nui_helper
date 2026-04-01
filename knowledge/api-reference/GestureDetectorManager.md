# GestureDetectorManager

**Namespace:** `Tizen.NUI.Events`
**Inherits:** `Disposable`
**Category:** basic

This is a class for detects various gestures.

## Properties

| Name | Type | Description |
|------|------|-------------|
| GestureListener | `class` | This is a class for detects various gestures. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| OnTap | `void OnTap(object sender, TapGestureDetector.DetectedEventArgs e, object userData)` | This is a class for detects various gestures. |
| OnLongPress | `void OnLongPress(object sender, LongPressGestureDetector.DetectedEventArgs e, object userData)` | LongPressGestureDetector event callback. |
| OnPan | `void OnPan(object sender, PanGestureDetector.DetectedEventArgs e, object userData)` | PanGestureDetector event callback. |
| OnPinch | `void OnPinch(object sender, PinchGestureDetector.DetectedEventArgs e, object userData)` | PinchGestureDetector event callback. |
| FeedTouchEvent | `void FeedTouchEvent(object sender, View.TouchEventArgs e)` | Creates a GestureDetectorManager with the user listener. |
| FeedTouchEvent | `void FeedTouchEvent(object sender, View.TouchEventArgs e, object userData)` | Gestures also work only when there is a touch event. |

