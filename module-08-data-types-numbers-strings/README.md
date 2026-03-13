# Module 08 – Data Types, Numbers & Strings

## Module Introduction

In real backend systems, a huge portion of code is spent processing and transforming data.

Examples:

* Parsing numbers from HTTP requests
* Validating user input
* Formatting responses
* Processing financial values
* Manipulating strings like emails, tokens, and URLs

JavaScript handles these operations through primitive data types such as numbers and strings.

Understanding their internal behavior is critical because JavaScript has some surprising quirks, especially around:

* floating-point precision
* implicit type coercion
* string encoding
* parsing user input

Since Node.js applications run on the V8 engine, the way numbers and strings behave is defined by the ECMAScript specification and the V8 implementation.

In production systems, mistakes in number or string handling can cause:

* payment miscalculations
* authentication failures
* security bugs
* corrupted data

This module will teach you:

* JavaScript number system
* floating-point behavior
* numeric utilities
* string manipulation
* parsing techniques
* common backend pitfalls

---

# Lesson 01 – JavaScript Numbers

JavaScript uses one numeric type:

**Number**

Internally it is stored as:

**64-bit floating point (IEEE-754)**

Example:

```javascript
const age = 25;
const price = 99.99;
const temperature = -5;

console.log(age, price, temperature);
```

Unlike many languages, JavaScript does not separate:

* int
* float
* double

Everything is a **Number**.

---

## Number Precision Problem

Because numbers use floating-point representation, some calculations produce unexpected results.

Example:

```javascript
console.log(0.1 + 0.2);
```

Output:

```
0.30000000000000004
```

This happens because numbers are stored in binary floating-point format.

Simplified representation:

```
0.1 → 0.0001100110011...
0.2 → 0.001100110011...
```

The result cannot be represented exactly.

---

## Fixing Precision Problems

For financial calculations, backend developers often use **integer cents**.

Example:

```javascript
const price = 1999; // cents
const tax = 300;

const total = price + tax;

console.log(total / 100);
```

Output:

```
22.99
```

Production systems may also use decimal libraries.

---

# Lesson 02 – Number Methods

## toFixed()

Formats decimal places.

```javascript
const price = 19.987;

console.log(price.toFixed(2));
```

Output:

```
19.99
```

---

## Number()

Converts values into numbers.

```javascript
const value = Number("42");

console.log(value);
```

Output:

```
42
```

---

## parseInt()

Extracts integer from string.

```javascript
const age = parseInt("25 years");

console.log(age);
```

Output:

```
25
```

---

## parseFloat()

```javascript
const price = parseFloat("19.99 USD");

console.log(price);
```

Output:

```
19.99
```

---

## Checking Numbers

* Number.isNaN()
* Number.isFinite()

Example:

```javascript
const value = Number("hello");

console.log(Number.isNaN(value));
```

Output:

```
true
```

---

# Lesson 03 – BigInt

JavaScript numbers have a safe integer limit:

**Number.MAX_SAFE_INTEGER**

Value:

```
9007199254740991
```

For larger numbers JavaScript provides **BigInt**.

```javascript
const big = 123456789012345678901234567890n;

console.log(big);
```

BigInt is used in:

* cryptography
* blockchain
* high-precision financial systems

---

# Lesson 04 – Strings

Strings represent textual data.

Example:

```javascript
const name = "Mohamed";
const email = "user@example.com";
```

JavaScript strings support:

* "double quotes"
* 'single quotes'
* `template literals`

Template literals are most powerful.

Example:

```javascript
const user = "Ali";
const message = `Welcome ${user}`;

console.log(message);
```

Output:

```
Welcome Ali
```

---

# Lesson 05 – String Methods

## length

```javascript
const name = "Ali";

console.log(name.length);
```

Output:

```
3
```

---

## toUpperCase / toLowerCase

```javascript
const email = "USER@EXAMPLE.COM";

console.log(email.toLowerCase());
```

Output:

```
user@example.com
```

Useful for case-insensitive comparisons.

---

## includes()

```javascript
const email = "user@example.com";

console.log(email.includes("@"));
```

Output:

```
true
```

---

## slice()

Extract part of string.

```javascript
const token = "abc123xyz";

console.log(token.slice(0,3));
```

Output:

```
abc
```

---

## replace()

```javascript
const message = "Hello world";

console.log(message.replace("world","Ali"));
```

Output:

```
Hello Ali
```

---

# Lesson 06 – String Splitting & Joining

## split()

```javascript
const csv = "Ali,Sara,Omar";

const users = csv.split(",");

console.log(users);
```

Output:

```
["Ali","Sara","Omar"]
```

---

## join()

```javascript
const users = ["Ali","Sara","Omar"];

console.log(users.join(", "));
```

Output:

```
Ali, Sara, Omar
```

---

# Real Backend Example

Processing email addresses.

```javascript
function extractDomain(email) {

  const parts = email.split("@");

  return parts[1];

}

console.log(extractDomain("ali@example.com"));
```

Output:

```
example.com
```

This pattern appears in:

* authentication systems
* email validation
* analytics tools

---

# Common Production Bugs

## Bug 1 — String + Number

```javascript
console.log("5" + 5);
```

Output:

```
55
```

Because string concatenation occurs.

---

## Bug 2 — parseInt base confusion

Always specify radix.

```javascript
parseInt("10", 10);
```

---

## Bug 3 — Floating precision in payments

Never rely on raw floating-point math for currency.

---

# Module 08 Exercises

## Exercise 01 – Price Formatter

Create function:

```
formatPrice(price)
```

Input:

```
19.987
```

Output:

```
$19.99
```

---

## Exercise 02 – Email Parser

Given:

```
user@example.com
```

Extract:

* username
* domain

---

## Exercise 03 – CSV Processor

Given string:

```
Ali,Sara,Omar,Hassan
```

Convert to array and print each name in uppercase.

---

## Exercise 04 – Number Validator

Create function:

```
isValidNumber(value)
```

Return:

* true → if value is valid number
* false → otherwise

---

## Exercise 05 – Payment Calculator

Given:

* price
* taxRate
* discount

Calculate final price without floating-point errors.

---

# Interview Questions (Numbers & Strings)

1. Why does `0.1 + 0.2 !== 0.3`?

2. What is the difference between:

* Number()
* parseInt()
* parseFloat()

3. What is `Number.MAX_SAFE_INTEGER`?

4. When should you use `BigInt`?

---

# Next Module

Next we explore **Dates & Time**, which are extremely important in backend systems:

* timestamps
* logs
* scheduling
* token expiration
* analytics

Next module:

**Module 09 – Dates & Time**

You will learn:

* JavaScript Date object
* timestamps
* time zones
* formatting
* scheduling logic
* real backend use cases