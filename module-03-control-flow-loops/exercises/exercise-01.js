/**
 * Exercise 01 – User Access Simulation
 * 
 * Determines user access level using if / else if / else.
 */

let isLoggedIn = true;
let isAdmin = false;
let subscriptionActive = true;

console.log("=== User Access Simulation ===");

if (!isLoggedIn) {
    console.log("User is not logged in. Access denied ❌");
} else if (isAdmin) {
    console.log("User is an Admin. Full access granted ✅");
} else if (subscriptionActive) {
    console.log("User has an active subscription. Limited access granted ⚡");
} else {
    console.log("User logged in but no subscription. Access denied ❌");
}
