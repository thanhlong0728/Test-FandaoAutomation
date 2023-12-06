exports.config = {
  runner: 'local',
  port: 4723,
  host: '127.0.0.1',
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
  specs: ['./Test-Android.js'],
  capabilities: [
    {
      //Setup Android
      'appium:appPackage': 'com.fundao',
      'appium:appActivity': 'com.fundao.MainActivity',
      'appium:udid': 'emulator-5554',
      'appium:automationName': 'uiautomator2',
      platformName: 'Android'

      //Setup IOS
      // 'appium:platformName': 'iOS',
      // 'appium:platformVersion': '17.0',
      // 'appium:deviceName': 'iPhone 15 Pro Max',
      // 'appium:appPackage': 'com.fundao',
      // 'appium:appActivity': 'com.fundao.MainActivity',
      // 'appium:automationName': 'XCUITest'
    }
  ]
}
