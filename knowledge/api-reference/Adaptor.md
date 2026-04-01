# Adaptor

**Namespace:** `Tizen.NUI`
**Inherits:** `Disposable`
**Category:** basic

An Adaptor object is used to initialize and control how Dali runs.     It provides the lifecycle interface that allows the application     writer to provide their own main loop and other platform related     features.     The Adaptor class provides a means for initialising the resources required by the Dali::Core.     When dealing with platform events, the application writer must ensure that DALi is called in a     thread-safe manner.     As soon as the Adaptor class is created and started, the application writer can initialise their     view objects straight away or as required by the main loop they intend to use (there is no     need to wait for an initialize signal as per the Tizen.NUI.Application class).

## Properties

| Name | Type | Description |
|------|------|-------------|
| Instance | `static Adaptor` | An Adaptor object is used to initialize and control how Dali runs.     It provides the lifecycle interface that allows the application     writer to provide their own main loop and other platform related     features.     The Adaptor class provides a means for initialising the resources required by the Dali::Core.     When dealing with platform events, the application writer must ensure that DALi is called in a     thread-safe manner.     As soon as the Adaptor class is created and started, the application writer can initialise their     view objects straight away or as required by the main loop they intend to use (there is no     need to wait for an initialize signal as per the Tizen.NUI.Application class). |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| FeedWheelEvent | `void FeedWheelEvent(Wheel wheelEvent)` | An Adaptor object is used to initialize and control how Dali runs.     It provides the lifecycle interface that allows the application     writer to provide their own main loop and other platform related     features.     The Adaptor class provides a means for initialising the resources required by the Dali::Core.     When dealing with platform events, the application writer must ensure that DALi is called in a     thread-safe manner.     As soon as the Adaptor class is created and started, the application writer can initialise their     view objects straight away or as required by the main loop they intend to use (there is no     need to wait for an initialize signal as per the Tizen.NUI.Application class). |
| FeedKeyEvent | `void FeedKeyEvent(Key keyEvent)` | Feeds a key event to the adaptor. |

