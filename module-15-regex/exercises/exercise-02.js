/**
 * Exercise 02 – Phone Number Parser
 */

function extractPhoneNumbers(text) {
  const regex = /\b01\d{9}\b/g;
  return text.match(regex) || [];
}

const text = "Call me at 01012345678 or 01198765432";

console.log(extractPhoneNumbers(text));