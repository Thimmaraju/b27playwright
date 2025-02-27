import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"

test.only('Verify login with vaid credentials', async ({ page }) => {


  await page.goto("/web/index.php/auth/login");
  
  await page.locator("//input[@placeholder='Username']").fill(logindata.username);

  await page.locator("input[type='password']").fill(logindata.password);

  await page.locator("button[type='submit']").click()

  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
  
//  await page.close()

})


test('Verify login with vaid username and Invalid password', async ({ page }) => {


    await page.goto("/web/index.php/auth/login")
    
    await page.locator("//input[@placeholder='Username']").fill(logindata.username)
  
    await page.locator("input[type='password']").fill(logindata.wrongpassword)
  
    await page.locator("button[type='submit']").click()
  
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  
  })

  test('Verify login with invaid username and valid password', async ({ page }) => {


    await page.goto("/web/index.php/auth/login")
    
    await page.locator("//input[@placeholder='Username']").fill(logindata.wrongusername)
  
    await page.locator("input[type='password']").fill(logindata.password)
  
    await page.locator("button[type='submit']").click()
  
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  
  })


  test('Verify login with invaid username and invalid password', async ({ page }) => {

  // await page.setViewportSize({
  //   width: 375,
  //   height: 667,
  // })
    await page.goto("/web/index.php/auth/login")
    
    await page.locator("//input[@placeholder='Username']").fill(logindata.wrongusername)
  
    await page.locator("input[type='password']").fill(logindata.wrongpassword)
  
    await page.locator("button[type='submit']").click()
  
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible()
  

    await page.close()
  })



  // test('Launch flipkart', async ({ page }) => {

  //   await page.goto("https://www.flipkart.com/")

  // })