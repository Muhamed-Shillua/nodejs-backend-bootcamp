# Module 15 – Regular Expressions (Regex)

## Module Introduction

Backend systems constantly process text.

Examples from real backend systems:

* validating emails and passwords
* parsing log files
* validating API inputs
* extracting data from strings
* sanitizing user input
* searching inside large text datasets

For these tasks developers use Regular Expressions (Regex).

Regex is a pattern-matching language used to search, validate, and extract data from text.

JavaScript has built-in regex support and it runs inside the V8 used by Node.js.

In backend development regex is commonly used for:

* email validation
* password rules
* API input validation
* log parsing
* URL matching

In this module you will learn:

* regex syntax
* pattern matching
* character classes
* quantifiers
* capturing groups
* regex methods in JavaScript
* real backend validation examples

---

# Lesson 01 – What is a Regular Expression?

A regular expression is a pattern used to match text.

Example pattern:

```
/hello/
```

This matches the word:

```
hello
```

Example in JavaScript:

```javascript
const regex = /hello/;

console.log(regex.test("hello world"));
```

Output:

```
true
```

---

# Lesson 02 – Creating Regex in JavaScript

There are two ways.

### Method 1 – Regex literal

```javascript
const regex = /hello/;
```

Preferred for readability.

### Method 2 – RegExp constructor

```javascript
const regex = new RegExp("hello");
```

Used when patterns are dynamic.

---

# Lesson 03 – Regex Flags

Flags modify regex behavior.

| Flag | Meaning          |
| ---- | ---------------- |
| g    | global search    |
| i    | case insensitive |
| m    | multiline        |

Example:

```javascript
const regex = /hello/i;

console.log(regex.test("HELLO"));
```

Output:

```
true
```

---

# Lesson 04 – Character Classes

Character classes match specific sets of characters.

| Pattern | Meaning           |
| ------- | ----------------- |
| [abc]   | match a, b, or c  |
| [a-z]   | lowercase letters |
| [A-Z]   | uppercase letters |
| [0-9]   | digits            |

Example:

```javascript
const regex = /[0-9]/;

console.log(regex.test("abc5"));
```

Output:

```
true
```

---

# Lesson 05 – Quantifiers

Quantifiers define how many times something appears.

| Pattern | Meaning         |
| ------- | --------------- |
| +       | one or more     |
| *       | zero or more    |
| ?       | optional        |
| {n}     | exactly n       |
| {n,m}   | between n and m |

Example:

```javascript
const regex = /a+/;

console.log(regex.test("aaaa"));
```

Output:

```
true
```

---

# Lesson 06 – Special Characters

Regex has special symbols.

| Symbol | Meaning         |
| ------ | --------------- |
| .      | any character   |
| ^      | start of string |
| $      | end of string   |
| \d     | digit           |
| \w     | word character  |
| \s     | whitespace      |

Example:

```javascript
const regex = /^\\d+$/;

console.log(regex.test("12345"));
```

Output:

```
true
```

Explanation:

* ^ → start
* \d+ → digits
* $ → end

---

# Lesson 07 – Capturing Groups

Parentheses capture parts of text.

```javascript
const regex = /(\\d{4})-(\\d{2})-(\\d{2})/;

const result = "2026-03-14".match(regex);

console.log(result);
```

Output:

```
["2026-03-14","2026","03","14"]
```

This extracts:

* year
* month
* day

---

# Lesson 08 – JavaScript Regex Methods

Important methods:

### test()

Returns boolean.

```javascript
const regex = /cat/;

console.log(regex.test("cat"));
```

### match()

Returns matched text.

```javascript
const text = "I love cats";

console.log(text.match(/cat/));
```

### replace()

Replace patterns.

```javascript
const text = "hello world";

const result = text.replace(/world/, "Node");

console.log(result);
```

Output:

```
hello Node
```

### split()

Split using regex.

```javascript
const text = "apple,banana;orange";

console.log(text.split(/[;,]/));
```

Output:

```
["apple","banana","orange"]
```

---

# Lesson 09 – Email Validation Example

Example backend validation:

```javascript
function isValidEmail(email) {

  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;

  return regex.test(email);

}

console.log(isValidEmail("test@example.com"));
```

---

# Lesson 10 – Password Validation

Example password rule:

* minimum 8 characters
* at least one digit
* at least one uppercase letter

```javascript
function validatePassword(password) {

  const regex = /^(?=.*[A-Z])(?=.*\\d).{8,}$/;

  return regex.test(password);

}

console.log(validatePassword("Pass1234"));
```

---

# Real Backend Example – Log Parsing

Example log:

```
[ERROR] 2026-03-14 Server crashed
```

Extract log type.

```javascript
const log = "[ERROR] 2026-03-14 Server crashed";

const match = log.match(/\\[(.*?)\\]/);

console.log(match[1]);
```

Output:

```
ERROR
```

Regex is widely used in:

* monitoring tools
* log analyzers
* analytics systems

---

# Common Regex Mistakes

### Mistake 1 – Forgetting anchors

Example:

```
123
```

Matches inside:

```
abc123xyz
```

Fix:

```
^123$
```

### Mistake 2 – Overcomplicated regex

Complex patterns become unreadable.

### Mistake 3 – Poor validation

Regex cannot validate all real-world formats perfectly.

Example:

Email validation with regex is imperfect.

---

# Module 15 Exercises

## Exercise 01 – Username Validator

Rules:

* 4–16 characters
* letters and numbers only

---

## Exercise 02 – Phone Number Parser

Extract phone numbers from text.

Example:

```
Call me at 01012345678
```

---

## Exercise 03 – Log Analyzer

Given log lines:

```
[INFO] Server started
[ERROR] DB connection failed
```

Count number of each log type.

---

## Exercise 04 – URL Validator

Validate URLs:

* [https://example.com](https://example.com)
* [http://site.org](http://site.org)

---

## Exercise 05 – Extract Numbers

Given string:

```
Order #123 cost 45 dollars
```

Extract:

* 123
* 45

---

# Interview Questions

1️⃣ What are regular expressions used for?

2️⃣ Difference between test() and match().

3️⃣ What does ^ and $ mean in regex?

4️⃣ What are capturing groups?

5️⃣ What are regex flags?

---

# Next Module

Now we move to error handling, which is extremely important in backend systems.

Every production server must properly handle failures such as:

* database errors
* network failures
* invalid user input

Next module:

**Module 16 – Error Handling in JavaScript**