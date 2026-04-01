# Particle

**Namespace:** `Tizen.NUI.ParticleSystem`
**Category:** basic

Declares types of default streams

## Properties

| Name | Type | Description |
|------|------|-------------|
| ParticleStream | `enum` | Declares types of default streams |
| Particle | `class` | Particle class provides interface to particle data streams |
| StreamView | `class` | StreamView provides functionality allowing particle         data manipulation (read/write). |
| Position | `Vector3` | Conversion operator to float value |
| Color | `Vector4` | Color of the Particle. |
| Velocity | `Vector3` | Velocity of the Particle. |
| Scale | `Vector3` | Scale of the Particle. |
| Rotation | `Vector4` | Rotation of the Particle. |
| Opacity | `float` | Opacity of the Particle. |
| Lifetime | `float` | Lifetime of the Particle. |
| LifetimeBase | `float` | Initial lifetime of the Particle. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| float | `implicit operator float(StreamView sv)` | Declares types of default streams |
| Vector2 | `implicit operator Vector2(StreamView sv)` | Conversion operator to Vector2 value |
| Vector3 | `implicit operator Vector3(StreamView sv)` | Conversion operator to Vector3 value |
| Vector4 | `implicit operator Vector4(StreamView sv)` | Conversion operator to Vecto4 value |
| GetStreamValue | `StreamView GetStreamValue(uint streamIndex)` | Create an initialized Particle. |
| GetStreamValue | `StreamView GetStreamValue(ParticleStream streamIndex)` | Returns value from specified default streamIndex |
| SetStreamValue | `void SetStreamValue(float value, uint streamIndex)` | Sets value on the specified data stream |
| SetStreamValue | `void SetStreamValue(Vector2 value, uint streamIndex)` | Sets value on the specified data stream |
| SetStreamValue | `void SetStreamValue(Vector3 value, uint streamIndex)` | Sets value on the specified data stream |
| SetStreamValue | `void SetStreamValue(Vector4 value, uint streamIndex)` | Sets value on the specified data stream |
| SetStreamValue | `void SetStreamValue(float value, ParticleStream particleStream)` | Sets value on the specified data stream |
| SetStreamValue | `void SetStreamValue(Vector2 value, ParticleStream particleStream)` | Sets value on the specified data stream |
| SetStreamValue | `void SetStreamValue(Vector3 value, ParticleStream particleStream)` | Sets value on the specified data stream |
| SetStreamValue | `void SetStreamValue(Vector4 value, ParticleStream particleStream)` | Sets value on the specified data stream |

