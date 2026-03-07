/**
 * Exercise 02 – HTTP Status Handler
 * 
 * Prints human-readable status messages for HTTP codes.
 */

const codes = [200, 401, 404, 500];

console.log("=== HTTP Status Handler ===");

for (let code of codes) {
    switch (code) {
        case 200:
            console.log(`${code} → OK ✅`);
            break;
        case 401:
            console.log(`${code} → Unauthorized ❌`);
            break;
        case 404:
            console.log(`${code} → Not Found ❌`);
            break;
        case 500:
            console.log(`${code} → Internal Server Error ⚠️`);
            break;
        default:
            console.log(`${code} → Unknown Status`);
    }
}