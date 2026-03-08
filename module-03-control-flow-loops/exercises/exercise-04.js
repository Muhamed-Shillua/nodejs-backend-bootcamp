/**
 * Exercise 04 – Nested Inventory Report
 * 
 * Prints all products and their variants using nested loops.
 */

const store = [
  { name: "Laptop", variants: ["16GB", "32GB"] },
  { name: "Phone", variants: ["128GB", "256GB"] }
];

console.log("=== Nested Inventory Report ===");

for (let product of store) {
    console.log(`Product: ${product.name}`);
    for (let variant of product.variants) {
        console.log(`  Variant: ${variant}`);
    }
}
