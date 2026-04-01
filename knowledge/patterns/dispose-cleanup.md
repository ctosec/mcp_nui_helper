# Resource Cleanup Pattern

## Description

View 제거 시 Remove + Dispose 패턴으로 메모리 누수를 방지하는 필수 패턴. NUI에서 단순히 Remove만 하면 네이티브 리소스가 해제되지 않으므로 항상 Dispose를 호출해야 한다. Animation과 Timer도 Stop 후 반드시 Dispose해야 한다.

## Key Points

- Remove 후 반드시 Dispose 호출 (Remove만으로는 메모리 해제 불충분)
- Animation/Timer는 Stop+Dispose 패턴 사용
- while loop으로 자식 뷰 전체 정리 (ChildCount > 0 조건)
- null 체크 후 Dispose하여 이중 해제 방지

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public static class CleanupHelper
{
    /// <summary>
    /// Removes and disposes all children from a container view.
    /// </summary>
    public static void ClearChildren(View container)
    {
        while (container.ChildCount > 0)
        {
            var child = container.GetChildAt(0);
            container.Remove(child);
            child?.Dispose();
        }
    }

    /// <summary>
    /// Safely removes a view from its parent and disposes it.
    /// </summary>
    public static void RemoveAndDispose(View view)
    {
        if (view == null) return;
        view.GetParent()?.Remove(view);
        view.Dispose();
    }

    /// <summary>
    /// Stops and disposes an animation safely.
    /// </summary>
    public static void DisposeAnimation(ref Animation anim)
    {
        if (anim != null)
        {
            anim.Stop();
            anim.Dispose();
            anim = null;
        }
    }

    /// <summary>
    /// Stops and disposes a timer safely.
    /// </summary>
    public static void DisposeTimer(ref Timer timer)
    {
        if (timer != null)
        {
            timer.Stop();
            timer.Dispose();
            timer = null;
        }
    }
}

// Example usage in a page class:
public class ExamplePage : View
{
    private Animation _animation;
    private Timer _timer;
    private View _contentArea;

    public void CleanupPage()
    {
        // Stop and dispose animation
        if (_animation != null)
        {
            _animation.Stop();
            _animation.Dispose();
            _animation = null;
        }

        // Stop and dispose timer
        if (_timer != null)
        {
            _timer.Stop();
            _timer.Dispose();
            _timer = null;
        }

        // Remove all children from content area
        if (_contentArea != null)
        {
            while (_contentArea.ChildCount > 0)
            {
                var child = _contentArea.GetChildAt(0);
                _contentArea.Remove(child);
                child?.Dispose();
            }
            Remove(_contentArea);
            _contentArea.Dispose();
            _contentArea = null;
        }
    }
}
```
