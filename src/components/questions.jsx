const questions = [
  {
    question: "What does JSX stand for in React?",
    options: ["JavaScript XML", "Java XML", "JSON XML", "Java Syntax XML"],
    correctAnswer: "JavaScript XML",
  },
  {
    question: "Which hook is used for handling side effects in React?",
    options: ["useState", "useEffect", "useContext", "useReducer"],
    correctAnswer: "useEffect",
  },
  {
    question: "What is the primary purpose of React Router?",
    options: [
      "State management",
      "Handling HTTP requests",
      "Navigating between components",
      "Styling components",
    ],
    correctAnswer: "Navigating between components",
  },
  {
    question: "In JavaScript, which function is used to iterate over an array?",
    options: ["for loop", "forEach", "map", "while loop"],
    correctAnswer: "forEach",
  },
  {
    question: "Which method is used to change the state of a React component?",
    options: ["setState()", "changeState()", "modifyState()", "updateState()"],
    correctAnswer: "setState()",
  },
  {
    question: "What is the concept of closures in JavaScript?",
    options: [
      "A design pattern",
      "A way to protect variables",
      "A way to create private methods",
      "A function that remembers its lexical scope",
    ],
    correctAnswer: "A function that remembers its lexical scope",
  },
  {
    question: "Which tool is commonly used for package management in Node.js?",
    options: ["npm", "pip", "yarn", "composer"],
    correctAnswer: "npm",
  },
  {
    question:
      "Which JavaScript framework is known for building user interfaces?",
    options: ["Angular", "Vue.js", "React", "Ember"],
    correctAnswer: "React",
  },
  {
    question: "What does the event-driven architecture mean in Node.js?",
    options: [
      "Node.js handles events based on predefined rules",
      "Node.js is not event-driven",
      "Node.js allows only synchronous operations",
      "Node.js responds to events with asynchronous callbacks",
    ],
    correctAnswer: "Node.js responds to events with asynchronous callbacks",
  },
  {
    question: "What is the purpose of the 'require' function in Node.js?",
    options: [
      "To import modules and files",
      "To define variables",
      "To create classes",
      "To execute asynchronous functions",
    ],
    correctAnswer: "To import modules and files",
  },
  {
    question: "What is a promise in JavaScript used for?",
    options: [
      "To define a function's parameters",
      "To handle asynchronous operations",
      "To loop through an array",
      "To execute synchronous code",
    ],
    correctAnswer: "To handle asynchronous operations",
  },
  {
    question: "What is the main purpose of Redux in a React application?",
    options: [
      "To handle routing",
      "To manage global state",
      "To create responsive UI",
      "To fetch data from APIs",
    ],
    correctAnswer: "To manage global state",
  },
  {
    question: "Which HTTP method is used for retrieving data from a server?",
    options: ["GET", "POST", "PUT", "DELETE"],
    correctAnswer: "GET",
  },
  {
    question: "What is the purpose of Babel in a JavaScript project?",
    options: [
      "To perform unit testing",
      "To manage dependencies",
      "To transpile code",
      "To build user interfaces",
    ],
    correctAnswer: "To transpile code",
  },
  {
    question: "What does the term 'hoisting' refer to in JavaScript?",
    options: [
      "Elevating a function's scope to the global scope",
      "Lifting a variable declaration to the top of its scope",
      "Moving a function to a different file",
      "Animating elements on a webpage",
    ],
    correctAnswer: "Lifting a variable declaration to the top of its scope",
  },
  {
    question: "What is a 'callback function' in programming?",
    options: [
      "A function that is invoked with multiple arguments",
      "A function that is executed after a delay",
      "A function passed as an argument to another function to be executed later",
      "A function that returns another function",
    ],
    correctAnswer:
      "A function passed as an argument to another function to be executed later",
  },
  {
    question:
      "What is the difference between 'let', 'const', and 'var' in JavaScript?",
    options: [
      "'let' and 'const' are block-scoped, while 'var' is function-scoped",
      "'let' is used for numbers, 'const' for strings, and 'var' for booleans",
      "'const' is immutable, 'let' is mutable, and 'var' is for declaring global variables",
      "'const' is used for loops, 'let' for conditions, and 'var' for arrays",
    ],
    correctAnswer:
      "'let' and 'const' are block-scoped, while 'var' is function-scoped",
  },
  {
    question:
      "What is the purpose of the 'localStorage' object in web browsers?",
    options: [
      "To manage web page navigation",
      "To store data in key-value pairs that persists even after the browser is closed",
      "To dynamically update the page's CSS styles",
      "To improve website accessibility",
    ],
    correctAnswer:
      "To store data in key-value pairs that persists even after the browser is closed",
  },
  {
    question:
      "What is the role of a CDN (Content Delivery Network) in web development?",
    options: [
      "To manage database operations",
      "To optimize server-side logic",
      "To distribute content to multiple servers for faster delivery",
      "To create responsive user interfaces",
    ],
    correctAnswer:
      "To distribute content to multiple servers for faster delivery",
  },
  {
    question: "What is the purpose of the 'async' keyword in JavaScript?",
    options: [
      "To define a function as asynchronous",
      "To declare a variable as mutable",
      "To create a new thread",
      "To import modules asynchronously",
    ],
    correctAnswer: "To define a function as asynchronous",
  },
  {
    question:
      "What is the difference between 'null' and 'undefined' in JavaScript?",
    options: [
      "'null' represents an intentional absence of any value, while 'undefined' typically indicates an uninitialized or inaccessible value",
      "'null' is used for numbers, while 'undefined' is used for strings",
      "'null' represents true, while 'undefined' represents false",
      "'null' is a string, while 'undefined' is a number",
    ],
    correctAnswer:
      "'null' represents an intentional absence of any value, while 'undefined' typically indicates an uninitialized or inaccessible value",
  },
  {
    question: "Which Node.js module is commonly used for creating web servers?",
    options: ["fs", "http", "path", "url"],
    correctAnswer: "http",
  },
];

export default questions;
