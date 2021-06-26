// create a timer that starts when the start button is pushed, time should be subtracted from countdown when a wrong answer is selected
var timeEl = document.querySelector("timerEl");

var quizEl = document.getElementById("quizEl");

var timeLeft = 130;

function setTime() {
    //Sets interval in variable
  var timeInterval = setInterval(function() {
      timeLeft--;
      timerEl.textContent = timeLeft + "seconds";

      if (timeLeft===0) {
        //stops execution of action at set interval
        clearInterval(timeInterval);
        // sends game over message
        // timeLeft.textContent=''
        // displayMessage();
      }
  }, 1000);
}

console.log.(setTime());

// //function to create game over message
function displayMessage() {
    timeEl.textContent = "Game Over";
    document.getElementById(".gameStatus").innerHTML ="Game Over";

    
}

// create a high scores button that shows the top 5 high scores of the game
// create a quiz section that asks questions about javascript and is multiple choice 
// when all questions are answered or time runs out dipslay game over and score
// when game is over player can save initials and score

