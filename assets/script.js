//  Global variables and selectors
var timerEl = document.querySelector("#time");
var quizEl = document.getElementById("quiz");
var start = document.getElementById("startBtn");
var questionAsked = document.getElementById("Question");
var highScore = document.getElementById("highScores");
var answerA = document.getElementById("A");
var answerB = document.getElementById("B");
var answerC = document.getElementById("C");
var answerD = document.getElementById("D");
 
// const question = getElementById("Question");

var message = 'Game Over';

var timeLeft = 75;

let startingQuestion = 0;

// create a timer that starts when the start button is pushed, time should be subtracted from countdown when a wrong answer is selected
document.getElementById("startBtn").addEventListener("click", startQuiz);

function startQuiz(event) {
  countDown(event);
  displayQuestion(event);
}

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
// }


// create a quiz section that asks questions about javascript and is multiple choice 
// Quiz questions array
var lastQuestion = quizQuestions.length -1;

function displayQuestion() {

const quizQuestions = [
  
  {
    questions: "Inside which HTML element do we put the JavaScript?",
    answerA : "<script>", 
    answerB : "<js>", 
    answerC : "<scripting>",
    answerD : "<javascript>",
    correct: "A"
  },
  {
    questions: "Where is the correct place to insert JavaScript?",
    answerA : "The <head> section",
    answerB : "The <body> section",
    answerC : "within a <div>",
    answerD : "Both the <head> section and the <body> sectiona are correct",
    correct: "D"
  },
  {
    questions: "How do you write 'Hello World' in an alertr box?",
    answerA : "alertBox('Hello World');",
    answerB : "alert('Hello World');",
    answerC : "msgBox('Hello World');",
    answerD : "msg('Hello World');",
    correct: "B"
  },
  {
    questions: "How do you create a function in JavaScript?",
    answerA : "function = myFunction()", 
    answerB : "function:myFunction()", 
    answerC : "function myFunction()", 
    answerD : "create.function = myFunction",
    correct: "C"
  },
  {
    questions: "How do you call a function named 'myFunction'?",
    answerA : "call function myFunction()", 
    answerB : "call myFunction()", 
    answerC : "myFunction()", 
    answerD : "myFunction(call)",
    correct: "C"
  },
  {
    questions: "How does a FOR Loop start",
    answerA: "for (i = 0; i <= 5)",
    answerB : "for (i <= 5; i++)",
    answerC : "for i = 1 to 5", 
    answerD : "for (i = 0; i < 5; i++)",
    correct: "D"
  },]

  //function to display questions

  let q = quizQuestions[startingQuestion];
  
  questionAsked.innerHTML = q.questions;

  answerA.textContent = q.answerA;

  answerB.textContent = q.answerB;

  answerC.textContent = q.answerC;

  answerD.textContent = q.answerD;
}





// // when game is over player can save initials and score: highscores container that is hidden and then can be displayed when button or link pushed
// highScoreBtn.addEventListener("click", function,(event) {
//   var player = {
//     initials: 

//   }
// })
