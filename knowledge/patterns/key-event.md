# Key Event Handling Pattern

## Description

TV 리모컨 키 이벤트를 처리하는 패턴. Window.KeyEvent는 전역 키 처리(뒤로가기, 앱 종료)에 사용하고, View.KeyEvent는 포커스된 컴포넌트의 로컬 키 처리에 사용한다. true를 반환하면 이벤트가 소비되어 하위로 전파되지 않는다.

## Key Points

- Key.StateType.Down 상태만 처리 (Up/Down 중복 실행 방지)
- Return/Enter 키로 선택 동작 처리
- Escape/XF86Back 키로 뒤로가기 또는 앱 종료
- true 반환으로 이벤트 소비, false 반환으로 이벤트 전파

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

// Window-level key event handler (registered in OnCreate)
public class App : NUIApplication
{
    private void RegisterWindowKeyHandler()
    {
        Window.Instance.KeyEvent += OnWindowKeyEvent;
    }

    private bool OnWindowKeyEvent(object sender, Window.KeyEventArgs e)
    {
        if (e.Key.State != Key.StateType.Down) return false;

        switch (e.Key.KeyPressedName)
        {
            case "Escape":
            case "XF86Back":
                // Go back or exit if at root
                if (_history.Count > 0)
                    GoBack();
                else
                    Exit();
                return true;

            case "XF86AudioPlay":
            case "XF86AudioPause":
                TogglePlayback();
                return true;

            default:
                return false;
        }
    }
}

// View-level key event handler for a focusable component
public class FocusableButton : View
{
    public event Action Clicked;
    public event Action LongPressed;

    public FocusableButton()
    {
        Focusable = true;
        KeyEvent += OnKeyEvent;
    }

    private bool OnKeyEvent(object sender, KeyEventArgs e)
    {
        if (e.Key.State != Key.StateType.Down) return false;

        switch (e.Key.KeyPressedName)
        {
            case "Return":
            case "Enter":
                Clicked?.Invoke();
                return true; // consume event

            case "Up":
            case "Down":
            case "Left":
            case "Right":
                // Let NUI focus manager handle directional navigation
                return false;

            default:
                return false;
        }
    }
}
```
