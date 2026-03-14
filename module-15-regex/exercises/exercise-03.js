/**
 * Exercise 03 – Log Analyzer
 */

function analyzeLogs(logs) {
  const result = {
    INFO: 0,
    ERROR: 0,
    WARNING: 0
  };

  const regex = /\[(INFO|ERROR|WARNING)\]/;

  for (const line of logs) {
    const match = line.match(regex);

    if (match) {
      result[match[1]]++;
    }
  }

  return result;
}

const logs = [
  "[INFO] Server started",
  "[ERROR] DB connection failed",
  "[INFO] User logged in",
  "[WARNING] High memory usage"
];

console.log(analyzeLogs(logs));