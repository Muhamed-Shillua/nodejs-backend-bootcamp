/**
 * Exercise 02 – Memoization
 */

function memoize(fn) {
  const cache = {};

  return function (arg) {
    if (cache[arg]) {
      console.log("Returned from cache");
      return cache[arg];
    }

    console.log("Computed");
    const result = fn(arg);
    cache[arg] = result;

    return result;
  };
}

function slowFunction(n) {
  return n * n;
}

const memoized = memoize(slowFunction);

console.log(memoized(5));
console.log(memoized(5));