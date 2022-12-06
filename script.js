var nextEl = document.querySelector("#next");
var pointer = 0;
var div = document.getElementById("#questions")
var options = document.getElementsByClassName(".options")
var startButtonQuizEl = document.querySelector(".Start-Quiz");
var timerId
var timeEl = document.getElementById("timer");
var secondsLeft = 90;
const myQuestions = []
  myQuestions [0] = "This is question one?";
  myQuestions [1] = "This is question two?";
  myQuestions [2] = "This is question three?";

  //and I am presented with a question
   var advance = function() {
if (pointer < myQuestions.length -1)
  pointer++;
  };
  
  var displayQuestions = function () {
    for (var i = 0; i < myQuestions.length; i++) {
      const myQuestions = myQuestions[0];
      nextEl.addEventListener("click", advance);
    }
  };

function startQuiz() {
  timerId = setInterval(displayTime, 1000)
  timeEl.textContent = secondsLeft;

};

function displayTime() {
  secondsLeft--;
  timeEl.textContent = secondsLeft;
  if (secondsLeft <= 0) {
    GameOver()
  }
};

function GameOver() {
  console.log("GameOver");
  clearInterval(timerId)
}
////STEP 2: 
//WHEN I answer a question

//THEN I am presented with another question


////STEP 3: 
//WHEN I answer a question incorrectly

//THEN time is subtracted from the clock


////STEP 4.: 
//WHEN all questions are answered or the timer reaches 0


//THEN the game is over


////STEP 5.:
// WHEN the game is over


//THEN I can save my initials and my score



// Added nextEl = Document.querySelector("#next") to move questions forward


// Added function to display questions


// Added advance function to advance screen forward


// Added EventListener
//nextEl.addEventListener("click", pointer);
startButtonQuizEl.addEventListener("click", startQuiz);
//Added to display the first question when page loads
//displayQuestion();