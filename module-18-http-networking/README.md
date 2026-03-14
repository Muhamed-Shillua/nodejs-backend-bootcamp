# Module 18 – HTTP in Node.js

## Module Introduction

HTTP is the backbone of the web.

Every backend service interacts with clients over HTTP:

* Serving web pages
* REST APIs
* Microservices
* Webhooks

Node.js provides a built-in `http` module to create servers and handle requests.

In this module, you will learn:

* Creating HTTP servers
* Handling requests and responses
* Routing and headers
* Status codes
* Query parameters and URL parsing
* Real-world backend server patterns

By mastering HTTP in Node.js, you can build APIs without frameworks and understand frameworks like Express under the hood.

## Lesson 01 – Creating a Simple HTTP Server

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello Node.js HTTP Server!");
});

server.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
```

Key points:

* `createServer` accepts a request listener
* `req` → client request
* `res` → server response

## Lesson 02 – Request Object (req)

* `req.url` → requested URL
* `req.method` → HTTP method (GET, POST…)
* `req.headers` → request headers

Example:

```javascript
const server = http.createServer((req, res) => {
  console.log("URL:", req.url);
  console.log("Method:", req.method);
  console.log("Headers:", req.headers);
  res.end("Check console!");
});
```

## Lesson 03 – Response Object (res)

* `res.writeHead(statusCode, headers)`
* `res.write(data)`
* `res.end(data)`

Example:

```javascript
res.writeHead(200, { "Content-Type": "application/json" });
res.end(JSON.stringify({ message: "OK" }));
```

## Lesson 04 – Routing

```javascript
const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Home Page");
  } else if (req.url === "/about" && req.method === "GET") {
    res.end("About Page");
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});
```

## Lesson 05 – Query Parameters

```javascript
const server = http.createServer((req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const name = url.searchParams.get("name") || "Guest";
  res.end(`Hello ${name}`);
});
```

Request example: `http://localhost:3000/?name=Muhamed`
Output: `Hello Muhamed`

## Lesson 06 – Handling POST Requests

```javascript
const server = http.createServer((req, res) => {
  if (req.method === "POST") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      console.log("Body received:", body);
      res.end("Data received");
    });
  } else {
    res.end("Send POST request");
  }
});
```

## Lesson 07 – JSON APIs

```javascript
const server = http.createServer((req, res) => {
  if (req.method === "POST" && req.url === "/api") {
    let body = "";
    req.on("data", chunk => body += chunk);
    req.on("end", () => {
      const data = JSON.parse(body);
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ received: data }));
    });
  } else {
    res.writeHead(404);
    res.end();
  }
});
```

## Lesson 08 – Status Codes & Headers

* 200 → OK
* 201 → Created
* 400 → Bad Request
* 401 → Unauthorized
* 403 → Forbidden
* 404 → Not Found
* 500 → Internal Server Error

Set headers to inform clients:

```javascript
res.writeHead(200, {
  "Content-Type": "application/json",
  "X-Powered-By": "Node.js"
});
```

## Real Backend Example – Mini API Server

```javascript
const http = require("http");
const users = [{ id: 1, name: "Muhamed" }];

const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/users") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(users));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server.listen(3000, () => console.log("Server running at http://localhost:3000"));
```

## Common Developer Mistakes

1️⃣ Forgetting to call `res.end()` → request hangs
2️⃣ Blocking event loop → slow server
3️⃣ Parsing body incorrectly → crashes for large payloads
4️⃣ Not handling errors → unhandled exceptions

## Module 18 Exercises

**Exercise 01 – Simple Router**

* Create server with routes:

  * `/` → Home page
  * `/about` → About page
  * `/api/users` → JSON list of users

**Exercise 02 – Query Echo**

* Server echoes back query parameters as JSON.
* Request example: `/echo?name=Muhamed&age=25`
* Response: `{"name":"Muhamed","age":"25"}`

**Exercise 03 – POST JSON Handler**

* Accept JSON POST data and respond with `{ received: <data> }`.

**Exercise 04 – Request Logger**

* Log each incoming request:

  * timestamp
  * method
  * URL
  * headers

## Interview Questions

1️⃣ How do you create an HTTP server in Node.js?
2️⃣ How do you handle query parameters?
3️⃣ Difference between GET and POST requests?
4️⃣ How do you parse JSON POST requests without Express?
5️⃣ Why must you call `res.end()`?

## Next Steps

* Combine everything learned to start building a real backend project using:

  * HTTP servers
  * Async programming
  * Modules & dependencies
  * Error handling
  * Logging
* Leads to the Final Course Project.