var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var time  = document.querySelector("#time");
var startDiv  = document.querySelector("#start-div");
var startButton = document.querySelector("#start");
var question1 = document.querySelector("#question1");
var question2 = document.querySelector("#question2");
var question3 = document.querySelector("#question3");
var question4 = document.querySelector("#question4");
var question5 = document.querySelector("#question5");
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

function startQuiz(event){
    event.preventDefault();
    startDiv.style.display = "none";
    question1.style.display = "block";

}


startButton.addEventListener("click", startQuiz);