var score = localStorage.getItem("score");
console.log(score);
var userScore = document.getElementById("user-score");
userScore.innerText = score;