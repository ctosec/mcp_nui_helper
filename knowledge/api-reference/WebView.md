# WebView

**Namespace:** `Tizen.NUI.BaseComponents`
**Inherits:** `View`
**Category:** basic

WebView allows presenting content with embedded web browser, both local files and remote websites.

## Properties

| Name | Type | Description |
|------|------|-------------|
| PageLoadStarted | `event EventHandler<WebViewPageLoadEventArgs>` | WebView allows presenting content with embedded web browser, both local files and remote websites. |
| PageLoading | `event EventHandler<WebViewPageLoadEventArgs>` | Event for the PageLoading signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when page loading is in progress.<br /> |
| PageLoadFinished | `event EventHandler<WebViewPageLoadEventArgs>` | Event for the PageLoadFinished signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when page loading has finished.<br /> |
| PageLoadError | `event EventHandler<WebViewPageLoadErrorEventArgs>` | Event for the PageLoadError signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when there's an error in page loading.<br /> |
| ScrollEdgeReached | `event EventHandler<WebViewScrollEdgeReachedEventArgs>` | Event for the ScrollEdgeReached signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when web view is scrolled to edge.<br /> |
| OverScrolled | `event EventHandler<WebViewOverScrolledEventArgs>` | Event for the OverScrolled signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when web view is over scrolled.<br /> |
| UrlChanged | `event EventHandler<WebViewUrlChangedEventArgs>` | Event for the UrlChanged signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when url is changed.<br /> |
| FormRepostPolicyDecided | `event EventHandler<WebViewFormRepostPolicyDecidedEventArgs>` | Event for the FormRepostDecided signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when form repost policy would be decided.<br /> |
| FrameRendered | `event EventHandler<EventArgs>` | Event for the FrameRendered signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when frame is rendered off-screen.<br /> |
| ResponsePolicyDecided | `event EventHandler<WebViewPolicyDecidedEventArgs>` | Event for the ResponsePolicyDecided signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when response policy would be decided.<br /> |
| NavigationPolicyDecided | `event EventHandler<WebViewPolicyDecidedEventArgs>` | Event for the NavigationPolicyDecided signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when response policy would be decided.<br /> |
| NewWindowPolicyDecided | `event EventHandler<WebViewPolicyDecidedEventArgs>` | Event for the NewWindowPolicyDecided signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when new window policy would be decided.<br /> |
| NewWindowCreated | `event EventHandlerWithReturnType<object, EventArgs, WebView>` | Event for the NewWindowCreated signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when a new window would be created.<br /> |
| CertificateConfirmed | `event EventHandler<WebViewCertificateReceivedEventArgs>` | Event for the CertificateConfirmed signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when certificate would be confirmed.<br /> |
| SslCertificateChanged | `event EventHandler<WebViewCertificateReceivedEventArgs>` | Event for the SslCertificateChanged signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when SSL certificate is changed.<br /> |
| HttpAuthRequested | `event EventHandler<WebViewHttpAuthRequestedEventArgs>` | Event for the HttpAuthRequested signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when http authentication is requested.<br /> |
| ConsoleMessageReceived | `event EventHandler<WebViewConsoleMessageReceivedEventArgs>` | Event for the ConsoleMessageReceived signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when console message is received.<br /> |
| ContextMenuShown | `event EventHandler<WebViewContextMenuShownEventArgs>` | Event for the ContextMenuShown signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when context menu is shown.<br /> |
| ContextMenuHidden | `event EventHandler<WebViewContextMenuHiddenEventArgs>` | Event for the ContextMenuHidden signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when context menu item is hidden.<br /> |
| FullscreenEntered | `event EventHandler<EventArgs>` | Event for the FullscreenEntered signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when fullscreen is entered.<br /> |
| FullscreenExited | `event EventHandler<EventArgs>` | Event for the FullscreenExited signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when fullscreen is exited.<br /> |
| TextFound | `event EventHandler<WebViewTextFoundEventArgs>` | Event for the TextFound signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when text is found.<br /> |
| WebAuthDisplayQR | `event EventHandler<WebViewWebAuthDisplayQREventArgs>` | Event to informs user application to display QR code popup for passkey scenario. |
| WebAuthResponse | `event EventHandler` | Event to informs user application that the passkey registration and authentication has been successful. |
| FileChooserRequested | `event EventHandler<WebViewFileChooserRequestedEventArgs>` | Event to FileChooserRequest. |
| WebProcessCrashed | `event EventHandler` | Event for web process crash. |
| UserMediaPermissionRequest | `event EventHandler<WebViewUserMediaPermissionRequestEventArgs>` | Event to UserMediaPermissionRequest. |
| DeviceConnectionChanged | `event EventHandler<WebViewDeviceConnectionChangedEventArgs>` | This event is triggered when the connected devices change, such as when a new device is connected or an already connected device is disconnected |
| FindOption | `enum` | Set a callback method in this method to receive the list of currently connected devices |
| HitTestMode | `enum` | No search flags |
| WebEngineType | `enum` | Link data |
| ImeAlignment | `enum` | Depend on environement value setting. (default) |
| Context | `WebContext` | Top-left corner. |
| CookieManager | `WebCookieManager` | CookieManager. |
| BackForwardList | `WebBackForwardList` | BackForwardList. |
| Settings | `WebSettings` | BackForwardList. |
| Url | `string` | The URL to load. |
| CacheModel | `CacheModel` | Deprecated. The cache model of the current WebView. |
| CookieAcceptPolicy | `CookieAcceptPolicy` | Deprecated. The cookie acceptance policy. |
| UserAgent | `string` | The user agent string. |
| EnableJavaScript | `bool` | Deprecated. Whether JavaScript is enabled. |
| LoadImagesAutomatically | `bool` | Deprecated. Whether images can be loaded automatically. |
| DefaultTextEncodingName | `string` | The default text encoding name.<br />         e.g. "UTF-8"<br /> |
| DefaultFontSize | `int` | The default font size in pixel. |
| ScrollPosition | `Position` | The position of scroll. |
| ScrollSize | `Size` | The size of scroll, read-only. |
| ContentSize | `Size` | The size of content, read-only. |
| VideoHoleEnabled | `bool` | Whether video hole is enabled or not. |
| MouseEventsEnabled | `bool` | Whether mouse events are enabled or not. |
| KeyEventsEnabled | `bool` | Whether key events are enabled or not. |
| ContentBackgroundColor | `Color` | Background color of web page.         Please note that it only works after LoadUrl, etc. |
| TilesClearedWhenHidden | `bool` | Whether tiles are cleared or not when hidden. |
| TileCoverAreaMultiplier | `float` | Multiplier of cover area of tile when web page is rendered. |
| CursorEnabledByClient | `bool` | Whether cursor is enabled or not by client. |
| SelectedText | `string` | Gets selected text in web page. |
| Title | `string` | Gets title of web page. |
| Favicon | `ImageView` | Gets favicon of web page. |
| PageZoomFactor | `float` | Zoom factor of web page. |
| TextZoomFactor | `float` | Zoom factor of text in web page. |
| LoadProgressPercentage | `float` | Gets percentage of loading progress. |

## Events

| Name | Signature | Description |
|------|-----------|-------------|
| PageLoadStarted | `EventHandler<WebViewPageLoadEventArgs>` | WebView allows presenting content with embedded web browser, both local files and remote websites. |
| PageLoading | `EventHandler<WebViewPageLoadEventArgs>` | Event for the PageLoading signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when page loading is in progress.<br /> |
| PageLoadFinished | `EventHandler<WebViewPageLoadEventArgs>` | Event for the PageLoadFinished signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when page loading has finished.<br /> |
| PageLoadError | `EventHandler<WebViewPageLoadErrorEventArgs>` | Event for the PageLoadError signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when there's an error in page loading.<br /> |
| ScrollEdgeReached | `EventHandler<WebViewScrollEdgeReachedEventArgs>` | Event for the ScrollEdgeReached signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when web view is scrolled to edge.<br /> |
| OverScrolled | `EventHandler<WebViewOverScrolledEventArgs>` | Event for the OverScrolled signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when web view is over scrolled.<br /> |
| UrlChanged | `EventHandler<WebViewUrlChangedEventArgs>` | Event for the UrlChanged signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when url is changed.<br /> |
| FormRepostPolicyDecided | `EventHandler<WebViewFormRepostPolicyDecidedEventArgs>` | Event for the FormRepostDecided signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when form repost policy would be decided.<br /> |
| FrameRendered | `EventHandler<EventArgs>` | Event for the FrameRendered signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when frame is rendered off-screen.<br /> |
| ResponsePolicyDecided | `EventHandler<WebViewPolicyDecidedEventArgs>` | Event for the ResponsePolicyDecided signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when response policy would be decided.<br /> |
| NavigationPolicyDecided | `EventHandler<WebViewPolicyDecidedEventArgs>` | Event for the NavigationPolicyDecided signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when response policy would be decided.<br /> |
| NewWindowPolicyDecided | `EventHandler<WebViewPolicyDecidedEventArgs>` | Event for the NewWindowPolicyDecided signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when new window policy would be decided.<br /> |
| NewWindowCreated | `EventHandlerWithReturnType<object, EventArgs, WebView>` | Event for the NewWindowCreated signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when a new window would be created.<br /> |
| CertificateConfirmed | `EventHandler<WebViewCertificateReceivedEventArgs>` | Event for the CertificateConfirmed signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when certificate would be confirmed.<br /> |
| SslCertificateChanged | `EventHandler<WebViewCertificateReceivedEventArgs>` | Event for the SslCertificateChanged signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when SSL certificate is changed.<br /> |
| HttpAuthRequested | `EventHandler<WebViewHttpAuthRequestedEventArgs>` | Event for the HttpAuthRequested signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when http authentication is requested.<br /> |
| ConsoleMessageReceived | `EventHandler<WebViewConsoleMessageReceivedEventArgs>` | Event for the ConsoleMessageReceived signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when console message is received.<br /> |
| ContextMenuShown | `EventHandler<WebViewContextMenuShownEventArgs>` | Event for the ContextMenuShown signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when context menu is shown.<br /> |
| ContextMenuHidden | `EventHandler<WebViewContextMenuHiddenEventArgs>` | Event for the ContextMenuHidden signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when context menu item is hidden.<br /> |
| FullscreenEntered | `EventHandler<EventArgs>` | Event for the FullscreenEntered signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when fullscreen is entered.<br /> |
| FullscreenExited | `EventHandler<EventArgs>` | Event for the FullscreenExited signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when fullscreen is exited.<br /> |
| TextFound | `EventHandler<WebViewTextFoundEventArgs>` | Event for the TextFound signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when text is found.<br /> |
| WebAuthDisplayQR | `EventHandler<WebViewWebAuthDisplayQREventArgs>` | Event to informs user application to display QR code popup for passkey scenario. |
| WebAuthResponse | `EventHandler` | Event to informs user application that the passkey registration and authentication has been successful. |
| FileChooserRequested | `EventHandler<WebViewFileChooserRequestedEventArgs>` | Event to FileChooserRequest. |
| WebProcessCrashed | `EventHandler` | Event for web process crash. |
| UserMediaPermissionRequest | `EventHandler<WebViewUserMediaPermissionRequestEventArgs>` | Event to UserMediaPermissionRequest. |
| DeviceConnectionChanged | `EventHandler<WebViewDeviceConnectionChangedEventArgs>` | This event is triggered when the connected devices change, such as when a new device is connected or an already connected device is disconnected |

## Methods

| Name | Signature | Description |
|------|-----------|-------------|
| JavaScriptMessageHandler | `delegate void JavaScriptMessageHandler(string message)` | WebView allows presenting content with embedded web browser, both local files and remote websites. |
| JavaScriptEntireMessageHandler | `delegate void JavaScriptEntireMessageHandler(string messageName, string messageBody)` | The callback function that is invoked when the message is received from the script. |
| JavaScriptAlertCallback | `delegate void JavaScriptAlertCallback(string message)` | The callback function that is invoked when the message is received from the script. |
| JavaScriptConfirmCallback | `delegate void JavaScriptConfirmCallback(string message)` | The callback function that is invoked when the message is received from the script. |
| JavaScriptPromptCallback | `delegate void JavaScriptPromptCallback(string message1, string message2)` | The callback function that is invoked when the message is received from the script. |
| ScreenshotAcquiredCallback | `delegate void ScreenshotAcquiredCallback(ImageView image)` | The callback function that is invoked when screen shot is acquired asynchronously. |
| VideoPlayingCallback | `delegate void VideoPlayingCallback(bool isPlaying)` | The callback function that is invoked when video playing is checked asynchronously. |
| GeolocationPermissionCallback | `delegate void GeolocationPermissionCallback(string host, string protocol)` | The callback function that is invoked when geolocation permission is requested. |
| HitTestFinishedCallback | `delegate void HitTestFinishedCallback(WebHitTestResult test)` | The callback function that is invoked when hit test is finished. |
| PlainTextReceivedCallback | `delegate void PlainTextReceivedCallback(string plainText)` | The callback function that is invoked when the plain text of the current page is received. |
| WebViewDeviceListGetCallback | `delegate void WebViewDeviceListGetCallback(WebDeviceList list, int size)` | The callback to receive the list of currently connected devices |
| SetDeviceListGetCallback | `void SetDeviceListGetCallback(WebViewDeviceListGetCallback callback)` | Event for the PageLoadStarted signal which can be used to subscribe or unsubscribe the event handler.<br />         This signal is emitted when page loading has started.<br /> |
| LoadUrl | `void LoadUrl(string url)` | Options for searching texts. |
| LoadHTMLString | `void LoadHTMLString(string data)` | Deprecated. Loads a html by string. |
| LoadHtmlString | `void LoadHtmlString(string data)` | Loads a html by string. |
| LoadHtmlStringOverrideCurrentEntry | `bool LoadHtmlStringOverrideCurrentEntry(string html, string baseUri, string unreachableUri)` | Loads the specified html as the content of the view to override current history entry. |
| LoadContents | `bool LoadContents(byte[] contents, string mimeType, string encoding, string baseUri)` | Requests to load the given contents by MIME type. |
| LoadContents | `bool LoadContents(string contents, uint contentSize, string mimeType, string encoding, string baseUri)` | Requests to load the given contents by MIME type. |
| Reload | `void Reload()` | Reloads the Web |
| ReloadWithoutCache | `bool ReloadWithoutCache()` | Reloads the current page's document without cache |
| StopLoading | `void StopLoading()` | Stops loading the Web |
| Suspend | `void Suspend()` | Suspends the operation. |
| Resume | `void Resume()` | Resumes the operation after calling Suspend() |
| SuspendNetworkLoading | `void SuspendNetworkLoading()` | Suspends all network loading. |
| ResumeNetworkLoading | `void ResumeNetworkLoading()` | Resumes all network loading. |
| ChangeOrientation | `void ChangeOrientation(Window.WindowOrientation orientation)` | Change orientation. |
| AddCustomHeader | `bool AddCustomHeader(string name, string value)` | Adds custom header. |
| RemoveCustomHeader | `bool RemoveCustomHeader(string name)` | Removes custom header. |
| StartInspectorServer | `uint StartInspectorServer(uint port)` | Starts the inspector server. |
| StopInspectorServer | `bool StopInspectorServer()` | Stops the inspector server. |
| SetImePositionAndAlignment | `bool SetImePositionAndAlignment(Vector2 position, ImeAlignment alignment)` | Set the style of IME. |
| SetCursorThemeName | `void SetCursorThemeName(string themeName)` | Set the theme name of cursor. |
| ScrollBy | `void ScrollBy(int deltaX, int deltaY)` | Scrolls page of web view by deltaX and detlaY. |
| ScrollEdgeBy | `bool ScrollEdgeBy(int deltaX, int deltaY)` | Scrolls edge of web view by deltaX and deltaY. |
| GoBack | `void GoBack()` | Goes to the back |
| GoForward | `void GoForward()` | Goes to the forward |
| CanGoBack | `bool CanGoBack()` | Returns whether backward is possible. |
| CanGoForward | `bool CanGoForward()` | Returns whether forward is possible. |
| EvaluateJavaScript | `void EvaluateJavaScript(string script)` | Evaluates JavaScript code represented as a string. |
| EvaluateJavaScript | `void EvaluateJavaScript(string script, JavaScriptMessageHandler handler)` | Evaluates JavaScript code represented as a string.         If EvaluateJavaScript is called many times, its argument 'handler' callback would be called not sequentially.         A possible call sequence is like:         1) webview.EvaluateJavaScript("abc", handler1),         2) webview.EvaluateJavaScript("def", handler2),         3) handle2 would be called,         4) handle2 would be called, handler1 would not be called any more. |
| AddJavaScriptMessageHandler | `void AddJavaScriptMessageHandler(string objectName, JavaScriptMessageHandler handler)` | Add a message handler into the WebView. |
| AddJavaScriptMessageHandler | `void AddJavaScriptMessageHandler(string objectName, JavaScriptEntireMessageHandler handler)` | Add a message handler into the WebView. |
| RegisterJavaScriptAlertCallback | `void RegisterJavaScriptAlertCallback(JavaScriptAlertCallback callback)` | Registers a callback for JS alert. |
| JavaScriptAlertReply | `void JavaScriptAlertReply()` | Reply for alert popup. |
| RegisterJavaScriptConfirmCallback | `void RegisterJavaScriptConfirmCallback(JavaScriptConfirmCallback callback)` | Registers a callback for JS confirm. |
| JavaScriptConfirmReply | `void JavaScriptConfirmReply(bool confirmed)` | Reply for confirm popup. |
| RegisterJavaScriptPromptCallback | `void RegisterJavaScriptPromptCallback(JavaScriptPromptCallback callback)` | Registers a callback for JS promt. |
| JavaScriptPromptReply | `void JavaScriptPromptReply(string result)` | Reply for prompt popup. |
| ClearAllTilesResources | `void ClearAllTilesResources()` | Clears title resources of current WebView. |
| ClearHistory | `void ClearHistory()` | Clears the history of current WebView. |
| ExitFullscreen | `void ExitFullscreen()` | Exit fullscreen. |
| SetScaleFactor | `void SetScaleFactor(float scaleFactor, Vector2 point)` | Scales the current page, centered at the given point. |
| GetScaleFactor | `float GetScaleFactor()` | Gets the current scale factor of the page. |
| ActivateAccessibility | `void ActivateAccessibility(bool activated)` | Requests to activate/deactivate the accessibility usage set by web app. |
| HighlightText | `bool HighlightText(string text, FindOption options, uint maxMatchCount)` | Searches and highlights the given string in the document. |
| AddDynamicCertificatePath | `void AddDynamicCertificatePath(string host, string certPath)` | Adds dynamic certificate path. |
| GetScreenshot | `ImageView GetScreenshot(Rectangle viewArea, float scaleFactor)` | Get snapshot of the specified viewArea of page. |
| GetScreenshotAsynchronously | `bool GetScreenshotAsynchronously(Rectangle viewArea, float scaleFactor, ScreenshotAcquiredCallback callback)` | Get snapshot of the specified viewArea of page. |
| CheckVideoPlayingAsynchronously | `bool CheckVideoPlayingAsynchronously(VideoPlayingCallback callback)` | Asynchronously requests to check if there is a video playing in the given view. |
| RegisterGeolocationPermissionCallback | `void RegisterGeolocationPermissionCallback(GeolocationPermissionCallback callback)` | Registers callback which will be called upon geolocation permission request. |
| HitTest | `WebHitTestResult HitTest(int x, int y, HitTestMode mode)` | Does hit test synchronously. |
| HitTestAsynchronously | `bool HitTestAsynchronously(int x, int y, HitTestMode mode, HitTestFinishedCallback callback)` | Does hit test asynchronously. |
| ClearCache | `void ClearCache()` | Deprecated. Clears the cache of current WebView. |
| ClearCookies | `void ClearCookies()` | Deprecated. Clears all the cookies of current WebView. |
| SetTtsFocus | `void SetTtsFocus(bool focused)` | Sets the tts focus to the webview.         Please note that it only works when the webview does not have keyinput focus.         If the webview has a keyinput focus, it also has tts focus so calling SetTtsFocus(false) is ignored. |
| GetPlainTextAsynchronously | `void GetPlainTextAsynchronously(PlainTextReceivedCallback callback)` | Get a plain text of current web page asynchronously.         Please note that it gets plain text of currently loaded page so please call this method after page load finished. |
| WebAuthenticationCancel | `void WebAuthenticationCancel()` | cancel in progress web authentication that is passkey operation. |
| FeedMouseWheel | `void FeedMouseWheel(bool yDirection, int step, int x, int y)` | Feed mouse wheel event forcefully. |
| SetVideoHole | `void SetVideoHole(bool enable, bool isWaylandWindow)` | Enable video hole for a specific window type. |

