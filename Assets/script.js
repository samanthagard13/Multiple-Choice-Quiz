
// timer starts when button is pressed
//generatebtn

let timerElement = document.querySelector("#timer");
let startButton = document.querySelector(".startButton");
let quiz = document.querySelector(".questions");
startButton.addEventListener("click", timerFunction);

document.getElementById("card2").style.display = "none";
document.getElementById("card3").style.display = "none";
document.getElementById("card4").style.display = "none";
document.getElementById("card5").style.display = "none";
document.getElementById("card6").style.display = "none";

let seconds = 0;
let minutes = 0;

function timerFunction() {
    seconds++;

    if (seconds >= 60) {
        seconds = 0;
        minutes++;
    }
    if (minutes == 2) {
        return;
    }

timerElement.textContent = "Timer" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

scoreScreen();
}

