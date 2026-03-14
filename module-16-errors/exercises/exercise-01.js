/**
 * Exercise 01 – Safe Division
 */

function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (err) {
    console.error("Error:", err.message);
    return null;
  }
}

// Tests
console.log(divide(10, 2)); // 5
console.log(divide(5, 0));  // Error: Cannot divide by zero → returns null