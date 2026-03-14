/**
 * Exercise 01 – File Analyzer
 */

const fs = require("fs");
const path = require("path");

async function analyzeFiles(dir) {
  const files = fs.readdirSync(dir).filter(f => f.endsWith(".txt"));

  for (const file of files) {
    const content = fs.readFileSync(path.join(dir, file), "utf8");
    const lines = content.split("\n").length;
    console.log(`${file}: ${lines} lines`);
  }
}

// Example usage
analyzeFiles("./texts");