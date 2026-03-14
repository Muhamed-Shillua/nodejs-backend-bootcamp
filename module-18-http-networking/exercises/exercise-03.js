/**
 * Exercise 03 – POST JSON Handler
 */

const http3 = require("http");

const server3 = http3.createServer((req, res) => {
    if (req.method === "POST" && req.url === "/data") {
        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            try {
                const data = JSON.parse(body);
                res.writeHead(200, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ received: data }));
            } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json" });
                res.end(JSON.stringify({ error: "Invalid JSON" }));
            }
        });
    } else {
        res.writeHead(404);
        res.end("Not Found");
    }
});

server3.listen(3002, () => console.log("Server running on port 3002"));