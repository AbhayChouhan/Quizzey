const allQuestions = {
    html: [
      { question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "Hyper Tool Multi Language"], correctAnswer: "Hyper Text Markup Language" },
      { question: "Which tag is used for creating a hyperlink in HTML?", options: ["<link>", "<a>", "<href>", "<hyper>"], correctAnswer: "<a>" },
      { question: "Which HTML element is used for the largest heading?", options: ["<heading>", "<h1>", "<h6>", "<head>"], correctAnswer: "<h1>" },
      { question: "Which tag is used to create an unordered list in HTML?", options: ["<ul>", "<ol>", "<li>", "<list>"], correctAnswer: "<ul>" },
      { question: "How can you open a link in a new tab in HTML?", options: ["target='_blank'", "newtab=true", "open=new", "href=new"], correctAnswer: "target='_blank'" },
      { question: "Which tag is used to define a form in HTML?", options: ["<form>", "<input>", "<fieldset>", "<textarea>"], correctAnswer: "<form>" },
      { question: "Which attribute is used to define inline styles in HTML?", options: ["style", "css", "class", "font"], correctAnswer: "style" },
      { question: "What is the purpose of the <title> tag?", options: ["Defines document body", "Sets tab title", "Links to stylesheet", "Creates headings"], correctAnswer: "Sets tab title" },
      { question: "Which tag is used for line break?", options: ["<hr>", "<br>", "<line>", "<lb>"], correctAnswer: "<br>" },
      { question: "How do you define an email link?", options: ["<a href='mail'>", "<mail>", "<a href='mailto:'>", "<email>"], correctAnswer: "<a href='mailto:'>" }
    ],
    css: [
      { question: "Which property is used to change the background color?", options: ["color", "background-color", "bgcolor", "border"], correctAnswer: "background-color" },
      { question: "How do you select an element with id 'main'?", options: ["#main", ".main", "*main", "main"], correctAnswer: "#main" },
      { question: "Which CSS property is used to change the text color of an element?", options: ["text-color", "fgcolor", "color", "font-color"], correctAnswer: "color" },
      { question: "Which property is used to change the font of an element?", options: ["font-weight", "font-family", "font-style", "text-font"], correctAnswer: "font-family" },
      { question: "How do you write a comment in CSS?", options: ["// this is comment", "/* comment */", "#comment", "<!--comment-->"], correctAnswer: "/* comment */" },
      { question: "Which property controls the space between elements' borders and content?", options: ["padding", "margin", "border-spacing", "gap"], correctAnswer: "padding" },
      { question: "How do you make a box take up the full width of its container?", options: ["width: auto;", "width: 100%;", "width: fit-content;", "width: inherit;"], correctAnswer: "width: 100%;" },
      { question: "Which CSS property is used to make text italic?", options: ["font-style", "font-weight", "text-style", "style"], correctAnswer: "font-style" },
      { question: "Which value of position property makes the element scroll with the page?", options: ["absolute", "fixed", "relative", "static"], correctAnswer: "relative" },
      { question: "Which property is used to hide an element in CSS?", options: ["hidden", "display: none;", "visibility: hidden;", "both b and c"], correctAnswer: "both b and c" }
    ],
    javascript: [
      { question: "Which company developed JavaScript?", options: ["Mozilla", "Netscape", "Google", "Microsoft"], correctAnswer: "Netscape" },
      { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "int", "float", "string"], correctAnswer: "var" },
      { question: "Which symbol is used for comments in JavaScript?", options: ["//", "#", "<!--", "**"], correctAnswer: "//" },
      { question: "How do you create a function in JavaScript?", options: ["function = myFunction()", "function myFunction() {}", "def myFunction():", "func myFunction()"], correctAnswer: "function myFunction() {}" },
      { question: "Which operator is used to assign a value to a variable?", options: ["*", "-", "=", "+"], correctAnswer: "=" },
      { question: "Which method is used to output something in the console?", options: ["print()", "echo()", "log()", "console.log()"], correctAnswer: "console.log()" },
      { question: "Which of the following is a boolean value?", options: ["true", "\"false\"", "0", "undefined"], correctAnswer: "true" },
      { question: "What is the correct syntax to create an array in JavaScript?", options: ["let arr = []", "arr = ()", "arr = {}", "new array()"], correctAnswer: "let arr = []" },
      { question: "Which method is used to add an element at the end of an array?", options: ["push()", "append()", "add()", "insert()"], correctAnswer: "push()" },
      { question: "What will 'typeof null' return in JS?", options: ["null", "undefined", "object", "string"], correctAnswer: "object" }
    ],
    mysql: [
      { question: "Which SQL statement is used to extract data from a database?", options: ["GET", "SELECT", "OPEN", "EXTRACT"], correctAnswer: "SELECT" },
      { question: "Which clause is used to filter records?", options: ["WHERE", "HAVING", "ORDER BY", "GROUP BY"], correctAnswer: "WHERE" },
      { question: "Which command is used to delete a table in MySQL?", options: ["DELETE TABLE", "DROP TABLE", "REMOVE TABLE", "CLEAR TABLE"], correctAnswer: "DROP TABLE" },
      { question: "Which function is used to count rows?", options: ["SUM()", "TOTAL()", "COUNT()", "NUMBER()"], correctAnswer: "COUNT()" },
      { question: "Which clause is used to sort the result set?", options: ["ORDER BY", "SORT BY", "GROUP BY", "ARRANGE BY"], correctAnswer: "ORDER BY" },
      { question: "What type of SQL statement is SELECT?", options: ["DDL", "DML", "DCL", "TCL"], correctAnswer: "DML" },
      { question: "Which data type is used for storing large text?", options: ["VARCHAR", "TEXT", "LONG", "CHAR"], correctAnswer: "TEXT" },
      { question: "Which SQL keyword is used to insert data into a table?", options: ["ADD", "INSERT", "APPEND", "INPUT"], correctAnswer: "INSERT" },
      { question: "What does PRIMARY KEY ensure?", options: ["Unique values", "Non-empty", "Indexed", "Sorted"], correctAnswer: "Unique values" },
      { question: "Which command is used to modify existing data in MySQL?", options: ["MODIFY", "UPDATE", "CHANGE", "SET"], correctAnswer: "UPDATE" }
    ],
    java: [
      { question: "Which method is the entry point of a Java program?", options: ["start()", "main()", "run()", "execute()"], correctAnswer: "main()" },
      { question: "Which keyword is used to inherit a class in Java?", options: ["implement", "inherits", "extends", "derive"], correctAnswer: "extends" },
      { question: "What is the size of int in Java?", options: ["8 bits", "16 bits", "32 bits", "64 bits"], correctAnswer: "32 bits" },
      { question: "Which keyword is used to define a class in Java?", options: ["define", "class", "struct", "object"], correctAnswer: "class" },
      { question: "Which method is used to print text in Java?", options: ["print()", "console()", "System.out.print()", "echo()"], correctAnswer: "System.out.print()" },
      { question: "Which access modifier makes members accessible everywhere?", options: ["private", "protected", "public", "static"], correctAnswer: "public" },
      { question: "Which keyword is used for exception handling in Java?", options: ["catch", "try", "throw", "All of these"], correctAnswer: "All of these" },
      { question: "Which loop is used when the number of iterations is known?", options: ["while", "do-while", "for", "foreach"], correctAnswer: "for" },
      { question: "Which keyword is used to create an object in Java?", options: ["object", "new", "this", "class"], correctAnswer: "new" },
      { question: "What is JVM?", options: ["Java Virtual Machine", "Java Variable Model", "Joint Variable Method", "None"], correctAnswer: "Java Virtual Machine" }
    ],
    cpp: [
      { question: "Which symbol is used to declare a pointer?", options: ["*", "&", "#", "$"], correctAnswer: "*" },
      { question: "Which header file is used for input/output in C++?", options: ["<iostream>", "<stdio.h>", "<conio.h>", "<fstream>"], correctAnswer: "<iostream>" },
      { question: "What is the extension of C++ source file?", options: [".cpp", ".cxx", ".cc", "All of these"], correctAnswer: "All of these" },
      { question: "Which symbol is used for comments in C++?", options: ["//", "/* */", "#", "--"], correctAnswer: "//" },
      { question: "Which function is used to output in C++?", options: ["printf()", "cout", "print()", "System.out.print()"], correctAnswer: "cout" },
      { question: "Which keyword is used to create an object?", options: ["new", "class", "object", "struct"], correctAnswer: "new" },
      { question: "Which OOP concept is used for code reuse?", options: ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"], correctAnswer: "Inheritance" },
      { question: "Which operator is used to access members of a class through pointer?", options: ["*", ".", "->", "&"], correctAnswer: "->" },
      { question: "Which keyword is used to define a constant in C++?", options: ["const", "constant", "final", "static"], correctAnswer: "const" },
      { question: "Which function ends the main program in C++?", options: ["stop", "end()", "return 0;", "exit;"], correctAnswer: "return 0;" }
    ]
  };

  
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const scoreContainer = document.getElementById('score-container');
const scoreText = document.getElementById('score');
const remarkText = document.getElementById('remark');
const timerElement = document.getElementById('timer');
const topicSelect = document.getElementById('topic-dropdown');
const topicSelectionUI = document.getElementById('topic-selection');
const questionContainer = document.getElementById('question-container');
const nextBtn = document.getElementById('next-btn');

let questions = [];
let currentQuestionIndex = 0;
let score = 0;
let timer;
let timeLeft = 15;
let selectedOption = null;

function startQuiz() {
  const selectedTopic = topicSelect.value;
  if (!selectedTopic) {
    alert("Please select a topic to begin!");
    return;
  }

  questions = allQuestions[selectedTopic];
  topicSelectionUI.style.display = 'none';
  questionContainer.style.display = 'block';
  scoreContainer.style.display = 'none';
  currentQuestionIndex = 0;
  score = 0;

  showQuestion(currentQuestionIndex);
}

function showQuestion(index) {
  const currentQuestion = questions[index];
  questionText.textContent = currentQuestion.question;
  optionsContainer.innerHTML = '';
  nextBtn.disabled = true;
  nextBtn.style.display = 'block';
  timerElement.style.display = 'block';
  selectedOption = null;

  currentQuestion.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option;
    button.onclick = () => {
      selectedOption = option;
      const allButtons = optionsContainer.querySelectorAll('button');
      allButtons.forEach(btn => btn.style.backgroundColor = '#3498db');
      button.style.backgroundColor = '#2ecc71';
      nextBtn.disabled = false;
    };
    optionsContainer.appendChild(button);
  });

  startTimer();
}

function startTimer() {
  clearInterval(timer);
  timeLeft = 15;
  timerElement.textContent = `Time Left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    timerElement.textContent = `Time Left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      saveAndNext();
    }
  }, 1000);
}

function saveAndNext() {
  if (!selectedOption) {
    alert("Please select an option before proceeding.");
    return;
  }

  clearInterval(timer);
  if (selectedOption === questions[currentQuestionIndex].correctAnswer) {
    score++;
  }
  moveToNextQuestion();
}

function moveToNextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion(currentQuestionIndex);
  } else {
    endQuiz();
  }
}

function endQuiz() {
  timerElement.style.display = 'none';
  questionText.style.display = 'none';
  optionsContainer.style.display = 'none';
  nextBtn.style.display = 'none';
  scoreText.textContent = `Your Score: ${score}/${questions.length}`;

  if (score < 1) {
    remarkText.textContent = "Better luck next time!";
  } else if (score < 4) {
    remarkText.textContent = "Keep Practicing!";
  } else {
    remarkText.textContent = "Great Job!";
  }

  scoreContainer.style.display = 'block';
}
