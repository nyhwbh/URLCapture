import canvas from "https://html2canvas.hertzen.com/dist/html2canvas.min.js"

canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});

//마우스 클릭으로 함수 실행


//단축키로 함수 실행 (Alt+!)