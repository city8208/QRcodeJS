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

////20200304讀取上傳圖片 || Folder檔案
function filecheck(FileURL){
    ts('.snackbar').snackbar({
        content: '讀取中...'
    });
    let FileType = FileURL.value.split('.').pop();
    let LoadFile = FileURL.files[0];
    document.getElementById('example_qrcodeimage').src = 'loading.gif';
    ///alert(FileURL.value.split('.').pop());
    if(FileType == 'png' || FileType == 'jpg' || FileType == 'jpeg' ){////檢測檔案格式(圖片)
        //alert(FileURL.value.split('.').pop());
        document.getElementById("example_uploadimage").src = window.URL.createObjectURL(FileURL.files[0]);
        imgQRcodeCovert(document.getElementById("example_QRcode_Url").value,FileURL.files[0],FileType);
    }else if(FileType == 'gif' ){
        document.getElementById("example_uploadimage").src = window.URL.createObjectURL(FileURL.files[0]);
        ///////////20200319新增 GIF 檔案內容(將Blob轉為ArrayBuffer)
        let gitFile = '';
        let reader = new FileReader();
        reader.readAsArrayBuffer(LoadFile);
        reader.onload = function () {
            gitFile = this.result;
            gitFile = new Uint8Array(gitFile);            
            imgQRcodeCovert(document.getElementById("example_QRcode_Url").value,gitFile,FileType);
        }
        //////////////
    }else{
        alert("尚未支援"+FileType+"格式。");
    }
}
