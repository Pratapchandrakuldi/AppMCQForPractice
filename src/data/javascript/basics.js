// export const jsBasics = [
//   {
//     question: "What is OOP?",
//     options: [
//       "Object Oriented Programming",
//       "Only Object Program",
//       "Opposite Object Program",
//       "None"
//     ],
//     answer: "Object Oriented Programming"
//   }
// ];






export const jsBasics = [
  // INTRODUCTION
    {
      question: "What is JavaScript primarily used for?",
      options: [
        "Styling web pages",
        "Structuring web content",
        "Adding interactivity to web pages",
        "Managing databases",
      ],
      answer: "Adding interactivity to web pages",
    },
    {
      question: "Which of the following is true about JavaScript?",
      options: [
        "It is a compiled language",
        "It runs in the browser and on the server",
        "It cannot interact with HTML elements",
        "It requires manual memory management",
      ],
      answer: "It runs in the browser and on the server",
    },
    {
    question: "Which company developed JavaScript?",
    options: ["Microsoft", "Netscape", "Google", "Sun Microsystems"],
    answer: "Netscape",
  },
  {
    question: "In which HTML tag do we write JavaScript code?",
    options: ["<script>", "<javascript>", "<js>", "<code>"],
    answer: "<script>",
  },
  {
    question: "Which symbol is used for comments in JavaScript single line?",
    options: ["//", "/* */", "#", "<!-- -->"],
    answer: "//",
  },

    // VARIABLES
    {
      question: "Which keyword declares a block-scoped variable in JavaScript?",
      options: ["var", "let", "const", "define"],
      answer: "let",
    },
    {
      question: "Which keyword is used to declare a constant variable?",
      options: ["const", "let", "var", "final"],
      answer: "const",
    },
    {
      question: "What is the main difference between var and let?",
      options: [
        "var is block-scoped while let is function-scoped",
        "let is block-scoped while var is function-scoped",
        "Both are block-scoped",
        "Both are function-scoped",
      ],
      answer: "let is block-scoped while var is function-scoped",
    },
    {
    question: "What happens if you try to reassign a const variable?",
    options: [
      "It updates the value",
      "It creates a new variable",
      "It throws an error",
      "It ignores the change",
    ],
    answer: "It throws an error",
  },
  {
    question: "Which variable type is hoisted but not initialized?",
    options: ["let", "const", "var", "None"],
    answer: "var",
  },
  {
    question: "What will console.log(x) output if let x is declared later?",
    options: ["undefined", "ReferenceError", "null", "0"],
    answer: "ReferenceError",
  },

    // FUNCTIONS
    {
      question: "Which of the following defines a JavaScript function correctly?",
      options: [
        "function = myFunc() {}",
        "function myFunc() {}",
        "def myFunc() {}",
        "func myFunc() {}",
      ],
      answer: "function myFunc() {}",
    },
    {
      question: "What does typeof operator do?",
      options: [
        "Checks the data type of a variable",
        "Defines a variable",
        "Converts string to number",
        "Compares two values",
      ],
      answer: "Checks the data type of a variable",
    },
    {
      question: "What is the output of console.log(typeof 10)?",
      options: ["'string'", "'object'", "'number'", "'undefined'"],
      answer: "'number'",
    },
    {
    question: "Can a JavaScript function return another function?",
    options: ["Yes", "No", "Only arrow functions can", "Only async functions can"],
    answer: "Yes",
  },
  {
    question: "What is the default return value of a function with no return statement?",
    options: ["null", "undefined", "0", "empty string"],
    answer: "undefined",
  },
  {
    question: "What does console.log(typeof function(){}) print?",
    options: ["'object'", "'function'", "'undefined'", "'method'"],
    answer: "'function'",
  },

    // DATATYPES
    {
      question: "Which of the following is NOT a JavaScript primitive type?",
      options: ["String", "Number", "Object", "Boolean"],
      answer: "Object",
    },
    {
      question: "What is the type of NaN in JavaScript?",
      options: ["number", "undefined", "NaN", "object"],
      answer: "number",
    },
    {
      question: "What does typeof null return?",
      options: ["'null'", "'object'", "'undefined'", "'NaN'"],
      answer: "'object'",
    },
    {
    question: "Which of the following can store multiple values?",
    options: ["String", "Number", "Array", "Boolean"],
    answer: "Array",
  },
  {
    question: "What is the result of typeof []?",
    options: ["'array'", "'object'", "'list'", "'undefined'"],
    answer: "'object'",
  },
  {
    question: "Which of these is a valid BigInt literal?",
    options: ["123n", "n123", "123N", "BigInt(123)"],
    answer: "123n",
  },

    // MATH
    {
      question: "What is the result of Math.trunc(5.89)?",
      options: ["5", "6", "5.8", "89"],
      answer: "5",
    },

    // OPERATORS
    {
      question: "Which operator is used for string concatenation in JavaScript?",
      options: ["+", "&", "concat", "#"],
      answer: "+",
    },
    {
      question: "What will '5' + 2 return?",
      options: ["7", "'52'", "Error", "undefined"],
      answer: "'52'",
    },
    {
      question: "What is a template literal enclosed by?",
      options: ["''", "\"\"", "`` (backticks)", "{}"],
      answer: "`` (backticks)",
    },
    {
    question: "What is the output of '5' - 2?",
    options: ["3", "'52'", "Error", "'3'"],
    answer: "3",
  },
  {
    question: "Which operator checks both value and type?",
    options: ["==", "===", "!=", "<="],
    answer: "===",
  },
  {
    question: "What will typeof NaN return?",
    options: ["'number'", "'NaN'", "'undefined'", "'object'"],
    answer: "'number'",
  },

    // TEMPLATE LITERALS
  {
    question: "What will console.log(`2 + 2 = ${2 + 2}`) output?",
    options: ["'2 + 2 = 22'", "'2 + 2 = 4'", "4", "Error"],
    answer: "'2 + 2 = 4'",
  },

    // PROMPTS
    {
      question: "What does the prompt() function do?",
      options: [
        "Displays an alert box",
        "Takes input from the user",
        "Writes to console",
        "Shows a confirmation dialog",
      ],
      answer: "Takes input from the user",
    },

    // TYPECASTING & CONVERSION
    {
      question: "What is type casting in JavaScript?",
      options: [
        "Changing one data type to another manually",
        "Automatic type conversion",
        "Declaring a variable",
        "Comparing two types",
      ],
      answer: "Changing one data type to another manually",
    },
    {
      question: "What does String(123) return?",
      options: ["'123'", "123", "Error", "undefined"],
      answer: "'123'",
    },
    {
      question: "What is type coercion?",
      options: [
        "Automatic conversion of one type to another",
        "Manual conversion of one type to another",
        "Declaring a variable",
        "A type error",
      ],
      answer: "Automatic conversion of one type to another",
    },
    {
    question: "What is the result of Boolean('')?",
    options: ["true", "false", "undefined", "Error"],
    answer: "false",
  },
  {
    question: "What will Number('123abc') return?",
    options: ["123", "NaN", "undefined", "0"],
    answer: "NaN",
  },

    // TRUTHY / FALSY
    {
      question: "Which of these values is falsy in JavaScript?",
      options: ["0", "'0'", "[]", "{}"],
      answer: "0",
    },
    {
      question: "Which value is truthy?",
      options: ["false", "null", "undefined", "'hello'"],
      answer: "'hello'",
    },
    {
    question: "Which of the following is NOT falsy?",
    options: ["0", "''", "undefined", "'false'"],
    answer: "'false'",
  },
  {
    question: "What does Boolean([]) return?",
    options: ["true", "false", "undefined", "NaN"],
    answer: "true",
  },

    // UNARY OPERATORS
    {
      question: "What will ++x do?",
      options: [
        "Increment x by 1 before using it",
        "Increment x by 1 after using it",
        "Decrement x by 1",
        "Multiply x by 2",
      ],
      answer: "Increment x by 1 before using it",
    },

    // RELATIONAL / EQUALITY
    {
      question: "What is the difference between == and ===?",
      options: [
        "No difference",
        "== checks value only, === checks value and type",
        "=== checks value only, == checks value and type",
        "== is used for objects only",
      ],
      answer: "== checks value only, === checks value and type",
    },

    // LOGICAL / TERNARY
    {
      question: "What does the logical AND (&&) operator do?",
      options: [
        "Returns true if both operands are true",
        "Returns true if one operand is true",
        "Always returns false",
        "Compares two numbers",
      ],
      answer: "Returns true if both operands are true",
    },
    {
      question: "What is the syntax of the ternary operator?",
      options: ["if ? else", "condition ? value1 : value2", "? : if else", "None"],
      answer: "condition ? value1 : value2",
    },
    {
    question: "What will this expression return: (5 > 3) ? 'Yes' : 'No'?",
    options: ["Yes", "No", "Error", "undefined"],
    answer: "Yes",
  },
  {
    question: "Which statement executes a block of code among multiple options?",
    options: ["if", "for", "switch", "while"],
    answer: "switch",
  },


    // CONDITIONALS
    {
      question: "Which statement is used to execute code based on a condition?",
      options: ["for", "if", "switch", "do"],
      answer: "if",
    },
    {
      question: "Which keyword is used in a switch statement to exit a case?",
      options: ["exit", "stop", "break", "return"],
      answer: "break",
    },
    {
    question: "What will happen after a return statement inside a function?",
    options: [
      "The rest of the function executes",
      "The function stops executing",
      "It restarts the function",
      "It throws an error",
    ],
    answer: "The function stops executing",
  },
  {
    question: "Which keyword is used to skip one iteration of a loop?",
    options: ["skip", "continue", "break", "next"],
    answer: "continue",
  },

    // LOOPS
    {
      question: "Which loop executes at least once regardless of condition?",
      options: ["for", "while", "do...while", "forEach"],
      answer: "do...while",
    },
    {
      question: "What will happen if a loop condition never becomes false?",
      options: [
        "It will stop automatically",
        "It will run infinitely",
        "It will throw an error",
        "It will skip the loop",
      ],
      answer: "It will run infinitely",
    },
    {
    question: "Which loop is best when the number of iterations is known?",
    options: ["while", "for", "do...while", "forEach"],
    answer: "for",
  },
  {
    question: "What will be printed by this code?\nfor(let i=0; i<3; i++){console.log(i)}",
    options: ["0 1 2", "1 2 3", "3 2 1", "0 1 2 3"],
    answer: "0 1 2",
  },

    // CONTROL STATEMENTS
    {
      question: "Which statement immediately exits a loop?",
      options: ["exit", "stop", "break", "continue"],
      answer: "break",
    },
    {
      question: "Which statement skips the current iteration in a loop?",
      options: ["break", "skip", "continue", "return"],
      answer: "continue",
    },

    // FUNCTIONS / METHODS
    {
      question: "Which of the following is a function expression?",
      options: [
        "function greet() {}",
        "const greet = function() {}",
        "() => {}",
        "greet()",
      ],
      answer: "const greet = function() {}",
    },
    {
      question: "What is an arrow function?",
      options: [
        "A function with => syntax",
        "A loop function",
        "A constructor",
        "An async function",
      ],
      answer: "A function with => syntax",
    },
    {
      question: "How do you pass parameters to a function?",
      options: [
        "Inside curly braces",
        "Inside parentheses",
        "Inside quotes",
        "Inside brackets",
      ],
      answer: "Inside parentheses",
    },

    // OBJECTS
    {
      question: "How do you access an object property in JavaScript?",
      options: [
        "object-property",
        "object[property]",
        "object->property",
        "object:property",
      ],
      answer: "object[property]",
    },
    {
      question: "What will console.log({a:1, b:2}.a) output?",
      options: ["1", "a", "{a:1}", "undefined"],
      answer: "1",
    },
    {
    question: "What is the correct way to add a new property to an object?",
    options: [
      "obj.add('name', 'John')",
      "obj.name = 'John'",
      "obj->name = 'John'",
      "add.obj('name', 'John')",
    ],
    answer: "obj.name = 'John'",
  },
  {
    question: "What does Object.keys({a:1, b:2}) return?",
    options: ["['a', 'b']", "['1', '2']", "{a:1, b:2}", "['a:1', 'b:2']"],
    answer: "['a', 'b']",
  },
  
  // PROGRAM OUTPUT BASED
  {
    question: "What is the output of this code?\nlet x = 10; x += 5; console.log(x);",
    options: ["15", "10", "5", "Error"],
    answer: "15",
  },
  {
    question: "What will this print?\nconsole.log(typeof null);",
    options: ["'null'", "'object'", "'undefined'", "'NaN'"],
    answer: "'object'",
  },
  {
    question: "What will this print?\nconsole.log(1 + '2' + 3);",
    options: ["6", "'123'", "'15'", "Error"],
    answer: "'123'",
  },
    
];
