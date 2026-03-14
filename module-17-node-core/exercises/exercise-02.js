/**
 * Exercise 02 – Path Normalizer
 */

const path = require("path");

function normalizePaths(pathsArray) {
  return pathsArray.map(p => path.normalize(p)).map(p => path.join(__dirname, p));
}

// Example usage
const paths = ["folder/../file.txt", "folder\\sub\\..\\file2.txt"];
console.log(normalizePaths(paths));