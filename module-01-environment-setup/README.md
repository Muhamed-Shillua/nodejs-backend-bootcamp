# Module 01 – Environment Setup & Project Structure

## Module Introduction

Before writing any serious JavaScript or Node.js code, professional developers must first prepare a proper development environment.

A good environment ensures:

* Consistent project structure
* Clean dependency management
* Reliable tooling
* Easier debugging
* Maintainable codebase

In real production backend systems, environment setup is critical because:

* Multiple developers collaborate on the same codebase
* Applications may contain hundreds of files
* Projects depend on external libraries (npm packages)
* Deployment pipelines rely on predictable project structures

This module teaches you how professional backend developers prepare their workspace and organize Node.js applications.

By the end of this module you will understand:

* Node.js installation and verification
* npm ecosystem basics
* folder organization strategies
* project initialization
* best practices used in real backend repositories

This module forms the **foundation of the entire course**.

---

# Lesson 01 – Prepare Development Environment

## Why Environment Setup Matters

Professional developers must ensure that their system contains:

| Tool        | Purpose                                    |
| ----------- | ------------------------------------------ |
| Node.js     | JavaScript runtime for backend development |
| npm         | Package manager for installing libraries   |
| Code Editor | Writing and managing code                  |
| Terminal    | Running commands and scripts               |

Without these tools working correctly, development becomes painful.

---

## What is Node.js?

**Node.js** is a JavaScript runtime built on the **V8 engine**.

V8 is the same engine that powers the **Chrome browser**.

Node.js allows JavaScript to run **outside the browser**, enabling backend development.

Example:

```javascript
// This JavaScript code runs in Node.js, not the browser
console.log("Hello from Node.js");
```

---

## How Node.js Executes Code

Understanding this early helps later topics.

### Simplified Node Runtime Model

```
JavaScript Code
      ↓
 V8 Engine
      ↓
 Node.js Runtime APIs
      ↓
 Operating System
```

### Explanation

1️⃣ Your JavaScript is executed by **V8 engine**
2️⃣ Node.js exposes **system-level APIs** (files, network, processes)
3️⃣ Node interacts with the **Operating System**

This is why Node.js can:

* read files
* start servers
* connect to databases
* run background jobs

---

## Verifying Node.js Installation

Open your terminal and run:

```bash
node -v
```

Example output:

```
v20.10.0
```

Check npm:

```bash
npm -v
```

Example:

```
10.2.3
```

---

## First Node.js Program

Create a file:

```
hello.js
```

Code:

```javascript
// Print a message to the console
console.log("Hello Backend Developer!");
```

Run it:

```bash
node hello.js
```

Output:

```
Hello Backend Developer!
```

You have just executed JavaScript using the **Node.js runtime**.

---

## The Node.js REPL

Node.js includes an **interactive shell**.

Run:

```bash
node
```

Example:

```javascript
> 2 + 2
4

> const name = "Ali"
> name
'Ali'
```

**REPL = Read Eval Print Loop**

```
Input → Evaluate → Print → Repeat
```

Developers use REPL to:

* test ideas
* debug logic
* experiment with APIs

Exit REPL:

```
.exit
```

or

```
CTRL + C twice
```

---

## Real World Engineering Context

Professional Node.js developers often manage **multiple Node versions**.

### Why?

Different projects may require different Node versions:

```
Project A → Node 18
Project B → Node 20
Project C → Node 22
```

Developers use tools like:

**nvm (Node Version Manager)**

Example:

```bash
nvm install 20
nvm use 20
```

This ensures **compatibility between environments**.

---

## Common Beginner Mistakes

### Mistake 1

Running JavaScript with:

```bash
node index
```

Instead of:

```bash
node index.js
```

### Mistake 2

Installing packages **globally** when they should be **local**.

Wrong:

```bash
npm install express -g
```

Correct:

```bash
npm install express
```

### Mistake 3

Mixing **Node versions** between machines.

---

# Lesson 02 – Node.js Application Files Organization

## Why Project Structure Matters

In real backend systems:

* projects may have hundreds of files
* code must remain maintainable
* multiple developers collaborate

Bad structure example:

```
project
 ├ index.js
 ├ db.js
 ├ server.js
 ├ util.js
 ├ test.js
 ├ api.js
 ├ routes.js
```

Everything becomes **chaotic**.

Professional projects use **structured folders**.

---

## Basic Node.js Project Structure

Example:

```
my-node-app
│
├ package.json
├ node_modules
│
├ src
│  ├ app.js
│  ├ server.js
│
├ routes
│  └ userRoutes.js
│
├ controllers
│  └ userController.js
│
├ services
│  └ userService.js
│
├ utils
│  └ logger.js
│
└ config
   └ db.js
```

---

## Folder Responsibilities

### src/

Main application entry.

Example:

```
src/app.js
```

### routes/

Defines API routes.

Example:

```javascript
// routes/userRoutes.js

function getUsers(req, res) {
  res.end("Users list");
}

module.exports = { getUsers };
```

### controllers/

Handles request logic.

Example:

```javascript
// controllers/userController.js

function listUsers() {
  return ["Ali", "Sara", "Omar"];
}

module.exports = { listUsers };
```

### services/

Business logic layer.

Example:

```javascript
// services/userService.js

function fetchUsers() {
  return [
    { id: 1, name: "Ali" },
    { id: 2, name: "Sara" }
  ];
}

module.exports = { fetchUsers };
```

### utils/

Reusable helper functions.

Example:

```javascript
// utils/logger.js

function log(message) {
  const time = new Date().toISOString();
  console.log(`[${time}] ${message}`);
}

module.exports = { log };
```

### config/

Configuration files.

Example:

```javascript
// config/db.js

const dbConfig = {
  host: "localhost",
  port: 5432
};

module.exports = dbConfig;
```

---

## Real Backend Architecture Concept

Large systems follow **layered architecture**:

```
Client
  ↓
Routes
  ↓
Controllers
  ↓
Services
  ↓
Database
```

Each layer has **one responsibility**.

This improves:

* maintainability
* testability
* scalability

---

## Professional Naming Conventions

Good:

```
userService.js
authController.js
paymentRoutes.js
```

Bad:

```
file1.js
stuff.js
helpers2.js
```

Naming should **describe responsibility**.

---

# Next Module

Next we will start **real JavaScript programming**.

## Module 02 – JavaScript Basics

Topics will include:

* Variables
* Data types
* Operators
* Expressions
* Statements

And we will begin writing **serious JavaScript code**.
