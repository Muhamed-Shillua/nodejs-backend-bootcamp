# Module 03 – Control Flow & Loops

## Module Introduction

Control flow and loops are the backbone of program logic.

In real backend systems, making decisions and repeating tasks happens constantly:

* Checking if a user is authorized
* Validating input
* Iterating over database results
* Processing a batch of tasks

Understanding control flow allows you to write predictable, bug-free, and efficient backend code.

This module will cover:

* Conditional statements (`if`, `else if`, `else`)
* Switch statements
* Loops (`for`, `while`, `do…while`)
* Loop control (`break`, `continue`)
* Nested loops and real-world backend scenarios

We’ll also explore common pitfalls and best practices for production code.

---

## Lesson 01 – Conditional Statements (if / else)

### if Statement

```javascript
// Check if user is logged in
const isLoggedIn = true;

if (isLoggedIn) {
  console.log("Access granted");
}
```

Executes a block only if the condition is true.

### if / else Statement

```javascript
const userRole = "guest";

if (userRole === "admin") {
  console.log("Admin access");
} else {
  console.log("Regular access");
}
```

Handles alternative execution if the condition is false.

### Shorthand if (Ternary Operator)

```javascript
const isAdmin = false;
const message = isAdmin ? "Admin dashboard" : "Regular dashboard";
console.log(message);
```

### Real Backend Example: if / else if / else

```javascript
const score = 85;

if (score >= 90) {
  console.log("A");
} else if (score >= 75) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else {
  console.log("F");
}
```

Multiple conditions evaluated top-down.

```javascript
// Determine user access
const subscriptionActive = true;
const isAdmin = false;

if (isAdmin) {
  console.log("Admin dashboard");
} else if (subscriptionActive) {
  console.log("Subscriber dashboard");
} else {
  console.log("Sign up page");
}
```

---

## Lesson 02 – Switch Statement

Switch is ideal for multiple discrete values.

```javascript
const day = "Monday";

switch(day) {
  case "Monday":
    console.log("Start of the week");
    break;
  case "Friday":
    console.log("Weekend is near");
    break;
  default:
    console.log("Regular day");
}
```

* Always use `break` to prevent fall-through bugs.
* `default` handles unexpected cases.

### Backend Example

```javascript
const statusCode = 404;

switch(statusCode) {
  case 200:
    console.log("OK");
    break;
  case 401:
    console.log("Unauthorized");
    break;
  case 404:
    console.log("Not Found");
    break;
  default:
    console.log("Unknown status");
}
```

---

## Lesson 03 – Loops

Loops allow repeating tasks automatically, reducing manual errors.

### For Loop

```javascript
// Print numbers 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

* Initialization: `let i = 1`
* Condition: `i <= 5`
* Increment: `i++`

### While Loop

```javascript
let count = 1;

while (count <= 5) {
  console.log(count);
  count++;
}
```

Executes as long as the condition is true.

### Do…While Loop

```javascript
let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);
```

Executes at least once, then checks the condition.

---

## Lesson 04 – Loop Control: break & continue

### break

Stops the loop immediately.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 1 2 3 4
```

### continue

Skips the current iteration.

```javascript
for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 1 2 4 5
```

---

## Lesson 05 – Nested Loops

Nested loops allow processing multi-dimensional data.

```javascript
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
  for (let j = 0; j < matrix[i].length; j++) {
    console.log(matrix[i][j]);
  }
}
```

Common in backend data processing, e.g., iterating over DB query results.

### Real Backend Scenario

```javascript
const users = [
  { name: "Ali", roles: ["user", "editor"] },
  { name: "Sara", roles: ["user"] }
];

for (const user of users) {
  for (const role of user.roles) {
    console.log(`${user.name} has role ${role}`);
  }
}
```

* Prints each user’s roles.
* Demonstrates nested iteration with objects and arrays.

---

## Module 03 Exercises

### Exercise 01 – User Access Simulation

Simulate user login with:

* `isLoggedIn`
* `isAdmin`
* `subscriptionActive`

Use `if / else if / else` to determine access level. Print detailed access description.

### Exercise 02 – HTTP Status Handler

Given an array of status codes:

```javascript
const codes = [200, 401, 404, 500];
```

Use `switch` to print status message for each code.

### Exercise 03 – Batch Price Calculator

Given an array of product prices, calculate total price with 15% tax using a loop.

```javascript
const prices = [100, 50, 75];
```

### Exercise 04 – Nested Inventory Report

Given:

```javascript
const store = [
  { name: "Laptop", variants: ["16GB", "32GB"] },
  { name: "Phone", variants: ["128GB", "256GB"] }
];
```

Print all products and variants using nested loops.

### Exercise 05 – Loop Control Practice

Write a loop from 1 to 20:

* Skip multiples of 3
* Stop loop if number > 15
* Print numbers that remain

---

## Interview Questions (Control Flow & Loops)

1. Explain the difference between `for`, `while`, and `do…while`.
2. How does `break` differ from `continue`?
3. When is `switch` preferable over `if / else if`?
4. How do nested loops affect performance in backend systems?

---

## Next Module

Next, we dive into **Scopes & Hoisting**, which is crucial for understanding variable lifetime and visibility in JavaScript.

### Module 04 – Scopes & Hoisting

Topics include:

* Global vs Local Scope
* Block Scope
* Function Scope
* Lexical Scope
* Hoisting (`var`, `let`, `const`)
* Real backend implications and bugs prevention
