/**
 * Exercise 02 – Active User List
 *
 * Filters active users and extracts their names.
 */

const users = [
  { name: "Ali", active: true },
  { name: "Sara", active: false },
  { name: "Omar", active: true }
];

// Filter active users
const activeUsers = users.filter(user => user.active);

// Extract names
const activeNames = activeUsers.map(user => user.name);

console.log("=== Active Users ===");
console.log(activeNames);