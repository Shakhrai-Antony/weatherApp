const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9000',
    viewportWidth: 1200,
    viewportHeight: 1000,
    supportFile: false,
  },
});
