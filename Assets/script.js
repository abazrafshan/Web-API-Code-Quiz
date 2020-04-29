var scores = document.querySelector(".scores");
var timer = document.querySelector(".timer");
var time  = document.querySelector("#time");
var startDiv  = document.querySelector("#start-div");
var startButton = document.querySelector("#start");
var question1 = document.querySelector("#question1");
var rightButton1 = document.querySelector(".question-options1");
var wrongButton1 = document.querySelector(".question-options1");
var question2 = document.querySelector("#question2");
var rightButton2 = document.querySelector(".question-options2");
var wrongButton2 = document.querySelector(".question-options2");
var question3 = document.querySelector("#question3");
var rightButton3 = document.querySelector(".question-options3");
var wrongButton3 = document.querySelector(".question-options3");
var question4 = document.querySelector("#question4");
var rightButton4 = document.querySelector(".question-options4");
var wrongButton4 = document.querySelector(".question-options4");
var question5 = document.querySelector("#question5");
var rightButton5 = document.querySelector(".question-options5");
var wrongButton5 = document.querySelector(".question-options5");
var rightAnswer = document.querySelector("#right-answer");
var wrongAnswer = document.querySelector("#wrong-answer");
var questionHeader = document.querySelector("#question-header");
var gameOverDiv = document.querySelector("#game-over");
var score = document.querySelector("#score");
var initials = document.querySelector("#initials");
var submitButton = document.querySelector("#submit");
var playAgain = document.querySelector("#play-again");
var results = document.querySelector("#results");
var highDcoreDiv = document.querySelector("#high-score-div");
var firstPlace = document.querySelector("#first-place");
var secondPlace = document.querySelector("#second-place");
var thirdPlace = document.querySelector("#third-place");
var fourthPlace = document.querySelector("#fourth-place");
var fifthPlace = document.querySelector("#fifth-place");
var secondsLeft = 75;
var highScores = [];
var gameOver;
var timerInterval;
// var initial;
// var score;

gameOverDiv.style.display = "none";
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
rightAnswer.style.display = "none";
wrongAnswer.style.display = "none";
results.style.display = "none";

function setTime(){
    timerInterval = setInterval(function(){
    secondsLeft--;
    time.textContent = secondsLeft;
    gameOver = false;
    if(secondsLeft === 0){
        clearInterval(timerInterval);
        alert("You ran out of time! No high score recorded for you, reload the page to try again");
    }
    else if(gameOver === true){
        clearInterval(timerInterval);
    }
}, 1000);
}

function startQuiz(event){
    event.preventDefault();
    secondsLeft = 75;
    setTime();
    startDiv.style.display = "none";
    question1.style.display = "block";
}

function rightAnswerFunction1(event){
    if (event.target.matches("#right1")){
        renderCorrect();
        question1.style.display = "none";
        question2.style.display = "block";
    }
}

function wrongAnswerFunction1(event){
    if (event.target.matches(".wrong1")){
        renderIncorrect();
        question1.style.display = "none";
        question2.style.display = "block";
        secondsLeft = secondsLeft - 15;
    }
}

function rightAnswerFunction2(event){
    if (event.target.matches("#right2")){
        renderCorrect();
        question2.style.display = "none";
        question3.style.display = "block";
    }
}

function wrongAnswerFunction2(event){
    if (event.target.matches(".wrong2")){
        renderIncorrect();
        question2.style.display = "none";
        question3.style.display = "block";
        secondsLeft = secondsLeft - 15;
    }
}

function rightAnswerFunction3(event){
    if (event.target.matches("#right3")){
        renderCorrect();
        question3.style.display = "none";
        question4.style.display = "block";
    }
}

function wrongAnswerFunction3(event){
    if (event.target.matches(".wrong3")){
        renderIncorrect();
        question3.style.display = "none";
        question4.style.display = "block";
        secondsLeft = secondsLeft - 15;
    }
}

function rightAnswerFunction4(event){
    if (event.target.matches("#right4")){
        renderCorrect();
        question4.style.display = "none";
        question5.style.display = "block";
    }
}

function wrongAnswerFunction4(event){
    if (event.target.matches(".wrong4")){
        renderIncorrect();
        question4.style.display = "none";
        question5.style.display = "block";
        secondsLeft = secondsLeft - 15;
    }
}

function rightAnswerFunction5(event){
    if (event.target.matches("#right5")){
        renderCorrect();
        gameOverFunction();
    }
}

function wrongAnswerFunction5(event){
    if (event.target.matches(".wrong5")){
        secondsLeft = secondsLeft - 15;
        renderIncorrect();
        gameOverFunction();
    }
}

function gameOverFunction() {
    question5.style.display = "none";
    gameOverDiv.style.display = "block";
    score.textContent = secondsLeft;
    gameOver = true;
    clearInterval(timerInterval);
}

function submitFunction(event){
    var highScore = {
        score: secondsLeft,
        initial: initials.value.trim()
    };
    if (event.target.matches("#submit")){
        if (initials.length < 2){
            alert("error", "Please input you initials");
        } else { alert("success", "Score logged successfully");}
        localStorage.setItem("highScore", JSON.stringify(highScore));
        var lastUser = JSON.parse(localStorage.getItem("highScore"));
        highScores.push(lastUser);
        gameOverDiv.style.display = "none";
        // results.style.display = "block";
        wrongAnswer.style.display = "none";
        rightAnswer.style.display = "none";
        highScores.sort(function(a,b){
            return b.score - a.score
        });
        console.log(highScores);

    }
}

function viewHighScoresFunction(event){
    results.style.display = "block";
    gameOverDiv.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "none";
    firstPlace.textContent = "First Place - Initials: "+ highScores[0].initial + " Score: " + JSON.stringify(highScores[0].score);
    secondPlace.textContent = "Second Place - Initials: "+ highScores[1].initial + " Score: " + JSON.stringify(highScores[1].score);
    thirdPlace.textContent = "Third Place - Initials: "+ highScores[2].initial + " Score: " + JSON.stringify(highScores[2].score);
    fourthPlace.textContent = "Fourth Place - Initials: "+ highScores[3].initial + " Score: " + JSON.stringify(highScores[3].score);
    fifthPlace.textContent = "Fifth Place - Initials: "+ highScores[4].initial + " Score: " + JSON.stringify(highScores[4].score);
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
submitButton.addEventListener("click", submitFunction);
playAgain.addEventListener("click", startQuiz);
scores.addEventListener("click", viewHighScoresFunction);
