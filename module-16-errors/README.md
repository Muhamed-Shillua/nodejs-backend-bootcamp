# Module 16 – Errors & Exception Handling in JavaScript

## Module Introduction

In backend systems, errors are inevitable:

* database queries may fail
* HTTP requests may timeout
* files may be missing
* user input may be invalid

Professional backend developers must handle errors gracefully to avoid crashes, downtime, and security issues.

This module covers:

* Error types in JavaScript
* Throwing and catching errors
* try/catch/finally
* Custom errors
* Error propagation
* Async error handling in Node.js

Understanding error handling is critical for building robust production systems.

## Lesson 01 – Error Types

JavaScript has built-in error types:

| Error Type     | Description             |
| -------------- | ----------------------- |
| Error          | Generic error           |
| SyntaxError    | Parsing code fails      |
| ReferenceError | Undefined variable      |
| TypeError      | Wrong type              |
| RangeError     | Invalid numeric range   |
| EvalError      | Error related to eval() |
| URIError       | encode/decode URI fails |

Example:

```javascript
let x;
console.log(y); // ReferenceError
```

## Lesson 02 – Throwing Errors

You can throw errors manually using `throw`.

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

console.log(divide(10, 2));
console.log(divide(5, 0)); // throws Error
```

## Lesson 03 – try / catch

Wrap code to catch errors and prevent crashes.

```javascript
try {
  const result = divide(5, 0);
  console.log(result);
} catch (err) {
  console.error("Caught error:", err.message);
}
```

Output:

```
Caught error: Division by zero
```

## Lesson 04 – finally

`finally` runs regardless of success or error.

```javascript
try {
  console.log("Try block");
  throw new Error("Oops");
} catch (err) {
  console.log("Catch block:", err.message);
} finally {
  console.log("Finally block runs anyway");
}
```

Output:

```
Try block
Catch block: Oops
Finally block runs anyway
```

## Lesson 05 – Custom Errors

You can create your own error types:

```javascript
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateAge(age) {
  if (age < 0) {
    throw new ValidationError("Age cannot be negative");
  }
}

try {
  validateAge(-5);
} catch (err) {
  console.error(err.name, err.message);
}
```

Output:

```
ValidationError Age cannot be negative
```

## Lesson 06 – Error Propagation

Errors bubble up the call stack until caught.

```javascript
function level1() {
  level2();
}

function level2() {
  throw new Error("Problem!");
}

try {
  level1();
} catch (err) {
  console.log("Caught:", err.message);
}
```

## Lesson 07 – Async Error Handling

Async code needs special handling.

**Callbacks**

```javascript
fs.readFile("data.txt", (err, data) => {
  if (err) {
    console.error("File read failed:", err.message);
    return;
  }
  console.log(data);
});
```

**Promises**

```javascript
fetchData()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

**Async/Await**

```javascript
async function main() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (err) {
    console.error("Error:", err.message);
  }
}
```

## Lesson 08 – Best Practices

* Always catch errors at boundaries
* Don’t swallow errors silently
* Use custom errors for clarity
* Provide meaningful messages
* Avoid exposing sensitive information in error messages
* Log errors for debugging in production

### Real Backend Example – Express Middleware

```javascript
function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: err.message });
}

app.use(errorHandler);
```

* All uncaught errors are handled
* Prevents server crash
* Improves observability

## Common Developer Mistakes

1️⃣ Ignoring async errors → server crashes

2️⃣ Overusing generic Error → hard to debug

3️⃣ Exposing sensitive info to clients → security risk

## Module 16 Exercises

**Exercise 01 – Safe Division**

* Create `divide(a,b)` that:

  * throws error on zero
  * catches errors and logs a message

**Exercise 02 – Custom Validation Error**

* Create `ValidationError` class
* Validate user object with name and age
* Throw `ValidationError` on invalid input

**Exercise 03 – Async Error Catching**

* Read multiple files asynchronously using `fs.promises.readFile`
* Catch and log any errors
* Ensure program continues

**Exercise 04 – Error Propagation**

* Create 3 nested functions
* Throw error in the innermost
* Catch error in the outermost
* Log stack trace

**Exercise 05 – Express Error Middleware**

* Create Express app with one route
* Route throws an error
* Use custom middleware to catch and return JSON error response

## Interview Questions

1️⃣ Difference between throw and return?
2️⃣ How does try/catch/finally work?
3️⃣ How to handle errors in async/await?
4️⃣ Why use custom errors?
5️⃣ What happens if you don’t catch errors in Node.js?

## Next Module

Next we explore Node.js Core Modules, which are essential for building backend services.

**Module 17 – Node.js Core Modules**