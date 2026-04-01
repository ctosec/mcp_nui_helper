# Async Data Loading Pattern

## Description

비동기 데이터 로딩과 로딩 스피너를 결합한 패턴. 생성자에서 _ = LoadDataAsync()로 비동기 작업을 fire-and-forget으로 시작하고, try/catch로 에러를 처리한다. 로딩 중에는 스피너를 표시하고 완료 시 숨긴다.

## Key Points

- 생성자에서 _ = LoadDataAsync() 패턴으로 비동기 작업 시작
- try/catch/finally로 에러 처리 및 스피너 정리 보장
- 로딩 중 스피너 표시/숨김으로 사용자 피드백 제공
- UI 업데이트는 메인 스레드에서 수행 (NUI는 기본적으로 메인 스레드)

## Code

```csharp
using System;
using System.Threading.Tasks;
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class DataPage : View
{
    private View _loadingSpinner;
    private View _contentArea;
    private TextLabel _errorLabel;

    public DataPage()
    {
        Size = new Size(1920, 1080);
        BackgroundColor = new Color(0.05f, 0.05f, 0.05f, 1.0f);

        BuildLayout();

        // Fire-and-forget async load — do NOT await in constructor
        _ = LoadDataAsync();
    }

    private void BuildLayout()
    {
        _contentArea = new View
        {
            Size = new Size(1920, 900),
            Position = new Position(0, 90),
        };
        Add(_contentArea);

        _loadingSpinner = new View
        {
            Size = new Size(80, 80),
            Position = new Position(920, 500),
            BackgroundColor = Color.White,
            CornerRadius = 40.0f,
        };
        Add(_loadingSpinner);

        _errorLabel = new TextLabel
        {
            Size = new Size(800, 60),
            Position = new Position(560, 510),
            HorizontalAlignment = HorizontalAlignment.Center,
            TextColor = new Color(1.0f, 0.3f, 0.3f, 1.0f),
            Visible = false,
        };
        Add(_errorLabel);
    }

    private async Task LoadDataAsync()
    {
        ShowLoading();
        try
        {
            // Simulate async data fetch (replace with real API call)
            var data = await FetchDataFromServiceAsync();
            RenderContent(data);
        }
        catch (Exception ex)
        {
            ShowError($"데이터 로드 실패: {ex.Message}");
        }
        finally
        {
            HideLoading();
        }
    }

    private void ShowLoading()
    {
        _loadingSpinner.Visible = true;
        _contentArea.Visible = false;
    }

    private void HideLoading()
    {
        _loadingSpinner.Visible = false;
        _contentArea.Visible = true;
    }

    private void ShowError(string message)
    {
        _errorLabel.Text = message;
        _errorLabel.Visible = true;
    }

    private void RenderContent(object data)
    {
        // Populate _contentArea with data
    }

    private async Task<object> FetchDataFromServiceAsync()
    {
        await Task.Delay(500); // simulate network delay
        return new object();
    }
}
```
