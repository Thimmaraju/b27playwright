import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"

const creds = ["Admin", "admin123"]
test('Verify login with vaid credentials', async ({ page }) => {

  const menuitems = {

    menu1 : "Admin",
    menu2 : "PIM",
    menu3 : "Leave",
    menu4 : "Time"
}

  await page.goto("/web/index.php/auth/login");
  
  await page.locator('//input[@placeholder="Username"]').fill(creds[0]);

  await page.locator("input[type='password']").type(creds[1]);

  await page.locator("button[type='submit']").click()

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")

  
// for(let item in menuitems){
  
//   await expect(page.locator('span[class="oxd-text oxd-text--span oxd-main-menu-item--name"]')).toHaveText(menuitems[item])


// }
//  await page.close()

 //ordernumber = "3546546"

})


test('Verify login with vaid username and Invalid password', async ({ page }) => {


    await page.goto("/web/index.php/auth/login")
    
    await page.locator("//input[@placeholder='Username']").fill(logindata.username)
  
    await page.locator("input[type='password']").fill(logindata.wrongpassword)
  
    await page.locator("button[type='submit']").click()
  
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  
  })

  test('Verify login with invaid username and valid password', async ({ page }) => {

     const username = "Admin"
    await page.goto("/web/index.php/auth/login")
    
    await page.locator("//input[@placeholder='Username']").fill(username)
  
    await page.locator("input[type='password']").fill(logindata.password)
  
    await page.locator("button[type='submit']").click()
    
    await page.locator("//input[@placeholder='Username']").fill(username)
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  
  })


  test('Verify login with invaid username and invalid password', async ({ page }) => {

  

  // await page.setViewportSize({
  //   width: 375,
  //   height: 667,
  // })
    await page.goto("/web/index.php/auth/login")
    
    await page.locator("//input[@placeholder='Username']").fill(username)
  
    await page.locator("input[type='password']").fill(logindata.wrongpassword)
  
    await page.locator("button[type='submit']").click()
  
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  

    await page.close()
  })



  // test('Launch flipkart', async ({ page }) => {

  //   await page.goto("https://www.flipkart.com/")

  // })