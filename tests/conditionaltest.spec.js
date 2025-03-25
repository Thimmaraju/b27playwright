import { test, expect } from '@playwright/test';

// test('has title', async ({ page, browserName }) => {

//     test.skip(browserName == "chromium")

//         await page.goto('https://playwright.dev/');

//         // Expect a title "to contain" a substring.
//         await expect(page).toHaveTitle(/Playwright/);



// });



test("Based on BrowserName run different script", {tag: "@smoke"}, async ({ page, browserName }) => {

    switch (browserName) {
        case "chromium":

            await page.goto("https://www.flipkart.com/");
            await page.close()

            break;

        case "firefox":

            await page.goto("https://www.amazon.in/");
            await page.close()

            break;
        case "webkit":

            await page.goto("https://www.myntra.com/");
            await page.close()

            break;

    }


})