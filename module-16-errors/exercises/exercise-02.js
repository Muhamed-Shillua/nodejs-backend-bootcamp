/**
 * Exercise 02 – Custom Validation Error
 */

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

function validateUser(user) {
  if (!user.name || typeof user.name !== "string") {
    throw new ValidationError("Invalid name");
  }
  if (!user.age || typeof user.age !== "number" || user.age < 0) {
    throw new ValidationError("Invalid age");
  }
  return true;
}

// Tests
try {
  validateUser({ name: "Ali", age: 25 });
  console.log("User is valid");
} catch (err) {
  if (err instanceof ValidationError) {
    console.error("Validation Error:", err.message);
  }
}

try {
  validateUser({ name: "", age: -5 });
} catch (err) {
  console.error(err.name + ":", err.message);
}