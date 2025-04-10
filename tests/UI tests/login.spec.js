import { test, expect } from '@playwright/test';

import logindata from "../../testData/login.json"

let page
test.beforeEach( async ({browser})=>{

  page = await browser.newPage()
  await page.goto("/web/index.php/auth/login");

})

const creds = ["Admin", "admin123"]
test('Verify login with vaid credentials', async () => {

  const menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4 : "Time"
}


  
  await page.locator('//input[@placeholder="Username"]').fill(process.env.ORG_USERNAME);

  await page.locator("input[type='password']").type(process.env.ORG_PASSWORD);

  await page.locator("button[type='submit']").click()

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

  
// for(let item in menuitems){
  
//   await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]')).toHaveText(menuitems[item])


// }
//  await page.close()

 //ordernumber = "3546546"

})


test('Verify login with vaid username and Invalid password', async () => {

    
    await page.locator("//input[@placeholder='Username']").fill(logindata.username)
  
    await page.locator("input[type='password']").fill(logindata.wrongpassword)
  
    await page.locator("button[type='submit']").click()
  
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  
  })

  test('Verify login with invaid username and valid password', async () => {

     const username = "hjkjggy"

    await page.locator("//input[@placeholder='Username']").fill(username)
  
    await page.locator("input[type='password']").fill(logindata.password)
  
    await page.locator("button[type='submit']").click()
    
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  
  })


  test('Verify login with invaid username and invalid password', async () => {

  

  // await page.setViewportSize({
  //   width: 375,
  //   height: 667,
  // }
    
    await page.locator("//input[@placeholder='Username']").fill("guygyujg")
  
    await page.locator("input[type='password']").fill(logindata.wrongpassword)
  
    await page.locator("button[type='submit']").click()
  
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  

    await page.close()
  })



  // test('Launch flipkart', async ({ page }) => {

  //   await page.goto("https://www.flipkart.com/")

  // })