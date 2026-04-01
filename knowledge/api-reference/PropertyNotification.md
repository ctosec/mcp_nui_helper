# PropertyNotification

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

Issues a notification upon a condition of the property being met.     See PropertyCondition for available defined conditions.

## Properties

| Name | Type | Description |
|------|------|-------------|
| Notified | `event DaliEventHandler<object, NotifyEventArgs>` | Issues a notification upon a condition of the property being met.     See PropertyCondition for available defined conditions. |
| NotifyMode | `enum` | Enumeration for description of how to check condition. |
| PropertyNotification | `PropertyNotification` | Don't notify, regardless of result of Condition |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| Notified | `DaliEventHandler<object, NotifyEventArgs>` | Issues a notification upon a condition of the property being met.     See PropertyCondition for available defined conditions. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| DownCast | `PropertyNotification DownCast(BaseHandle handle)` | Issues a notification upon a condition of the property being met.     See PropertyCondition for available defined conditions. |
| GetCondition | `PropertyCondition GetCondition()` | Assign. |
| GetTarget | `Animatable GetTarget()` | Gets the target handle that this notification is observing. |
| GetTargetProperty | `int GetTargetProperty()` | Gets the target handle's property index that this notification. |
| SetNotifyMode | `void SetNotifyMode(PropertyNotification.NotifyMode mode)` | Sets the Notification mode. |
| GetNotifyResult | `bool GetNotifyResult()` | Retrieves the current Notification mode. |

