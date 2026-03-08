/**
 * Exercise 05 – Log Analyzer
 *
 * Simulates analyzing server logs in backend monitoring systems.
 */

const logs = [
  { status: 200 },
  { status: 500 },
  { status: 200 },
  { status: 404 }
];

// Count success responses (status 200)
const successCount = logs.filter(log => log.status === 200).length;

// Count errors (status >= 400)
const errorCount = logs.filter(log => log.status >= 400).length;

console.log("=== Log Analyzer ===");
console.log("Success Responses:", successCount);
console.log("Error Responses:", errorCount);