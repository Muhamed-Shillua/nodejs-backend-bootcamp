/**
 * Exercise 02 – Nested Object Traversal
 * 
 * Recursively prints all category names in a nested object.
 */

const categories = {
  name: "Root",
  children: [
    { name: "A", children: [] },
    { name: "B", children: [{ name: "B1", children: [] }] }
  ]
};

function printCategories(node) {
    console.log(node.name);
    if (node.children && node.children.length > 0) {
        for (let child of node.children) {
            printCategories(child); // Recursive call
        }
    }
}

console.log("=== Nested Object Traversal ===");
printCategories(categories);