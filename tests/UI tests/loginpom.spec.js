import { test, expect } from '@playwright/test';
import { LoginPage } from "../../pageobjects/LoginPage"
import logindata from "../../testData/login.json"

let page
let loginPage;
test.beforeEach(async ({ browser }) => {
  page = await browser.newPage()
  loginPage = new LoginPage(page);
  loginPage.launchApplication()
})

const creds = ["Admin", "admin123"]
test('Verify login with vaid credentials', async () => {
  await loginPage.login("Admin", "admin123")
  await loginPage.verifyLoginSuccess()
})

test('Verify login with vaid username and Invalid password', async () => {
  await loginPage.login(logindata.username, logindata.wrongpassword)
  await loginPage.verifyloginError()

})

test('Verify login with invaid username and valid password', async () => {
  await loginPage.login(logindata.wrongusername, logindata.password)
  await loginPage.verifyloginError()

})

test('Verify login with invaid username and invalid password', async () => {
  await loginPage.login(logindata.wrongusername, logindata.wrongpassword)
  await loginPage.verifyloginError()
  await page.close()
})

