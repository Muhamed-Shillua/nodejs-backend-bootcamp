/**
 * Exercise 03 – Logger Factory
 */

function createLogger(level) {
  return function (message) {
    console.log(`[${level}] ${message}`);
  };
}

const infoLogger = createLogger("INFO");
const errorLogger = createLogger("ERROR");

infoLogger("server started");
errorLogger("database failed");