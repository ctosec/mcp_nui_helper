# GestureInfoEventArgs

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `EventArgs`
**Category:** basic

Gesture information type containing all values needed to AccessibilityDoGestureSignal.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Type | `AccessibilityGesture` | Gesture information type containing all values needed to AccessibilityDoGestureSignal. |
| StartPositionX | `int` | The X position where the gesture begins. |
| EndPositionX | `int` | The X position where the gesture ends. |
| StartPositionY | `int` | The Y position where the gesture begins. |
| EndPositionY | `int` | The Y position where the gesture ends. |
| State | `AccessibilityGestureState` | The enumerated state of gesture. |
| EventTime | `uint` | The time when event occured. |
| GestureInfo | `GestureInfoType` | Determines whether the specified object is equal to the current object. |
| Consumed | `bool` | True if the event is consumed. |
| Description | `string` | Accessibility description event arguments. |
| Name | `string` | Accessibility name event arguments. |
| View | `partial class` | View is the base class for all views. |
| AccessibilityGestureInfoReceived | `event EventHandler<GestureInfoEventArgs>` | Gets the control handle. |
| AccessibilityDescriptionRequested | `event EventHandler<GetDescriptionEventArgs>` | AccessibilityDescription is requested. |
| AccessibilityNameRequested | `event EventHandler<GetNameEventArgs>` | AccessibilityName is requested. |
| AccessibilityActivated | `event EventHandler` | Accessibility is activated. |
| AccessibilityReadingSkipped | `event EventHandler` | AccessibilityReading is skipped. |
| AccessibilityReadingPaused | `event EventHandler` | AccessibilityReading is paused. |
| AccessibilityReadingResumed | `event EventHandler` | AccessibilityReading is resumed. |
| AccessibilityReadingCancelled | `event EventHandler` | AccessibilityReading is cancelled. |
| AccessibilityReadingStopped | `event EventHandler` | AccessibilityReading is stopped. |
| AccessibilityActionReceived | `event EventHandler<AccessibilityActionReceivedEventArgs>` | Occurs when the view receives an accessibility action. |
| AccessibilityHighlightChanged | `event EventHandler<AccessibilityHighlightChangedEventArgs>` | Occurs when the view gets or losts an accessibility highlight. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| AccessibilityGestureInfoReceived | `EventHandler<GestureInfoEventArgs>` | Gesture information type containing all values needed to AccessibilityDoGestureSignal. |
| AccessibilityDescriptionRequested | `EventHandler<GetDescriptionEventArgs>` | AccessibilityDescription is requested. |
| AccessibilityNameRequested | `EventHandler<GetNameEventArgs>` | AccessibilityName is requested. |
| AccessibilityActivated | `EventHandler` | Accessibility is activated. |
| AccessibilityReadingSkipped | `EventHandler` | AccessibilityReading is skipped. |
| AccessibilityReadingPaused | `EventHandler` | AccessibilityReading is paused. |
| AccessibilityReadingResumed | `EventHandler` | AccessibilityReading is resumed. |
| AccessibilityReadingCancelled | `EventHandler` | AccessibilityReading is cancelled. |
| AccessibilityReadingStopped | `EventHandler` | AccessibilityReading is stopped. |
| AccessibilityActionReceived | `EventHandler<AccessibilityActionReceivedEventArgs>` | Occurs when the view receives an accessibility action. |
| AccessibilityHighlightChanged | `EventHandler<AccessibilityHighlightChangedEventArgs>` | Occurs when the view gets or losts an accessibility highlight. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Equals | `bool Equals(System.Object obj)` | Gesture information type containing all values needed to AccessibilityDoGestureSignal. |
| Equals | `bool Equals(GestureInfoType other)` | Determines whether the specified object is equal to the current object. |
| GetHashCode | `int GetHashCode()` | The == operator. |

