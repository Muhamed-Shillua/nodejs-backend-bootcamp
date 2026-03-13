/**
 * Exercise 03 – Inventory Object
 *
 * Simulates basic inventory management.
 */

const inventory = {
  products: [],

  addProduct(product) {
    this.products.push(product);
  },

  removeProduct(name) {
    this.products = this.products.filter(p => p.name !== name);
  },

  listProducts() {
    return this.products;
  }
};

// Usage
inventory.addProduct({ name: "Laptop", price: 1200 });
inventory.addProduct({ name: "Mouse", price: 25 });

inventory.removeProduct("Mouse");

console.log("Inventory:", inventory.listProducts());