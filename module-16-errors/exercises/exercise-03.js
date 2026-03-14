/**
 * Exercise 03 – Async Error Catching
 */

const fs = require("fs").promises;

async function readFiles(files) {
  for (const file of files) {
    try {
      const data = await fs.readFile(file, "utf8");
      console.log(`Contents of ${file}:`, data);
    } catch (err) {
      console.error(`Error reading ${file}:`, err.message);
    }
  }
}

readFiles(["file1.txt", "file2.txt", "missing.txt"]);