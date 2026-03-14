/**
 * Exercise 01 – Secure Counter
 */

function createSecureCounter() {
  let counter = 0; // private variable

  return {
    increment() {
      counter++;
      return counter;
    },

    decrement() {
      counter--;
      return counter;
    },

    getValue() {
      return counter;
    }
  };
}

const counter = createSecureCounter();

console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getValue());  // 1