# Module 14 – Closures

## Module Introduction

Closures are one of the most powerful and misunderstood concepts in JavaScript.

Many developers can use closures, but very few truly understand how they work internally.

Closures are used everywhere in real-world systems:

* module patterns
* private variables
* middleware systems
* function factories
* event handlers
* caching mechanisms

They are also fundamental to how JavaScript modules and async systems work.

Because JavaScript runs on the V8 engine inside environments like Node.js, closures are implemented using lexical environments stored in heap memory.

Understanding closures will allow you to:

* design better APIs
* avoid memory leaks
* implement private state
* write advanced functional patterns

This module will go deep into closure internals and real backend use cases.

---

# Lesson 01 – What is a Closure?

A closure is created when:

A function remembers variables from its outer scope even after the outer function has finished executing.

```javascript
function outer() {
  let message = "Hello";

  function inner() {
    console.log(message);
  }

  return inner;
}

const fn = outer();

fn();
```

Output:

```
Hello
```

Even though `outer()` has already finished executing, the function `inner()` still has access to `message`.

This is a closure.

---

# Lesson 02 – Why Closures Work (Internal Mechanism)

When a function is created, JavaScript stores a reference to its lexical environment.

Simplified model:

```
Function Object
      ↓
Lexical Environment
      ↓
Outer Scope Variables
```

Example memory structure:

```
Heap
│
├── Function inner()
│     └── Reference → message = "Hello"
```

Because the function still references the variable, the garbage collector cannot remove it.

---

# Lesson 03 – Closures and the Scope Chain

Closures rely on the scope chain.

```javascript
function level1() {

  const a = 1;

  function level2() {

    const b = 2;

    function level3() {
      console.log(a + b);
    }

    return level3;
  }

  return level2();
}

const fn = level1();

fn();
```

Output:

```
3
```

`level3` has access to:

* `a` → from level1
* `b` → from level2

---

# Lesson 04 – Creating Private Variables

Closures allow us to create private state.

```javascript
function createCounter() {

  let count = 0;

  return {
    increment() {
      count++;
      return count;
    },

    decrement() {
      count--;
      return count;
    }
  };

}

const counter = createCounter();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
```

Output:

```
1
2
1
```

Important property:

`count` is **NOT accessible outside**.

```javascript
console.log(counter.count);
```

Output:

```
undefined
```

---

# Lesson 05 – Function Factories

Closures allow functions to generate other functions.

```javascript
function multiplyBy(x) {

  return function(y) {
    return x * y;
  };

}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));
console.log(triple(5));
```

Output:

```
10
15
```

Each generated function remembers its own value of `x`.

---

# Lesson 06 – Closures in Loops (Common Bug)

Closures inside loops can cause problems.

```javascript
for (var i = 0; i < 3; i++) {

  setTimeout(() => {
    console.log(i);
  }, 100);

}
```

Output:

```
3
3
3
```

Reason:

`var` is function scoped.

All callbacks share the same variable.

### Fix using `let`

```javascript
for (let i = 0; i < 3; i++) {

  setTimeout(() => {
    console.log(i);
  }, 100);

}
```

Output:

```
0
1
2
```

---

# Lesson 07 – Closures in Node.js Modules

Closures power Node.js module encapsulation.

```javascript
function createLogger(prefix) {

  return function(message) {
    console.log(`[${prefix}] ${message}`);
  };

}

const errorLogger = createLogger("ERROR");

errorLogger("Database connection failed");
```

Output:

```
[ERROR] Database connection failed
```

This pattern is widely used in:

* logging systems
* middleware frameworks
* configuration wrappers

---

# Lesson 08 – Closures and Memory Leaks

Closures can unintentionally keep objects in memory.

```javascript
function createHandler() {

  const largeData = new Array(1000000).fill("data");

  return function() {
    console.log("handler active");
  };

}

const handler = createHandler();
```

Even though `largeData` is not used later, the closure keeps it alive.

This can cause memory leaks in long‑running servers.

### Best practice

Avoid capturing unnecessary large objects in closures.

---

# Real Backend Example – Middleware

Closures are used heavily in middleware systems.

```javascript
function createAuthMiddleware(role) {

  return function(request) {

    if (request.user.role !== role) {
      throw new Error("Unauthorized");
    }

    console.log("Access granted");

  };

}

const adminOnly = createAuthMiddleware("admin");
```

This pattern is extremely common in backend frameworks.

---

# Common Closure Mistakes

### Mistake 1 – Loop variables

Using `var` instead of `let`.

### Mistake 2 – Capturing large objects

Can cause memory leaks.

### Mistake 3 – Overusing closures

Sometimes a simple function is enough.

---

# Module 14 Exercises

## Exercise 01 – Secure Counter

Create function:

```
createSecureCounter()
```

Return object with methods:

* increment
* decrement
* getValue

The internal counter must be private.

---

## Exercise 02 – Function Cache (Memoization)

Create function:

```
memoize(fn)
```

It should cache results using closure.

Example:

```
slowFunction(5) → computed
slowFunction(5) → returned from cache
```

---

## Exercise 03 – Logger Factory

Create function:

```
createLogger(level)
```

Output format:

```
[LEVEL] message
```

Example:

```
[INFO] server started
```

---

## Exercise 04 – Rate Limiter

Create function that allows only **3 calls per second** using closures.

---

## Exercise 05 – Private Config System

Create function:

```
createConfig()
```

It stores configuration internally and exposes methods:

* set(key,value)
* get(key)

Configuration must remain private.

---

# Interview Questions

1️⃣ What is a closure in JavaScript?

2️⃣ Why do closures work even after a function returns?

3️⃣ What are real‑world uses of closures?

4️⃣ How can closures cause memory leaks?

5️⃣ How do closures relate to the scope chain?

---

# Next Module

Next we move into a powerful text processing tool used everywhere in backend development.

## Regular Expressions (Regex)

They are used for:

* input validation
* log processing
* parsing text
* API validation
* authentication systems

Next module:

**Module 15 – Regular Expressions (Regex)**