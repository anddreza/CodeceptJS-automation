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
    }
  },
  include: {
    I: './support/steps_file.js',
    tasksPage: "./pages/tasks.js",
  },
  name: 'codecept-express'
}