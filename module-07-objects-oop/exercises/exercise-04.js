/**
 * Exercise 04 – Class Based System
 *
 * Models a backend order entity.
 */

class Order {
  constructor(id, items) {
    this.id = id;
    this.items = items;
    this.total = 0;
  }

  calculateTotal() {
    this.total = this.items.reduce((sum, item) => sum + item.price, 0);
    return this.total;
  }
}

// Example usage
const order = new Order(1, [
  { name: "Laptop", price: 1200 },
  { name: "Mouse", price: 25 }
]);

console.log("Order Total:", order.calculateTotal());