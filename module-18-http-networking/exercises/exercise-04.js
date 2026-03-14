/**
 * Exercise 04 – Request Logger
 */

const http4 = require("http");

const server4 = http4.createServer((req, res) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.url}`);
  console.log("Headers:", req.headers);

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Request logged");
});

server4.listen(3003, () => console.log("Server running on port 3003"));