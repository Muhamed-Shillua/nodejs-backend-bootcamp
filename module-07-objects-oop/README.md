# Module 07 – Objects & Object-Oriented Programming (OOP)

## Module Introduction

Objects are the core data structure of JavaScript.

In real backend systems built with Node.js, almost everything is modeled using objects:

Examples:

* Users
* Orders
* Products
* Database records
* API responses
* Configuration objects

Example API response:

```javascript
{
  "id": 1,
  "name": "Ali",
  "email": "ali@example.com",
  "isAdmin": true
}
```

This is a JavaScript object.

Objects allow us to:

* group related data
* attach behavior to data
* model real-world systems

Object-Oriented Programming (OOP) builds on this by introducing:

* encapsulation
* inheritance
* abstraction
* polymorphism

These principles are used to build large scalable backend architectures.

In this module you will learn:

* Object fundamentals
* Property and method handling
* Object cloning and merging
* `this` keyword
* Prototypes and prototype chain
* ES6 classes
* OOP patterns used in Node.js

---

## Lesson 01 – Creating Objects

Objects store key-value pairs.

Example:

```javascript
// User object
const user = {
  name: "Ali",
  age: 25,
  isAdmin: true
};

console.log(user.name);
```

Output:

```
Ali
```

### Accessing Properties

Two ways:

Dot notation

```javascript
user.name
```

Bracket notation

```javascript
user["name"]
```

Bracket notation is useful when the property name is dynamic.

Example:

```javascript
const field = "email";

const user = {
  email: "ali@example.com"
};

console.log(user[field]);
```

---

## Lesson 02 – Adding & Modifying Properties

Objects are mutable.

Add property:

```javascript
const user = {
  name: "Ali"
};

user.age = 25;
```

Modify property:

```javascript
user.age = 30;
```

Delete property:

```javascript
delete user.age;
```

---

## Lesson 03 – Object Methods

Objects can contain functions called methods.

```javascript
const user = {
  name: "Ali",

  greet() {
    console.log("Hello " + this.name);
  }
};

user.greet();
```

Output:

```
Hello Ali
```

The `this` keyword refers to the object that owns the method.

---

## Lesson 04 – The this Keyword

`this` behaves differently depending on context.

Inside object methods:

```javascript
const server = {
  port: 3000,

  start() {
    console.log("Server running on port " + this.port);
  }
};

server.start();
```

Output:

```
Server running on port 3000
```

Important rule:

Arrow functions **DO NOT bind their own `this`**.

Bad example:

```javascript
const user = {
  name: "Ali",

  greet: () => {
    console.log(this.name);
  }
};
```

This prints:

```
undefined
```

Because arrow functions inherit `this` from outer scope.

---

## Lesson 05 – Object Iteration

We often need to iterate through object properties.

Example:

```javascript
const server = {
  host: "localhost",
  port: 3000
};

for (const key in server) {
  console.log(key, server[key]);
}
```

Output:

```
host localhost
port 3000
```

Alternative methods:

* `Object.keys(obj)`
* `Object.values(obj)`
* `Object.entries(obj)`

Example:

```javascript
Object.entries(server).forEach(([key, value]) => {
  console.log(key, value);
});
```

---

## Lesson 06 – Object Copying & Merging

### Shallow Copy

Using spread operator:

```javascript
const user = {
  name: "Ali",
  age: 25
};

const copy = { ...user };
```

### Object Merge

```javascript
const defaults = {
  host: "localhost",
  port: 3000
};

const config = {
  port: 5000
};

const finalConfig = {
  ...defaults,
  ...config
};
```

Result:

```
{ host: "localhost", port: 5000 }
```

Used heavily in backend configuration systems.

---

## Lesson 07 – Prototypes

JavaScript uses prototype-based inheritance.

Every object has an internal link to another object called the prototype.

Example diagram:

```
user object
     ↓
Object prototype
     ↓
null
```

If a property is not found in the object:

JavaScript searches the prototype chain.

Example:

```javascript
const user = {
  name: "Ali"
};

console.log(user.toString());
```

`toString()` comes from:

```
Object.prototype
```

---

## Lesson 08 – ES6 Classes

Classes provide syntactic sugar over prototypes.

```javascript
class User {

  constructor(name, role) {
    this.name = name;
    this.role = role;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }

}

const user1 = new User("Ali", "Admin");

user1.greet();
```

Output:

```
Hello Ali
```

---

## Lesson 09 – Inheritance

Classes can extend other classes.

```javascript
class User {

  constructor(name) {
    this.name = name;
  }

}

class Admin extends User {

  deleteUser() {
    console.log("User deleted");
  }

}

const admin = new Admin("Ali");

admin.deleteUser();
```

---

## Real Backend Example

Modeling a service.

```javascript
class AuthService {

  login(user) {
    return `${user.name} logged in`;
  }

  logout(user) {
    return `${user.name} logged out`;
  }

}

const auth = new AuthService();

console.log(auth.login({ name: "Ali" }));
```

Services like this are common in Node.js backend architecture.

---

## Common Developer Mistakes

### Mistake 1

Using arrow functions as object methods.

### Mistake 2

Accidentally mutating shared objects.

### Mistake 3

Deep copy confusion.

Spread operator only does **shallow copy**.

---

## Module 07 Exercises (Hard)

### Exercise 01 – User Object Model

Create a user object with:

* id
* name
* email
* role

Add method:

`getProfile()`

Return formatted string.

---

### Exercise 02 – Configuration Merger

Create two config objects:

* `defaultConfig`
* `envConfig`

Merge them properly.

---

### Exercise 03 – Inventory Object

Create object representing product inventory.

Add methods:

* `addProduct()`
* `removeProduct()`
* `listProducts()`

---

### Exercise 04 – Class Based System

Create class:

`Order`

Properties:

* id
* items
* total

Method:

`calculateTotal()`

---

### Exercise 05 – Admin Inheritance

Create:

* `User` class
* `Admin` class

Admin should inherit `User` and have method:

`banUser()`

---

## Interview Questions (Objects & OOP)

1. What is the prototype chain in JavaScript?

2. Difference between:

* Object literal
* Class
* Constructor function

3. What is the purpose of `this`?

4. Why are arrow functions dangerous in object methods?

---

## Next Module

Next we study **Data Types, Numbers & Strings**, where we explore:

* type coercion
* string manipulation
* number precision
* parsing
* formatting

### Module 08 – Data Types, Numbers & Strings

This module will explain many hidden JavaScript behaviors that cause production bugs.