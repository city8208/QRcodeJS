# QRcode轉換
改寫自SumiMakito的Awesome-qr套件

過往版本對於GIF未補充執行方法，在此版本補上，
input file 格式為Blob，因此加入Blob轉ArrayBuffer方法，

當前版本已針對目前瀏覽器版本做優化及改良。

若這邊不夠清晰，可至Github 觀看。


# 撰寫方式
```html
let returnText = QRcodeCovert(UrlValue,File,Element); // 放入指定網址,物件,指定Element即可執行
```

除了 Microsoft 所提供的瀏覽器（如：Edge、Internet Explorer）外，都獲得後續的支援與開發。
|         | ![Chrome](https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome_64x64.png)<br>Chrome | ![Firefox](https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox_64x64.png)<br>Firefox | ![Edge](https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge_64x64.png)<br>Edge | ![WebView](https://raw.githubusercontent.com/alrra/browser-logos/master/src/android-webview-beta/android-webview-beta_64x64.png)<br>Android WebView | ![Opera](https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera_64x64.png)<br>Opera | ![Safari](https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari/safari_64x64.png)<br>Safari |
|---------|--------|---------|------|-------------------|-------|--------|
| Android | 29+    | 28+     | N/A  | Android 5.0+      | 17+   | N/A    |
| iOS     | 29+    | 28+     | N/A  | N/A               | 17+   | 9.2+   |
| macOS   | 29+    | 28+     | N/A  | N/A               | 17+   | 9+     |
| Windows | 29+    | 28+     | ✖    | N/A               | 17+   | 9+     |
