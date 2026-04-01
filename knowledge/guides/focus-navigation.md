# Focus Navigation

## Overview

Tizen NUI provides a built-in focus management system via `FocusManager`. On TV devices, the remote control D-pad moves focus between interactive elements. Proper focus setup is essential for usability.

## Initial Setup in App.cs

Enable automatic focus traversal and hide the default indicator in `OnCreate`:

```csharp
FocusManager.Instance.EnableDefaultAlgorithm(true);
FocusManager.Instance.FocusIndicator = new View { Opacity = 0 };
```

`EnableDefaultAlgorithm(true)` allows the focus system to automatically determine the next focusable view based on spatial proximity when navigating with arrow keys.

Setting `FocusIndicator` to a zero-opacity view hides the built-in blue border so you can draw your own focus indicator.

## Making a View Focusable

```csharp
var button = new View
{
    Size = new Size(200, 60),
    BackgroundColor = Color.DarkGray,
    Focusable = true
};
```

Only views with `Focusable = true` participate in focus navigation. Containers should generally have `Focusable = false` (the default).

## Visual Feedback with FocusGained / FocusLost

Draw your own focus ring by responding to these events:

```csharp
var card = new View
{
    Size = new Size(300, 200),
    BackgroundColor = Color.DarkGray,
    Focusable = true,
    BorderlineWidth = 0,
    BorderlineColor = Color.Transparent
};

card.FocusGained += (s, e) =>
{
    card.BorderlineWidth = 4;
    card.BorderlineColor = Color.White;
};

card.FocusLost += (s, e) =>
{
    card.BorderlineWidth = 0;
    card.BorderlineColor = Color.Transparent;
};
```

## Setting Initial Focus with a Timer

`SetCurrentFocusView` must **not** be called immediately in `OnCreate` or immediately after adding views. The view hierarchy must be fully realized before focus can be set. Use a `Timer` with a short delay:

```csharp
var timer = new Timer(200);  // 200 ms delay
timer.Tick += (s, e) =>
{
    FocusManager.Instance.SetCurrentFocusView(firstButton);
    timer.Stop();
    timer.Dispose();
    return false;  // returning false stops the timer
};
timer.Start();
```

This is the standard pattern. Skipping the delay causes `SetCurrentFocusView` to silently fail.

## Focus Groups and Custom Navigation

For custom navigation (e.g., wrapping a carousel), use `FocusManager.CustomAlgorithmInterface` or set directional focus properties manually:

```csharp
// Manually wire left/right between two items
leftItem.RightFocusableView = rightItem;
rightItem.LeftFocusableView = leftItem;
```

Properties:
- `UpFocusableView`
- `DownFocusableView`
- `LeftFocusableView`
- `RightFocusableView`

When these are set, the default algorithm is bypassed for that direction.

## Checking Current Focus

```csharp
View focused = FocusManager.Instance.GetCurrentFocusView();
if (focused != null)
{
    // do something with the currently focused view
}
```

## Common Patterns

### Page Transition Focus Reset

When navigating to a new page, set focus to the first interactive element of the new page using the Timer pattern:

```csharp
public void ShowPage(View page)
{
    root.Add(page);

    var t = new Timer(200);
    t.Tick += (s, e) =>
    {
        FocusManager.Instance.SetCurrentFocusView(page.GetChildAt(0));
        t.Stop();
        t.Dispose();
        return false;
    };
    t.Start();
}
```

### Focus Trap in a Modal

Prevent focus from leaving a modal by handling `FocusManager.PreFocusChange`:

```csharp
FocusManager.Instance.PreFocusChange += (s, e) =>
{
    if (!modal.Contains(e.ProposedView))
    {
        e.ProposedView = modal.GetChildAt(0);
    }
};
```
