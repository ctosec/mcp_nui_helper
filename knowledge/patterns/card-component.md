# Card Component Pattern

## Description

이미지와 텍스트를 조합한 카드 UI 컴포넌트 패턴. 포커스를 받으면 스케일 애니메이션으로 시각적 피드백을 제공한다. ClippingMode.ClipToBoundingBox와 CornerRadius로 둥근 모서리를 구현한다.

## Key Points

- ClippingMode.ClipToBoundingBox로 모서리 둥글게 클리핑
- ImageView 위에 TextLabel 배치하는 구조
- AnimateScale로 포커스 시 1.05f 확대 효과
- FocusLost 시 1.0f로 원래 크기 복귀

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class CardComponent : View
{
    public event Action Clicked;

    private ImageView _thumbnail;
    private TextLabel _title;
    private TextLabel _subtitle;
    private Animation _scaleAnim;

    public CardComponent(string imageUrl, string title, string subtitle = "")
    {
        Focusable = true;
        Size = new Size(320, 240);
        CornerRadius = 12.0f;
        ClippingMode = ClippingModeType.ClipToBoundingBox;
        BackgroundColor = new Color(0.15f, 0.15f, 0.15f, 1.0f);

        // Thumbnail image
        _thumbnail = new ImageView
        {
            ResourceUrl = imageUrl,
            Size = new Size(320, 180),
            Position = new Position(0, 0),
        };
        Add(_thumbnail);

        // Title text
        _title = new TextLabel
        {
            Text = title,
            Size = new Size(300, 36),
            Position = new Position(10, 186),
            TextColor = Color.White,
            PixelSize = 24,
            FontStyle = new PropertyMap().Append("weight", new PropertyValue("bold")),
            MultiLine = false,
        };
        Add(_title);

        // Subtitle text
        if (!string.IsNullOrEmpty(subtitle))
        {
            _subtitle = new TextLabel
            {
                Text = subtitle,
                Size = new Size(300, 22),
                Position = new Position(10, 214),
                TextColor = new Color(0.7f, 0.7f, 0.7f, 1.0f),
                PixelSize = 18,
            };
            Add(_subtitle);
        }

        FocusGained += OnFocusGained;
        FocusLost += OnFocusLost;
        KeyEvent += OnKeyEvent;
    }

    private void OnFocusGained(object sender, EventArgs e)
    {
        AnimateScale(1.05f);
        BorderlineWidth = 3;
        BorderlineColor = new Color(0.6f, 0.2f, 1.0f, 1.0f);
    }

    private void OnFocusLost(object sender, EventArgs e)
    {
        AnimateScale(1.0f);
        BorderlineWidth = 0;
    }

    private void AnimateScale(float scale)
    {
        _scaleAnim?.Stop();
        _scaleAnim?.Dispose();

        _scaleAnim = new Animation(150);
        _scaleAnim.AnimateTo(this, "Scale", new Vector3(scale, scale, 1.0f),
            new AlphaFunction(AlphaFunction.BuiltinFunctions.EaseOut));
        _scaleAnim.Play();
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
