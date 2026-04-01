# TTSPlayer

**Namespace:** `Tizen.NUI`
**Inherits:** `BaseHandle`
**Category:** basic

The Text-to-speech (TTS) player.

## Properties

| Name | Type | Description |
|------|------|-------------|
| StateChanged | `event EventHandler<StateChangedEventArgs>` | The Text-to-speech (TTS) player. |
| TTSMode | `enum` | Enumeration for the instance of TTS mode. |
| TTSState | `enum` | Default mode for normal application. |
| Instance | `static TTSPlayer` | Player is not available. |
| PrevState | `TTSState` | Gets the singleton of the TTS player for the given mode. |
| NextState | `TTSState` | The new state of the TTS player after the change. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| StateChanged | `EventHandler<StateChangedEventArgs>` | The Text-to-speech (TTS) player. |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| Get | `TTSPlayer Get(TTSMode mode)` | The Text-to-speech (TTS) player. |
| Get | `TTSPlayer Get()` | Gets the singleton of the TTS player for the default mode. |
| Play | `void Play(string text)` | Starts playing the audio data synthesized from the specified text. |
| Stop | `void Stop()` | Stops playing the utterance. |
| Pause | `void Pause()` | Pauses the currently playing utterance. |
| Resume | `void Resume()` | Resumes the previously paused utterance. |
| GetState | `TTSState GetState()` | Gets the current state of the player. |

