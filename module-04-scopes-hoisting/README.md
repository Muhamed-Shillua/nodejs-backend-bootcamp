# Module 04 – Scopes & Hoisting

## Module Introduction

Understanding scope and hoisting is critical for writing predictable, bug-free JavaScript, especially in backend systems where variables control access, configuration, and runtime behavior.

Why this matters:

* Prevents accidental global variable leaks
* Helps manage memory and lifecycle of variables
* Explains why some variables are undefined unexpectedly
* Crucial for closures, async code, and modular architecture

In production backend code, misunderstanding scope can lead to:

* Security bugs (e.g., shared mutable state)
* Performance issues (e.g., memory leaks)
* Hard-to-debug runtime errors

This module will cover:

* Global, local, and block scopes
* Function and lexical scope
* Hoisting behavior for var, let, const
* Real-world backend examples

---

## Lesson 01 – Global vs Local Scope

### Global Scope

Variables declared outside functions are global and accessible everywhere.

```javascript
// Global variable
const appName = "NodeApp";

function printApp() {
  console.log(appName);
}

printApp(); // NodeApp
```

In Node.js, global variables are module-scoped unless explicitly attached to `global`.

Avoid polluting global in backend code.

### Local Scope

Variables declared inside a function are only accessible within that function.

```javascript
function startServer() {
  const port = 3000; // local variable
  console.log("Server started on port", port);
}

startServer();
console.log(port); // ReferenceError: port is not defined
```

Helps encapsulate logic and prevent conflicts.

---

## Lesson 02 – Block Scope

`let` and `const` are block-scoped.

```javascript
{
  let user = "Ali";
  const role = "Admin";
  console.log(user, role); // Ali Admin
}

console.log(user); // ReferenceError
console.log(role); // ReferenceError
```

`var` is not block-scoped, only function-scoped.

```javascript
{
  var user = "Ali";
}
console.log(user); // Ali
```

Use `let`/`const` in modern code to avoid scope leaks.

---

## Lesson 03 – Function Scope

Functions create a new scope.

```javascript
function calculateTotal() {
  const price = 100;
  const tax = 0.15;
  return price + price * tax;
}

console.log(calculateTotal()); // 115
console.log(price); // ReferenceError
```

Function scope is critical in backend modules for isolating logic.

---

## Lesson 04 – Lexical Scope

Lexical scope means functions remember the scope in which they were defined.

```javascript
const globalValue = "Global";

function outer() {
  const outerValue = "Outer";

  function inner() {
    console.log(globalValue); // Global
    console.log(outerValue);  // Outer
  }

  inner();
}

outer();
```

In backend systems, this allows closure-based patterns for modular and private data.

---

## Lesson 05 – Hoisting

### var Hoisting

Variables declared with `var` are hoisted to the top of their function scope, but uninitialized.

```javascript
console.log(username); // undefined
var username = "Ali";
```

Internally:

```javascript
var username;
console.log(username);
username = "Ali";
```

Can lead to unexpected `undefined` bugs in backend code.

### let & const Hoisting

`let` and `const` are hoisted but not initialized, causing a temporal dead zone (TDZ).

```javascript
console.log(score); // ReferenceError
let score = 10;
```

Prevents accidental access before declaration.

---

## Lesson 06 – Real Backend Scenario

```javascript
// Module: config.js
const dbPassword = "supersecret"; // private variable

function getDbPassword() {
  return dbPassword;
}

module.exports = { getDbPassword };

// Module: app.js
const { getDbPassword } = require("./config");
console.log(getDbPassword()); // supersecret
console.log(dbPassword); // ReferenceError
```

Proper scoping prevents sensitive data leaks. Hoisting rules explain why undefined errors appear if variables are used before declaration.

### Common Pitfalls

1️⃣ Using `var` in loops inside backend functions → all iterations share the same variable reference.

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 3 3 3
```

2️⃣ Forgetting `let`/`const` → accidental global variable:

```javascript
function init() {
  username = "Ali"; // implicitly global
}
init();
console.log(username); // Ali
```

Fix: always declare with `let` or `const`.

---

### Exercise 5 – Loop & Scope Trap

* Create a loop with `var` and `let` inside async callbacks (`setTimeout`)
* Compare outputs and explain why
* Fix with `let` to ensure correct iteration values

---

## Interview Questions (Scopes & Hoisting)

1. Explain temporal dead zone and how it affects `let`/`const`.
2. What’s the difference between function scope and block scope?
3. How does lexical scope enable closures?
4. Why should `var` be avoided in modern Node.js backend code?

---

## Next Module

Next, we will dive into **Functions & Recursion**, which is essential for:

* Writing reusable backend logic
* Modular coding
* Handling recursive data structures (like trees, nested folders, etc.)

### Module 05 – Functions & Recursion

Topics include:

* Function declaration vs expression
* Arrow functions
* Parameters and arguments
* Return values
* Recursion patterns and use cases
* Backend examples like data processing and API utilities
