/**
 * Exercise 01 – Order Processing System
 *
 * Demonstrates common backend data processing operations:
 * - Extracting fields from objects
 * - Aggregating totals
 * - Transforming data
 */

const orders = [
  { id: 1, total: 100 },
  { id: 2, total: 250 },
  { id: 3, total: 50 }
];

// Extract totals
const totals = orders.map(order => order.total);

// Calculate total revenue
const revenue = totals.reduce((sum, value) => sum + value, 0);

// Add 10% tax to each order
const ordersWithTax = orders.map(order => ({
  ...order,
  totalWithTax: order.total * 1.10
}));

console.log("=== Order Processing ===");
console.log("Totals:", totals);
console.log("Revenue:", revenue);
console.log("Orders with Tax:", ordersWithTax);