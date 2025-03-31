const { test, expect } = require('@playwright/test');

test('page screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')

    await page.waitForTimeout(3000)
    await page.screenshot({ path: 'tests/screenshots/HomePage.png' })

    //await page.screenshot({ path:'tests/screenshots/'+Date.now()+'HomePage.png'})
});

test('Full page screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000)
    await page.screenshot({ path: 'tests/screenshots/' + Date.now() + 'FullPage.png', fullPage: true })
});

test('Element screenshot', async ({ page }) => {
    await page.goto('https://www.flipkart.com/')
    await page.waitForTimeout(3000)
    await page.locator('div[class="_3bzdSa"]').screenshot({ path: 'tests/screenshots/' + Date.now() + '.png' })
});