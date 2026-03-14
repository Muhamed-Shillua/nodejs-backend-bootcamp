# Module 10 – Modules & NPM

## Module Introduction

Modern JavaScript applications are never written in a single file.

Real backend systems built with Node.js may contain:

* hundreds of files
* dozens of modules
* external libraries
* internal reusable utilities

Without a module system, large projects would become impossible to maintain.

Modules allow developers to:

* split code into logical units
* reuse functionality
* isolate responsibilities
* organize large systems

Example real backend structure:

```
project/
│
├── server.js
├── routes/
│   └── users.js
├── services/
│   └── authService.js
├── utils/
│   └── logger.js
└── config/
    └── database.js
```

Each file is a module.

Node.js also provides a package manager called **npm**.

npm allows us to install external packages from the world’s largest JavaScript ecosystem.

Examples:

* web frameworks
* database drivers
* authentication libraries
* validation tools

Popular packages include:

* Express.js
* Axios
* Lodash

In this module you will learn:

* CommonJS modules
* exporting and importing code
* module caching
* built‑in modules
* npm basics
* dependency management

These skills are essential for every backend developer.

---

# Lesson 01 – What is a Module?

A module is simply **a file containing code**.

Example:

### math.js

```javascript
function add(a, b) {
  return a + b;
}

module.exports = add;
```

### app.js

```javascript
const add = require("./math");

console.log(add(2, 3));
```

Output:

```
5
```

This is the **CommonJS module system** used by Node.js.

---

# Lesson 02 – Exporting Code

Node.js exports code using:

```
module.exports
```

Example:

```javascript
function formatName(name) {
  return name.toUpperCase();
}

module.exports = formatName;
```

Import:

```javascript
const formatName = require("./utils");

console.log(formatName("ali"));
```

## Exporting Multiple Functions

```javascript
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = {
  add,
  subtract
};
```

Usage:

```javascript
const math = require("./math");

console.log(math.add(5, 3));
```

---

# Lesson 03 – Importing Modules

Modules are imported using:

```
require()
```

Example:

```javascript
const fs = require("fs");
```

Another example:

```javascript
const path = require("path");
```

These are **built‑in modules** in Node.js.

---

# Lesson 04 – Built‑in Modules

Node.js ships with many powerful core modules.

| Module | Purpose               |
| ------ | --------------------- |
| fs     | file system           |
| path   | file paths            |
| http   | HTTP servers          |
| os     | operating system info |
| crypto | cryptography          |

Example:

```javascript
const os = require("os");

console.log(os.platform());
```

---

# Lesson 05 – Module Caching

Node.js caches modules after the first load.

Example:

### counter.js

```javascript
let count = 0;

count++;

console.log("Module loaded", count);

module.exports = count;
```

Main file:

```javascript
const a = require("./counter");
const b = require("./counter");
```

Output:

```
Module loaded 1
```

Reason:

Modules are cached after first execution.

This improves performance.

---

# Lesson 06 – Installing Packages with npm

npm is the **Node Package Manager**.

It connects to the public registry:

[https://www.npmjs.com](https://www.npmjs.com)

Example install:

```
npm install lodash
```

Install specific version:

```
npm install lodash@4.17.21
```

---

# Lesson 07 – Using Installed Packages

```javascript
const _ = require("lodash");

const numbers = [1, 2, 3, 4];

console.log(_.shuffle(numbers));
```

---

# Lesson 08 – Local vs Global Packages

## Local install

```
npm install package-name
```

Installed inside:

```
node_modules/
```

Used by the project.

## Global install

```
npm install -g package-name
```

Used for CLI tools.

Example:

```
nodemon
```

---

# Lesson 09 – node_modules Folder

After installing packages Node.js creates:

```
node_modules/
```

This folder contains:

* all dependencies
* dependency subtrees

Example:

```
node_modules/
│
├── lodash/
├── axios/
└── express/
```

Important rule:

**Never commit node_modules to Git.**

Instead we commit:

```
package.json
```

---

# Lesson 10 – Versioning

npm packages use **Semantic Versioning**.

Format:

```
MAJOR.MINOR.PATCH
```

Example:

```
1.4.2
```

Meaning:

| Part  | Meaning          |
| ----- | ---------------- |
| MAJOR | breaking changes |
| MINOR | new features     |
| PATCH | bug fixes        |

Example:

```
^1.4.2
```

The `^` means:

Allow minor updates.

---

# Real Backend Example

Typical Node.js service structure:

```
src/
│
├── server.js
├── routes/
│   └── userRoutes.js
├── controllers/
│   └── userController.js
├── services/
│   └── authService.js
└── utils/
    └── logger.js
```

Each file is a module.

This structure scales to large production systems.

---

# Common Developer Mistakes

## Mistake 1 – Circular Dependencies

A requires B

B requires A

This can cause unexpected behavior.

## Mistake 2 – Incorrect Export

Wrong:

```javascript
exports = myFunction
```

Correct:

```javascript
module.exports = myFunction
```

## Mistake 3

Installing packages globally instead of locally.

---

# Module 10 Exercises

## Exercise 01 – Math Library

Create module:

```
math.js
```

Export functions:

* add
* subtract
* multiply
* divide

Import them in another file and test.

---

## Exercise 02 – Logger Module

Create module:

```
logger.js
```

Function:

```
log(message)
```

Output format:

```
[2026-03-14 23:00] message
```

---

## Exercise 03 – Config Loader

Create module:

```
config.js
```

Return configuration object:

* port
* dbHost
* dbUser

Import it in `server.js`.

---

## Exercise 04 – Random Utility

Create module:

```
random.js
```

Functions:

* randomInt(min,max)
* randomString(length)

---

## Exercise 05 – Package Usage

Install:

```
lodash
```

Write script that:

* shuffle array
* remove duplicates
* sort numbers

---

# Interview Questions

1. What is the difference between `module.exports` and `exports`?
2. What is module caching?
3. What does npm stand for?
4. Why should `node_modules` not be committed to Git?

---

# Next Module

**Module 11 – package.json & NPM**

Next, we focus on `package.json` & npm, the heart of Node.js project management.