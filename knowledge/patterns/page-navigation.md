# Page Navigation Pattern

## Description

NUIApplication에서 페이지 전환을 관리하는 패턴. enum PageType으로 페이지 종류를 정의하고, NavigateTo/GoBack 메서드로 페이지 스택을 관리한다. Remove+Dispose로 이전 페이지를 정리하여 메모리 누수를 방지한다.

## Key Points

- Remove+Dispose로 이전 페이지 정리 필수
- switch expression으로 페이지 타입에 따른 인스턴스 생성
- AbsoluteLayout 루트 뷰 사용
- 뒤로가기 히스토리 스택 관리

## Code

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public enum PageType
{
    Home,
    Detail,
    Settings,
}

public class App : NUIApplication
{
    private View _root;
    private View _currentPage;
    private Stack<PageType> _history = new Stack<PageType>();

    protected override void OnCreate()
    {
        base.OnCreate();
        _root = new View
        {
            Layout = new AbsoluteLayout(),
            Size = new Size(1920, 1080),
            BackgroundColor = Color.Black,
        };
        Window.Instance.Add(_root);
        Window.Instance.KeyEvent += OnWindowKeyEvent;

        NavigateTo(PageType.Home);
    }

    public void NavigateTo(PageType page)
    {
        if (_currentPage != null)
        {
            _history.Push(GetCurrentPageType());
            _root.Remove(_currentPage);
            _currentPage.Dispose();
            _currentPage = null;
        }

        _currentPage = page switch
        {
            PageType.Home     => new HomePage(this),
            PageType.Detail   => new DetailPage(this),
            PageType.Settings => new SettingsPage(this),
            _                 => new HomePage(this),
        };

        _root.Add(_currentPage);
    }

    public void GoBack()
    {
        if (_history.Count > 0)
        {
            var previous = _history.Pop();
            if (_currentPage != null)
            {
                _root.Remove(_currentPage);
                _currentPage.Dispose();
                _currentPage = null;
            }

            _currentPage = previous switch
            {
                PageType.Home     => new HomePage(this),
                PageType.Detail   => new DetailPage(this),
                PageType.Settings => new SettingsPage(this),
                _                 => new HomePage(this),
            };

            _root.Add(_currentPage);
        }
        else
        {
            Exit();
        }
    }

    private PageType GetCurrentPageType()
    {
        return _currentPage switch
        {
            HomePage     => PageType.Home,
            DetailPage   => PageType.Detail,
            SettingsPage => PageType.Settings,
            _            => PageType.Home,
        };
    }

    private bool OnWindowKeyEvent(object sender, Window.KeyEventArgs e)
    {
        if (e.Key.State == Key.StateType.Down)
        {
            if (e.Key.KeyPressedName == "Escape" || e.Key.KeyPressedName == "XF86Back")
            {
                GoBack();
                return true;
            }
        }
        return false;
    }
}
```
