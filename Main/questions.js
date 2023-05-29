var questions = [{
    question: "What does CSS stand for?",
    option1: "Compact Style Sheet",
    option2: "Computer Screen Sheet",
    option3: "Complex Style Sheet",
    option4: "Cascading Style Sheet",
    answer: "3"
  },
  {
    question: "The  ____ position property is used to define the initial position of the background image.",
    option1: "background",
    option2: "margin",
    option3: "style",
    option4: "front",
    answer: "0"
  },
  {
    question: "Which HTML tag us used to define an internal style sheet",
    option1: "<style>",
    option2: "<css>",
    option3: "<script>",
    option4: "<js>",
    answer: "0"
  },
  {
    question: "Which HTML attribute is used to define inline styles?",
    option1: "font",
    option2: "class",
    option3: "styles",
    option4: "style",
    answer: "3"
  },
  {
    question: "Javascript Code can be called by using",
    option1: "RMI",
    option2: "Triggering Event",
    option3: "PrepProcessor",
    option4: "Function/Method",
    answer: "3"
  },
  {
    question: "Correct HTML tag for the largest heading is:",
    option1: "<head>",
    option2: "<h6>",
    option3: "<heading>",
    option4: "<h1>",
    answer: "3"
  },  {
    question: "The attribute of <form> tag:",
    option1: "Method",
    option2: "Action",
    option3: "Method and Action",
    option4: "None",
    answer: "2"
  },
  {
    question: "What is the purpose of a return statement in a function?",
    option1: "Returns the value and continues executing rest of the statements, if any",
    option2: "Returns the value and stops the program",
    option3: "Returns the value and stops executing the function",
    option4: "Stops executing the function and returns value",
    answer: "3"
  },
  {
    question: "Web pages starts with which of the following tags?",
    option1: "<body>",
    option2: "<title>",
    option3: "<html>",
    option4: "<form>",
    answer: "2"
  },
  {
    question: "Which tag creates number/order list?",
    option1: "<ul",
    option2: "<il>",
    option3: "<ot>",
    option4: "<ol>",
    answer: "3"
  }
];


var currentQuestion = 0;
var score = 0;
var c = 60;
var totquestions = questions.length;
var quizContainer = document.getElementById("quiz-container");
var questionEl = document.getElementById("question");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var opt4 = document.getElementById("opt4");
var nextBtn = document.getElementById("next");
var startBtn = document.getElementById("start");
var subBtn = document.getElementById("submit");
var result = document.getElementById("result");


//Load question and choices for user to select.
function loadQuestion (questionIndex){
    document.getElementById("start").disabled = true;
    var q = questions[questionIndex];
    questionEl.textContent = (questionIndex + 1) + '. ' + q.question;
    opt1.textContent = q.option1;
    opt2.textContent = q.option2;
    opt3.textContent = q.option3;
    opt4.textContent = q.option4;
};
//Go through all questions, take user option and check if that is the correct answer. If answer is correct add to score, if user is wrong go to next question. If there are not more questions stop clock and display score.
function loadNextQuestion(){
    var userChoice = document.querySelector('input[type=radio]:checked');
    if(!userChoice){
        alert("Please select answer.");
        return;
    }
    var answer = userChoice.value;
    if(questions[currentQuestion].answer === answer){
        score += 1;
    }
    userChoice.checked = false;
    currentQuestion++;
    if (currentQuestion == totquestions){
        startBtn.style.visibility='hidden';
        nextBtn.style.visibility='hidden';
        quizContainer.style.display="none";
        result.style.display="";
        result.textContent = score;
        return;
    }
    loadQuestion(currentQuestion);
}

//Calculate score.
// function calcScore(){
//     document.getElementById("result").score;
//     return;
// }


//Stopwatch
var myTimer;
function clock() {
    myTimer = setInterval(myClock, 1000);
    function myClock() {
        document.getElementById("timer").innerHTML = c--;
        if (c == 0) {
        clearInterval(myTimer);
       }
    }
}
