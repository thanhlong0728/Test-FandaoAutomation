describe('Learning WebdriverIO API', function () {
  after(async function () {
    await browser.pause(5000)
  })

  it('should be login case 1 successfully', async function () {
    const phoneInput = $('~input-phone')
    const passwordInput = $('~input-password')
    const hideSellingGuideModalBtn = $('~home/sellingGuideModal/okBtn')
    const hideNotificationGuideModalBtn = $('~home/notificationGuideModal/notNowBtn')
    const tabProfileBtn = $('~tab/profile')
    const logoutBtn = $('~profile/logoutBtn')

    await phoneInput.setValue('51265126')
    await passwordInput.setValue('123456')

    const loginBtn = $('~loginBtn')
    await loginBtn.click()

    await hideSellingGuideModalBtn.waitForDisplayed()
    await hideSellingGuideModalBtn.click()

    await hideNotificationGuideModalBtn.waitForDisplayed()
    await hideNotificationGuideModalBtn.click()

    await tabProfileBtn.waitForDisplayed()
    await tabProfileBtn.click()
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

    await tabProfileBtn.waitForDisplayed()
    await tabProfileBtn.click()

    await logoutBtn.click()
  })

  it('should be login case 3 fail', async function () {
    const loginBtn = $('~loginBtn')
    const phoneInput = $('~input-phone')
    const passwordInput = $('~input-password')

    await phoneInput.setValue('099999999')
    await passwordInput.setValue('123456')
    await loginBtn.click()
    setTimeout(() => {
      browser.saveScreenshot('./screenshot/login_fail.png')
    }, 2000)
  })
})
