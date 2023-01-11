// import { fullPageCapture } from "./component/fullPageCapture";

// 버튼 클릭으로 함수 실행
const startFuctions = () => {
    const a1Button = document.getElementById("self_sellection");
    const a2Button = document.getElementById("auto_sellection");
    const a3Button = document.getElementById("whole_page_sellection");
    const a4Button = document.getElementById("present_sellection");    

    // 직접 지정 영역 캡처
    a1Button.addEventListener("click", () => {
        console.log("a1");
    })
    // 선택 영역 캡처
    a2Button.addEventListener("click", () => {
        console.log("a2");
    })
    // 전체 페이지 캡처
    a3Button.addEventListener("click", () => {
        console.log("a3");
        fullPageCapture()
    })
    // 전체 화면 캡처
    a4Button.addEventListener("click", () => {
        console.log("a4");
    })
}

const fullPageCapture = () => {
    chrome.desktopCapture.chooseDesktopMedia(
        sources.DesktopCaptureSourceType["window"],
        callbackfunction,
      )
}


startFuctions()
