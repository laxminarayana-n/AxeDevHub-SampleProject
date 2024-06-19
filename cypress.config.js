const { defineConfig } = require('cypress');
const { cypressConfig } = require('@axe-core/watcher');
const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = defineConfig(
  cypressConfig({
    axe: {
      apiKey: ''
    },
    e2e: {
      defaultCommandTimeout: 10000,
      viewportWidth: 1920,
      viewportHeight: 1200,

      setupNodeEvents(on, config) {
        on('file:preprocessor', cucumber());
      },
      specPattern: 'cypress/e2e/**/*.feature',
      supportFile: 'cypress/support/e2e.js',
    },
  })
);
