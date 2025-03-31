const { test, expect } = require('@playwright/test');

test("Working with text", async ({ page }) => {

    await page.goto("https://www.flipkart.com/")

    //await expect(page.locator('//a[@aria-label="Mobiles"]/div/div/span/span')).toHaveText("Raju")

    // const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span/span').textContent()

    //  console.log(textvalue)

    //  const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allTextContents()

    // for(let i of values){
    //     console.log(i)
    // }

    const textvalue = await page.locator('//a[@aria-label="Mobiles"]/div/div/span/span').innerText()

    console.log(textvalue)

    const values = await page.locator('//a[@class="_1ch8e_"]/div/div/span/span').allInnerTexts()

    for (let i of values) {
        console.log(i)
    }
})
