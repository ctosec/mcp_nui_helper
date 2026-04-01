# App Lifecycle

## Overview

A Tizen NUI application inherits from `NUIApplication` and overrides lifecycle methods to respond to system events. The framework manages the application's lifecycle — the app does not create a window directly but accesses it via `Window.Instance`.

## NUIApplication Base Class

```csharp
using Tizen.NUI;

public class App : NUIApplication
{
    protected override void OnCreate()
    {
        base.OnCreate();
        // One-time setup: window, root view, first page
    }

    protected override void OnTerminate()
    {
        base.OnTerminate();
        // Clean up resources before exit
    }

    protected override void OnPause()
    {
        base.OnPause();
        // App moved to background (e.g., another app launched)
    }

    protected override void OnResume()
    {
        base.OnResume();
        // App returned to foreground
    }
}
```

## OnCreate

`OnCreate` is the main entry point for UI setup. It is called once when the application starts.

```csharp
protected override void OnCreate()
{
    base.OnCreate();

    Window window = Window.Instance;
    window.BackgroundColor = Color.Black;
    window.WindowSize = new Size2D(1920, 1080);

    FocusManager.Instance.EnableDefaultAlgorithm(true);
    FocusManager.Instance.FocusIndicator = new View { Opacity = 0 };

    var root = new View
    {
        Size = new Size(1920, 1080),
        Layout = new AbsoluteLayout()
    };
    window.Add(root);

    root.Add(new Pages.HomePage());
}
```

## OnTerminate

Called when the app is about to be destroyed. Use this to flush data, cancel pending operations, or release native resources.

```csharp
protected override void OnTerminate()
{
    // Cancel timers, dispose animations
    _myTimer?.Stop();
    _myTimer?.Dispose();

    base.OnTerminate();
}
```

## OnPause and OnResume

`OnPause` fires when the app is sent to the background. `OnResume` fires when it returns to the foreground.

```csharp
protected override void OnPause()
{
    base.OnPause();
    _videoPlayer?.Pause();
}

protected override void OnResume()
{
    base.OnResume();
    _videoPlayer?.Resume();
}
```

## Window.Instance

The main application window is accessed as a singleton:

```csharp
Window window = Window.Instance;
window.BackgroundColor = Color.Black;
window.WindowSize = new Size2D(1920, 1080);
```

All top-level views must be added to the window (or to a view hierarchy rooted at the window):

```csharp
window.Add(myRootView);
```

## Global Key Handling with Window.KeyEvent

Subscribe to `Window.KeyEvent` to handle TV remote keys globally (regardless of which view has focus):

```csharp
Window.Instance.KeyEvent += OnWindowKeyEvent;

private void OnWindowKeyEvent(object sender, Window.KeyEventArgs e)
{
    if (e.Key.State != Key.StateType.Down) return;

    switch (e.Key.KeyPressedName)
    {
        case "XF86Back":
        case "Escape":
            // Navigate back or exit
            GoBack();
            break;
    }
}
```

## Exiting the Application

Call `Exit()` to terminate the application programmatically:

```csharp
protected override void OnCreate()
{
    base.OnCreate();

    Window.Instance.KeyEvent += (s, e) =>
    {
        if (e.Key.State == Key.StateType.Down &&
            e.Key.KeyPressedName == "XF86Back")
        {
            Exit();
        }
    };
}
```

`Exit()` triggers `OnTerminate` and shuts down the application cleanly.

## Application Lifecycle Sequence

```
Main() -> new App().Run(args)
    -> OnCreate()       ← UI setup
    -> [running]
    -> OnPause()        ← background (optional)
    -> OnResume()       ← foreground again (optional)
    -> OnTerminate()    ← shutdown
```

## Accessing the App Instance

From anywhere in the app, you can access the current application:

```csharp
var app = Tizen.NUI.Application.Current as App;
```

This lets you call methods on your `App` class from pages or components.

## Notes

- Always call `base.OnCreate()` first — it initializes the NUI framework.
- `Window.Instance` is only valid after `OnCreate` has been called.
- Do not perform heavy work (network, disk) in `OnCreate` synchronously — use `async`/`await` or background tasks.
