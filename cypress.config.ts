import { defineConfig } from 'cypress'

export default defineConfig({
  video: false,
  eyesIsDisabled: false,
  eyesBrowser:
    '[{"width":1600,"height":900,"name":"firefox"},{"width":1600,"height":900,"name":"chrome"},{"width":1080,"height":720,"name":"edgechromium"},{"width":1024,"height":768,"name":"ie11"},{"deviceName":"iPhone X","screenOrientation":"portrait","name":"chrome"},{"deviceName":"Galaxy S10 Plus","screenOrientation":"portrait","name":"chrome"},{"deviceName":"iPad Air 2","screenOrientation":"portrait"}]',
  eyesFailCypressOnDiff: false,
  eyesDisableBrowserFetching: false,
  eyesTestConcurrency: 5,
  appliConfFile: {
    testConcurrency: 5,
    browser: [
      {
        width: 1600,
        height: 900,
        name: 'firefox',
      },
      {
        width: 1600,
        height: 900,
        name: 'chrome',
      },
      {
        width: 1080,
        height: 720,
        name: 'edgechromium',
      },
      {
        width: 1024,
        height: 768,
        name: 'ie11',
      },
      {
        deviceName: 'iPhone X',
        screenOrientation: 'portrait',
        name: 'chrome',
      },
      {
        deviceName: 'Galaxy S10 Plus',
        screenOrientation: 'portrait',
        name: 'chrome',
      },
      {
        deviceName: 'iPad Air 2',
        screenOrientation: 'portrait',
      },
    ],
    showLogs: true,
    failCypressOnDiff: false,
    notifyOnCompletion: true,
    appName: 'Cypress Typescript',
    batch: {
      name: 'Cypress Typescript',
      notifyOnCompletion: true
    },
  },
  eyesIsGlobalHooksSupported: false,
  eyesPort: 31077,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
