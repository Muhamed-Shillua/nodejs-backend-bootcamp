/**
 * Exercise 03 – Memory Leak Example
 *
 * Demonstrates circular references and cleanup.
 */

let objA = {};
let objB = {};

objA.ref = objB;
objB.ref = objA;

console.log("Objects referencing each other created");

// Break references
objA = null;
objB = null;

console.log("References removed, objects eligible for garbage collection");