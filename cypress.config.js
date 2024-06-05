const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default
const { cypressConfig } = require('@axe-core/watcher');


module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: '0916dab0-18a2-46e6-968a-adc44dcb1b0d'
    },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('file:preprocessor', cucumber())
    },
    specPattern: "cypress/e2e/Features/*.feature"
  },
  defaultCommandTimeout: 10000,
}),
);
