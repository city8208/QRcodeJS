var __awesome_qr_base_path = "js"; 
function imgQRcodeCovert(QRcodeUrl,PicLoadFile,PicLoadFileType){
    if(PicLoadFileType == 'gif'){ ////GIF用
        require([__awesome_qr_base_path + '/awesome-qr'], function (AwesomeQR) {
            AwesomeQR.create({
                text: QRcodeUrl,
                size: 800,
                margin: 20,
                gifBackground: PicLoadFile, 
                bindElement: 'example_qrcodeimage'
            });
        });  
        
    }else{  ///JPG用
        require([__awesome_qr_base_path + '/awesome-qr'], function (AwesomeQR) {
            AwesomeQR.create({
                text: QRcodeUrl,
                size: 800,
                backgroundImage: document.getElementById("example_uploadimage"),
                margin: 20,
                bindElement: 'example_qrcodeimage'
            });
        });  
    }
}
function QRcodeCovert(QRcodeUrl,FileObject,element){
    if(document.getElementById(element)){
        if(QRcodeUrl != ''){
        document.getElementById(element).innerHTML = '';
        let img_UPQRcode = document.createElement("img");   // Create a <img> element
        img_UPQRcode.style.width = "212px";
        img_UPQRcode.style.height = "215px";
        img_UPQRcode.style.display = "none";
        img_UPQRcode.src = window.URL.createObjectURL(FileObject.files[0]);
        document.body.appendChild(img_UPQRcode); 
        /////
        let output_QRcode = document.createElement("img");   // Create a <img> element
        output_QRcode.style.width = "212px";
        output_QRcode.style.height = "215px";
        output_QRcode.id = 'qrcodeimage';
        document.getElementById(element).appendChild(output_QRcode); 
        //alert(window.document.location.href);
        output_QRcode.src = 'js/loading.gif';
        ////20200402新增生成下載清單
        document.getElementById(element).oncontextmenu  = function(){Downloader();return false;};
        let left_list = document.createElement("div");
        left_list.id ='DowloadList';
        left_list.classList = "ts vertical compact borderless menu";
        left_list.style.position = 'absolute';
        left_list.style.top = '0px';
        left_list.style.width = '110%';
        left_list.style.display = 'none';
        left_list.onmouseout = function(){if(document.getElementById('DowloadList')){document.getElementById('DowloadList').style.display='none';}};
        document.getElementById(element).appendChild(left_list);             
        ///
        let nowLoadFileType = FileObject.value.split('.').pop();//檢測檔案格式
        /////////////
        if(nowLoadFileType == 'gif'){ ////GIF用
            
            ////20200402下載清單子項目/右鍵觸發
            let left_list_gif = document.createElement("a");
            left_list_gif.classList = 'item';
            left_list_gif.onclick = function(){funDownload('img','gif',output_QRcode);};
            left_list_gif.style.display ='';
            left_list_gif.innerHTML ='<i class="picture icon"></i> 下載( gif )';
            left_list.appendChild(left_list_gif);
            let left_list_flipbook = document.createElement("a");
            left_list_flipbook.classList = 'item';
            left_list_flipbook.id = '';
            left_list_flipbook.onclick = function(){};
            left_list_flipbook.style.display ='none';
            left_list_flipbook.innerHTML ='<i class="book icon"></i> 動畫機製作( Flipbook Maker )';
            left_list.appendChild(left_list_flipbook);
            ///設置移出後清單自動消失
            left_list_gif.onmousemove = function(){if(document.getElementById('DowloadList')){document.getElementById('DowloadList').style.display='';}};
            left_list_flipbook.onmousemove = function(){if(document.getElementById('DowloadList')){document.getElementById('DowloadList').style.display='';}};
            ///////
            
            ///////////20200319新增 GIF 檔案內容(將Blob轉為ArrayBuffer)
            let gitFile = '';
            let reader = new FileReader();
            reader.readAsArrayBuffer(FileObject.files[0]);
            reader.onload = function () {
                gitFile = this.result;
                gitFile = new Uint8Array(gitFile);            
                //////////////
                require([__awesome_qr_base_path + '/awesome-qr'], function (AwesomeQR) {
                    AwesomeQR.create({
                        text: QRcodeUrl,
                        size: 800,
                        margin: 20,
                        gifBackground: gitFile, 
                        bindElement: output_QRcode.id
                    });
                    document.body.removeChild(img_UPQRcode);
                });
            }
              
        }else if(nowLoadFileType == 'png' || nowLoadFileType == 'jpg' || nowLoadFileType == 'jpeg'){ ////其他格式用
            ////20200402下載清單子項目/右鍵觸發
            let left_list_jpg = document.createElement("a");
            left_list_jpg.classList = 'item';
            left_list_jpg.onclick = function(){funDownload('img','jpg',output_QRcode);};
            left_list_jpg.style.display ='';
            left_list_jpg.innerHTML ='<i class="picture icon"></i> 下載( jpg )';
            left_list.appendChild(left_list_jpg);
            let left_list_png = document.createElement("a");
             left_list_png.classList = 'item';
            left_list_png.onclick = function(){funDownload('img','png',output_QRcode);};
            left_list_png.style.display ='';
            left_list_png.innerHTML ='<i class="picture icon"></i> 下載( png )';
            left_list.appendChild(left_list_png);
            ///設置移出後清單自動消失
            left_list.onmouseout = function(){if(document.getElementById('DowloadList')){document.getElementById('DowloadList').style.display='none';}};
            left_list_jpg.onmousemove = function(){if(document.getElementById('DowloadList')){document.getElementById('DowloadList').style.display='';}};
            left_list_png.onmousemove = function(){if(document.getElementById('DowloadList')){document.getElementById('DowloadList').style.display='';}};
            ///////
            

            require([__awesome_qr_base_path + '/awesome-qr'], function (AwesomeQR) {
                AwesomeQR.create({
                    text: QRcodeUrl,
                    size: 800,
                    backgroundImage: img_UPQRcode,
                    margin: 20,
                    bindElement: output_QRcode.id
                });
                document.body.removeChild(img_UPQRcode);
            });  
            return 'imgCovert Finish'; ///轉換成功後回傳Finish
        }else{
            return 'error : img has not support'; ///錯誤,格式未支援
        }
        //console.log(FileObject);
        }else{
            return 'error : Url has not found'; ///錯誤,未檢測到Url 
        }

    }else{
        return 'error : element has not found'; ///錯誤,未檢測到指定物件
    }
}
////20200402獨立Function(20200319清單生成下載項目)
function Downloader(){
    ///20200320 新增直接狀態取消/顯示
    //let x = event.clientX + document.body.scrollLeft - 180;
    //let y = event.clientY + document.body.scrollTop - 350; 
    //document.getElementById('DowloadList').style.left = x + "px";
    //document.getElementById('DowloadList').style.top = y + "px";
    if(document.getElementById('DowloadList').style.display == 'none'){
        document.getElementById('DowloadList').style.display = '';
    }else{
        document.getElementById('DowloadList').style.display = 'none';
    }
}
function funDownload(type,name,Download_output) {////20200319 部分檔案直接執行下載
    let typeMain = document.getElementById('type_choice').value;
     ///202020319 qrcode不提供帶音源/文字輸出
        if(type == 'img'){
            let img = Download_output;
            let url = img.src.replace(/^data:image\/[^;]/, 'data:application/octet-stream');
            // 創建Element
            let eleLink = document.createElement('a');
            eleLink.download = '圖片.'+name;
            eleLink.style.display = 'none';
            // 指定該連結內容為qrcodeimage的src
            eleLink.href = url;
            // 執行點擊動作
            document.body.appendChild(eleLink);
            eleLink.click();
            // 然后移除
            document.body.removeChild(eleLink);
        }else if(type == 'file'){
            ////alert(Download_output.innerHTML);
            if(Download_output.innerHTML != ''){
                let eleLink = document.createElement('a');
                let txt = '<!DOCTYPE html><html lang="en-us">  <head></head><body><pre id="ascii-container-image" style="background-color: white; font-family: monospace; font-size: 10px; line-height: 5px; font-weight: bold; color: rgb(0, 0, 0); clear: left; width: fit-content;">'+Download_output.innerHTML + '<pre></body></html>';
                eleLink.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(txt));
                eleLink.setAttribute('download', 'Ascii.'+name);
                eleLink.style.display = 'none';
                document.body.appendChild(eleLink);
                // 執行點擊動作
                eleLink.click();
                // 然后移除
                document.body.removeChild(eleLink);
            }
        }
};