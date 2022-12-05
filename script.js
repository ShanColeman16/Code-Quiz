var nextEl = document.querySelector("#next");
var pointer = 0;
var div = document.getElementById("#questions")
var options = document.getElementsByClassName(".options")
var questions = [
  "This is question one?",
  "This is question two?",
  "This is question three?",
  "This is question four?",
];

//GIVEN I am taking a code quiz
//STEP: 1.
// WHEN I click the start button
var startButtonQuizEl = document.querySelector(".Start-Quiz");
var timerId
//THEN a timer starts and I am presented with a question
var timeEl = document.getElementById("timer");
var secondsLeft = 90;
function displayQuestion() {
  var queryAndStartTimer = function () {
    for (pointer < questions.length; pointer++); {
      div.innerHTML = questions[pointer]
      options.classList.add("show")
      nextEl.addEventListener("click", pointer);
    }

  };
  console.log("displayQuestion");
};
function displayTime() {
  secondsLeft--;
  timeEl.textContent = secondsLeft;
  if (secondsLeft <= 0) {
    endQuiz()
  }
};
function startQuiz() {
  timerId = setInterval(displayTime, 1000)
  timeEl.textContent = secondsLeft;
  displayQuestion()
};

function endQuiz() {
  console.log("endquiz");
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