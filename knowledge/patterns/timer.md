# Timer Pattern

## Description

Tizen.NUI.Timer를 사용하여 지연 작업을 실행하는 패턴. SetCurrentFocusView는 뷰가 완전히 렌더링된 후 호출해야 하므로 반드시 Timer 안에서 호출해야 한다. Tick 핸들러에서 false를 반환하면 1회만 실행되고 타이머가 자동 중지된다.

## Key Points

- System.Threading.Timer가 아닌 Tizen.NUI.Timer 사용 필수
- Tick 이벤트에서 false 반환하면 1회 실행 후 자동 중지
- Stop+Dispose 필수로 리소스 해제
- SetCurrentFocusView는 반드시 Timer(200ms 이상) 안에서 호출

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class PageWithFocus : View
{
    private Timer _focusTimer;
    private View _defaultFocusTarget;

    public PageWithFocus()
    {
        _defaultFocusTarget = new View { Focusable = true };
        Add(_defaultFocusTarget);

        // Set focus after layout is complete
        SetInitialFocus();
    }

    private void SetInitialFocus()
    {
        // IMPORTANT: SetCurrentFocusView must be called inside a Timer
        // to ensure the view is fully rendered before receiving focus
        _focusTimer = new Timer(200);
        _focusTimer.Tick += OnFocusTimerTick;
        _focusTimer.Start();
    }

    private bool OnFocusTimerTick(object sender, Timer.TickEventArgs e)
    {
        FocusManager.Instance.SetCurrentFocusView(_defaultFocusTarget);

        // Clean up timer
        _focusTimer.Stop();
        _focusTimer.Dispose();
        _focusTimer = null;

        return false; // return false = run once and stop
    }

    // Delayed action example
    public void DelayedAction(int delayMs, Action action)
    {
        var timer = new Timer((uint)delayMs);
        timer.Tick += (s, e) =>
        {
            action?.Invoke();
            timer.Stop();
            timer.Dispose();
            return false; // one-shot
        };
        timer.Start();
    }
}
```
