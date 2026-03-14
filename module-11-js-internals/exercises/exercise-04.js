/**
 * Exercise 04 – Retry Mechanism
 */

async function retry(fn, retries = 3) {
  try {
    return await fn();
  } catch (error) {
    if (retries === 0) {
      throw error;
    }

    console.log(`Retrying... attempts left: ${retries}`);
    return retry(fn, retries - 1);
  }
}

// Example async task
async function unstableTask() {
  if (Math.random() < 0.7) {
    throw new Error("Random failure");
  }
  return "Success!";
}

// Run with retry
retry(unstableTask)
  .then(console.log)
  .catch(console.error);