/**
 * Exercise 05 – Private Config System
 */

function createConfig() {
    const config = {};

    return {
        set(key, value) {
            config[key] = value;
        },

        get(key) {
            return config[key];
        }
    };
}

const appConfig = createConfig();

appConfig.set("port", 3000);
appConfig.set("dbHost", "localhost");

console.log(appConfig.get("port"));
console.log(appConfig.get("dbHost"));