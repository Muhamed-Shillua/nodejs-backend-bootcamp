/**
 * Exercise 03 – CSV Processor
 *
 * Parses CSV data and transforms names.
 */

const csv = "Ali,Sara,Omar,Hassan";

// Convert to array
const names = csv.split(",");

// Print uppercase
names.forEach(name => {
  console.log(name.toUpperCase());
});