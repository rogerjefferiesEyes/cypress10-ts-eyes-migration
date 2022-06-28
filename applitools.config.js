
module.exports = {
    testConcurrency: 5,
    //
    browser: [
        { width: 1600, height: 900, name: 'firefox' },
        { width: 1600, height: 900, name: 'chrome' },
        { width: 1080, height: 720, name: 'edgechromium' },
        { width: 1024, height: 768, name: 'ie11' },
        { deviceName: 'iPhone X', screenOrientation: 'portrait', name: 'chrome' },
        { deviceName: 'Galaxy S10 Plus', screenOrientation: 'portrait', name: 'chrome' },
        { deviceName: 'iPad Air 2', screenOrientation: 'portrait' }
    ],
    showLogs: true,
    failCypressOnDiff: false,
    notifyOnCompletion: true,
    appName: 'Cypress Typescript',
    batch: {
        name: 'Cypress Typescript',
        notifyOnCompletion: true
    }
}
