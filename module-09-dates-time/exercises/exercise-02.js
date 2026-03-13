/**
 * Exercise 02 – Expiry Calculator
 *
 * Calculates a future expiration time.
 */

function expiresIn(minutes) {
  const now = new Date();
  const future = new Date(now.getTime() + minutes * 60000);
  return future;
}

// Example
console.log("Expires At:", expiresIn(30));