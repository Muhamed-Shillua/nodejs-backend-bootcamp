/**
 * Exercise 05 – Admin Inheritance
 *
 * Demonstrates class inheritance.
 */

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  getInfo() {
    return `${this.name} (${this.email})`;
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }

  banUser(user) {
    console.log(`Admin ${this.name} banned user ${user.name}`);
  }
}

// Example
const admin = new Admin("Sara", "admin@example.com");
const user = new User("Ali", "ali@example.com");

admin.banUser(user);