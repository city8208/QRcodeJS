var __awesome_qr_base_path = "awesome-qr"; 
function imgQRcodeCovert(QRcodeUrl){
    if(nowLoadFileType == 'gif'){ ////GIF用
        require([__awesome_qr_base_path + '/awesome-qr'], function (AwesomeQR) {
            AwesomeQR.create({
                text: QRcodeUrl,
                size: 800,
                margin: 20,
                gifBackground: nowLoadFile, 
                bindElement: 'qrcodeimage'
            });
        });  
    }else{  ///JPG用
        require([__awesome_qr_base_path + '/awesome-qr'], function (AwesomeQR) {
            AwesomeQR.create({
                text: QRcodeUrl,
                size: 800,
                backgroundImage: document.getElementById("uploadimage"),
                margin: 20,
                bindElement: 'qrcodeimage'
            });
        });  
    }
}

////20200304讀取上傳圖片 || Folder檔案
var nowLoadFile ="";
var nowLoadFileType ="";
function filecheck(FileURL){
    ts('.snackbar').snackbar({
        content: '讀取中...'
    });
    ///////////20200319新增 GIF 檔案內容(將Blob轉為ArrayBuffer)
    nowLoadFile = FileURL.files[0];
    let reader = new FileReader();
    reader.readAsArrayBuffer(nowLoadFile);
    reader.onload = function () {
        nowLoadFile = this.result;
        nowLoadFile = new Uint8Array(nowLoadFile);
    }
    //////////////

    nowLoadFileType = FileURL.value.split('.').pop();
    ///alert(FileURL.value.split('.').pop());
    if(nowLoadFileType == 'png' || nowLoadFileType == 'jpg' || nowLoadFileType == 'gif' || nowLoadFileType == 'jpeg' ){////檢測檔案格式(圖片)
        //alert(FileURL.value.split('.').pop());
        document.getElementById("uploadimage").src = window.URL.createObjectURL(FileURL.files[0]);
        document.getElementById('qrcodeimage').src = 'loading.gif';
        imgQRcodeCovert(document.getElementById("QRcode_Url").value);
    }else{
        alert("尚未支援"+nowLoadFileType+"格式。");
    }
}
