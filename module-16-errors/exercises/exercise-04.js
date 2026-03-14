/**
 * Exercise 04 – Error Propagation
 */

function inner() {
  throw new Error("Something went wrong in inner function");
}

function middle() {
  inner();
}

function outer() {
  try {
    middle();
  } catch (err) {
    console.error("Caught an error:", err.message);
    console.error("Stack trace:\n", err.stack);
  }
}

outer();