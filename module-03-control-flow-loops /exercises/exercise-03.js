/**
 * Exercise 03 – Batch Price Calculator
 * 
 * Calculates total price of products with 15% tax using a loop.
 */

const prices = [100, 50, 75];
const taxRate = 0.15;
let totalPrice = 0;

for (let price of prices) {
    let tax = price * taxRate;
    totalPrice += price + tax;
}

console.log("=== Batch Price Calculator ===");
console.log(`Total Price (including 15% tax): $${totalPrice.toFixed(2)}`);