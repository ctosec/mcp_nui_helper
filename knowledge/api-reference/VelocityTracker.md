# VelocityTracker

**Namespace:** `Tizen.NUI.Utility`
**Category:** basic

Calculates the velocity of touch movements over time.

## Properties

| Name | Type | Description |
|------|------|-------------|
| VelocityTracker | `class` | Calculates the velocity of touch movements over time. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| AddVelocity | `void AddVelocity(int axis, int id, float velocity)` | Calculates the velocity of touch movements over time. |
| AddMovement | `void AddMovement(Vector2 position, uint eventTime)` | Creates a velocity tracker using the specified strategy. |
| ComputeVelocity | `void ComputeVelocity(int units, float maxVelocity)` | Compute the current velocity based on the points that have been collected. |
| GetVelocity | `Vector2 GetVelocity()` | Retrieve the last computed velocity. |
| Clear | `void Clear()` | Resets the velocity tracker state. |

