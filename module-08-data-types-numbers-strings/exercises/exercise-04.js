/**
 * Exercise 04 – Number Validator
 *
 * Validates numeric input.
 */

function isValidNumber(value) {
  return typeof value === "number" && !Number.isNaN(value);
}

// Examples
console.log(isValidNumber(42));      // true
console.log(isValidNumber("42"));    // false
console.log(isValidNumber(NaN));     // false