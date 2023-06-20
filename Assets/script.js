
let mainMenu = document.querySelector(".main");

// Score Tracking and Display

let scoreBoard = document.getElementById("scores");

scoreBoard.addEventListener("click", scoreScreen);

let initialsInput = document.getElementById("initialsinput");
let initialSubmit = document.getElementById("initialsubmit");
let initialDisplay = document.getElementById("initialdisplay");

function scoreScreen() {
    card7.style.display = "block";
    mainMenu.style.display = "none";
    quiz.style.display = "none";

initialSubmit.addEventListener("click", showList);
};

function showList() {
    let response = initialsInput.value + " " + timerElement.content;
    initialDisplay.textContent = response;
};

// Timer Function
let timerElement = document.querySelector("#timer");
let startButton = document.getElementById("startbutton");

startButton.addEventListener("click", startTimer);

let seconds = 59;
let minutes = 4;
let interval = null;

function startTimer() {
    interval = setInterval(timerFunction, 1000);

    timerFunction();
};

function timerFunction() {
    seconds--;

    if (seconds == 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        scoreScreen();
        return;
    }

timerElement.textContent = "Timer " + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
};

// Page Switching Quiz/ Wrong answer time is added
let quiz = document.querySelector(".questions");
let alertMessage = document.getElementById("wronganswer");
let submitButtton = document.querySelector("submitbutton");

let card = document.getElementById("card");
let card2 = document.getElementById("card2");
let card3 = document.getElementById("card3");
let card4 = document.getElementById("card4");
let card5 = document.getElementById("card5");
let card6 = document.getElementById("card6");

let question1 = document.getElementById("form1");
let question2 = document.getElementById("form2");
let question3 = document.getElementById("form3");
let question4 = document.getElementById("form4");
let question5 = document.getElementById("form5");

let correctAnswers = document.getElementById("form1"[1], "form2"[3]);

startButton.addEventListener("click", quizTime);

function quizTime() { {
    card.style.display = "none";
    card2.style.display = "block";

    submitButtton.addEventListener("click", checkAnswer);

};

function nextQuestion() {
    card2.style.display = "none";
    card3.style.display = "block";

    submitButtton.addEventListener("click", checkAnswer);

    };

function nextQuestion() {
    card3.style.display = "none";
    card4.style.display = "block";

    submitButtton.addEventListener("click", checkAnswer);

    };

function nextQuestion() {

    card4.style.display = "none";
    card5.style.display = "block";

    submitButtton.addEventListener("click", checkAnswer);
    };

function nextQuestion() {
    card5.style.display = "none";
    card6.style.display = "block";

    submitButtton.addEventListener("click", checkAnswer);

    scoreScreen();
    };

function checkAnswer() {
    if (question1.checked && correctAnswer.checked.length) {
        nextQuestion();
    } else {
        seconds= -30;
        alertMessage.style.display = "block";
        nextQuestion();
    }
}
}




