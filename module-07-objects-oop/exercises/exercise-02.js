/**
 * Exercise 02 – Configuration Merger
 *
 * Combines default settings with environment overrides.
 */

const defaultConfig = {
  port: 3000,
  db: "mongodb://localhost",
  debug: false
};

const envConfig = {
  port: 5000,
  debug: true
};

// Merge configs (env overrides defaults)
const finalConfig = {
  ...defaultConfig,
  ...envConfig
};

console.log("Final Config:", finalConfig);