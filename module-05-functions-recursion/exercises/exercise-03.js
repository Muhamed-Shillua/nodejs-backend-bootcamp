/**
 * Exercise 03 – Factorial & Fibonacci
 * 
 * Factorial: n! = n * (n-1)!
 * Fibonacci: Fib(n) = Fib(n-1) + Fib(n-2)
 */

// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log("=== Factorial & Fibonacci ===");
console.log(`Factorial 5! = ${factorial(5)}`);
console.log(`Fibonacci 7th number = ${fibonacci(7)}`);

// Performance discussion:
// Factorial recursion is linear (O(n)) → safe for large n.
// Fibonacci recursion is exponential (O(2^n)) → quickly grows stack, inefficient.