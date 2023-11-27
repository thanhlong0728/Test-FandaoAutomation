const webdriverio = require('webdriverio');

const desiredCaps = {
    host: '0.0.0.0',
    path: '/wd/hub',
    port: 4723,
    waitforTimeout: 50000,
    capabilities: {
        'appium:appPackage': 'com.fundao',
        'appium:appActivity': 'com.fundao.MainActivity',
        'appium:udid': 'emulator-5554',
        'appium:automationName': 'uiautomator2',
        'appium:platformName': 'Android'
    }
};

describe('AWSDeviceFarmReferenceAppTest', function () {
    let client;

    before(async function () {
        client = await webdriverio.remote(desiredCaps);
    });

    after(async function () {
        await browser.pause(15000);
    });

    it('test_app_is_loaded', async function done() {
        const loginBtn = client.$('~loginBtn');
        const phoneInput = client.$('~input-phone');
        const passwordInput = client.$('~input-password');
        const hideSellingGuideModalBtn = client.$('~home/sellingGuideModal/okBtn');
        const hideNotificationGuideModalBtn = client.$('~home/notificationGuideModal/notNowBtn');
        const tabProfileBtn = client.$('~tab/profile');
        const logoutBtn = client.$('~profile/logoutBtn');

        await phoneInput.setValue('51265126');
        await passwordInput.setValue('123456');
        await loginBtn.click();
        await hideSellingGuideModalBtn.waitForDisplayed();
        await hideSellingGuideModalBtn.click();
        await hideNotificationGuideModalBtn.waitForDisplayed();
        await hideNotificationGuideModalBtn.click();
        await tabProfileBtn.waitForDisplayed();
        await tabProfileBtn.click();
        await logoutBtn.click();

        const contexts = await browser.getContexts();
        await browser.switchContext(contexts[0]);
        const popUpAndroid = await $(".//android.widget.Button[@resource-id='android:id/button1']");
        await popUpAndroid.click();
        done();
    }).timeout(10000);
});
