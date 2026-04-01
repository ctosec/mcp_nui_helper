# Form Input Pattern

## Description

편집 가능한 입력 필드 컴포넌트 패턴. 포커스 → Enter → 편집 모드 → Enter → 포커스 복귀의 상태 흐름을 구현한다. TextField를 감싸는 View 구조로 기본/포커스/편집 3가지 상태별 시각적 피드백을 제공한다.

## Key Points

- TextField를 감싸는 View 구조로 상태 관리
- 3가지 상태(default/focused/editing)별 BorderlineColor 변경
- Enter 키로 포커스 모드와 편집 모드 토글
- 편집 모드 진입 시 TextField.EnableSelection=true 설정

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class FocusableInput : View
{
    public enum InputState { Default, Focused, Editing }

    public event Action<string> TextChanged;

    private TextLabel _label;
    private TextField _textField;
    private InputState _state = InputState.Default;

    private static readonly Color ColorDefault  = new Color(0.3f, 0.3f, 0.3f, 1.0f);
    private static readonly Color ColorFocused  = new Color(0.6f, 0.2f, 1.0f, 1.0f);
    private static readonly Color ColorEditing  = new Color(0.2f, 0.6f, 1.0f, 1.0f);

    public FocusableInput(string labelText, string placeholder = "")
    {
        Focusable = true;
        Size = new Size(400, 80);
        BackgroundColor = new Color(0.1f, 0.1f, 0.1f, 1.0f);
        CornerRadius = 8.0f;
        BorderlineWidth = 1;
        BorderlineColor = ColorDefault;

        _label = new TextLabel
        {
            Text = labelText,
            Size = new Size(150, 30),
            Position = new Position(12, 10),
            PixelSize = 18,
            TextColor = new Color(0.7f, 0.7f, 0.7f, 1.0f),
        };
        Add(_label);

        _textField = new TextField
        {
            PlaceholderText = placeholder,
            Size = new Size(370, 44),
            Position = new Position(12, 30),
            PixelSize = 24,
            TextColor = Color.White,
            PlaceholderTextColor = new Vector4(0.5f, 0.5f, 0.5f, 1.0f),
            BackgroundColor = Color.Transparent,
            Focusable = false, // outer view handles focus
            EnableSelection = false,
        };
        _textField.TextChanged += (s, e) => TextChanged?.Invoke(_textField.Text);
        Add(_textField);

        FocusGained += OnFocusGained;
        FocusLost += OnFocusLost;
        KeyEvent += OnKeyEvent;
    }

    private void OnFocusGained(object sender, EventArgs e)
    {
        SetState(InputState.Focused);
    }

    private void OnFocusLost(object sender, EventArgs e)
    {
        if (_state == InputState.Editing)
            ExitEditMode();
        SetState(InputState.Default);
    }

    private bool OnKeyEvent(object sender, KeyEventArgs e)
    {
        if (e.Key.State != Key.StateType.Down) return false;

        if (e.Key.KeyPressedName == "Return" || e.Key.KeyPressedName == "Enter")
        {
            if (_state == InputState.Focused)
                EnterEditMode();
            else if (_state == InputState.Editing)
                ExitEditMode();
            return true;
        }

        if ((e.Key.KeyPressedName == "Escape" || e.Key.KeyPressedName == "XF86Back")
            && _state == InputState.Editing)
        {
            ExitEditMode();
            return true;
        }

        return false;
    }

    private void EnterEditMode()
    {
        SetState(InputState.Editing);
        _textField.EnableSelection = true;
        FocusManager.Instance.SetCurrentFocusView(_textField);
    }

    private void ExitEditMode()
    {
        _textField.EnableSelection = false;
        FocusManager.Instance.SetCurrentFocusView(this);
        SetState(InputState.Focused);
    }

    private void SetState(InputState state)
    {
        _state = state;
        BorderlineColor = state switch
        {
            InputState.Focused => ColorFocused,
            InputState.Editing => ColorEditing,
            _                  => ColorDefault,
        };
    }

    public string Value => _textField.Text;
}
```
