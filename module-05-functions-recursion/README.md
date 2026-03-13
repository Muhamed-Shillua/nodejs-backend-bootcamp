# Module 05 – Functions & Recursion

## Module Introduction

Functions are the building blocks of any JavaScript program. In backend systems, functions allow you to:

* Encapsulate logic for reusability
* Process data consistently
* Build modular and testable services

Recursion is a powerful technique for:

* Traversing hierarchical data
* Solving problems that can be broken into smaller, similar problems
* Writing elegant solutions for tasks like file processing, tree traversal, and API pagination

In this module, you will master:

* Function declarations, expressions, and arrow functions
* Parameters, arguments, and default values
* Return statements
* Recursion patterns and pitfalls
* Practical backend examples

---

## Lesson 01 – Function Declaration & Expression

### Function Declaration

```javascript
function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet("Ali")); // Hello, Ali
```

* Hoisted → can call before declaration
* Useful for named functions in modules

### Function Expression

```javascript
const greet = function(name) {
  return `Hello, ${name}`;
};

console.log(greet("Sara")); // Hello, Sara
```

* Not hoisted → must declare before use
* Often used for callbacks and modular patterns

---

## Lesson 02 – Arrow Functions

Modern syntax for concise functions:

```javascript
const add = (a, b) => a + b;
console.log(add(5, 10)); // 15
```

Differences from classic functions:

* No `this` binding → important for backend class methods and async callbacks
* Cannot be used as constructors
* Cannot use `arguments` object

---

## Lesson 03 – Parameters & Arguments

### Default Parameters

```javascript
function multiply(a, b = 2) {
  return a * b;
}

console.log(multiply(5)); // 10
```

* Avoids undefined issues
* Common in backend API utilities

### Rest Parameters

```javascript
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

* Flexible for variable number of arguments
* Useful in logging, middleware, or batch processing

---

## Lesson 04 – Return Statements

Functions can return values for later use:

```javascript
function getUser(id) {
  return { id, name: "Ali" };
}

const user = getUser(1);
console.log(user.name); // Ali
```

Returning early is a best practice for readability:

```javascript
function checkAccess(user) {
  if (!user) return false; // exit early
  return user.isAdmin || user.subscriptionActive;
}
```

---

## Lesson 05 – Recursion

Recursion = function calling itself.

```javascript
function factorial(n) {
  if (n <= 1) return 1; // base case
  return n * factorial(n - 1); // recursive call
}

console.log(factorial(5)); // 120
```

* Base case prevents infinite recursion
* Common in backend: traversing nested folders, processing hierarchical data, parsing nested JSON

### Recursive Backend Example – Folder Traversal

```javascript
const fs = require("fs");
const path = require("path");

function listFiles(dir) {
  const items = fs.readdirSync(dir);
  let files = [];

  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stats = fs.statSync(fullPath);

    if (stats.isDirectory()) {
      files = files.concat(listFiles(fullPath));
    } else {
      files.push(fullPath);
    }
  }

  return files;
}

console.log(listFiles("./project"));
```

* Demonstrates real-world recursive logic in Node.js backend
* Efficiently handles nested structures

---

## Module 05 Exercises

### Exercise 01 – Sum of Numbers

* Write a recursive function to calculate the sum of numbers from 1 to N.

### Exercise 02 – Nested Object Traversal

Given a nested object representing categories:

```javascript
const categories = {
  name: "Root",
  children: [
    { name: "A", children: [] },
    { name: "B", children: [{ name: "B1", children: [] }] }
  ]
};
```

* Write a recursive function to print all category names.

### Exercise 03 – Factorial & Fibonacci

* Implement factorial using recursion
* Implement Fibonacci sequence using recursion
* Compare performance and discuss stack usage

### Exercise 04 – Middleware Pipeline

Simulate backend middleware execution using functions:

```javascript
const middlewares = [
  (req) => { req.value += 1; return req; },
  (req) => { req.value *= 2; return req; }
];

function runPipeline(req, fns) { /* implement recursively */ }
```

* Process `req` object through all middlewares recursively

### Exercise 05 – Recursive File Search

* Simulate searching for a specific file in nested directories recursively.
* Return full path if found
* Return null if not found

---

## Interview Questions (Functions & Recursion)

1. Explain the difference between function declarations, expressions, and arrow functions.
2. What is the base case in recursion and why is it critical?
3. How can recursion be used in backend systems?
4. What are common pitfalls of recursion in Node.js?

---

## Next Module

Next, we will study **Arrays**, the fundamental data structure in JavaScript, which is essential for:

* Storing and processing backend data
* Iterating through database results
* Manipulating request/response payloads

### Module 06 – Arrays

Topics include:

* Array creation and manipulation
* Iteration methods (`for`, `for…of`, `forEach`, `map`, `filter`, `reduce`)
* Multi-dimensional arrays
* Real backend examples like processing query results