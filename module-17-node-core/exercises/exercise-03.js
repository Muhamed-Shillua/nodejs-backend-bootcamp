/**
 * Exercise 03 – Event Logger
 */

const EventEmitter = require("events");

const emitter = new EventEmitter();

// Event listeners
emitter.on("userLogin", (user) => console.log(`${user} logged in`));
emitter.on("userLogout", (user) => console.log(`${user} logged out`));

// Emit events
emitter.emit("userLogin", "Ali");
emitter.emit("userLogin", "Sara");
emitter.emit("userLogout", "Ali");