import canvas from "https://html2canvas.hertzen.com/dist/html2canvas.min.js"

canvas(document.querySelector("#capture")).then(canvas => {
    document.body.appendChild(canvas)
});