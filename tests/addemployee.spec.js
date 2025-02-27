import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Verify Admin Can add employee', async ({ page }) => {


// launch the url 
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//filling username 
await page.locator("input[name='username']").fill("Admin")

//filling password
await page.locator("input[type='password']").fill("admin123")
// click on login button
await page.locator("button[type='submit']").click()

//Whether we are navigated to dashbaord page or not 
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

// click on PIM
await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a').click()

// click on add employee
await page.locator("//a[normalize-space(text())='Add Employee']").click()

// fill firstname 
await page.locator("(//label[normalize-space(text())='Employee Full Name']/following::input)[1]").fill("Deekshit")

// fill lastname 

await page.locator("//input[@placeholder='Last Name']").fill("C R")

//click save button

await page.locator("//button[contains(.,'Save')]").click()


// Personal details should be visible 

await expect(page.locator("//h6[text()='Personal Details']")).toBeVisible()


})