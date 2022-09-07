var startGame = document.querySelector("#start");
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
        answer1: "t is an ordered list of values" ,
        answer2: "It is an ordered list of objects",
        answer3: "It is an ordered list of string",
        answer4: "It is an ordered list of functions",
        correct: "t is an ordered list of values"
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

function game(){
    shuffleArray(questionLibrary);
    console.log(questionLibrary);
}

startGame.addEventListener("click",game);