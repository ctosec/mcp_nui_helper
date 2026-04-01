# View

**Namespace:** `Tizen.NUI.BaseComponents`
**Category:** basic

View is the base class for all views.

## Properties

| Name | Type | Description |
|------|------|-------------|
| View | `partial class` | View is the base class for all views. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddVisual | `bool AddVisual(Tizen.NUI.Visuals.VisualBase visualBase, ViewVisualContainerRange range)` | View is the base class for all views. |
| RemoveVisual | `void RemoveVisual(Tizen.NUI.Visuals.VisualBase visualBase)` | Remove a Tizen.NUI.Visuals.VisualBase from the view. |
| GetVisualsRange | `ViewVisualContainerRange GetVisualsRange(Visuals.VisualBase visualBase)` | Get the range of given visual |
| GetVisualsCount | `uint GetVisualsCount(ViewVisualContainerRange range)` | Get a Tizen.NUI.Visuals.VisualBase by sibling index |
| AddVisual | `bool AddVisual(Tizen.NUI.Visuals.VisualBase visualBase)` | Find Tizen.NUI.Visuals.VisualBase by name. Given name should not be empty. |
| GetVisualsCount | `uint GetVisualsCount()` | Get a Tizen.NUI.Visuals.VisualBase by sibling index at Content. |

