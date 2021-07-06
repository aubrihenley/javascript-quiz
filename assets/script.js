//  Global variables and selectors
var timerEl = document.querySelector("#time");

var quizEl = document.getElementById("quiz");

var message = 'Game Over';

var timeLeft = 75;



// Quiz questions array
let questions = [
  {
    questions:
    options: [],
    correct: 
},
{
  questions: "Inside which HTML element do we put the JavaScript?"
  options: ["<script>", "<js>", "<scripting>", "<javascript>"],
  correct: 0
},
{
  questions: "Where is the correct place to insert JavaScript?"
  options: ["The <head> section", "The <body> section", "within a <div>", "After the footer"],
  correct: 1
},
{
  questions: "How do you write 'Hello World' in an alertr box?"
  options: ["alertBox("Hello World");", "alert("Hello World");", "msgBox("Hello World");", "msg("Hello World");"],
  correct: 
},
{
  questions: "How do you create a function in JavaScript?"
  options: ["function = myFunction()", "function:myFunction()", "function myFunction()", "create.function = myFunction"],
  correct: 0
},
{
  questions: "How do you call a function named 'myFunction'?"
  options: ["call function myFunction()", "call myFunction()", "myFunction()", "myFunction(call)"],
  correct: 2
},
{
  questions: "How does a FOR Loop start"
  options: ["for (i = 0; i <= 5)", "for (i <= 5; i++)", "for i = 1 to 5", "for (i = 0; i < 5; i++)"],
  correct: 
},

// create a timer that starts when the start button is pushed, time should be subtracted from countdown when a wrong answer is selected
const start = document.getElementById("startBtn")
start.addEventListener("click", countDown)

//starts timer countdown
 function countDown(event){
  event.preventDefault();
    //Sets interval in variable
  var timeInterval = setInterval(function() {

    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds';
      //decrement time left by 1 
      timeLeft--;
    } else if (timeLeft===1) {
      //changes seconds to second
      timerEl.textContent = timeLeft + ' second';
      timeLeft--;
    } else {
      timerEl.textContent = '';
      //stops execution of action at set interval
      clearInterval(timeInterval);
      // sends game over message
      displayMessage();
      }
  }, 1000);
}

// subtract 10 seconds for wrong answers
document.getElementById('isWrong').addEventListener('click', function(){
  timeLeft -= 10;
  document.getElementById('time').innerHTML= timeLeft;
});

// function to create game over message
function displayMessage() {
   if (timeLeft===0) {
     clearInterval(timeLeft);
     document.getElementById("gameStatus").innerHTML = "Game Over";
    }
  }

// create a quiz section that asks questions about javascript and is multiple choice 
var submitAnswer = function(){
for (var i=0; i <questions.length; i++) {
  var selectedAnswer = document.querySelector("choice")
  }
}




// when game is over player can save initials and score: highscores container that is hidden and then can be displayed when button or link pushed
// create a high scores button that shows the top 5 high scores of the game

