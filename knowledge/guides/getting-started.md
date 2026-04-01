# Getting Started with Tizen NUI

## Overview

Tizen NUI (Natural User Interface) is a C#-based UI framework for Tizen devices. All UI is written in C# — there is no XAML. The primary target for these guides is a 1920x1080 TV display running Tizen.NET 10.0.

## Project Structure

```
MyApp.sln
MyApp/
  MyApp.csproj
  Program.cs         ← entry point
  App.cs             ← NUIApplication subclass
  Pages/             ← full-screen page views
  Components/        ← reusable UI components
  Models/            ← data models
  Services/          ← business logic / data fetching
  Utils/             ← helpers and extensions
```

## Entry Point

`Program.cs` is minimal — it simply instantiates and runs the app:

```csharp
class Program
{
    static void Main(string[] args)
    {
        new App().Run(args);
    }
}
```

## App.cs

`App` inherits from `NUIApplication` and overrides `OnCreate` to perform initial setup:

```csharp
using Tizen.NUI;
using Tizen.NUI.BaseComponents;

public class App : NUIApplication
{
    protected override void OnCreate()
    {
        base.OnCreate();

        Window window = Window.Instance;
        window.BackgroundColor = Color.Black;
        window.WindowSize = new Size2D(1920, 1080);

        // Hide default focus indicator
        FocusManager.Instance.EnableDefaultAlgorithm(true);
        FocusManager.Instance.FocusIndicator = new View { Opacity = 0 };

        // Root view covers the full window
        View root = new View
        {
            Size = new Size(1920, 1080),
            Position = new Position(0, 0),
            Layout = new AbsoluteLayout()
        };
        window.Add(root);

        // Navigate to the first page
        var homePage = new Pages.HomePage();
        root.Add(homePage);
    }
}
```

## Project File (csproj)

The verified working configuration is shown below. **Do not change the package versions.**

```xml
<Project Sdk="Tizen.NET.Sdk/1.1.9">
  <PropertyGroup>
    <OutputType>Exe</OutputType>
    <TargetFramework>tizen10.0</TargetFramework>
    <LangVersion>9.0</LangVersion>
  </PropertyGroup>
  <ItemGroup>
    <PackageReference Include="Tizen.NET" Version="10.0.0.17693" />
  </ItemGroup>
</Project>
```

Key points:
- SDK: `Tizen.NET.Sdk` version `1.1.9`
- Package: `Tizen.NET` version `10.0.0.17693`
- Target framework: `tizen10.0`
- Language version: `9.0` (C# 9, not 10 or later)

## Important Constraints

- No XAML — all UI is constructed in C#.
- C# 9 only — avoid `record` types with positional parameters from C# 10+, `required` members, etc.
- Always target 1920x1080; do not use relative sizing based on screen queries.
- All NUI types live in `Tizen.NUI` and `Tizen.NUI.BaseComponents`.
