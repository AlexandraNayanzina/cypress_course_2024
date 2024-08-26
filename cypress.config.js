const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "47teht",
  e2e: {
    baseUrl: "https://automationteststore.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx, feature}"
  },

});
