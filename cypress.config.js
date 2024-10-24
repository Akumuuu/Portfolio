const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1920,
    viewportHeight: 1080,
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      // Підключення Allure плагіну
      allureWriter(on, config);

      // Інші Node події можна додавати тут
      return config;
    },
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}'
  },
  env: {
    allureResultsPath: 'allure-results'  // Шлях для збереження результатів Allure
  },
});