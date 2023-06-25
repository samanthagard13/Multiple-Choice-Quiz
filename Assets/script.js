let startButton = document.getElementById("startbutton");
let timerElement = document.querySelector("#timer");
let time = localStorage.getItem("time");
let mainMenu = document.getElementById("card");
let scoreBoard = document.getElementById("scores");
let scoreCard = document.getElementById("scorecard");
let addScore = document.getElementById("addscore");
let highscores = document.querySelector(".highscores");
let initialsInput = document.getElementById("initialsinput");
let initialsSubmit = document.getElementById("initialssubmit");
let initialDisplay = document.getElementById("initialdisplay");
let questionTitle = document.getElementById("questionTitle");
let questionsCard = document.getElementById("questionscard");
let seconds = 60;
let minutes = 2;
let interval = null;
let questionsArray = [
    "Which One Of These Logs To The Console?",
    "Which One Of These Sends Files To GitHub?",
    "What Command Shows You Every File In Your Current Directory?",
    "How Do You Add A Paragraph Element To HTML?",
    "What Word Can You Use To Declare A Variable In JavaScript?"];
let currentQuestionIndex = 0;
let choice1Array = [" consolelog. ", " git shove ", " ul ", " <p> ", " let "];
let choice2Array = [" console.log ", " git jump ", " il ", " <P> ", " var "];
let choice3Array = [" consoleLog ", " git push ", " ls ", " <par> ", " const "];
let choice4Array = [" None ", " None ", " None ", " None ", " All Of The Above "];
let correctAnswers = [" console.log ", " git push ", " ls ", " <p> ", " All Of The Above "];
let choice1Index = 0;
let choice2Index = 0;
let choice3Index = 0;
let choice4Index = 0;
let options = document.querySelectorAll(".choices");
let alertMessage = document.querySelector("#answeralert");

function startQuiz() {
mainMenu.style.display = "none";
questionsCard.style.display = "block";
startTimer();
nextQuestion();
};

function nextQuestion() {
    event.preventDefault()
    questionTitle.textContent = questionsArray[currentQuestionIndex];
    choice1.textContent = choice1Array[currentQuestionIndex];
    choice2.textContent = choice2Array[currentQuestionIndex];
    choice3.textContent = choice3Array[currentQuestionIndex];
    choice4.textContent = choice4Array[currentQuestionIndex];
    console.log("working1");

    for (var i = 0; i < options.length; i++) {
    options[i].addEventListener("click", checkAnswer);
    }
};

function checkAnswer(event) {
    var selectedAnswer = event.target.innerText.trim();
    var correctAnswer = correctAnswers[currentQuestionIndex];
    console.log(event.target.innerText);
    
    if (selectedAnswer === correctAnswer) {
        currentQuestionIndex++;
        choice1Index++;
        choice2Index++;
        choice3Index++;
        choice4Index++;
        console.log("working2")
        nextQuestion();
    } else {
        alertMessage.style.display = "block";
        seconds -= 30;
        currentQuestionIndex++;
        choice1Index++;
        choice2Index++;
        choice3Index++;
        choice4Index++;
        console.log("working3");

        setTimeout(function() {
            alertMessage.style.display = "none";
        }, 3000);
    }
    nextQuestion();
};

function startTimer() {
    interval = setInterval(timerFunction, 1000);

    timerFunction();
};

function timerFunction() {
    seconds--;

    if (seconds <= 0) {
        seconds = 59;
        minutes--;
    }
    if (minutes === 0 && seconds === 0) {
        clearInterval(interval);
        addInitials();
        return;
    }

timerElement.textContent = "Timer " + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

    if (minutes === 0 && seconds == 0) {
        clearInterval(interval);
        addInitials();
    }
    if (currentQuestionIndex >= 5) {
        localStorage.setItem("time", timerElement.textContent);
        clearInterval(interval);
        addInitials();
    }
};

function addInitials() {
    scoreCard.style.display = "block";
    addScore.style.display = "block";
    timerElement.style.display = "block";
    highscores.style.display = "none";
    questionsCard.style.display = "none";
    mainMenu.style.display = "none";
    initialsSubmit.addEventListener("click", scoreScreen);
};

function scoreScreen() {
    highscores.style.display = "block";
    mainMenu.style.display = "none";
    questionsCard.style.display = "none";
    addScore.style.display = "none";
    let time = localStorage.getItem("time");
    timerElement.textContent = "Time Left: " + time;
    let response = initialsInput.value;
    initialDisplay.textContent = response + " " + timerElement.textContent;
};

scoreBoard.addEventListener("click", scoreScreen);
startButton.addEventListener("click", startQuiz);