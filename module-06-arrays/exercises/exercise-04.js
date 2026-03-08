/**
 * Exercise 04 – API Data Transformation
 *
 * Combines first and last names into full names.
 */

const users = [
  { id: 1, first: "Ali", last: "Hassan" },
  { id: 2, first: "Sara", last: "Mahmoud" }
];

// Transform to full names
const fullNames = users.map(user => `${user.first} ${user.last}`);

console.log("=== API Data Transformation ===");
console.log(fullNames);