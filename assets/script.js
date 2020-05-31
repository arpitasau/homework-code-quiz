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

var currentQuestion = {};
var acceptAnswers = false;
var score = 0;
var questionCounter = 0;
var availableQuestions = [];

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

function startGame(){
   questionCounter = 0;
   score = 0,
   availableQuestions = [...questions];
   console.log(availableQuestions);
   renderQuestions();
    
};

//this function will render questions 

function renderQuestions() {
    if(availableQuestions == 0 || questionCounter >= max_questions) {
        return window.location.assign("highScore.html");
    }

   questionCounter ++;
   var questionIndex = Math.floor(Math.random() * availableQuestions.length);
   currentQuestion = availableQuestions[questionIndex];
   console.log(currentQuestion);
   question.innerText = currentQuestion.question;
   //return currentQuestion;

   options.forEach( option => {
       var number = option.dataset["number"];
       option.innerText = currentQuestion["option" + number];
   });

   availableQuestions.splice(questionIndex, 1);
   acceptAnswers = true;

};

options.forEach(option => {
  option.addEventListener("click", e => {
     if (!acceptAnswers) return;
      acceptAnswers = false;
      var selectedOption = e. target;
      var selectedAnswer = selectedOption.dataset["number"]
      renderQuestions();
  });

});
      
startGame();
