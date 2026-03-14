/**
 * Exercise 02 – Query Echo
 */

const http2 = require("http");
const url = require("url");

const server2 = http2.createServer((req, res) => {
  const parsed = url.parse(req.url, true); // true → parse query string
  if (parsed.pathname === "/echo") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(parsed.query));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
});

server2.listen(3001, () => console.log("Server running on port 3001"));