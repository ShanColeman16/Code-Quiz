// Added nextEl = Document.querySelector("#next") to move questions forward

var nextEl = Document.querySelector("#next");
var pointer = 0;
var questions = [
  "This is question one?", 
  "This is question two?",
  "This is question three?",
  "This is question four?" 

];

// Added function to display questions
var displayQuestion = function () {


};

// Added advance function to advance screen forward
var advance = function() {
  if (pointer < questions.length -1) {
    pointer++;
  } else {
    
  }
  

};

// Added EventListener
nextEl.addEventListener("click", advance);