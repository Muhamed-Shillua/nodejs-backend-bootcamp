/**
 * Exercise 04 – Rate Limiter
 */

function createRateLimiter(limit, interval) {
  let calls = 0;

  setInterval(() => {
    calls = 0;
  }, interval);

  return function () {
    if (calls < limit) {
      calls++;
      console.log("Allowed");
    } else {
      console.log("Rate limit exceeded");
    }
  };
}

const limiter = createRateLimiter(3, 1000);

limiter();
limiter();
limiter();
limiter(); // blocked