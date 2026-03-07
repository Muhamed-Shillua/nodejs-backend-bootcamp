/**
 * Exercise 03 – Type Analyzer
 * 
 * Prints the data type of several variables.
 */

let username = "JohnDoe";
let age = 30;
let isAdmin = false;
let user = { id: 101, email: "john@example.com" };

// Output
console.log("=== Type Analyzer ===");
console.log(`username → ${typeof username}`); // string
console.log(`age → ${typeof age}`);           // number
console.log(`isAdmin → ${typeof isAdmin}`);   // boolean
console.log(`user → ${typeof user}`);         // object
