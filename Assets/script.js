let startButton = document.getElementById("startbutton");
let timerElement = document.querySelector("#timer");
let time = localStorage.getItem("time");
let mainMenu = document.getElementById("card");
let scoreBoard = document.getElementById("scores");
let scoreCard = document.getElementById("scorecard");
let addScore = document.getElementById("addscore");
let initialsInput = document.getElementById("initialsinput");
let initialSubmit = document.getElementById("initialsubmit");
let initialDisplay = document.getElementById("initialdisplay");
let questionTitle = document.getElementById("questionTitle");
let questionsCard = document.getElementById("questionscard");
let seconds = 59;
let minutes = 4;
let interval = null;
let questionsArray = [
    "Which One Of These Logs To The Console?",
    "Which One Of These Sends Files To GitHub?",
    "What Command Shows You Every File In Your Current Directory?",
    "How Do You Add A Paragraph Element To HTML?",
    "What Word Can You Use To Declare A Variable In JavaScript?"];
let currentQuestionIndex = 0;
let choice1Array = ["1. consolelog.", "1. git shove", "1. ul", "1. <p>", "1. let"];
let choice2Array = ["2. console.log", "2. git jump", "2. il", "2. <P>", "2. var"];
let choice3Array = ["3. consoleLog", "3. git push", "3. ls", "3. <par>", "3. const"];
let choice4Array = ["4. None", "4. None", "4. None", "4. None", "4. All Of The Above"];
let correctAnswers = ["2. console.log", "3. git push", "3. ls", "2. <p>", "4. All Of The Above"];
let choice1Index = 0;
let choice2Index = 0;
let choice3Index = 0;
let choice4Index = 0;
let options = document.querySelector(".choices");
let alertMessage = document.querySelector("#answeralert");

function startQuiz() {
mainMenu.style.display = "none";
questionsCard.style.display = "block";
 nextQuestion();
 startTimer();
}

function nextQuestion() {
event.preventDefault()
alertMessage.style.display = "none";
//display first question of array
questionTitle.textContent = questionsArray[currentQuestionIndex];
//display first of all answer array
choice1.textContent = choice1Array[currentQuestionIndex];
choice2.textContent = choice2Array[currentQuestionIndex];
choice3.textContent = choice3Array[currentQuestionIndex];
choice4.textContent = choice4Array[currentQuestionIndex];

    if (options.selected === correctAnswers[currentQuestionIndex]) {
       currentQuestionIndex++;
       choice1Index++;
       choice2Index++;
       choice3Index++;
       choice4Index++;
    } else {
        seconds -= 30;
        alertMessage.style.display = "block";
        currentQuestionIndex++;
        choice1Index++;
        choice2Index++;
        choice3Index++;
        choice4Index++;
    }

    if (minutes === 0 && seconds == 0) {
        addInitials();
    }
    if (currentQuestionIndex == 5) {
        addInitials();
    }
}

function startTimer() {
    interval = setInterval(timerFunction, 1000);

    timerFunction();
};

function timerFunction() {
    seconds--;

    if (seconds === 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        addInitials();
        return;
    }

timerElement.textContent = "Timer " + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");
};

function addInitials() {
    addScore.style.display = "block";
    initialSubmit.addEventListener("click", scoreScreen);
}

function scoreScreen() {
    scoreCard.style.display = "block";
    mainMenu.style.display = "none";
    questionsCard.style.display = "none";
    addScore.style.display = "none";
    let response = initialsInput.value;
    initialDisplay.textContent = response + " " + timerElement.textContent;
    // add to previous list
};

scoreBoard.addEventListener("click", scoreScreen);
startButton.addEventListener("click", startQuiz);
