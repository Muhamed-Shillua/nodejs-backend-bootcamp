/**
 * Exercise 02 – Async File Loader
 */

const fs = require("fs").promises;

async function loadFiles() {
  try {
    const file1 = await fs.readFile("file1.txt", "utf8");
    console.log("File1:", file1);

    const file2 = await fs.readFile("file2.txt", "utf8");
    console.log("File2:", file2);

    const file3 = await fs.readFile("file3.txt", "utf8");
    console.log("File3:", file3);

  } catch (error) {
    console.error("Error reading files:", error);
  }
}

loadFiles();