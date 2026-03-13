# Module 09 – Dates & Time

## Module Introduction

Time handling is one of the hardest problems in backend engineering.

Almost every production backend system deals with time:

* authentication token expiration
* database timestamps
* logs
* scheduled jobs
* analytics events
* payments & subscriptions

In JavaScript (running on Node.js and powered by the V8 engine), time is handled through the **Date API**.

However, time systems include many complex topics:

* timestamps
* time zones
* daylight saving time
* formatting
* localization
* scheduling

Understanding how JavaScript handles time is critical for backend developers, because mistakes can cause:

* expired tokens not expiring
* incorrect payment billing
* broken analytics
* wrong logs

---

# Lesson 01 – The Date Object

JavaScript provides the `Date` object to work with time.

Create current date:

```javascript
const now = new Date();

console.log(now);
```

Example output:

```
2026-03-14T22:00:00.000Z
```

This represents the current moment in time.

---

# Lesson 02 – Timestamps

Internally, JavaScript stores time as:

**milliseconds since January 1, 1970 (UTC)**

This moment is called the **Unix Epoch**.

Example:

```javascript
const timestamp = Date.now();

console.log(timestamp);
```

Example output:

```
1741980000000
```

That number represents milliseconds since 1970.

### Converting Timestamp to Date

```javascript
const date = new Date(1741980000000);

console.log(date);
```

---

# Lesson 03 – Creating Dates

You can create a Date in multiple ways.

### Current date

```javascript
const now = new Date();
```

### From timestamp

```javascript
const date = new Date(1700000000000);
```

### From string

```javascript
const date = new Date("2025-01-01");
```

### From components

```javascript
const date = new Date(2025, 0, 1);
```

Note:

Month starts from **0**.

Example:

```
0 → January
1 → February
```

---

# Lesson 04 – Reading Date Values

JavaScript provides many getters.

```javascript
const now = new Date();

console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getHours());
console.log(now.getMinutes());
```

### Important getters

| Method        | Meaning      |
| ------------- | ------------ |
| getFullYear() | year         |
| getMonth()    | month (0–11) |
| getDate()     | day          |
| getHours()    | hours        |
| getMinutes()  | minutes      |
| getSeconds()  | seconds      |

---

# Lesson 05 – Setting Date Values

You can modify dates.

```javascript
const date = new Date();

date.setFullYear(2030);

console.log(date);
```

Other setters:

* `setMonth()`
* `setDate()`
* `setHours()`
* `setMinutes()`

---

# Lesson 06 – Date Formatting

Dates can be converted to readable strings.

```javascript
const now = new Date();

console.log(now.toDateString());
```

Example output:

```
Sat Mar 14 2026
```

### ISO format

Most APIs use ISO format.

```javascript
console.log(new Date().toISOString());
```

Example:

```
2026-03-14T22:10:00.000Z
```

This is the standard backend format.

---

# Lesson 07 – Time Zones

Time zones are extremely important.

Example:

```
UTC
UTC+2
UTC-5
```

Your server may run in:

```
UTC
```

But users may be in different time zones.

Example problem:

User schedules meeting at 9 AM
Server stores wrong timezone
Meeting appears at wrong time

### Backend Best Practice

**Always store time in UTC.**

Convert to local time in the frontend.

---

# Lesson 08 – Date Arithmetic

You can calculate time differences.

```javascript
const now = Date.now();

const oneHour = 60 * 60 * 1000;

const future = now + oneHour;

console.log(new Date(future));
```

### Example – Token Expiration

Authentication tokens often expire after a fixed time.

```javascript
function generateExpiry(hours) {

  const now = Date.now();

  const expiry = now + hours * 60 * 60 * 1000;

  return new Date(expiry);

}

console.log(generateExpiry(2));
```

Used in systems like:

* login sessions
* API authentication
* reset password links

---

# Lesson 09 – Comparing Dates

Example:

```javascript
const now = new Date();
const expiry = new Date("2026-03-20");

if (now > expiry) {
  console.log("expired");
}
```

Dates are compared using timestamps internally.

---

# Lesson 10 – Measuring Execution Time

```javascript
const start = Date.now();

for (let i = 0; i < 1000000; i++) {}

const end = Date.now();

console.log(end - start, "ms");
```

Useful for:

* performance testing
* benchmarking

---

# Real Backend Examples

Dates are used everywhere in backend systems.

### Database timestamps

* `createdAt`
* `updatedAt`
* `deletedAt`

### Logging systems

```
2026-03-14 22:10:33 ERROR: database connection failed
```

### Authentication

* `tokenIssuedAt`
* `tokenExpiresAt`

### Scheduling jobs

* send email tomorrow
* run cron job every hour

---

# Common Date Bugs

### Bug 1 – Month indexing

```javascript
new Date(2025, 1, 1)
```

This is **February 1**, because months start from **0**.

### Bug 2 – Timezone confusion

Using local time instead of UTC.

### Bug 3 – String parsing

Different environments parse date strings differently.

Best format:

```
ISO 8601
```

Example:

```
2026-03-14T22:10:00Z
```

---

# Module 09 Exercises

## Exercise 01 – Current Timestamp

Create function:

```javascript
getTimestamp()
```

Return the **current timestamp**.

---

## Exercise 02 – Expiry Calculator

Create function:

```javascript
expiresIn(minutes)
```

Return a **future date**.

---

## Exercise 03 – Age Calculator

Input:

```
birthdate
```

Output:

```
age in years
```

---

## Exercise 04 – Days Between Dates

Create function:

```javascript
daysBetween(date1, date2)
```

Return the difference in days.

---

## Exercise 05 – Log Formatter

Input:

```
message
```

Output format:

```
[2026-03-14 22:30:00] message
```

---

# Interview Questions

1. What is a **Unix Timestamp**?

2. What does `Date.now()` return?

3. Why should backend systems store time in **UTC**?

4. Why are time zones difficult in distributed systems?

---

# Next Module

## Module 10 – Timers & Event Loop

You will learn:

* `setTimeout`
* `setInterval`
* async timing
* event loop scheduling
* how Node.js handles timers internally
