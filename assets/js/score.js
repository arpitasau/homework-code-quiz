var score = localStorage.getItem("score");
console.log(score);
var userScore = document.getElementById("user-score");
userScore.innerText = score;
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];
console.log(highScore);

var userInitial = document.getElementById("user-name");
var submitScoreBtn = document.getElementById("submit-score");

submitScoreBtn.addEventListener("click",submitHighScore);

function submitHighScore(event){
    event.preventDefault();

  var recentScore = {
    recentScore : score,
    name : userInitial.value,
  };
 highScore.push(recentScore);
 localStorage.setItem("highScore", JSON.stringify(highScore));
 location.href = "home.html";


};