# Module 12 – JavaScript Internals

## Module Introduction

Understanding how JavaScript works under the hood is what separates junior developers from senior backend engineers.

Every Node.js backend system runs on the V8 engine, which executes JavaScript code using complex internal mechanisms.

By mastering JavaScript internals, you will:

* Write more efficient code
* Avoid common performance pitfalls
* Debug deeply and confidently
* Understand asynchronous behavior better

In this module you will learn:

* JavaScript memory model: Heap vs Stack
* Execution context & call stack
* Scope chain & variable environments
* Garbage collection
* Event loop & task queues
* Microtasks vs macrotasks
* How Node.js runtime handles code execution

These concepts are critical for production-ready backend development.

---

# Lesson 01 – Execution Context

Every time JavaScript runs code, it creates an **Execution Context**.

There are 3 types:

1. Global Execution Context – default context for your script
2. Function Execution Context – created when a function is invoked
3. Eval Execution Context – created by `eval()` (rarely used)

Each execution context has:

* Variable environment – stores variables & functions
* Scope chain – determines accessibility of variables
* `this` binding – determines the value of `this`

### Diagram – Call Stack & Execution Context

```
Call Stack
┌─────────────────────┐
│ global execution ctx │
├─────────────────────┤
│ function execution   │
│ ctx                 │
└─────────────────────┘
```

When a function is called, its execution context is **pushed onto the call stack**.

When it returns, the context is **popped**.

---

# Lesson 02 – Stack vs Heap

JavaScript memory is divided into:

### Stack

Stores primitive values:

* numbers
* strings
* booleans

Characteristics:

* very fast
* limited size

### Heap

Stores:

* objects
* arrays
* functions

Characteristics:

* dynamic memory
* slower than stack

Example:

```javascript
let num = 10;            // stored in stack
let user = { name: "Ali" }; // stored in heap
```

---

# Lesson 03 – Garbage Collection

JavaScript automatically frees memory when it is no longer reachable.

Example:

```javascript
let user = { name: "Ali" };

user = null; // object becomes unreachable
```

The object can now be removed by the garbage collector.

Key points:

* Garbage collection mainly applies to heap memory
* Stack values disappear automatically when execution ends

To avoid memory leaks:

* remove unused references
* avoid accidental global variables

---

# Lesson 04 – Scope & Scope Chain

Scopes define where a variable is accessible.

Example:

```javascript
function outer() {
  const a = 10;

  function inner() {
    const b = 20;
    console.log(a + b);
  }

  inner();
}

outer();
```

`inner()` can access `a` because of the **scope chain**.

JavaScript searches variables in this order:

1. Local scope
2. Parent scope
3. Global scope

---

# Lesson 05 – Closures

A **closure** is a function that remembers variables from its outer scope.

Example:

```javascript
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();

console.log(counter()); // 1
console.log(counter()); // 2
```

Closures are heavily used in:

* callbacks
* private variables
* Node.js modules

---

# Lesson 06 – Call Stack Example

```javascript
function first() {
  second();
  console.log("first done");
}

function second() {
  third();
  console.log("second done");
}

function third() {
  console.log("third done");
}

first();
```

Call stack operations:

1. Push `first()`
2. Push `second()`
3. Push `third()`
4. Pop `third()`
5. Pop `second()`
6. Pop `first()`

Output:

```
third done
second done
first done
```

---

# Lesson 07 – Event Loop

JavaScript is **single-threaded** but supports asynchronous execution.

Node.js uses the **Event Loop**.

Components:

* Call Stack
* Async APIs
* Callback Queue
* Event Loop

### Event Loop Flow

```
Call Stack
   ↓
Async APIs (Timers, IO)
   ↓
Callback Queue
   ↓
Event Loop
   ↓
Execution
```

---

# Lesson 08 – Microtasks vs Macrotasks

Tasks in Node.js are divided into two categories.

### Macrotasks

Examples:

* setTimeout
* setInterval
* setImmediate
* IO callbacks

### Microtasks

Examples:

* Promises
* process.nextTick

Execution order:

1. Run synchronous code
2. Run **all microtasks**
3. Run **next macrotask**

Example:

```javascript
console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");
```

Output:

```
Start
End
Promise
Timeout
```

---

# Real Backend Example – Async IO

```javascript
const fs = require("fs");

console.log("Start reading file");

fs.readFile("data.txt", "utf-8", (err, data) => {
  console.log("File content:", data);
});

console.log("End");
```

Output:

```
Start reading file
End
File content: ...
```

Node.js handles file reading asynchronously.

---

# Common Developer Mistakes

### Blocking the Event Loop

```javascript
while(true) {}
```

This blocks Node.js entirely.

### Misunderstanding Closures

Can accidentally retain memory references.

### Confusing Microtasks and Macrotasks

Leads to unexpected execution order.

---

# Module 12 Exercises

### Exercise 01 – Call Stack Simulation

Write three nested functions and log execution order.

### Exercise 02 – Closure Counter

Create a closure that exposes:

* `increment()`
* `decrement()`

### Exercise 03 – Memory Leak Example

Create objects referencing each other, then break references and explain garbage collection.

### Exercise 04 – Event Loop Prediction

Write code mixing:

* `setTimeout`
* `Promise`

Predict output before running.

### Exercise 05 – Async File Reader

Read three files using `fs.readFile` and analyze execution order.

---

# Interview Questions

1. Explain the JavaScript memory model (stack vs heap).
2. What is an execution context?
3. How does the Node.js event loop work?
4. Difference between microtasks and macrotasks.
5. What are closures and why are they useful?

---

# Next Module

The next module builds directly on these internals.

## Module 13 – Asynchronous JavaScript

You will learn:

* callbacks
* promises
* async / await
* concurrency patterns
* handling real async backend operations