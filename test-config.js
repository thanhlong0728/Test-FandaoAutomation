exports.config = {
    runner: 'local',
    port: 4723,
    host: '0.0.0.0',
    path: '/',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: 'babel-register',
        timeout: 600000
    },
    waitforTimeout: 50000,
    maxInstances: 1,
    sync: false,
    specs: [
        // './PlayWithMocha.js'
        'api/login.js'
    ],
    capabilities: [
        {
            'appium:appPackage': 'com.fundao',
            'appium:appActivity': 'com.fundao.MainActivity',
            'appium:udid': 'emulator-5554',
            'appium:automationName': 'uiautomator2',
            platformName: 'Android'
        }
    ]
};
