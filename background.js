chrome.app.runtime.onLaunched.addListener(function () {
  chrome.app.window.create("window.html", {
    outerBounds: {
      width: 100,
      height: 500,
    },
  });
});