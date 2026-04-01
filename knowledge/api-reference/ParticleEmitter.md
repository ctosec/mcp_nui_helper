# ParticleEmitter

**Namespace:** `Tizen.NUI.ParticleSystem`
**Inherits:** `BaseHandle`
**Category:** basic

Enum defining blending options when rendering the particles.

## Properties

| Name | Type | Description |
|------|------|-------------|
| ParticleBlendingMode | `enum` | Enum defining blending options when rendering the particles. |
| ParticleCount | `uint` | Class ParticleEmitter creates a single emitter attached to a specified     View. ParticleEmitter is responsible for spawning and updating particles.     Emitter must contain:     ParticleSource - responsible for spawning new particles     ParticleModifier(s) - responsible for updating particles in the system     ParticleSource and ParticleModifier callback interfaces should not be accessing     Event side (NUI) objects. Both callbacks are executed on Update thread. |
| EmissionRate | `uint` | Rate of emission per second |
| InitialParticleCount | `uint` | Initial particle count |
| ActiveParticleLimit | `uint` | Limit of active particles in the system |
| RendererBlendingMode | `ParticleBlendingMode` | Gets/sets blending mode for particle renderer |
| TextureResourceUrl | `string` | Sets texture to be used by the renderer |
| ParticleEmitterProxy | `class` | Adds ParticleModifier to the stack |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Start | `void Start()` | Enum defining blending options when rendering the particles. |
| Stop | `void Stop()` | Stops emission of particles. |
| AddLocalStreamFloat | `uint AddLocalStreamFloat(float defaultValue)` | Adds local (not used by shader) data stream to the particle emitter |
| AddLocalStreamVector2 | `uint AddLocalStreamVector2(Vector2 defaultValue)` | Adds local (not used by shader) data stream to the particle emitter |
| AddLocalStreamVector3 | `uint AddLocalStreamVector3(Vector3 defaultValue)` | Adds local (not used by shader) data stream to the particle emitter |
| AddLocalStreamVector4 | `uint AddLocalStreamVector4(Vector4 defaultValue)` | Adds local (not used by shader) data stream to the particle emitter |
| NewParticle | `Particle NewParticle(float lifetime)` | This class provides functionality that can be used inside the Source/Modifier callbacks. |
| AddLocalStreamFloat | `uint AddLocalStreamFloat(float defaultValue)` | Acquires list of Particles of specified length |
| AddLocalStreamVector2 | `uint AddLocalStreamVector2(Vector2 defaultValue)` | Adds local particle data stream of Vector2 values |
| AddLocalStreamVector3 | `uint AddLocalStreamVector3(Vector3 defaultValue)` | Adds local particle data stream of Vector3 values |
| AddLocalStreamVector4 | `uint AddLocalStreamVector4(Vector4 defaultValue)` | Adds local particle data stream of Vector4 values |

