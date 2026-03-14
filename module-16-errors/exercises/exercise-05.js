/**
 * Exercise 05 – Express Error Middleware
 */

const express = require("express");
const app = express();
const PORT = 3000;

// Route that throws error
app.get("/error", (req, res, next) => {
    const err = new Error("Route failed!");
    err.status = 500;
    next(err); // pass error to middleware
});

// Custom error middleware
app.use((err, req, res, next) => {
    res.status(err.status || 500).json({
        success: false,
        message: err.message
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});