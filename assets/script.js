/* 1. create index.html page with heading, description and a button
2. create highScore.html page
3. css
4. js

Create an array to hold the question and answer.
1. function renderQuestion, to display questions with 4 answer choise

2. function checkAnswer to check the answer

3. function setTimer to track the time

add event listener click to start button
setTimer will be called
renderQuestion will be called */

const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const showResults = document.getElementById ("show-results");
const timer = document.getElementById("timer");
var userScore = document.getElementById("user-score");
const startbtn = document.getElementsByClassName("btn");
var choice = document.getElementsByClassName("option-text");

var currentQuestion = {};
var acceptAnswers = false;
var score = 0;
var correctBonus = 10;
var questionCounter = 0;
var availableQuestions = [];
var startTime = 1;
var totalTime = startTime * 60;
var interval = setInterval(setTimer, 1000);

var questions = [
    {
        question: "Choose the correct HTML element to define emphasized text.",
        option1: "<italic>",
        option2: "<em>",
        option3: "<i>",
        option4: "<emp>",
        answer: 2 ,
    },

    {   question: "What is the correct HTML element for inserting a line break?",
        option1: "*",
        option2: "<hr>",
        option3: "<break>",
        option4: "<br>",
        answer: 4,

    },

    {   question: "Inside which HTML element do we put the JavaScript?",
        option1: "<script>",
        option2: "<javascript>",
        option3: "<js>",
        option4: "<scripting>",
        answer: 1,

    },

    {   question: "How do you create a function in JavaScript?",
        option1: "function = myFunction()",
        option2: "function myFunction()",
        option3: "function:myFunction",
        option4: "All the above",
        answer: 2,

    },

    {   question: "How to write an IF statement in JavaScript??",
        option1: "if i = 5 then",
        option2: "if i = 5",
        option3: "if (i == 5)",
        option4: "if i == 5 then",
        answer: 3,

    },
]

const correct_bonus = 10;
const max_questions = 5;

// the function will start the game
//startbtn.addEventListener('click', startGame);
function startGame(){
   questionCounter = 0;
   score = 0,
   availableQuestions = [...questions];
   renderQuestions();
};

//this function will render questions 

function renderQuestions() {   
    acceptAnswers = true;

    if(availableQuestions.length == 0 || questionCounter >= max_questions) {
        console.log('availableQuestions', availableQuestions);
        console.log('questionCounter'. questionCounter);
        //return window.location.assign("highscore.html");
        location.href = "highscore.html";
        userScore.innerText = score;

    }

   questionCounter ++;
   var questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   question.innerText = currentQuestion.question;

   options.forEach( option => {
       var number = option.dataset["number"];
       option.innerText = currentQuestion["option" + number];
   });
   availableQuestions.splice(questionIndex, 1);
};

options.forEach(option => {
    option.addEventListener("click", e => {
        if (!acceptAnswers) return;
        acceptAnswers = false;
        var selectedOption = e. target;
        var selectedAnswer = selectedOption.dataset["number"];
    
        var result = "incorrect";
            if(selectedAnswer == currentQuestion.answer){
                result ="correct";
                incrementScore(correctBonus);
                showResults.innerText = "Correct";
                console.log(result);
            }
            else {
                showResults.innerText = "Incorrect";   
            }
            setTimeout(function() {
                showResults.innerText = '';
                renderQuestions();
            }, 2000);
            incrementScore(correctBonus);
            renderQuestions();
    });
    
});



// Set timer funtion

function setTimer() {
    var minutes = Math.floor(totalTime / 60);
    var seconds = totalTime % 60;
    if(seconds < 10) {
        seconds = "0" + seconds;
    }
    timer.innerText = minutes + ':' + seconds;
    //Modified the condition used '==' instead of '===' and for second used "00" instead of 0 and moved totalTime -- below
    if(minutes == "0" && seconds == "00") {  
        clearInterval(interval);
        totalTime = 0;
        return window.location.assign("highscore.html");
        
    }
    totalTime --;
    //console.log(minutes + ':' + seconds);
}

// incrementScore function
function incrementScore(num){
   score += num;
   console.log(score);
   //userScore.innerText = score;
}
function toggle() {
    var x = document.getElementById("timer");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

      

