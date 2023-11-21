/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './e2e/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      browser: 'chromium',
      url: 'http://localhost:8080',
      show: true
    },
    REST: {
      endpoint: 'http://localhost:3333'
    },
    JSONResponse: {
      requestHelper: 'REST'
    },
    Mochawesome: {
      uniqueScreenshotNames: true
  }
  },
  include: {
    I: './support/steps_file.js',
    tasksPage: "./pages/tasks.js",
  },
  mocha: {
    reporterOptions: {
        reportDir: "output"
    }
  },
  name: 'codecept-express'
}