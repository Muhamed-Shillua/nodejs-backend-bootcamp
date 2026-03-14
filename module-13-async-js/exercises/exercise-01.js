/**
 * Exercise 01 – Promise Delay
 *
 * Creates a delay using Promises.
 */

function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

// Example usage
async function testDelay() {
  console.log("Start");
  await delay(2000);
  console.log("Executed after 2 seconds");
}

testDelay();