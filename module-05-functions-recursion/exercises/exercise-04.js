/**
 * Exercise 04 – Middleware Pipeline
 * 
 * Processes a request object through a series of middleware functions recursively.
 */

const middlewares = [
  (req) => { req.value += 1; return req; },
  (req) => { req.value *= 2; return req; },
  (req) => { req.value -= 3; return req; }
];

function runPipeline(req, fns, index = 0) {
    if (index >= fns.length) return req;       // Base case
    const updatedReq = fns[index](req);       // Apply current middleware
    return runPipeline(updatedReq, fns, index + 1); // Recursive call
}

let req = { value: 5 };
console.log("=== Middleware Pipeline ===");
console.log("Initial req:", req);
req = runPipeline(req, middlewares);
console.log("Processed req:", req);