function unload(){
    /////////2020.03.30 重要更新
    ///為避免JS不同步造成的GIFE is not a constructor 問題
    //請初始讀取時就先執行一次 imgQRcodeCovert jpg
    //imgQRcodeCovert(document.getElementById("example_QRcode_Url").value,document.getElementById("example_uploadimage"),'jpg');
    //QRcodeCovert(document.getElementById("example_QRcode_Url").value,document.getElementById("example_uploadimage"),'QrcodeSet');
}

////20200304讀取上傳圖片 || Folder檔案
function filecheck(FileURL){
    ts('.snackbar').snackbar({
        content: '讀取中...'
    });
    let returnText = QRcodeCovert(document.getElementById("example_QRcode_Url").value,FileURL,'QrcodeSet');
    if(returnText == 'error : element has not found'){
        alert("錯誤:找不到該物件。");
    }else if(returnText == 'error : img has not support'){
        alert("錯誤:尚未支援該格式。");
    }else if(returnText == 'error : Url has not found'){
        alert("錯誤:網址錯誤。");
    }
}
