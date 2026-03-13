/**
 * Exercise 01 – User Object Model
 *
 * Demonstrates object structure and object methods.
 */

const user = {
  id: 101,
  name: "Ali Hassan",
  email: "ali@example.com",
  role: "admin",

  getProfile() {
    return `User Profile:
ID: ${this.id}
Name: ${this.name}
Email: ${this.email}
Role: ${this.role}`;
  }
};

console.log(user.getProfile());