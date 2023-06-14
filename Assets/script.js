
// timer starts when button is pressed
//generatebtn

var timerElement = document.querySelector("timer");
var startButton = document.querySelector("startbutton");
startButton.addEventListener("click", timerFunction);


var seconds = 0;
var minutes = 0;

function timerFunction() {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 5) {
        return;
    }

timerElement.textContent = "Timer" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

scoreScreen();
}

var quiz = document.querySelector(".questions");

function quiz() {
    
}

