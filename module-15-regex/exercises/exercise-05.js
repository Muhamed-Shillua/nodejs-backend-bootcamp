/**
 * Exercise 05 – Extract Numbers
 */

function extractNumbers(text) {
    const regex = /\d+/g;
    return text.match(regex) || [];
}

const text = "Order #123 cost 45 dollars";

console.log(extractNumbers(text));