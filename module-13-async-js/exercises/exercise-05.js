/**
 * Exercise 05 – Async Queue Processor
 */

async function processQueue(tasks) {
    const results = [];

    for (const task of tasks) {
        const result = await task();
        results.push(result);
    }

    return results;
}

// Example async tasks
const tasks = [
    () => delay(500).then(() => "Task 1 Done"),
    () => delay(300).then(() => "Task 2 Done"),
    () => delay(700).then(() => "Task 3 Done")
];

processQueue(tasks).then((results) => {
    console.log(results);
});