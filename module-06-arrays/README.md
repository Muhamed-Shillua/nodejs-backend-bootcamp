# Module 06 – Arrays

## Module Introduction

Arrays are one of the most important data structures in JavaScript.

In real backend systems built with Node.js, arrays are everywhere:

* Database query results
* Lists of users
* Collections of tasks
* API responses
* Log batches
* Job queues

Example backend response:

```javascript
[
  { "id": 1, "name": "Ali" },
  { "id": 2, "name": "Sara" },
  { "id": 3, "name": "Omar" }
]
```

Almost every backend service must iterate, filter, transform, and aggregate arrays.

Understanding arrays deeply helps you:

* Write efficient data processing code
* Avoid performance issues
* Use modern functional programming techniques

In this module we will cover:

* Array fundamentals
* Iteration techniques
* Important built-in array methods
* Functional patterns used in production systems
* Performance considerations

---

## Lesson 01 – Creating Arrays

Arrays store ordered collections of values.

Example:

```javascript
// Array of user names
const users = ["Ali", "Sara", "Omar"];
```

Arrays can store mixed data types.

```javascript
const mixed = [
  "Ali",
  25,
  true,
  { role: "admin" }
];
```

However, in production systems we usually maintain consistent structures.

Example backend data:

```javascript
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" },
  { id: 3, name: "Omar" }
];
```

### Accessing Array Elements

Arrays are zero-indexed.

```javascript
const users = ["Ali", "Sara", "Omar"];

console.log(users[0]); // Ali
console.log(users[1]); // Sara
```

Access last element:

```javascript
const lastUser = users[users.length - 1];
```

### Modifying Arrays

Add elements:

```javascript
users.push("Ahmed"); // add to end
```

Remove elements:

```javascript
users.pop(); // remove last
```

Add to beginning:

```javascript
users.unshift("Admin");
```

Remove from beginning:

```javascript
users.shift();
```

---

## Lesson 02 – Looping Through Arrays

### Classic for Loop

```javascript
const users = ["Ali", "Sara", "Omar"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}
```

Benefits:

* Full control
* Fast performance
* Often used in performance-critical systems

### for...of Loop

Cleaner syntax.

```javascript
for (const user of users) {
  console.log(user);
}
```

Recommended for readability.

### forEach

Executes a function for every element.

```javascript
users.forEach(function(user) {
  console.log(user);
});
```

Arrow function version:

```javascript
users.forEach(user => console.log(user));
```

---

## Lesson 03 – map()

`map()` transforms arrays.

Example:

```javascript
const prices = [100, 200, 300];

const withTax = prices.map(price => price * 1.14);

console.log(withTax);
```

Output:

```
[114, 228, 342]
```

Backend example:

```javascript
const users = [
  { id: 1, name: "Ali" },
  { id: 2, name: "Sara" }
];

const usernames = users.map(user => user.name);
```

Result:

```
["Ali", "Sara"]
```

---

## Lesson 04 – filter()

Used to select elements based on conditions.

Example:

```javascript
const numbers = [10, 25, 40, 5];

const bigNumbers = numbers.filter(n => n > 20);

console.log(bigNumbers);
```

Output:

```
[25, 40]
```

Backend example:

```javascript
const users = [
  { name: "Ali", isActive: true },
  { name: "Sara", isActive: false }
];

const activeUsers = users.filter(user => user.isActive);
```

---

## Lesson 05 – reduce()

One of the most powerful array methods.

Used to aggregate values.

Example:

```javascript
const prices = [100, 200, 300];

const total = prices.reduce((sum, price) => {
  return sum + price;
}, 0);

console.log(total);
```

Output:

```
600
```

Backend example:

```javascript
const orders = [
  { total: 100 },
  { total: 250 },
  { total: 50 }
];

const revenue = orders.reduce((sum, order) => sum + order.total, 0);
```

---

## Lesson 06 – Chaining Array Methods

Professional JavaScript developers combine methods.

Example:

```javascript
const users = [
  { name: "Ali", age: 20 },
  { name: "Sara", age: 30 },
  { name: "Omar", age: 17 }
];

const adults = users
  .filter(user => user.age >= 18)
  .map(user => user.name);

console.log(adults);
```

Result:

```
["Ali", "Sara"]
```

### Real Backend Scenario

Processing API data.

```javascript
const orders = [
  { user: "Ali", total: 100 },
  { user: "Sara", total: 300 },
  { user: "Ali", total: 50 }
];

const totalRevenue = orders.reduce((sum, order) => sum + order.total, 0);

console.log(totalRevenue);
```

Output:

```
450
```

---

## Performance Considerations

For extremely large datasets:

* `for` loop → fastest
* `map` / `filter` → cleaner but slightly slower

In real backend systems:

Database filtering > JavaScript filtering

Example:

Better:

```sql
SELECT * FROM users WHERE active = true
```

Instead of fetching all users then filtering in JavaScript.

---

## Common Developer Mistakes

### Mistake 1

Mutating arrays unintentionally.

```javascript
const arr = [1,2,3];
arr.push(4);
```

### Mistake 2

Using `map()` when not returning a value.

Wrong:

```javascript
users.map(user => console.log(user));
```

Correct:

```javascript
users.forEach(user => console.log(user));
```

### Mistake 3

Forgetting `return` inside `reduce()`.

---

## Module 06 Exercises

### Exercise 01 – Order Processing System

Given:

```javascript
const orders = [
  { id: 1, total: 100 },
  { id: 2, total: 250 },
  { id: 3, total: 50 }
];
```

Tasks:

* Extract totals
* Calculate revenue
* Add 10% tax to each order

### Exercise 02 – Active User List

Given:

```javascript
const users = [
  { name: "Ali", active: true },
  { name: "Sara", active: false },
  { name: "Omar", active: true }
];
```

Return names of active users.

### Exercise 03 – Inventory System

Given:

```javascript
const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Mouse", price: 25 }
];
```

Tasks:

* Find expensive products (>500)
* Return only product names
* Calculate total value

### Exercise 04 – API Data Transformation

Convert this API data:

```javascript
const users = [
  { id: 1, first: "Ali", last: "Hassan" },
  { id: 2, first: "Sara", last: "Mahmoud" }
];
```

Into:

```
["Ali Hassan", "Sara Mahmoud"]
```

### Exercise 05 – Log Analyzer

Given server logs:

```javascript
const logs = [
  { status: 200 },
  { status: 500 },
  { status: 200 },
  { status: 404 }
];
```

Tasks:

* Count number of errors
* Count number of successes

---

## Interview Questions (Arrays)

1. Difference between `map`, `filter`, and `reduce`.
2. When should you prefer `for` loops over array methods?
3. What happens if `reduce()` has no initial value?
4. How do you get the last element of an array?

---

## Next Module

Next we move to **Objects & Object-Oriented Programming**, which is the most important concept in JavaScript backend development.

### Module 07 – Objects & Object-Oriented Programming

Topics include:

* Object fundamentals
* Property access
* Methods
* Prototypes
* Classes
* Encapsulation
* Real backend modeling (users, orders, services)

This module will unlock how large JavaScript applications are structured.