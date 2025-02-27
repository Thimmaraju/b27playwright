import { test, expect } from '@playwright/test';
import exp from 'constants';

test('Verify Admin Can add Job title', async ({ page }) => {

    test.setTimeout(120_000)
    
// launch the url 
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

//filling username 
await page.locator("input[name='username']").fill("Admin")

//filling password
await page.locator("input[type='password']").fill("admin123")
// click on login button
await page.locator("button[type='submit']").click()

//Whether we are navigated to dashbaord page or not 
await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index", { timeout: 30_000 })

await page.locator("//span[text()='Admin']").click()

await page.locator("//span[normalize-space(text())='Job']").click()

await page.locator("//a[normalize-space(text())='Job Titles']").click()

await page.locator("//button[contains(.,'Add')]").click()

await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill("QA Analyst I")

await page.locator("//textarea[@placeholder='Type description here']").fill("Software Testing ")

await page.locator("//button[@type='submit']").click()

await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

})