# Animation Pattern

## Description

Tizen.NUI.Animation API를 사용하여 View 속성에 애니메이션을 적용하는 패턴. Opacity, Scale, Position 등 다양한 속성에 AnimateTo를 사용하며 시작/종료 시간(ms)으로 타이밍을 제어한다. Looping으로 반복 애니메이션을 지원하고, 사용 후 Stop+Dispose로 리소스를 해제한다.

## Key Points

- AnimateTo(view, property, value, startMs, endMs) 형태로 사용
- Looping=true로 무한 반복 애니메이션 구현
- Stop+Dispose 필수 (메모리 누수 방지)
- AlphaFunction으로 이징 커브 적용 가능

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class LoadingSpinner : View
{
    private Animation _animation;
    private View[] _dots;
    private const int DotCount = 3;

    public LoadingSpinner()
    {
        Size = new Size(120, 30);
        _dots = new View[DotCount];

        for (int i = 0; i < DotCount; i++)
        {
            _dots[i] = new View
            {
                Size = new Size(20, 20),
                Position = new Position(i * 35, 5),
                BackgroundColor = Color.White,
                CornerRadius = 10.0f,
                Opacity = 0.3f,
            };
            Add(_dots[i]);
        }

        StartAnimation();
    }

    private void StartAnimation()
    {
        _animation = new Animation(900);
        _animation.Looping = true;

        // Staggered opacity and scale animation for each dot
        for (int i = 0; i < DotCount; i++)
        {
            int offset = i * 200; // stagger by 200ms per dot

            // Fade in + scale up
            _animation.AnimateTo(_dots[i], "Opacity", 1.0f,
                offset, offset + 300,
                new AlphaFunction(AlphaFunction.BuiltinFunctions.EaseInOut));
            _animation.AnimateTo(_dots[i], "Scale", new Vector3(1.2f, 1.2f, 1.0f),
                offset, offset + 300,
                new AlphaFunction(AlphaFunction.BuiltinFunctions.EaseInOut));

            // Fade out + scale down
            _animation.AnimateTo(_dots[i], "Opacity", 0.3f,
                offset + 300, offset + 600,
                new AlphaFunction(AlphaFunction.BuiltinFunctions.EaseInOut));
            _animation.AnimateTo(_dots[i], "Scale", new Vector3(1.0f, 1.0f, 1.0f),
                offset + 300, offset + 600,
                new AlphaFunction(AlphaFunction.BuiltinFunctions.EaseInOut));
        }

        _animation.Play();
    }

    public void StopAnimation()
    {
        if (_animation != null)
        {
            _animation.Stop();
            _animation.Dispose();
            _animation = null;
        }
    }

    // Simple one-shot scale animation helper
    public static Animation AnimateScale(View view, float scale, int durationMs = 150)
    {
        var anim = new Animation(durationMs);
        anim.AnimateTo(view, "Scale", new Vector3(scale, scale, 1.0f));
        anim.Play();
        return anim;
    }
}
```
