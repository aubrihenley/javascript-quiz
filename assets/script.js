// create a timer that starts when the start button is pushed, time should be subtracted from countdown when a wrong answer is selected
var timerEl = document.querySelector("#time");

var quizEl = document.getElementById("quiz");

var message = 'Game Over';

var timeLeft = 75;

document.getElementById("startBtn").addEventListener("click", countDown)

 function countDown(event){
  event.preventDefault();
    //Sets interval in variable
  var timeInterval = setInterval(function() {

    if (timeLeft > 1) {
      timerEl.textContent = timeLeft + ' seconds';
      //decrement time left by 1 
      timeLeft--;
    } else if(timeLeft===1) {
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

// function to create game over message
function displayMessage() {
   if (timeLeft===0) {
     clearInterval(timeLeft);
     document.getElementById("gameStatus").innerHTML = "Game Over";
    }
  }



// create a high scores button that shows the top 5 high scores of the game
// create a quiz section that asks questions about javascript and is multiple choice 
// when all questions are answered or time runs out dipslay game over and score
// when game is over player can save initials and score: highscores container that is hidden and then can be displayed when button or link pushed


