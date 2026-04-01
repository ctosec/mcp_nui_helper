# Timer

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Mechanism to issue simple periodic or one-shot events.<br />     Timer is provided for application developers to be able to issue     simple periodic or one-shot events. Please note that the timer     callback functions should return as soon as possible because they     block the next SignalTick. Please note that timer signals are not     in sync with DALi's render timer.<br />     This class is a handle class so it can be stack allocated and used     as a member.<br />

## Properties

| Name | Type | Description |
|------|------|-------------|
| Tick | `event EventHandlerWithReturnType<object, TickEventArgs, bool>` | Mechanism to issue simple periodic or one-shot events.<br />     Timer is provided for application developers to be able to issue     simple periodic or one-shot events. Please note that the timer     callback functions should return as soon as possible because they     block the next SignalTick. Please note that timer signals are not     in sync with DALi's render timer.<br />     This class is a handle class so it can be stack allocated and used     as a member.<br /> |
| Interval | `uint` | Gets/Sets the interval of the timer. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Tick | `EventHandlerWithReturnType<object, TickEventArgs, bool>` | Mechanism to issue simple periodic or one-shot events.<br />     Timer is provided for application developers to be able to issue     simple periodic or one-shot events. Please note that the timer     callback functions should return as soon as possible because they     block the next SignalTick. Please note that timer signals are not     in sync with DALi's render timer.<br />     This class is a handle class so it can be stack allocated and used     as a member.<br /> |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Start | `void Start()` | Mechanism to issue simple periodic or one-shot events.<br />     Timer is provided for application developers to be able to issue     simple periodic or one-shot events. Please note that the timer     callback functions should return as soon as possible because they     block the next SignalTick. Please note that timer signals are not     in sync with DALi's render timer.<br />     This class is a handle class so it can be stack allocated and used     as a member.<br /> |
| Stop | `void Stop()` | Stops the timer. |
| IsRunning | `bool IsRunning()` | Tells whether the timer is running. |

