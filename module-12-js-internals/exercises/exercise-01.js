/**
 * Exercise 01 – Call Stack Simulation
 *
 * Demonstrates how functions are pushed and popped
 * from the JavaScript call stack.
 */

function first() {
  console.log("First function start");

  second();

  console.log("First function end");
}

function second() {
  console.log("Second function start");

  third();

  console.log("Second function end");
}

function third() {
  console.log("Third function executing");
}

first();