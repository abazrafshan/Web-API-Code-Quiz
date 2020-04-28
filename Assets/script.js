var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var time  = document.querySelector("#time");
var startDiv  = document.querySelector("#start-div");
var startButton = document.querySelector("#start");
var question1 = document.querySelector("#question1");
var rightButton1 = document.querySelector("#right1");
var wrongButton1 = document.querySelector(".wrong1");
var question2 = document.querySelector("#question2");
var rightButton2 = document.querySelector("#right2");
var wrongButton2 = document.querySelector(".wrong2");
var question3 = document.querySelector("#question3");
var rightButton3 = document.querySelector("#right3");
var wrongButton3 = document.querySelector(".wrong3");
var question4 = document.querySelector("#question4");
var rightButton4 = document.querySelector("#right4");
var wrongButton4 = document.querySelector(".wrong4");
var question5 = document.querySelector("#question5");
var rightButton5 = document.querySelector("#right5");
var wrongButton5 = document.querySelector(".wrong5");
var rightAnswer = document.querySelector("#right-answer");
var wrongAnswer = document.querySelector("#wrong-answer");
var questionHeader = document.querySelector("#question-header");
var questionOptions = document.querySelector("#question-options");
var gameOverDiv = document.querySelector("#game-over");
var score = document.querySelector("#score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var results = document.querySelector("results");
var startTime = 75;

gameOverDiv.style.display = "none";
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
rightAnswer.style.display = "none";
wrongAnswer.style.display = "none";


function startQuiz(event){
    event.preventDefault();
    startDiv.style.display = "none";
    question1.style.display = "block";
}

function rightAnswerFunction1(event){
    renderCorrect();
        question1.style.display = "none";
        question2.style.display = "block";

    }

function wrongAnswerFunction1(event){
    renderIncorrect();
        question1.style.display = "none";
        question2.style.display = "block";
    }

function rightAnswerFunction2(event){
    renderCorrect();
        question2.style.display = "none";
        question3.style.display = "block";
}

function wrongAnswerFunction2(event){
    renderIncorrect();
        question2.style.display = "none";
        question3.style.display = "block";
}

function rightAnswerFunction3(event){
    renderCorrect();
        question3.style.display = "none";
        question4.style.display = "block";
    }

function wrongAnswerFunction3(event){
    renderIncorrect();
        question3.style.display = "none";
        question4.style.display = "block";
    }

function rightAnswerFunction4(event){
    renderCorrect();
        question4.style.display = "none";
        question5.style.display = "block";
    }


function wrongAnswerFunction4(event){
    renderIncorrect();
        question4.style.display = "none";
        question5.style.display = "block";
    }

function rightAnswerFunction5(event){
    renderCorrect();
    gameOverFunction();
}

function wrongAnswerFunction5(event){
    renderIncorrect();
    gameOverFunction();
}

function gameOverFunction() {

}

function renderCorrect(){
    event.preventDefault();
    rightAnswer.style.display = "block";
    wrongAnswer.style.display = "none";
}

function renderIncorrect(){
    event.preventDefault();
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "block";
}


startButton.addEventListener("click", startQuiz);
wrongButton1.addEventListener("click", wrongAnswerFunction1);
rightButton1.addEventListener("click", rightAnswerFunction1);
wrongButton2.addEventListener("click", wrongAnswerFunction2);
rightButton2.addEventListener("click", rightAnswerFunction2);
wrongButton3.addEventListener("click", wrongAnswerFunction3);
rightButton3.addEventListener("click", rightAnswerFunction3);
wrongButton4.addEventListener("click", wrongAnswerFunction4);
rightButton4.addEventListener("click", rightAnswerFunction4);
wrongButton5.addEventListener("click", wrongAnswerFunction5);
rightButton5.addEventListener("click", rightAnswerFunction5);

