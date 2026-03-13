/**
 * Exercise 02 – Access Control Logic
 * 
 * Simulates authentication and access control.
 */

// User authentication variables
let isLoggedIn = true;
let isAdmin = false;
let subscriptionActive = true;

// Access logic
let accessAllowed = isLoggedIn && (isAdmin || subscriptionActive);

// Output
console.log(`Access Allowed: ${accessAllowed ? "Granted" : "Denied"}`)
