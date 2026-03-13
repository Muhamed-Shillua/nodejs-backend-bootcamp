/**
 * Exercise 05 – Log Formatter
 *
 * Formats a log entry with a timestamp.
 */

function formatLog(message) {
  const now = new Date();

  const date =
    now.getFullYear() +
    "-" +
    String(now.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(now.getDate()).padStart(2, "0");

  const time =
    String(now.getHours()).padStart(2, "0") +
    ":" +
    String(now.getMinutes()).padStart(2, "0") +
    ":" +
    String(now.getSeconds()).padStart(2, "0");

  return `[${date} ${time}] ${message}`;
}

// Example
console.log(formatLog("Server started"));