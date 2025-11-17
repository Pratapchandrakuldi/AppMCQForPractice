export const sqlDql = [
  {
      question: "Which SQL keyword is used to retrieve data from a database?",
      options: ["GET", "FETCH", "SELECT", "EXTRACT"],
      answer: "SELECT",
    },
    {
      question: "Which clause specifies the table from which data is retrieved?",
      options: ["FROM", "WHERE", "SELECT", "ORDER BY"],
      answer: "FROM",
    },
    {
      question: "Which clause filters records based on a condition?",
      options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
      answer: "WHERE",
    },
    {
      question: "Which SQL keyword sorts the result-set?",
      options: ["SORT", "ORDER BY", "GROUP BY", "ARRANGE BY"],
      answer: "ORDER BY",
    },
    {
      question: "In SQL, which clause is executed first logically?",
      options: ["SELECT", "FROM", "WHERE", "ORDER BY"],
      answer: "FROM",
    },
    {
      question: "Which clause is executed last in SQL logical query order?",
      options: ["FROM", "WHERE", "SELECT", "ORDER BY"],
      answer: "SELECT",
    },
    {
      question: "Which keyword is used to remove duplicate rows in a SELECT query?",
      options: ["UNIQUE", "REMOVE", "DISTINCT", "SEPARATE"],
      answer: "DISTINCT",
    },
    {
      question: "Which keyword retrieves all columns from a table?",
      options: ["ALL", "*", "SELECT ALL", "GET"],
      answer: "*",
    },
    {
      question: "Which operator is used in a WHERE clause to filter patterns?",
      options: ["LIKE", "PATTERN", "MATCH", "FIND"],
      answer: "LIKE",
    },
    {
      question: "Which symbol is used as a wildcard in a LIKE pattern for any number of characters?",
      options: ["%", "_", "#", "*"],
      answer: "%",
    },
    {
      question: "Which symbol is used as a wildcard for a single character in a LIKE pattern?",
      options: ["_", "%", "#", "@"],
      answer: "_",
    },
    {
      question: "Which clause groups rows that have the same values in specified columns?",
      options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
      answer: "GROUP BY",
    },
    {
      question: "Which clause filters data after grouping?",
      options: ["WHERE", "HAVING", "GROUP BY", "ORDER BY"],
      answer: "HAVING",
    },

    // BASIC QUERY EXAMPLES
    {
      question: "Which query retrieves all data from the 'students' table?",
      options: [
        "SELECT * FROM students;",
        "GET * FROM students;",
        "SHOW students;",
        "FETCH students;",
      ],
      answer: "SELECT * FROM students;",
    },
    {
      question: "Which query retrieves name and age columns from 'users' table?",
      options: [
        "SELECT name, age FROM users;",
        "SELECT (name, age) IN users;",
        "GET name age IN users;",
        "FETCH name age FROM users;",
      ],
      answer: "SELECT name, age FROM users;",
    },
    {
      question: "Which query retrieves employees with salary greater than 50000?",
      options: [
        "SELECT * FROM employees WHERE salary > 50000;",
        "SELECT employees WHERE salary > 50000;",
        "GET FROM employees salary > 50000;",
        "FILTER salary > 50000 IN employees;",
      ],
      answer: "SELECT * FROM employees WHERE salary > 50000;",
    },
    {
      question: "Which query retrieves products sorted by price in descending order?",
      options: [
        "SELECT * FROM products ORDER BY price DESC;",
        "SELECT * FROM products SORT BY price DESC;",
        "SELECT * FROM products ORDER price DOWN;",
        "SELECT * FROM products BY price DESC;",
      ],
      answer: "SELECT * FROM products ORDER BY price DESC;",
    },
    {
      question: "Which query retrieves students whose names start with 'A'?",
      options: [
        "SELECT * FROM students WHERE name LIKE 'A%';",
        "SELECT * FROM students WHERE name = 'A%';",
        "SELECT * FROM students WHERE name LIKE '%A';",
        "SELECT * FROM students WHERE name MATCH 'A';",
      ],
      answer: "SELECT * FROM students WHERE name LIKE 'A%';",
    },
];