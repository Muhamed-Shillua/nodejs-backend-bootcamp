# Module 17 – Node.js Core Modules

## Module Introduction

Node.js comes with a set of built-in modules that allow you to perform essential backend operations without installing any packages.

Understanding core modules is crucial because real backend systems rely on them for:

* file operations
* networking
* data processing
* streams and buffers
* event-driven programming

Key modules we’ll cover:

* fs – file system
* path – file paths
* os – operating system info
* events – event emitter
* buffer – binary data
* crypto – encryption
* util – utilities

These modules form the foundation of any professional Node.js backend.

## Lesson 01 – File System (fs)

```javascript
const fs = require("fs");

// Asynchronous read
fs.readFile("example.txt", "utf-8", (err, data) => {
  if (err) return console.error(err);
  console.log("Async read:", data);
});

// Synchronous read
const dataSync = fs.readFileSync("example.txt", "utf-8");
console.log("Sync read:", dataSync);

// Writing Files
fs.writeFile("output.txt", "Hello Node.js", (err) => {
  if (err) console.error(err);
  else console.log("File written successfully!");
});
```

## Lesson 02 – Path Module (path)

```javascript
const path = require("path");

const filePath = "/users/node/app/index.js";

console.log("Base name:", path.basename(filePath)); // index.js
console.log("Dir name:", path.dirname(filePath)); // /users/node/app
console.log("Extension:", path.extname(filePath)); // .js
console.log("Join:", path.join("/users", "node", "app")); // /users/node/app
```

## Lesson 03 – OS Module (os)

```javascript
const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU cores:", os.cpus().length);
console.log("Free memory:", os.freemem());
console.log("Total memory:", os.totalmem());
console.log("Home directory:", os.homedir());
```

## Lesson 04 – Events Module (events)

```javascript
const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("orderPlaced", (orderId) => {
  console.log("Order received:", orderId);
});

emitter.emit("orderPlaced", 123);
```

## Lesson 05 – Buffer Module (buffer)

```javascript
const buf = Buffer.from("Hello Node.js");
console.log(buf); // prints bytes
console.log(buf.toString()); // "Hello Node.js"

const bufferAlloc = Buffer.alloc(10);
console.log(bufferAlloc);
```

## Lesson 06 – Crypto Module (crypto)

```javascript
const crypto = require("crypto");

// Hashing
const hash = crypto.createHash("sha256").update("password123").digest("hex");
console.log("SHA256 Hash:", hash);

// Generating random bytes
const random = crypto.randomBytes(16).toString("hex");
console.log("Random Token:", random);
```

## Lesson 07 – Util Module (util)

```javascript
const util = require("util");
const fs = require("fs");

const readFileAsync = util.promisify(fs.readFile);
readFileAsync("example.txt", "utf-8")
  .then(data => console.log("Promisified read:", data))
  .catch(err => console.error(err));
```

## Real Backend Example – File Processing Script

```javascript
const fs = require("fs");
const path = require("path");

const files = fs.readdirSync("./data");

files.forEach(file => {
  const fullPath = path.join("./data", file);
  const content = fs.readFileSync(fullPath, "utf-8");
  console.log(`File: ${file}, Length: ${content.length}`);
});
```

## Common Developer Mistakes

1️⃣ Forgetting async vs sync methods → blocks event loop
2️⃣ Not handling fs errors → crashes in production
3️⃣ Misusing Buffer → encoding issues
4️⃣ Ignoring security in crypto → weak encryption

## Module 17 Exercises

**Exercise 01 – File Analyzer**

* Read all .txt files in a directory
* Count number of lines per file
* Print summary

**Exercise 02 – Path Normalizer**

* Given an array of file paths, normalize and join them for cross-platform use

**Exercise 03 – Event Logger**

* Create an EventEmitter that logs events: userLogin, userLogout
* Emit 3 events and print them

**Exercise 04 – Secure Token Generator**

* Use crypto to generate 10 secure random tokens of 16 characters each

**Exercise 05 – Promisified FS**

* Use util.promisify to read multiple files asynchronously and print contents

## Interview Questions

1️⃣ Name 3 core Node.js modules you use frequently
2️⃣ Difference between fs.readFile and fs.readFileSync
3️⃣ How does EventEmitter work internally?
4️⃣ How do Buffer and String differ?
5️⃣ How would you generate a secure token in Node.js?

## Next Module

Next, we dive into HTTP fundamentals in Node.js, essential for building backend servers and APIs.

Module 18 – HTTP in Node.js