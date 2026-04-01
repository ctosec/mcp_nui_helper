# WeakEvent

**Namespace:** `Tizen.NUI`
**Category:** basic

The WeakEvent without holding strong reference of event handler.

## Properties

| Name | Type | Description |
|------|------|-------------|
| IsAlive | `bool` | The WeakEvent without holding strong reference of event handler. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Add | `void Add(T handler)` | The WeakEvent without holding strong reference of event handler. |
| Remove | `void Remove(T handler)` | Remove last stored event handler equal to <paramref name="handler"/>. |
| Invoke | `void Invoke(object sender, object args)` | Invoke event handlers. |
| Equals | `bool Equals(U handler)` | Invoked when the event handler count is increased - a new event handler has been added. |

