# Gradient Background Pattern

## Description

PropertyMap 기반 그라디언트 비주얼을 사용하여 배경 그라디언트를 만드는 패턴. Tizen NUI에서 CSS gradient 대신 GradientVisualProperty API를 사용해야 한다. 시작/끝 위치와 색상 정지점을 설정하여 원하는 방향의 그라디언트를 구현한다.

## Key Points

- Visual.Type.Gradient 사용하여 그라디언트 비주얼 지정
- GradientVisualProperty로 StartPosition, EndPosition 설정
- StopOffset과 StopColor로 색상 정지점 정의
- Background PropertyMap으로 뷰에 적용

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public static class GradientHelper
{
    /// <summary>
    /// Creates a View with a vertical linear gradient background.
    /// startColor: top color, endColor: bottom color
    /// </summary>
    public static View CreateGradientView(Size size, Color startColor, Color endColor)
    {
        var view = new View
        {
            Size = size,
        };

        var map = new PropertyMap();
        map.Add(Visual.Property.Type, new PropertyValue((int)Visual.Type.Gradient));
        map.Add(GradientVisualProperty.StartPosition, new PropertyValue(new Vector2(0.0f, -1.0f)));
        map.Add(GradientVisualProperty.EndPosition,   new PropertyValue(new Vector2(0.0f,  1.0f)));
        map.Add(GradientVisualProperty.Units,         new PropertyValue((int)GradientVisualUnitType.ObjectBoundingBox));

        var stopOffsets = new PropertyArray();
        stopOffsets.Add(new PropertyValue(0.0f));
        stopOffsets.Add(new PropertyValue(1.0f));
        map.Add(GradientVisualProperty.StopOffset, new PropertyValue(stopOffsets));

        var stopColors = new PropertyArray();
        stopColors.Add(new PropertyValue(startColor));
        stopColors.Add(new PropertyValue(endColor));
        map.Add(GradientVisualProperty.StopColor, new PropertyValue(stopColors));

        view.Background = map;
        return view;
    }

    /// <summary>
    /// Creates a horizontal gradient background PropertyMap (left→right).
    /// </summary>
    public static PropertyMap CreateHorizontalGradientMap(Color leftColor, Color rightColor)
    {
        var map = new PropertyMap();
        map.Add(Visual.Property.Type, new PropertyValue((int)Visual.Type.Gradient));
        map.Add(GradientVisualProperty.StartPosition, new PropertyValue(new Vector2(-1.0f, 0.0f)));
        map.Add(GradientVisualProperty.EndPosition,   new PropertyValue(new Vector2( 1.0f, 0.0f)));
        map.Add(GradientVisualProperty.Units,         new PropertyValue((int)GradientVisualUnitType.ObjectBoundingBox));

        var stopOffsets = new PropertyArray();
        stopOffsets.Add(new PropertyValue(0.0f));
        stopOffsets.Add(new PropertyValue(1.0f));
        map.Add(GradientVisualProperty.StopOffset, new PropertyValue(stopOffsets));

        var stopColors = new PropertyArray();
        stopColors.Add(new PropertyValue(leftColor));
        stopColors.Add(new PropertyValue(rightColor));
        map.Add(GradientVisualProperty.StopColor, new PropertyValue(stopColors));

        return map;
    }
}
```
