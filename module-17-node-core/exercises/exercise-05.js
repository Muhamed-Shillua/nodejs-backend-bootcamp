/**
 * Exercise 05 – Promisified FS
 */

const fs = require("fs");
const util = require("util");

const readFile = util.promisify(fs.readFile);

async function readMultipleFiles(files) {
    for (const file of files) {
        try {
            const content = await readFile(file, "utf8");
            console.log(`${file}:`);
            console.log(content);
        } catch (err) {
            console.error(`Error reading ${file}:`, err.message);
        }
    }
}

// Example usage
readMultipleFiles(["file1.txt", "file2.txt"]);