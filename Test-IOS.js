describe("Learning WebdriverIO API", function () {
  after(async function () {
    await browser.pause(15000);
  });

  it("should be login case 1 successfully", async function () {
    const loginBtn = $("~loginBtn");
    const phoneInput = $("~input-phone");
    const passwordInput = $("~input-password");
    const tabProfileBtn = $("~tab/profile");
    const logoutBtn = $("~profile/logoutBtn");

    await phoneInput.setValue("51265126");
    await passwordInput.setValue("123456");
    await loginBtn.click();
    await loginBtn.click();

    await tabProfileBtn.waitForDisplayed();
    await tabProfileBtn.click();
    await logoutBtn.click();
  });
});
