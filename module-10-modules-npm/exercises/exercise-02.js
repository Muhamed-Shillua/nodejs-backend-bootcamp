// logger.js
/**
 * Exercise 02 – Logger Module
 * Logs messages with timestamp
 */

function log(message) {
  const now = new Date();
  const date = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
  const time = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
  console.log(`[${date} ${time}] ${message}`);
}

module.exports = { log };