# Module 02 – JavaScript Basics

## Module Introduction

Before writing complex backend systems with Node.js, you must master the foundations of JavaScript itself.

Even senior backend engineers spend most of their time writing simple JavaScript logic correctly.

JavaScript basics form the foundation for:

* HTTP request processing
* database queries
* authentication logic
* background jobs
* data transformation
* API responses

Almost every backend operation ultimately becomes:

```
Receive Data
     ↓
Process Logic
     ↓
Return Result
```

And that logic is pure JavaScript.

In this module you will master:

* Variables
* Data Types
* Operators
* Expressions
* Statements
* Type conversion
* JavaScript runtime behavior

These concepts may appear simple, but they are responsible for many real production bugs when misunderstood.

---

# Lesson 01 – Variables & Memory Model

## What is a Variable?

A variable is a named container that stores a value in memory.

Example:

```javascript
// Store the user's name
let username = "Ali";
```

Here:

```
username → variable name
"Ali" → value stored in memory
```

---

## How JavaScript Stores Variables

JavaScript runs on the **V8 engine**.

When a variable is created, memory is allocated in either the **Stack** or the **Heap**.

### Simplified Memory Model

```
Stack Memory
------------
username → pointer

Heap Memory
-----------
"Ali"
```

Explanation:

* Primitive values often stored directly
* Objects stored in heap
* Stack stores references

Understanding this helps later when we discuss:

* objects
* closures
* garbage collection

---

## Variable Declaration Keywords

JavaScript provides three ways to declare variables.

* var
* let
* const

Modern JavaScript mainly uses **let** and **const**.

### let

Used when a variable can change.

```javascript
// User score that may change
let score = 10;

score = 20;
```

### const

Used for values that must not be reassigned.

```javascript
// API base URL should never change
const API_URL = "https://api.example.com";
```

Attempting to reassign:

```javascript
API_URL = "test";
```

Error:

```
TypeError: Assignment to constant variable
```

### var (Legacy)

```javascript
var name = "Ali";
```

Problems with `var`:

* function-scoped
* hoisting confusion
* global pollution

Modern rule:

* Use **const by default**
* Use **let when mutation is required**
* **Avoid var**

---

## Real Backend Example

```javascript
// Application configuration
const PORT = 3000;

// Server status flag
let isServerRunning = false;

// Start server
isServerRunning = true;

console.log("Server running on port:", PORT);
```

---

# Lesson 02 – JavaScript Data Types

JavaScript has two categories of data types.

* Primitive Types
* Reference Types

## Primitive Types

These store actual values directly.

JavaScript primitive types:

* string
* number
* boolean
* null
* undefined
* bigint
* symbol

### String

Represents textual data.

```javascript
const name = "Mohamed";
```

Backend example:

```javascript
const email = "user@example.com";
```

Strings support operations:

```javascript
const greeting = "Hello " + name;
```

---

### Number

JavaScript uses one numeric type.

```javascript
const price = 99.99;
const age = 25;
```

JavaScript does not separate:

* int
* float
* double

Everything is **Number (64-bit floating point)**.

---

### Boolean

Represents true or false.

```javascript
const isLoggedIn = true;
```

Backend example:

```javascript
const isAdmin = false;
```

Used in:

* authentication
* feature flags
* permission systems

---

### undefined

Represents a variable declared but not assigned.

```javascript
let username;

console.log(username);
```

Output:

```
undefined
```

---

### null

Represents intentional absence of value.

```javascript
const user = null;
```

Backend example:

```
User not found → null
```

---

### BigInt

Used for very large numbers.

```javascript
const bigNumber = 12345678901234567890n;
```

Used in:

* cryptography
* financial systems
* blockchain apps

---

### Symbol

Unique identifier used internally.

```javascript
const id = Symbol("id");
```

Mostly used in advanced JavaScript libraries.

---

## typeof Operator

JavaScript allows checking types.

```javascript
const age = 25;

console.log(typeof age);
```

Output:

```
number
```

Examples:

```
typeof "hello" → string
typeof 10 → number
typeof true → boolean
```

Edge case:

```
typeof null → object
```

This is a historic bug in JavaScript.

---

# Lesson 03 – Operators

Operators allow performing operations on values.

## Arithmetic Operators

```
+
-
*
/
%
**
```

Example:

```javascript
// Calculate total price
const price = 50;
const tax = 10;

const total = price + tax;

console.log(total);
```

Output:

```
60
```

---

## Comparison Operators

Used in decision making.

```
==
===
!=
!==
>
<
>=
<=
```

Example:

```javascript
const age = 18;

console.log(age >= 18);
```

Output:

```
true
```

---

## Strict Equality vs Loose Equality

Loose equality:

```javascript
5 == "5"
```

Result:

```
true
```

Because JavaScript converts types.

Strict equality:

```javascript
5 === "5"
```

Result:

```
false
```

Rule used in production systems:

```
Always use ===
```

---

## Logical Operators

```
&&  AND
||  OR
!   NOT
```

Example:

```javascript
const isAdmin = true;
const isLoggedIn = true;

if (isAdmin && isLoggedIn) {
  console.log("Access granted");
}
```

---

# Lesson 04 – Expressions vs Statements

Understanding this improves debugging and reading complex code.

## Expression

Produces a value.

Example:

```
5 + 5
```

Returns:

```
10
```

Another example:

```javascript
const result = 10 * 2;
```

---

## Statement

Performs an action.

Example:

```javascript
if (age > 18) {
  console.log("Adult");
}
```

---

## Expression vs Statement Example

Expression:

```javascript
const x = 5 + 5;
```

Statement:

```javascript
let x;
```

---

## Real Backend Example

```javascript
const price = 200;
const tax = price * 0.14;

const discount = price > 100 ? 20 : 0;

const finalPrice = price + tax - discount;

console.log(finalPrice);
```

---

# Common Production Bugs

## Bug 1 – Accidental Assignment

```javascript
if (userRole = "admin")
```

This assigns instead of comparing.

Correct:

```javascript
if (userRole === "admin")
```

---

## Bug 2 – Type Coercion

```javascript
"5" + 5
```

Output:

```
55
```

Because string concatenation occurs.

---

# Module 02 Exercises

## Exercise 1 – Order Price Calculator

Create variables for:

* productPrice
* taxRate
* discountRate

Calculate:

```
finalPrice
```

Rules:

```
tax = price * taxRate
discount = price * discountRate
final = price + tax - discount
```

Print a formatted summary.

---

## Exercise 2 – Access Control Logic

Simulate authentication.

Variables:

* isLoggedIn
* isAdmin
* subscriptionActive

Access allowed only if:

```
logged in AND (admin OR subscription active)
```

Print result.

---

## Exercise 3 – Type Analyzer

Write a script that prints the type of several variables.

Example output:

```
username → string
age → number
isAdmin → boolean
user → object
```

---

# Interview Questions (JavaScript Basics)

1️⃣ What is the difference between:

* var
* let
* const

2️⃣ Why should developers prefer:

```
=== over ==
```

3️⃣ What will this print?

```javascript
console.log(typeof null);
```

4️⃣ What is the difference between:

* undefined
* null

---

# Next Module

The next module introduces decision making and iteration, which are essential for backend logic.

## Module 03 – Control Flow & Loops

Topics include:

* if / else
* switch
* for loops
* while loops
* break & continue
* nested loops
* real backend iteration patterns

This is where real programming logic begins.
