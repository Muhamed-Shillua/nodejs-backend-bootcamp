/**
 * Exercise 04 – URL Validator
 */

function validateURL(url) {
  const regex = /^https?:\/\/[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(url);
}

// Tests
console.log(validateURL("https://example.com")); // true
console.log(validateURL("http://site.org"));     // true
console.log(validateURL("ftp://server.com"));    // false
console.log(validateURL("invalid-url"));         // false