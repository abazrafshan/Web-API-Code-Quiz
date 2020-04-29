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
var highScoreDiv = document.querySelector("#high-score-div");
var firstPlace = document.querySelector("#first-place");
var secondPlace = document.querySelector("#second-place");
var thirdPlace = document.querySelector("#third-place");
var fourthPlace = document.querySelector("#fourth-place");
var fifthPlace = document.querySelector("#fifth-place");
var mainPageButton = document.querySelector("#go-main");
var mainPageDiv = document.querySelector("#go-main-div");
var secondsLeft = 75;
var highScores = [];
var gameOver;
var timerInterval;

gameOverDiv.style.display = "none";
question1.style.display = "none";
question2.style.display = "none";
question3.style.display = "none";
question4.style.display = "none";
question5.style.display = "none";
rightAnswer.style.display = "none";
wrongAnswer.style.display = "none";
results.style.display = "none";
mainPageDiv.style.display = "none";

function setTime(){
    timerInterval = setInterval(function(){
    secondsLeft--;
    time.textContent = secondsLeft;
    gameOver = false;
    if(secondsLeft < 1){
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
    gameOverDiv.style.display = "none";
    startDiv.style.display = "none";
    scores.style.display = "none";
    timer.style.display = "block";
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
        gameOverFunction();
    }
}

function wrongAnswerFunction5(event){
    if (event.target.matches(".wrong5")){
        secondsLeft = secondsLeft - 15;
        gameOverFunction();
    }
}

function gameOverFunction() {
    question5.style.display = "none";
    wrongAnswer.style.display = "none";
    rightAnswer.style.display = "none";
    gameOverDiv.style.display = "block";
    score.textContent = secondsLeft;
    gameOver = true;
    clearInterval(timerInterval);
}

function submitFunction(event){
    event.preventDefault();
    var highScore = {
        score: secondsLeft,
        initial: initials.value.trim()
    };
    if (event.target.matches("#submit")){
        if (initials.value.length < 2){
            alert("Error, please input at least two values as your initials");
            return;
        } 
    highScores.push(highScore);
    localStorage.setItem("highScore", JSON.stringify(highScore));
    var lastUser = JSON.parse(localStorage.getItem("highScore"));
    
    gameOverDiv.style.display = "none";
    wrongAnswer.style.display = "none";
    rightAnswer.style.display = "none";
    mainPageDiv.style.display = "block";
    results.style.display = "block";
    // highScoreDiv.style.display = "block";
        // playAgain.style.display = "block";
    highScores.sort(function(a,b){
        return b.score - a.score
    });
    console.log(highScores);
    for (var i = 0; i < highScores.length; i++){
        // var highScore = highScores[i].score;
        // var liScore = document.createElement("li");
        // var liInitials = document.createElement("li");
        var br = document.createElement("br");
        var liScore = highScores[i].score;
        var liInitials = highScores[i].initial;

        console.log(liScore);
        console.log(liInitials)
        highScoreDiv.append(liInitials);
        highScoreDiv.append(" - " + liScore);
        highScoreDiv.append(br);
    highScoreDiv.style.display = "block";
    }
    viewHighScoresFunction();
    }
}

function viewHighScoresFunction(event){
    // event.preventDefault();
    results.style.display = "block";
    mainPageDiv.style.display = "block";    
    gameOverDiv.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "none";
    startDiv.style.display = "none";
    timer.style.display = "none";
//     for (var i = 0; i < highScores.length; i++){
//         // var highScore = highScores[i].score;
//         var liScore = document.createElement("li");
//         var liInitials = document.createElement("li");
//         var br = document.createElement("br");
//         liScore = highScores[i].score;
//         liInitials = highScores[i].initial;

//         console.log(liScore);
//         console.log(liInitials)
//         highScoreDiv.append(liInitials);
//         highScoreDiv.append(" - " + liScore);
//         highScoreDiv.append(br);
//     highScoreDiv.style.display = "block";
// } 
}
    console.log(highScoreDiv);

    // if (highscores[0] = undefined){
    //     firstPlace.textContent = "First Place - Initials: "+ highScores[0].initial + " Score: " + JSON.stringify(highScores[0].score)}
    // else if(highscores[1] = undefined){
    //     secondPlace.textContent = "Second Place - Initials: "+ highScores[1].initial + " Score: " + JSON.stringify(highScores[1].score)}
    // else if (highscores[2] != undefined){
    //     thirdPlace.textContent = "Third Place - Initials: "+ highScores[2].initial + " Score: " + JSON.stringify(highScores[2].score)}
    // else if (highscores[3] != undefined){
    //     fourthPlace.textContent = "Fourth Place - Initials: "+ highScores[3].initial + " Score: " + JSON.stringify(highScores[3].score)}
    // else if (highscores[4] != undefined){
    //     fifthPlace.textContent = "Fifth Place - Initials: "+ highScores[4].initial + " Score: " + JSON.stringify(highScores[4].score)}
    // else {alert("Something is wrong with the viewhighscoresfunction")};
//     }
// }

// function renderHighScores(){
//     results.innerHTML = "";
//     for (var i = 0; i < highScores.length; i++){
//         var highScore = highScores[i];
//         console.log(highScore);

//         var li = document.createElement("li");
//         li.textContent = highscore;
//         li.setAttribute("data-index", i);
//         results.appendChild(li);
//     }
// }

function mainPageFunction(event) {
    startDiv.style.display = "block";
    scores.style.display = "block"
    gameOverDiv.style.display = "none";
    question1.style.display = "none";
    question2.style.display = "none";
    question3.style.display = "none";
    question4.style.display = "none";
    question5.style.display = "none";
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "none";
    results.style.display = "none";
    mainPageDiv.style.display = "none";
    secondsLeft = 75;
    gameOver = true;
}

function renderCorrect(){
    rightAnswer.style.display = "block";
    wrongAnswer.style.display = "none";
}

function renderIncorrect(){
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
mainPageButton.addEventListener("click", mainPageFunction);
