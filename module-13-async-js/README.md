# Module 13 – Asynchronous JavaScript

## Module Introduction

Modern backend systems rarely execute tasks synchronously.

Most backend operations are asynchronous:

* reading files
* database queries
* HTTP requests
* sending emails
* authentication services
* API calls

If these operations were synchronous, the server would freeze while waiting for them.

Example problem:

User requests data
Server waits for database
Server cannot handle other requests

This would destroy scalability.

Instead, Node.js uses an event-driven asynchronous architecture built on top of V8.

Key benefits:

* Non-blocking I/O
* High concurrency
* Efficient servers
* Better scalability

In this module you will master:

* callbacks
* promises
* async / await
* error handling in async code
* concurrency patterns
* avoiding callback hell

These concepts are the foundation of professional Node.js backend development.

---

# Lesson 01 – Synchronous vs Asynchronous Code

## Synchronous Code

Operations execute one after another.

```javascript
console.log("Start");

function slowTask() {
  for (let i = 0; i < 1e9; i++) {}
}

slowTask();

console.log("End");
```

`End` waits until `slowTask` finishes.

This blocks the event loop.

## Asynchronous Code

```javascript
console.log("Start");

setTimeout(() => {
  console.log("Async task finished");
}, 2000);

console.log("End");
```

Output:

Start
End
Async task finished

---

# Lesson 02 – Callbacks

A callback is a function passed into another function to be executed later.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    callback("Data loaded");
  }, 1000);
}

fetchData((data) => {
  console.log(data);
});
```

Example with file reading:

```javascript
const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  console.log(data);
});
```

---

# Lesson 03 – Callback Hell

```javascript
getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getProducts(orders, (products) => {
      console.log(products);
    });
  });
});
```

Problems:

* difficult to read
* hard to maintain
* complicated error handling

Solution: **Promises**.

---

# Lesson 04 – Promises

A Promise represents a future value.

States:

* Pending
* Fulfilled
* Rejected

```javascript
const promise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve("Operation successful");
  } else {
    reject("Operation failed");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.error(error);
  });
```

---

# Lesson 05 – Promise Chaining

```javascript
function step1() {
  return Promise.resolve("Step 1 done");
}

function step2() {
  return Promise.resolve("Step 2 done");
}

step1()
  .then((result) => {
    console.log(result);
    return step2();
  })
  .then((result) => {
    console.log(result);
  });
```

---

# Lesson 06 – async / await

```javascript
function wait(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

async function run() {
  console.log("Start");

  await wait(2000);

  console.log("Done");
}

run();
```

---

# Lesson 07 – Error Handling with async/await

```javascript
async function loadData() {
  try {
    const data = await fetchData();
    console.log(data);
  } catch (error) {
    console.error("Error:", error);
  }
}
```

---

# Lesson 08 – Running Async Tasks in Parallel

```javascript
async function runTasks() {
  const results = await Promise.all([
    fetchUsers(),
    fetchOrders(),
    fetchProducts()
  ]);

  console.log(results);
}
```

Benefits:

* faster performance
* better server throughput

---

# Lesson 09 – Async Iteration

```javascript
async function processTasks(tasks) {
  for (const task of tasks) {
    const result = await task();
    console.log(result);
  }
}
```

Useful for:

* job queues
* background workers
* batch processing

---

# Real Backend Example

```javascript
const https = require("https");

function getUsers() {
  return new Promise((resolve, reject) => {
    https.get("https://api.example.com/users", (res) => {
      let data = "";

      res.on("data", chunk => data += chunk);

      res.on("end", () => resolve(JSON.parse(data)));
    }).on("error", reject);
  });
}

async function main() {
  const users = await getUsers();
  console.log(users);
}

main();
```

This pattern appears in:

* REST API clients
* database drivers
* microservices

---

# Common Async Mistakes

## 1 – Forgetting await

```javascript
const data = fetchData();
console.log(data);
```

Output:

```
Promise { <pending> }
```

## 2 – Blocking event loop

```javascript
while(true){}
```

Never block Node.js.

## 3 – Using await inside loops incorrectly

Sometimes better to use:

```
Promise.all()
```

---

# Module 13 Exercises

## Exercise 01 – Promise Delay

Create function:

```
delay(ms)
```

Returns promise that resolves after `ms`.

---

## Exercise 02 – Async File Loader

Read 3 files using `fs.promises.readFile`.

Print file contents sequentially.

---

## Exercise 03 – Parallel Requests

Simulate 3 API calls using promises.

Execute them using:

```
Promise.all()
```

---

## Exercise 04 – Retry Mechanism

Create async function that retries a failed promise **3 times** before throwing error.

---

## Exercise 05 – Async Queue Processor

Given array of async tasks, process them one by one and collect results.

---

# Interview Questions

1. What is the difference between callbacks and promises?
2. What problem does async/await solve?
3. What is Promise.all() used for?
4. How does Node.js handle async operations internally?

---

# Next Module

**Module 14 – Closures**

Closures are heavily used in:

* Node.js modules
* middleware
* factories
* private state