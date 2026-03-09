/**
 * Exercise 05 – Payment Calculator
 *
 * Avoids floating-point errors by using integer math.
 */

function calculateFinalPrice(price, taxRate, discount) {
  const priceCents = Math.round(price * 100);

  const tax = Math.round(priceCents * taxRate);
  const discountCents = Math.round(discount * 100);

  const finalCents = priceCents + tax - discountCents;

  return (finalCents / 100).toFixed(2);
}

// Example
const finalPrice = calculateFinalPrice(19.99, 0.1, 2);

console.log("Final Price: $" + finalPrice);