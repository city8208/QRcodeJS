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
        ////
        let nowLoadFileType = FileObject.value.split('.').pop();//檢測檔案格式
        if(nowLoadFileType == 'gif'){ ////GIF用
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