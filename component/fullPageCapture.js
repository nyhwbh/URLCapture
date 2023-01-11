
export const fullPageCapture = () => {
    chrome.desktopCapture.chooseDesktopMedia(
        sources: DesktopCaptureSourceType[window],
        targetTab?: Tab,
        callback: function,
      )
}