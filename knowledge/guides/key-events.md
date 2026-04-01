# Key Events

## Overview

On Tizen TV, user input comes from a physical remote control. Key events are the primary input mechanism. NUI exposes key events at two levels: the `Window` (global, fires for any key press) and individual `View` objects (fires only when that view or its children have focus).

## Always Check State.Down

Key events fire for both press (`Down`) and release (`Up`). Always filter to `Down` to avoid double-handling:

```csharp
if (e.Key.State != Key.StateType.Down) return;
```

## Window-Level Key Events

Global key handling — catches all key presses regardless of focus:

```csharp
Window.Instance.KeyEvent += OnGlobalKey;

private void OnGlobalKey(object sender, Window.KeyEventArgs e)
{
    if (e.Key.State != Key.StateType.Down) return;

    switch (e.Key.KeyPressedName)
    {
        case "XF86Back":
        case "Escape":
            NavigateBack();
            break;
        case "XF86AudioPlay":
            TogglePlayback();
            break;
    }
}
```

## View-Level Key Events

Handle keys on a specific view (it must be focused):

```csharp
var myView = new View { Focusable = true };

myView.KeyEvent += (s, e) =>
{
    if (e.Key.State != Key.StateType.Down) return false;

    switch (e.Key.KeyPressedName)
    {
        case "Return":
        case "Enter":
            HandleSelect();
            return true;  // consumed — stop propagation
        case "Left":
            HandleLeft();
            return true;
        case "Right":
            HandleRight();
            return true;
    }

    return false;  // not consumed — let it propagate
};
```

Returning `true` from a `View.KeyEvent` handler consumes the event and prevents it from propagating further.

## TV Remote Key Name Mapping

| Key Name | Remote Button |
|---|---|
| `"Return"` or `"Enter"` | OK / Select |
| `"XF86Back"` or `"Escape"` | Back |
| `"Left"` | D-pad Left |
| `"Right"` | D-pad Right |
| `"Up"` | D-pad Up |
| `"Down"` | D-pad Down |
| `"XF86AudioPlay"` | Play |
| `"XF86AudioPause"` | Pause |
| `"XF86AudioStop"` | Stop |
| `"XF86AudioNext"` | Next |
| `"XF86AudioPrev"` | Previous |
| `"XF86AudioRaiseVolume"` | Volume Up |
| `"XF86AudioLowerVolume"` | Volume Down |
| `"XF86AudioMute"` | Mute |
| `"0"` – `"9"` | Number keys |
| `"Red"` | Color Red |
| `"Green"` | Color Green |
| `"Yellow"` | Color Yellow |
| `"Blue"` | Color Blue |

## Consuming vs. Propagating

- Return `true` from `View.KeyEvent` to consume the event (stops further handling).
- Return `false` to let the event propagate to the parent or window handler.
- `Window.KeyEvent` does not have a return value — it always fires.

## Common Pattern: Navigation Component

A carousel or list component that handles Left/Right internally:

```csharp
public class Carousel : View
{
    private int _index = 0;

    public Carousel()
    {
        Focusable = true;
        KeyEvent += OnKey;
    }

    private bool OnKey(object sender, KeyEventArgs e)
    {
        if (e.Key.State != Key.StateType.Down) return false;

        switch (e.Key.KeyPressedName)
        {
            case "Left":
                if (_index > 0) { _index--; Refresh(); }
                return true;
            case "Right":
                if (_index < Items.Count - 1) { _index++; Refresh(); }
                return true;
            case "Return":
            case "Enter":
                SelectCurrent();
                return true;
        }

        return false;
    }
}
```

## Common Pattern: Back Navigation

Handle the Back key globally in `App.cs`:

```csharp
Window.Instance.KeyEvent += (s, e) =>
{
    if (e.Key.State != Key.StateType.Down) return;

    if (e.Key.KeyPressedName == "XF86Back" || e.Key.KeyPressedName == "Escape")
    {
        if (_pageStack.Count > 1)
        {
            PopPage();
        }
        else
        {
            Exit();  // exit app if no pages to go back to
        }
    }
};
```

## Common Pattern: Numeric Input Without TextField

Handle digit keys to build a PIN or numeric entry:

```csharp
private string _digits = "";

myView.KeyEvent += (s, e) =>
{
    if (e.Key.State != Key.StateType.Down) return false;

    string key = e.Key.KeyPressedName;
    if (key.Length == 1 && char.IsDigit(key[0]))
    {
        _digits += key;
        UpdateDisplay();
        return true;
    }

    return false;
};
```

## Notes

- Use `Window.KeyEvent` for app-wide shortcuts (back navigation, playback controls).
- Use `View.KeyEvent` for component-specific handling (carousel scroll, list selection).
- The D-pad arrow keys (`Left`, `Right`, `Up`, `Down`) are also handled by `FocusManager` for focus movement. If you consume them in `View.KeyEvent`, focus will not move.
- Both `"Return"` and `"Enter"` map to the OK/Select button — handle both for compatibility.
- `"XF86Back"` is the standard Tizen TV back key name; `"Escape"` is its desktop equivalent for testing.
