/**
 * Exercise 01 – Sum of Numbers
 * 
 * Recursively calculates the sum from 1 to N.
 */

function sumToN(n) {
    if (n <= 0) return 0;  // Base case
    return n + sumToN(n - 1); // Recursive case
}

let N = 10;
console.log("=== Sum of Numbers ===");
console.log(`Sum from 1 to ${N} = ${sumToN(N)}`);