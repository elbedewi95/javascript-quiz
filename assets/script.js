var startGame = document.querySelector("#next");
var timeLeft;
var score = 0;



var questionLibrary =[
    {
        question:"Which of the following is an advantage of using JavaScript?",
        answer1: "Less server interaction",
        answer2: "Immediate feedback to the visitors",
        answer3: "Increased interactivity",
        answer4: "All of the above.",
        correct: "All of the above."
    },
    {
        question:"Which of the following type of variable is visible only within a function where it is defined?",
        answer1: "global variable" ,
        answer2: "local variable",
        answer3: "Both of the above.",
        answer4: "None of the above.",
        correct: "local variable"
    },
    {
        question:"Which built-in method reverses the order of the elements of an array?",
        answer1: "changeOrder(order)",
        answer2: "reverse()",
        answer3: "sort(order)",
        answer4: "None of the above.",
        correct: "reverse()"
    },
    {
        question: "Which of the following function of Number object returns a string value version of the current number?",
        answer1: "toString()",
        answer2: "toFixed()",
        answer3: "toLocaleString()",
        answer4: "toPrecision()",
        correct: "toString()"
    },
    {
        question:"Which of the following function of String object returns a number indicating whether a reference string comes before or after or is the same as the given string in sort order?",
        answer1: "localeCompare()",
        answer2: "search()",
        answer3: "substr()",
        answer4: "concat()",
        correct: "localeCompare()"
    },
    {
        question:"Which of the following function of String object returns the primitive value of the specified object.",
        answer1: "toLocaleUpperCase()",
        answer2: "toUpperCase()",
        answer3: "toString()",
        answer4: "valueOf()",
        correct: "valueOf()"
    },
    {
        question:"Which of the following function of String object causes a string to be displayed in the specified size as if it were in a <font size = 'size'> tag?",
        answer1: "fixed()" ,
        answer2: "fontcolor()",
        answer3: "fontsize()",
        answer4: "bold()",
        correct: "fontsize()"
    },
    {
        question: "Which of the following function of Array object creates a new array with the results of calling a provided function on every element in this array?",
        answer1: "join()" ,
        answer2: "push()",
        answer3: "pop()",
        answer4: "map()",
        correct: "map()"
    },
    {
        question:"Which of the following function of Array object applies a function simultaneously against two values of the array (from right-to-left) as to reduce it to a single value?",
        answer1: "pop()",
        answer2: "push()",
        answer3: "reduce()",
        answer4: "reduceRight()",
        correct: "reduceRight()"
    },
    {
        question:"What is JavaScript?",
        answer1: "JavaScript is a scripting language used to make the website interactive",
        answer2: "JavaScript is an assembly language used to make the website interactive",
        answer3: "JavaScript is a compiled language used to make the website interactive",
        answer4: "None of the above",
        correct: "JavaScript is a scripting language used to make the website interactive"
    },
    {
        question:" Arrays in JavaScript are defined by which of the following statements?",
        answer1: "It is an ordered list of values" ,
        answer2: "It is an ordered list of objects",
        answer3: "It is an ordered list of string",
        answer4: "It is an ordered list of functions",
        correct: "It is an ordered list of values"
    }
];
function shuffleArray(array) {
    for (var index = array.length - 1; index > 0; index--) {
        var random = Math.floor(Math.random() * (index + 1));
        var temp = array[index];
        array[index] = array[random];
        array[random] = temp;
    }
}

var index = 0;
function getQuestion(){
    console.log("question");
    
    var questionNum = document.querySelector("#title");
        questionNum.setAttribute('class','text-left');
    var questionField = document.querySelector("#info");
        questionField.setAttribute('class','text-left');
    var answers = document.querySelector("#options");
    
        if(index <= questionLibrary.length-1 && timeLeft>0){
        questionNum.textContent = `Question number ${index+1}`;
        questionField.textContent = questionLibrary[index].question;
        var option1 = document.createElement("button");
        option1.setAttribute('class','answers');
        var option2 = document.createElement("button");
        option2.setAttribute('class','answers');
        var option3 = document.createElement("button");
        option3.setAttribute('class','answers');
        var option4 = document.createElement("button");
        option4.setAttribute('class','answers');
        option1.textContent = questionLibrary[index].answer1;
        option2.textContent = questionLibrary[index].answer2;
        option3.textContent = questionLibrary[index].answer3;
        option4.textContent = questionLibrary[index].answer4;
        answers.appendChild(option1);
        answers.appendChild(option2);
        answers.appendChild(option3);
        answers.appendChild(option4);
    var next = document.createElement("button");
    
    next.setAttribute('class','text-center');
    next.setAttribute('id','next');
            next.textContent="Next Question";
            next.disabled=true;
            document.querySelector("#main").append(next);
        } else {
            
            timeLeft=0;
            console.log(score);
            
            console.log(JSON.parse(localStorage.getItem("highscore")));
          if (score > JSON.parse(localStorage.getItem("highscore")).score) {
            var userName = prompt(`Score: ${score} \n Enter your name`);
             var highscore = {
              name: userName,
              score: score,
            };
            localStorage.setItem("highscore", JSON.stringify(highscore));
            var displayHighscore = document.querySelector("#highscore");
            displayHighscore.textContent = `Highscore ${highscore.score} by: ${highscore.name}`;
            next.disabled = true;
            timeLeft = 0;
            return;
          }
          else{
            alert("game over");
            return;
          }
        }
        function myFunction(event) {
            var clicked = event.target;
            if (clicked.getAttribute("class") === "answers") {
              var userAnswer = clicked.textContent;
              if (userAnswer == questionLibrary[index].correct) {
                score++;
                console.log("correct");
                next.disabled = false;
                clicked.style.background = "rgb(5, 213, 30)";
                option1.disabled = true;
                option2.disabled = true;
                option3.disabled = true;
                option4.disabled = true;
              } else {
                console.log("wrong");
                clicked.style.background = "red";
                if (timeLeft >= 5) {
                  timeLeft = timeLeft - 5;
                } 
                next.disabled = false;
                option1.disabled = true;
                option2.disabled = true;
                option3.disabled = true;
                option4.disabled = true;
              }
            }
            answers.removeEventListener("click", myFunction);
          }
        
          answers.addEventListener("click", myFunction);
     
     next.addEventListener("click",function(){
        index++;
        while (answers.hasChildNodes()){
            answers.removeChild(answers.firstChild);
        }
        getQuestion();
     });

}

function game(){
    shuffleArray(questionLibrary);
    var timeEl= document.querySelector("#countdown");
    timeLeft = 90;
    var timerInterval = setInterval(function(){
        timeLeft--;
        var minutes = Math.floor(timeLeft/60);
        var seconds = timeLeft%60
        if(minutes<0 || seconds<0){
            minutes=0;
            seconds =0;
        }
        if (seconds < 10){
            seconds = `0${seconds}`;
        }
        timeEl.textContent = `${minutes}:${seconds}`;
        timeEl.style.border ="2px solid black";
        if(timeLeft >= 60){
        timeEl.style.background = "rgb(5, 213, 30)";
    }
        else if(timeLeft < 60 && timeLeft >= 10){
        timeEl.style.background = "orange";
        }
        else if (timeLeft < 10 && timeLeft > 0){
            timeEl.style.background = "red";
        }
        if(timeLeft === 0){
            clearInterval(timerInterval);
        } 
    },1000)
   
    getQuestion();
    startGame.remove();
    
        
}

// var displayHighscore = document.querySelector("#highscore");
// displayHighscore.textContent = `Highscore: ${JSON.parse(localStorage.getItem("highscore")).score}, by: ${JSON.parse(localStorage.getItem("highscore")).name}`;
startGame.addEventListener("click",game);