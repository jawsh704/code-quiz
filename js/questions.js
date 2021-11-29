
var questions = [
    {
        title: "What tag is used to define an interactive button in an HTML document?",
        choices: ["<footer>", "<button>", "<head>", "<div>"],
        answer: 1,
    },
    {
        title: "Arrays in javascript can be used to store _____.",
        choices: ["numnbers and strings", "other arrays", "booleans", "all of the above"],
        answer: 3,
    },
    {
        title: "Strings mus be enclosed in _____ when assigned to a variable.",
        choices: ["commas", "curly brackets", "quotes", "none of the above"],
        answer: 2,
    },
    {
        title: "The if and else statements are enclosed in ______.",
        choices: ["Curly brackets", "quotes", "square brackets", "hashes"],
        answer: 0, 
    },
    {
        title: "A very useful tool for used during development and debugging for printing content to the debugger is:",
        choices: ["Javascript", "terminal / bash", "for loops", "console log"],
        answer: 3,
    }

];
// score variables
var score = 0;
var questionIndex = 0;

var timer = document.querySelector("#timer");
var startTime = document.querySelector("#startTime");
var questionContainer = document.querySelector("#container");
var questionDiv = document.querySelector("#questionDiv");
var button1 = document.querySelector("#button-1");
var button2 = document.querySelector("#button-2");
var button3 = document.querySelector("#button-3");
var button4 = document.querySelector("#button-4");
var questionEl = document.querySelector("#question");
var currentQuestion = 0;
var buttonArray = []
var timeInterval;
var timeLeft = 50;
var scoreDiv = document.querySelector("#scoreDiv");
var initials = document.querySelector("#initials");
var saveScore = document.querySelector("#saveScore");
var userScore = document.querySelector("#userScore");
var mainDiv = document.querySelector("#mainDiv");

buttonArray.push(button1);
buttonArray.push(button2);
buttonArray.push(button3);
buttonArray.push(button4);

function startGame() {
    mainDiv.classList.remove("hidden");
    showQuestion();
    countDown();
}

// timer variables
function countDown() {
  
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timer.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timer.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timer.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        endGame();
      }
    }, 1000);
  }

function showQuestion() {
    questionEl.textContent = questions[currentQuestion].title
    for (let i = 0; i < buttonArray.length; i++) {
        buttonArray[i].textContent = questions[currentQuestion].choices[i]
    }
}

function checkAnswer(userChoice) {
    if (questions[currentQuestion].answer === userChoice) {
        score++
    }
    else {
        timeLeft-=10;
    }
    currentQuestion++
    getNextQuestion();
}

function getNextQuestion() {
    if (currentQuestion < questions.length) {
    showQuestion();
}
    else {
        endGame()
}
 
}
var highScores = [];
if (localStorage.getItem("highScores")) {
    highScores = JSON.parse(localStorage.getItem("highScores"));
}
function endGame() {
    mainDiv.classList.add("hidden");
    userScore.innerText = "Your score is: " + score;
    console.log("end game");
    clearInterval(timeInterval);
    scoreDiv.classList.remove("hidden");
    saveScore.addEventListener("click", function() {
        var object = {
            initials: initials.value, score: score
        }
        highScores.push(object);
        localStorage.setItem("highScores", JSON.stringify(highScores));
    })
}

startTime.addEventListener("click", function(){
    startGame();
})
button1.addEventListener("click", function(){
    checkAnswer(0);
})
button2.addEventListener("click", function(){
    checkAnswer(1);
})
button3.addEventListener("click", function(){
    checkAnswer(2);
})
button4.addEventListener("click", function(){
    checkAnswer(3);
})
