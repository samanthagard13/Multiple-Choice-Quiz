// Assignments for each section
let timerElement = document.querySelector("#timer");
let startButton = document.getElementById("startbutton");
let mainMenu = document.querySelector(".main")
let quiz = document.querySelector(".questions");
let scoreBoard = document.getElementById("scores")

/* Score Tracking and Display
let score = 0
let bestTime = 0

function scoreScreen
*/

scoreBoard.addEventListener("click", scoreScreen); 

function scoreScreen() {
    card7.style.display = "block";
    mainMenu.style.display = "none";
    quiz.style.display = "none";

    

}

// Timer Function
startButton.addEventListener("click", startTimer);

let seconds = 59;
let minutes = 4;
let interval = null;

function startTimer() {
    interval = setInterval(timerFunction, 1000);
}

function timerFunction() {
    seconds--;

    if (seconds == 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes == 0 && seconds == 0) {
        clearInterval(interval);
        scoreScreen();
        return;
    }

timerElement.textContent = "Timer " + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");


}

// Page Switching Quiz/ Wrong answer time is added

let alertMessage = document.getElementById("wronganswer");
let submitButtton = document.querySelector("submitbutton");

let card = document.getElementById("card");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");

let question1 = document.getElementById("form1");
let correctAnswer1 = document.getElementById("form1"[1]);
let question2 = document.getElementById("form2");
let question3 = document.getElementById("form3");
let question4 = document.getElementById("form4");
let question5 = document.getElementById("form5");

startButton.addEventListener("click", quizTime);

function quizTime() {
    card.style.display = "none";
    card2.style.display = "block";



    if (selected === correctAnswer1) {
        score++;
    }
    if (selected === incorrectAnswer) {
        seconds= -30;
        alertMessage.style.display = "block";
    }
}






