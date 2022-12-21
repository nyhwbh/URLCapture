import html2canvas from "html2canvas";



html2canvas(document.querySelector("#capture")).then((canvas) => {
    // 파일이름을 현제시간으로 만들기
    let newfile =  new Date().toString()
    let filename = newfile.substring(0,24);
    // 파일 저장
    saveAs(canvas.toDataURL("image/jpg"), filename);
});

const saveAs = (url, filename) => {
    let link = document.createElement('a');
    if( typeof link.download === 'string'){
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.appendChild(link);
    } else {
        window.open(url);
    }
}