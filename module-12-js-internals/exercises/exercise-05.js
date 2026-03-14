/**
 * Exercise 05 – Async File Reader
 */

const fs = require("fs");

console.log("Start reading files");

fs.readFile("file1.txt", "utf8", (err, data) => {
  console.log("File1:", data);
});

fs.readFile("file2.txt", "utf8", (err, data) => {
  console.log("File2:", data);
});

fs.readFile("file3.txt", "utf8", (err, data) => {
  console.log("File3:", data);
});

console.log("All read requests sent");