/**
 * Exercise 02 – Email Parser
 *
 * Splits an email into username and domain.
 */

function parseEmail(email) {
  const [username, domain] = email.split("@");

  return {
    username,
    domain
  };
}

// Example
const email = "user@example.com";

const result = parseEmail(email);

console.log("Username:", result.username);
console.log("Domain:", result.domain);