describe('Learning WebdriverIO API', function () {
  after(async function () {
    await browser.pause(10000)
  })

  it('should be login case 1 successfully', async function () {
    const phoneInput = $('~input-phone')
    const passwordInput = $('~input-password')
    const tabProfileBtn = $('~tab/profile')
    const logoutBtn = $('~profile/logoutBtn')

    await phoneInput.setValue('51265126')
    await passwordInput.setValue('123456')

    const loginBtn = $('~loginBtn')
    await loginBtn.click()
    await loginBtn.click()

    await tabProfileBtn.waitForDisplayed()
    await tabProfileBtn.click()

    const nameText = $('~profile/nameText')
    const { height } = await driver.getWindowSize()
    const anchorPercentage = 50
    const startPointPercentage = 90
    const endPointPercentage = 10

    const anchor = (height * anchorPercentage) / 100
    const startPoint = (height * startPointPercentage) / 100
    const endPoint = (height * endPointPercentage) / 100

    await nameText.waitForDisplayed()
    await nameText.click()

    await driver.touchPerform([
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

    await logoutBtn.waitForDisplayed()
    await logoutBtn.click()
  })

  it('should be login case 2 successfully', async function () {
    const loginBtn = $('~loginBtn')
    const phoneInput = $('~input-phone')
    const passwordInput = $('~input-password')
    const tabProfileBtn = $('~tab/profile')
    const logoutBtn = $('~profile/logoutBtn')

    await phoneInput.setValue('01470147')
    await passwordInput.setValue('123456')
    await loginBtn.click()
    await loginBtn.click()

    await tabProfileBtn.waitForDisplayed()
    await tabProfileBtn.click()

    const nameText = $('~profile/nameText')
    const { height } = await driver.getWindowSize()
    const anchorPercentage = 50
    const startPointPercentage = 90
    const endPointPercentage = 10

    const anchor = (height * anchorPercentage) / 100
    const startPoint = (height * startPointPercentage) / 100
    const endPoint = (height * endPointPercentage) / 100

    await nameText.waitForDisplayed()
    await nameText.click()

    await driver.touchPerform([
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

    await logoutBtn.waitForDisplayed()
    await logoutBtn.click()
  })

  it('should be login case 3 fail', async function () {
    const loginBtn = $('~loginBtn')
    const phoneInput = $('~input-phone')
    const passwordInput = $('~input-password')

    await phoneInput.setValue('099999999')
    await passwordInput.setValue('123456')
    await loginBtn.click()
    await loginBtn.click()
    setTimeout(() => {
      browser.saveScreenshot('./screenshot/login_fail.png')
    }, 2000)
  })
})
