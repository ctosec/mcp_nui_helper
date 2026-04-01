# List Carousel Pattern

## Description

캐러셀/리스트 UI 패턴으로 페이지네이션 dots와 애니메이션 슬라이드를 구현한다. ClippingMode.ClipToBoundingBox로 영역 밖 아이템을 숨기고, Animation으로 PositionX를 이동하여 슬라이딩 효과를 낸다.

## Key Points

- ClippingMode.ClipToBoundingBox으로 캐러셀 영역 밖 아이템 클리핑
- Animation으로 PositionX 이동하여 슬라이드 효과 구현
- 페이지 인디케이터 dots로 현재 위치 표시
- 아이템 간격을 기준으로 PositionX 계산

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;
using System.Collections.Generic;

public class ListCarousel : View
{
    private View _clipContainer;
    private View _innerContainer;
    private View _dotsContainer;
    private List<View> _dots = new List<View>();
    private Animation _slideAnim;

    private int _currentIndex = 0;
    private int _itemCount;
    private float _itemWidth;
    private float _itemSpacing;

    public ListCarousel(float width, float height, float itemWidth, float itemSpacing = 20f)
    {
        Size = new Size(width, height + 40); // extra space for dots
        _itemWidth = itemWidth;
        _itemSpacing = itemSpacing;

        // Clipping container — hides items outside bounds
        _clipContainer = new View
        {
            Size = new Size(width, height),
            Position = new Position(0, 0),
            ClippingMode = ClippingModeType.ClipToBoundingBox,
            BackgroundColor = Color.Transparent,
        };
        Add(_clipContainer);

        // Inner container — shifted left/right to show current page
        _innerContainer = new View
        {
            Size = new Size(width * 10, height),
            Position = new Position(0, 0),
        };
        _clipContainer.Add(_innerContainer);

        // Dots indicator
        _dotsContainer = new View
        {
            Position = new Position(0, height + 10),
            Size = new Size(width, 20),
            Layout = new LinearLayout
            {
                LinearOrientation = LinearLayout.Orientation.Horizontal,
                HorizontalAlignment = HorizontalAlignment.Center,
                CellPadding = new Size2D(8, 0),
            },
        };
        Add(_dotsContainer);
    }

    public void AddItem(View item)
    {
        float xPos = _itemCount * (_itemWidth + _itemSpacing);
        item.Position = new Position(xPos, 0);
        _innerContainer.Add(item);
        _itemCount++;
        AddDot();
    }

    private void AddDot()
    {
        var dot = new View
        {
            Size = new Size(8, 8),
            CornerRadius = 4.0f,
            BackgroundColor = _dots.Count == 0
                ? Color.White
                : new Color(0.4f, 0.4f, 0.4f, 1.0f),
        };
        _dotsContainer.Add(dot);
        _dots.Add(dot);
    }

    public void NavigateTo(int index)
    {
        if (index < 0 || index >= _itemCount) return;

        _currentIndex = index;
        UpdateCarouselPosition();
        UpdateDots();
    }

    public void Next() => NavigateTo(_currentIndex + 1);
    public void Previous() => NavigateTo(_currentIndex - 1);

    private void UpdateCarouselPosition()
    {
        float targetX = -(_currentIndex * (_itemWidth + _itemSpacing));

        _slideAnim?.Stop();
        _slideAnim?.Dispose();

        _slideAnim = new Animation(250);
        _slideAnim.AnimateTo(_innerContainer, "PositionX", targetX,
            new AlphaFunction(AlphaFunction.BuiltinFunctions.EaseOut));
        _slideAnim.Play();
    }

    private void UpdateDots()
    {
        for (int i = 0; i < _dots.Count; i++)
        {
            _dots[i].BackgroundColor = i == _currentIndex
                ? Color.White
                : new Color(0.4f, 0.4f, 0.4f, 1.0f);
            _dots[i].Size = new Size(i == _currentIndex ? 12 : 8, 8);
        }
    }
}
```
