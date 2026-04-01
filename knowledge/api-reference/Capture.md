# Capture

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Capture snapshots the current scene and save as a file.     Applications should follow the example below to create capture :     <code>     Capture capture = new Capture();     </code>     If required, you can also subscribe Finished event :     <code>     capture.Finished += onCaptureFinished;     </code>     At the subcribed event handler, user can know whether capture finish succeeded state.     <code>     private void onCaptureFinished(object sender, CaptureFinishedEventArgs e)     {     if(e.Success) { //capture success, do something. }     else { //capture failure, do something. }     }     </code>     suppose that we want to capture View 'A'. And, the View 'A' is overlapped by another View 'B' that is not a child of 'A'.     in this case, if source is root of scene, the captured image includes a part of View 'B' on the 'A'.     however, if source is just View 'A', the result includes only 'A'.

## Properties

| Name | Type | Description |
|------|------|-------------|
| IsExclusive | `bool` | Capture snapshots the current scene and save as a file.     Applications should follow the example below to create capture :     <code>     Capture capture = new Capture();     </code>     If required, you can also subscribe Finished event :     <code>     capture.Finished += onCaptureFinished;     </code>     At the subcribed event handler, user can know whether capture finish succeeded state.     <code>     private void onCaptureFinished(object sender, CaptureFinishedEventArgs e)     {     if(e.Success) { //capture success, do something. }     else { //capture failure, do something. }     }     </code>     suppose that we want to capture View 'A'. And, the View 'A' is overlapped by another View 'B' that is not a child of 'A'.     in this case, if source is root of scene, the captured image includes a part of View 'B' on the 'A'.     however, if source is just View 'A', the result includes only 'A'. |
| Finished | `event EventHandler<CaptureFinishedEventArgs>` | Dispose |
| Success | `bool` | Gets ImageUrl that is saved captured image. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Finished | `EventHandler<CaptureFinishedEventArgs>` | Capture snapshots the current scene and save as a file.     Applications should follow the example below to create capture :     <code>     Capture capture = new Capture();     </code>     If required, you can also subscribe Finished event :     <code>     capture.Finished += onCaptureFinished;     </code>     At the subcribed event handler, user can know whether capture finish succeeded state.     <code>     private void onCaptureFinished(object sender, CaptureFinishedEventArgs e)     {     if(e.Success) { //capture success, do something. }     else { //capture failure, do something. }     }     </code>     suppose that we want to capture View 'A'. And, the View 'A' is overlapped by another View 'B' that is not a child of 'A'.     in this case, if source is root of scene, the captured image includes a part of View 'B' on the 'A'.     however, if source is just View 'A', the result includes only 'A'. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Start | `void Start(Container source, Position position, Size size, string path, Color color)` | Capture snapshots the current scene and save as a file.     Applications should follow the example below to create capture :     <code>     Capture capture = new Capture();     </code>     If required, you can also subscribe Finished event :     <code>     capture.Finished += onCaptureFinished;     </code>     At the subcribed event handler, user can know whether capture finish succeeded state.     <code>     private void onCaptureFinished(object sender, CaptureFinishedEventArgs e)     {     if(e.Success) { //capture success, do something. }     else { //capture failure, do something. }     }     </code>     suppose that we want to capture View 'A'. And, the View 'A' is overlapped by another View 'B' that is not a child of 'A'.     in this case, if source is root of scene, the captured image includes a part of View 'B' on the 'A'.     however, if source is just View 'A', the result includes only 'A'. |
| Start | `void Start(Container source, Size size, string path, Color color, uint quality)` | Start capture and save the image as a file. |
| Start | `void Start(Container source, Size size, string path, Color color)` | Start capture and save the image as a file. |
| Start | `void Start(Container source, Size size, string path)` | Start capture and save the image as a file. |
| SetImageQuality | `void SetImageQuality(uint quality)` | Set result image quality in case of jpeg. |
| GetImageUrl | `ImageUrl GetImageUrl()` | For subscribing Finished event sent by this class. |
| GetNativeImageSource | `NativeImageSource GetNativeImageSource()` | Get NativeImageSource that is saved captured image. |
| GetCapturedBuffer | `PixelBuffer GetCapturedBuffer()` | Get Captured buffer. |
| Empty | `bool Empty()` | CaptureFinishedEventArgs |

