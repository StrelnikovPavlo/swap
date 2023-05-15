(() => {
    "use strict";
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(webP.height == 2);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = support === true ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    var timeInMinutes = 15;
    var currentTime = timeInMinutes * 60;
    var initialTime = currentTime;
    var timerElement = document.getElementById("timer");
    var progressElement = document.getElementById("progress");
    function updateTimer() {
        var minutes = Math.floor(currentTime / 60);
        var seconds = currentTime % 60;
        var timeString = `${minutes.toString().padStart(2, "0")} мин ${seconds.toString().padStart(2, "0")} сек`;
        timerElement.innerText = timeString;
        var progressPercentage = currentTime / initialTime * 100;
        progressElement.style.width = progressPercentage + "%";
    }
    var timerInterval = setInterval((function() {
        currentTime--;
        updateTimer();
        if (currentTime === 0) {
            clearInterval(timerInterval);
            console.log("Таймер завершен!");
        }
    }), 1e3);
    window["FLS"] = true;
    isWebp();
})();