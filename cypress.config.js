










const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  // projectId: 'uocb8u',
  projectId: "qa5gtc",
  e2e: {
    specPattern: "**/*.feature",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("file:preprocessor", cucumber());
    },
  },
});
