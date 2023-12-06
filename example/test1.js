const webdriverio = require('webdriverio')

const desiredCaps = {
  host: '127.0.0.1',
  path: '/',
  port: 4723,
  waitforTimeout: 50000,
  capabilities: {
    'appium:appPackage': 'com.fundao',
    'appium:appActivity': 'com.fundao.MainActivity',
    'appium:udid': 'emulator-5554',
    'appium:automationName': 'uiautomator2',
    'appium:platformName': 'Android'

    //ios
    // "appium:platformName": "iOS",
    // "appium:platformVersion": "17.0",
    // "appium:deviceName": "iPhone 15 Pro Max",
    // "appium:appPackage": "com.fundao",
    // "appium:appActivity": "com.fundao.MainActivity",
    // "appium:automationName": "XCUITest",
  }
}

describe('Learning WebdriverIO API', function () {
  let client

  before(async function () {
    client = await webdriverio.remote(desiredCaps)
  })

  after(async function () {
    await browser.pause(15000)
  })

  it('should be login case 1 successfully', async function () {
    const loginBtn = client.$('~loginBtn')
    const phoneInput = client.$('~input-phone')
    const passwordInput = client.$('~input-password')
    const hideSellingGuideModalBtn = client.$('~home/sellingGuideModal/okBtn')
    const hideNotificationGuideModalBtn = client.$('~home/notificationGuideModal/notNowBtn')
    const tabProfileBtn = client.$('~tab/profile')
    const logoutBtn = client.$('~profile/logoutBtn')

    await phoneInput.setValue('51265126')
    await passwordInput.setValue('123456')
    await loginBtn.click()
    await hideSellingGuideModalBtn.waitForDisplayed({ timeout: 50000 })
    await hideSellingGuideModalBtn.click()
    await hideNotificationGuideModalBtn.waitForDisplayed({ timeout: 50000 })
    await hideNotificationGuideModalBtn.click()
    await tabProfileBtn.waitForDisplayed({ timeout: 50000 })
    await tabProfileBtn.click()

    const { height } = client.getWindowSize()
    const anchorPercentage = 50
    const startPointPercentage = 90
    const endPointPercentage = 10

    const anchor = (height * anchorPercentage) / 100
    const startPoint = (height * startPointPercentage) / 100
    const endPoint = (height * endPointPercentage) / 100

    const nameText = client.$('~profile/nameText')
    await nameText.click()
    client.touchPerform([
      {
        action: 'press',
        options: {
          x: anchor,
          y: startPoint
        }
      },
      {
        action: 'wait',
        options: {
          ms: 1000
        }
      },
      {
        action: 'moveTo',
        options: {
          x: anchor,
          y: endPoint
        }
      },
      {
        action: 'release',
        options: {}
      }
    ])

    await logoutBtn.waitForDisplayed({ timeout: 50000 })
    await logoutBtn.click()
  })

  it('should be login case 2 successfully', async function () {
    const loginBtn = client.$('~loginBtn')
    const phoneInput = client.$('~input-phone')
    const passwordInput = client.$('~input-password')
    const tabProfileBtn = client.$('~tab/profile')
    const logoutBtn = client.$('~profile/logoutBtn')

    await phoneInput.setValue('01470147')
    await passwordInput.setValue('123456')
    await loginBtn.click()
    await tabProfileBtn.waitForDisplayed({ timeout: 50000 })
    await tabProfileBtn.click()

    await logoutBtn.click()
  })

  it('should be login case 3 fail', async function () {
    const loginBtn = client.$('~loginBtn')
    const phoneInput = client.$('~input-phone')
    const passwordInput = client.$('~input-password')

    await phoneInput.setValue('099999999')
    await passwordInput.setValue('123456')
    await loginBtn.click()
    setTimeout(() => {
      browser.saveScreenshot('./screenshot/login_fail.png')
    }, 2000)
  })
})
