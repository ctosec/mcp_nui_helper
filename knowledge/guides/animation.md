# Animation

## Overview

Tizen NUI animations are created with the `Animation` class. You specify a duration, add property targets with optional start/end times, then call `Play()`. Animations must be disposed when no longer needed to avoid memory leaks.

## Basic Usage

```csharp
var anim = new Animation(300);  // 300 ms total duration
anim.AnimateTo(view, "Opacity", 1.0f, 0, 300);
anim.Play();
```

Dispose after use:

```csharp
anim.Finished += (s, e) =>
{
    anim.Dispose();
};
```

## AnimateTo

Animates a named property from its current value to a target:

```csharp
// Signature:
// AnimateTo(View target, string property, object destinationValue, int startTimeMs, int endTimeMs)

anim.AnimateTo(myView, "Opacity", 0.0f, 0, 200);
anim.AnimateTo(myView, "Position", new Position(500, 0), 0, 300);
anim.AnimateTo(myView, "Scale", new Vector3(1.1f, 1.1f, 1.0f), 0, 150);
anim.AnimateTo(myView, "Size", new Size(400, 300), 0, 300);
```

All property names are strings matching the NUI property names (case-sensitive).

## Looping

```csharp
var anim = new Animation(1000);
anim.Looping = true;
anim.AnimateTo(myView, "Opacity", 0.0f, 0, 500);
anim.AnimateTo(myView, "Opacity", 1.0f, 500, 1000);
anim.Play();
```

Set `Looping = false` and call `Stop()` to end a looping animation.

## Scale Animation (Focus Feedback)

A common TV pattern is scaling a card up slightly on focus:

```csharp
private Animation _focusAnim;

view.FocusGained += (s, e) =>
{
    _focusAnim?.Stop();
    _focusAnim?.Dispose();
    _focusAnim = new Animation(150);
    _focusAnim.AnimateTo(view, "Scale", new Vector3(1.05f, 1.05f, 1.0f), 0, 150);
    _focusAnim.Play();
};

view.FocusLost += (s, e) =>
{
    _focusAnim?.Stop();
    _focusAnim?.Dispose();
    _focusAnim = new Animation(150);
    _focusAnim.AnimateTo(view, "Scale", new Vector3(1.0f, 1.0f, 1.0f), 0, 150);
    _focusAnim.Play();
};
```

## Opacity Animation (Fade In/Out)

```csharp
// Fade in
var fadeIn = new Animation(300);
fadeIn.AnimateTo(view, "Opacity", 1.0f, 0, 300);
fadeIn.Finished += (s, e) => fadeIn.Dispose();
view.Opacity = 0;
fadeIn.Play();

// Fade out then hide
var fadeOut = new Animation(300);
fadeOut.AnimateTo(view, "Opacity", 0.0f, 0, 300);
fadeOut.Finished += (s, e) =>
{
    view.Visibility = false;
    fadeOut.Dispose();
};
fadeOut.Play();
```

## Position Animation (Carousel Sliding)

Slide a container to reveal different items:

```csharp
private Animation _slideAnim;
private float _currentX = 0;

private void SlideTo(float targetX)
{
    _slideAnim?.Stop();
    _slideAnim?.Dispose();

    _slideAnim = new Animation(300);
    _slideAnim.AnimateTo(carousel, "Position", new Position(targetX, 0), 0, 300);
    _slideAnim.Finished += (s, e) =>
    {
        _currentX = targetX;
        _slideAnim.Dispose();
        _slideAnim = null;
    };
    _slideAnim.Play();
}
```

## Play, Stop, Dispose

```csharp
var anim = new Animation(500);
anim.AnimateTo(view, "Opacity", 0.5f, 0, 500);

anim.Play();   // start the animation
anim.Stop();   // stop mid-way (view stays at current interpolated value)
anim.Dispose(); // release native resources — always call this when done
```

## Multiple Properties in One Animation

You can add multiple `AnimateTo` calls to a single `Animation` object. They all play within the same timeline:

```csharp
var anim = new Animation(400);
anim.AnimateTo(view, "Scale",   new Vector3(1.05f, 1.05f, 1.0f), 0, 200);
anim.AnimateTo(view, "Opacity", 1.0f, 0, 400);
anim.AnimateTo(view, "Position", new Position(50, 0), 100, 400);
anim.Play();
```

## Important Notes

- Never reuse a disposed `Animation` — create a new instance each time.
- Stop a running animation before starting a new one on the same view to avoid conflicts.
- `Vector3(x, y, 1.0f)` is the standard form for 2D scale (Z must be 1.0 to avoid depth distortion).
