/**
 * Exercise 01- Order Price Calculator
 * 
 * Calculates the final price of a product including tax and discount.
 */

// Input variables
let productPrice = 150;
let taxRate = 0.15;       
let discountRate = 0.15;  

// Calculations 
let taxAmount = productPrice * taxRate ;
let discountAmount= productPrice * discountRate;
let finalPrice = productPrice + taxAmount - discountAmount;

// Output - Formatted summry
console.log("=== Order Summry ===");
console.log(`Product Price: $${productPrice.toFixed(2)}`);
console.log(`Tax (${(taxRate*100).toFixed(0)}%): $${taxAmount.toFixed(2)}`);
console.log(`Discount (${(discountRate*100).toFixed(0)}%): $${discountAmount.toFixed(2)}`);
console.log(`Final Price: $${finalPrice.toFixed(2)}`);
