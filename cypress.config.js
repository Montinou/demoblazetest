const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jcb899',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});