/**
 * Exercise 04 – Secure Token Generator
 */

const crypto = require("crypto");

function generateTokens(count, length) {
  const tokens = [];
  for (let i = 0; i < count; i++) {
    tokens.push(crypto.randomBytes(length).toString("hex").slice(0, length));
  }
  return tokens;
}

console.log(generateTokens(10, 16));