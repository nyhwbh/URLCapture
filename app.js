// import html2canvas from "html2canvas";

let isSetted = false;
let capture_x = 0;
let capture_y = 0;
const captureBackground= document.getElementById("captureBackground");
    
captureBackground.addEventListener("click", (e) => {
    if(!isSetted){
        addCaptureArea(e);
        capture_x = e.x;
        capture_y = e.y
        isSetted = true
    } else {
        setCaptureArea(e);
        isSetted = false
    }
});

// captureBackground.addEventListener('mouseover', (e) => {
//     if(isSetted) {
//         setCaptureArea(e);
//     }
// });

const addCaptureArea = (e) => {
    let captureBackground = document.getElementById("captureBackground");

    let captureArea = document.createElement('div');
    captureArea.setAttribute('id','capture');
    captureArea.style.left = e.x + "px";
    captureArea.style.top = e.y + "px";

    captureBackground.appendChild(captureArea);
}

const setCaptureArea = (e) => {
    let captureArea = document.getElementById("capture");
    let width = capture_x - e.x;
    let height = capture_y - e.y;
    if(width <0) {
        width = width * -1
    }
    if(height<0) {
        height = height * -1
    }
    captureArea.style.width = width + "px"
    captureArea.style.height = height + "px";
    
}
// html2canvas(document.querySelector("#capture")).then((canvas) => {
//     // 파일이름을 현제시간으로 만들기
//     let newfile =  new Date().toString()
//     let filename = newfile.substring(0,24);
//     // 파일 저장
//     saveAs(canvas.toDataURL("image/jpg"), filename);
// });

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
