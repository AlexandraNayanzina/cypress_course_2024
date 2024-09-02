const { defineConfig } = require("cypress");
const fs = require('fs-extra')
const path = require('path')

function getConfigurationByFile(file) {
  const pathToConfigFile = path.resolve('..', 'cypress_course_2024//config', `${file}.json`)

  return fs.readJson(pathToConfigFile)
}

module.exports = defineConfig({
  projectId: '7ymguf',
  e2e: {
    baseUrl: "https://automationteststore.com",
    setupNodeEvents(on, config) {
      // const file = config.env.configFile || ''
      // return getConfigurationByFile(file)
    },
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx, feature}",
    screenshotOnRunFailure: true
  },
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
    configFile: 'reporter-config.json'
  },

});
