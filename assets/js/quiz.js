localStorage.setItem("score", 0);
//selecting the DOM element
const question = document.getElementById("question");
const options = Array.from(document.getElementsByClassName("option-text"));
const showResultsCorrect = document.getElementById ("show-results-correct");
const showResultsInCorrect = document.getElementById ("show-results-incorrect");
const timer = document.getElementById("timer");
var userScore = document.getElementById("user-score");
const startbtn = document.getElementsByClassName("btn");

//declaring the variables
var currentQuestion = {}, acceptAnswers = false, score = 0, correctBonus = 10, questionCounter = 0, availableQuestions = [], startTime = 1, totalTime = startTime * 60, interval = setInterval(setTimer, 1000); 
//Storing question and options in array
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

// this function will start the game
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
        location.href = "score.html";
        document.getElementById('timer').style.display = 'none';
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
        if(selectedAnswer == currentQuestion.answer) {
            result = "correct";
            incrementScore(correctBonus);
            showResultsCorrect.innerText = "Correct";
        } else {
            showResultsInCorrect.innerText = "Incorrect";   
        }
        setTimeout(function() {
            showResultsCorrect.innerText = '';
            showResultsInCorrect.innerText = '';
            renderQuestions();
        }, 2000);
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
    if(minutes == "0" && seconds == "00") {  
        clearInterval(interval);
        totalTime = 0;
        return window.location.assign("score.html");
    }
    totalTime -- ;
}

// Score calculation and storing them in local storage
function incrementScore(num){
   score += num;
   console.log(score);
   localStorage.setItem("score", score);
}


      

