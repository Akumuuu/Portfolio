const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    "chromeWebSecurity": false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    specPattern:'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  env: {
    allureResultsPath: 'allure-results'  // Path for saving Allure results
  },
});
