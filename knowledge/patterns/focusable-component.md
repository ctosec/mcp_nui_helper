# Focusable Component Pattern

## Description

TV 리모컨으로 탐색 가능한 컴포넌트 패턴. Focusable=true로 포커스 가능하게 만들고, FocusGained/FocusLost 이벤트로 시각적 피드백을 제공한다. KeyEvent로 Return/Enter 키 입력을 처리하여 선택 동작을 트리거한다.

## Key Points

- Focusable=true 필수 설정
- BorderlineWidth/Color로 포커스 하이라이트 표시
- Return/Enter 키 처리로 선택 동작 구현
- event Action 패턴으로 외부 콜백 노출

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class FocusableCard : View
{
    public event Action Clicked;

    public FocusableCard()
    {
        Focusable = true;
        Size = new Size(200, 120);
        BackgroundColor = new Color(0.2f, 0.2f, 0.2f, 1.0f);
        CornerRadius = 8.0f;
        BorderlineWidth = 1;
        BorderlineColor = new Color(0.4f, 0.4f, 0.4f, 1.0f);

        FocusGained += OnFocusGained;
        FocusLost += OnFocusLost;
        KeyEvent += OnKeyEvent;
    }

    private void OnFocusGained(object sender, EventArgs e)
    {
        BorderlineWidth = 3;
        BorderlineColor = new Color(0.6f, 0.2f, 1.0f, 1.0f); // purple highlight
    }

    private void OnFocusLost(object sender, EventArgs e)
    {
        BorderlineWidth = 1;
        BorderlineColor = new Color(0.4f, 0.4f, 0.4f, 1.0f);
    }

    private bool OnKeyEvent(object sender, KeyEventArgs e)
    {
        if (e.Key.State == Key.StateType.Down)
        {
            if (e.Key.KeyPressedName == "Return" || e.Key.KeyPressedName == "Enter")
            {
                Clicked?.Invoke();
                return true;
            }
        }
        return false;
    }
}
```
