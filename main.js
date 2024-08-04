const timer = document.getElementById("stopwatch");
let hr = 0;
let min = 0;
let sec = 0;
let stopTime = true;

function startTimer() {
    if (stopTime) {
        stopTime = false;
        timerCycle();
    }
}

function stopTimer() {
    if (!stopTime) {
        stopTime = true;
    }
}

function timerCycle() {
    if (!stopTime) {
        sec++;
        if (sec === 60) {
            min++;
            sec = 0;
        }
        if (min === 60) {
            hr++;
            min = 0;
            sec = 0;
        }

        let secStr = sec < 10 ? "0" + sec : sec;
        let minStr = min < 10 ? "0" + min : min;
        let hrStr = hr < 10 ? "0" + hr : hr;

        timer.innerHTML = hrStr + ":" + minStr + ":" + secStr;

        setTimeout(timerCycle, 1000);
    }
}

function resetTimer() {
    timer.innerHTML = "00:00:00";
    stopTime = true;
    hr = 0;
    min = 0;
    sec = 0;
}
