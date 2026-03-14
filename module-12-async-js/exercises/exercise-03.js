/**
 * Exercise 03 – Parallel Requests
 */

function fakeApi(name, delay) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Response from ${name}`);
    }, delay);
  });
}

async function runParallel() {
  const results = await Promise.all([
    fakeApi("API 1", 1000),
    fakeApi("API 2", 1500),
    fakeApi("API 3", 500)
  ]);

  console.log(results);
}

runParallel();