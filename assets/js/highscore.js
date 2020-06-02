var highScoreList = document.getElementById("highScoreList");
var highScore = JSON.parse(localStorage.getItem("highScore")) || [];

console.log(highScore);

highScoreList.innerHTML = highScore.map(score => {
    return `<li class="high-score">${score.name}-${score.recentScore}</li>`;
})
.join("");