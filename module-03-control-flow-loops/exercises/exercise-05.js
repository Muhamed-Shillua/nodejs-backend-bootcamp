/**
 * Exercise 5 – Loop Control Practice
 * 
 * Loops from 1 to 20, skips multiples of 3, stops if number > 15.
 */

console.log("=== Loop Control Practice ===");

for (let i = 1; i <= 20; i++) {
    if (i > 15) break;           // Stop loop if number > 15
    if (i % 3 === 0) continue;   // Skip multiples of 3
    console.log(i);
}
