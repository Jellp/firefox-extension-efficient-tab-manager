(function () {
    if (window.hasRun) {
        return;
    }
    window.hasRun = true;
    print("Hello World!")

    browser.runtime.onMessage.addListener((message) => {
        console.log(message.command);
    });
})();
