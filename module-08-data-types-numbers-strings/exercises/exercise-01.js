/**
 * Exercise 01 – Price Formatter
 *
 * Formats a numeric price into currency format.
 */

function formatPrice(price) {
  return `$${price.toFixed(2)}`;
}

// Example
const price = 19.987;

console.log("Formatted Price:", formatPrice(price));