// lodashTest.js
const _ = require("lodash");

/**
 * Shuffle, remove duplicates, sort numbers
 */

const numbers = [5, 2, 8, 2, 3, 5, 1];

// Shuffle array
const shuffled = _.shuffle(numbers);

// Remove duplicates
const unique = _.uniq(numbers);

// Sort numbers
const sorted = _.sortBy(numbers);

console.log("Original:", numbers);
console.log("Shuffled:", shuffled);
console.log("Unique:", unique);
console.log("Sorted:", sorted);