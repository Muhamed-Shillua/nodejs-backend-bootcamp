/**
 * Exercise 01 – Username Validator
 */

function validateUsername(username) {
  const regex = /^[a-zA-Z0-9]{4,16}$/;
  return regex.test(username);
}

// Tests
console.log(validateUsername("user123"));     // true
console.log(validateUsername("ab"));          // false
console.log(validateUsername("user_name"));   // false
console.log(validateUsername("User2026"));    // true