var readlineSync = require('readline-sync');
var score = 0;
var questions = [{
  question: "Where do I live? ",
  answer: "Ujjain"
}, {
  question: "My favoutite alien from ultimatrix will be? ",
  answer: "Alien X"
},
{
  question: "What do I do? ",
  answer: "Nothing"
}
]
function welcome() {
 var userName = readlineSync.question("Hello! What's your name? ");

  console.log("Welcome "+ userName + " to Mark 1, Do you know Hitesh?");
}
var score = 0;

function play(question, answer) {
  var userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) { 
    console.log("right!");
    score = score + 1;
    
  } else {
    console.log("wrong!");
   
  }

  console.log("current score: ", score);
  console.log("-----")
}
function game() {
  for (var i=0; i<questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
}

function showScores() {
  console.log("Awesome! You SCORED: ", score);

  console.log("Check out the high scores, if you should be there ping me with the screenshot and I'll update it!!");

  highScores.map(score => console.log(score.name, " : ", score.score))
}
var highScores = [
  {
    name: "Aarav",
    score: 3,
  },
  {
    name: "Varun",
    score: 2,
  },
]

welcome();
game();
showScores();