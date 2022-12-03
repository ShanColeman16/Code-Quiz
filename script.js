//GIVEN I am taking a code quiz
//STEP: 1.
// WHEN I click the start button
var startButtonQuizEl = document.querySelector(".Start-Quiz");
//THEN a timer starts and I am presented with a question


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
var nextEl = document.querySelector("#next");
testNum = 5
var pointer = 0;
var questions = [
  "This is question one?", 
  "This is question two?",
  "This is question three?",
  "This is question four?" 

];

// Added function to display questions
var displayQuestion = function () {
  nextEl.textContent =  questions[pointer];

};

// Added advance function to advance screen forward
var renderAndStartTimer = function() {
  if (pointer < questions.length -1) {
    pointer++;
  } 

  displayQuestion();

};

// Added EventListener
nextEl.addEventListener("click", advance);

//Added to display the first question when page loads
displayQuestion();