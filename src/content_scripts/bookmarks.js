(function () {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;
    print("I was here")

    browser.runtime.onMessage.addListener((message) => {
        console.log(message.command);
    });
})();
