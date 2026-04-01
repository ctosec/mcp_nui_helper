# Command

**Namespace:** `Tizen.NUI.Binding`
**Inherits:** `ICommand`
**Category:** basic

Defines an ICommand implementation that wraps a Action.

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| CanExecuteChanged | `EventHandler` | Defines an ICommand implementation that wraps a Action. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| CanExecute | `bool CanExecute(object parameter)` | Defines an ICommand implementation that wraps a Action. |
| Execute | `void Execute(object parameter)` | Occurs when the target of the Command should reevaluate whether or not the Command can be executed. |
| ChangeCanExecute | `void ChangeCanExecute()` | Send a CanExecuteChanged. |

