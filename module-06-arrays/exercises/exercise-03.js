/**
 * Exercise 03 – Inventory System
 *
 * Simulates backend product processing.
 */

const products = [
  { name: "Laptop", price: 1200 },
  { name: "Phone", price: 800 },
  { name: "Mouse", price: 25 }
];

// Expensive products
const expensiveProducts = products.filter(product => product.price > 500);

// Product names
const productNames = products.map(product => product.name);

// Total inventory value
const totalValue = products.reduce((sum, product) => sum + product.price, 0);

console.log("=== Inventory System ===");
console.log("Expensive Products:", expensiveProducts);
console.log("Product Names:", productNames);
console.log("Total Inventory Value:", totalValue);