const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://serverest.dev",
    specPattern: "cypress/e2e/**/*.cy.js",
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/reports", 
      overwrite: false,
      html: true,
      json: true
    },
    setupNodeEvents(on, config) {
      
      on('after:spec', (spec, results) => {
        if (results && results.tests) {
          results.tests.forEach(test => {
            if (test.state === 'passed') {
              cy.screenshot(test.title.replace(/ /g, "_"))
            }
          })
        }
      });
    },
  },
});

