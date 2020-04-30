// Variable declarations targetting the id's and classes that are powered by JS in this program
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
var mainPageButton = document.querySelector("#go-main");
var mainPageDiv = document.querySelector("#go-main-div");
var clearButton = document.querySelector("#clear");
// User starts with 75 seconds to complete the quiz
var secondsLeft = 75;
// Array to store high scores
var highScores = [];
// GameOver is set to false when the game begins and is set to true if the timer reaches 0 or the user finishes the quiz with time left
var gameOver;
var timerInterval;

// Nearly all divs begin the program hidden from the user, divs appear as the user navigates the program
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
clearButton.style.display = "none";

// When the game is started, timer begins at 75 seconds and decrements every 1 second
function setTime(){
    timerInterval = setInterval(function(){
    secondsLeft--;
    // Time remaining text is displayed in time div in upper right hand corner of screen
    time.textContent = secondsLeft;
    gameOver = false;
    // User is alerted if they run out of time, user cannot save a high score but are taken to main page 
    if(secondsLeft < 1){
        clearInterval(timerInterval);
        alert("You ran out of time! No high score recorded for you, reload the page to try again");
    }
    // If user finishes game with time left, timer is paused
    else if(gameOver === true){
        clearInterval(timerInterval);
    }
}, 1000);
}

// When user starts game, first question and timer are made visible, user starts with 75 seconds
function startQuiz(event){
    // event.preventDefault();
    secondsLeft = 75;
    gameOverDiv.style.display = "none";
    startDiv.style.display = "none";
    scores.style.display = "none";
    timer.style.display = "block";
    question1.style.display = "block";
}

// If user selects correct answer, next question is displayed and there is no penalty on time left
function rightAnswerFunction1(event){
    if (event.target.matches("#right1")){
        renderCorrect();
        question1.style.display = "none";
        question2.style.display = "block";
    }
}
// If user selects incorrect answer, next question is displayed and there is a 15 second penalty on time left
function wrongAnswerFunction1(event){
    if (event.target.matches(".wrong1")){
        renderIncorrect();
        question1.style.display = "none";
        question2.style.display = "block";
        secondsLeft = secondsLeft - 15;
    }
}

// If user selects correct answer, next question is displayed and there is no penalty on time left
function rightAnswerFunction2(event){
    if (event.target.matches("#right2")){
        renderCorrect();
        question2.style.display = "none";
        question3.style.display = "block";
    }
}
// If user selects incorrect answer, next question is displayed and there is a 15 second penalty on time left
function wrongAnswerFunction2(event){
    if (event.target.matches(".wrong2")){
        renderIncorrect();
        question2.style.display = "none";
        question3.style.display = "block";
        secondsLeft = secondsLeft - 15;
    }
}
// If user selects correct answer, next question is displayed and there is no penalty on time left
function rightAnswerFunction3(event){
    if (event.target.matches("#right3")){
        renderCorrect();
        question3.style.display = "none";
        question4.style.display = "block";
    }
}
// If user selects incorrect answer, next question is displayed and there is a 15 second penalty on time left
function wrongAnswerFunction3(event){
    if (event.target.matches(".wrong3")){
        renderIncorrect();
        question3.style.display = "none";
        question4.style.display = "block";
        secondsLeft = secondsLeft - 15;
    }
}
// If user selects correct answer, next question is displayed and there is no penalty on time left
function rightAnswerFunction4(event){
    if (event.target.matches("#right4")){
        renderCorrect();
        question4.style.display = "none";
        question5.style.display = "block";
    }
}
// If user selects incorrect answer, next question is displayed and there is a 15 second penalty on time left
function wrongAnswerFunction4(event){
    if (event.target.matches(".wrong4")){
        renderIncorrect();
        question4.style.display = "none";
        question5.style.display = "block";
        secondsLeft = secondsLeft - 15;
    }
}
// If user selects correct answer, game over screen is displayed and there is no penalty on time left
function rightAnswerFunction5(event){
    if (event.target.matches("#right5")){
        gameOverFunction();
    }
}
// If user selects incorrect answer, next question is displayed and there is a 15 second penalty on time left
function wrongAnswerFunction5(event){
    if (event.target.matches(".wrong5")){
        secondsLeft = secondsLeft - 15;
        gameOverFunction();
    }
}
// Gameover boolean is set to true, and game over div is displayed where user can save score and initials
function gameOverFunction() {
    question5.style.display = "none";
    wrongAnswer.style.display = "none";
    rightAnswer.style.display = "none";
    gameOverDiv.style.display = "block";
    score.textContent = secondsLeft;
    gameOver = true;
    clearInterval(timerInterval);
}
// This function stores the user's high score if the user inputs a value for initial that is longer than 1 character
function submitFunction(event){
    event.preventDefault();
    // Score is stored as the number of seconds left in timer at end of game, and is paired with user initials
    var highScore = {
        score: secondsLeft,
        initial: initials.value.trim()
    };
    // If user selects the submit button
    if (event.target.matches("#submit")){
        // initials must be at least 2 characters
        if (initials.value.length < 2){
            alert("Error, please input at least two values as your initials");
            return;
        } 
    // High score object that contains user initial and score is stored in highScores array
    highScores.push(highScore);
    // Values in highScores array are stringified and set for local storage
    localStorage.setItem("highScore", JSON.stringify(highScores));
    // Set lastUsers variable equal to parsed high score object in local storage
    var lastUsers = JSON.parse(localStorage.getItem("highScore"));
    gameOverDiv.style.display = "none";
    wrongAnswer.style.display = "none";
    rightAnswer.style.display = "none";
    // User can select main page button to go back to main page
    mainPageDiv.style.display = "block";
    results.style.display = "block";
    // Resets highScoreDiv before running for loop to precent program from appending over previous iterations of listing user initials and high scores
    results.innerHTML = "<h2>High Scores</h2>";
    // Accesses the high score objects and appends them to the HighScoreDiv, which is then made visible to the user

    for (var i = 0; i < lastUsers.length; i++){
        var br = document.createElement("br");
        var liScore = lastUsers[i].score;
        var liInitials = lastUsers[i].initial;
        results.append(liInitials);
        results.append(" - " + liScore);
        results.append(br);
        results.style.display = "block";
        highScores.sort(function(a,b){
            return b.score - a.score
        });
    }
    // User prompted to view high scores page
    viewHighScoresFunction();
    results.style.display = "block";
    }
}

// When thsi function is called user can see results, and can click clear button to clear high scores or main page button to return to the main page
function viewHighScoresFunction(event){
    results.style.display = "block";
    clearButton.style.display = "block";
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
}
// When user is on main page the startDiv and score divs are displayed as a starting point for the user to begin using the application
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
// When user clicks clear button the local storage is cleared
function clearButtonFunction(event){
    window.localStorage.clear();
    highScoreDiv.innerHTML = "";
    lastUsers.innerHTML = "";
    highScores.innerHTML = "";
    liScore.innerHTML = "";
    liInitials.innerHTML = "";
    results.innerHTML = "";
}
// If user answers a question correctly, a message appears informing the user they made the correct selection
function renderCorrect(){
    rightAnswer.style.display = "block";
    wrongAnswer.style.display = "none";
}
// If user answers a question incorrectly, a message appears informing the user they made the incorrect selection
function renderIncorrect(){
    rightAnswer.style.display = "none";
    wrongAnswer.style.display = "block";
}
// Event listeners and associated functions for the buttons utilized in this program
startButton.addEventListener("click", startQuiz);
startButton.addEventListener("click", setTime);
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
playAgain.addEventListener("click", setTime);
scores.addEventListener("click", viewHighScoresFunction);
mainPageButton.addEventListener("click", mainPageFunction);
clearButton.addEventListener("click", clearButtonFunction);

