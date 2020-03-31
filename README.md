QRcode轉換
改寫自SumiMakito的Awesome-qr套件

過往版本對於GIF未補充執行方法，在此版本補上，
input file 格式為Blob，因此加入Blob轉ArrayBuffer方法，

當前版本已針對目前瀏覽器版本做優化及改良。

若這邊不夠清晰，可至Github 觀看。


# 撰寫方式
```html
let returnText = QRcodeCovert(UrlValue,File,Element); // 放入指定網址,物件,指定Element即可執行
```
