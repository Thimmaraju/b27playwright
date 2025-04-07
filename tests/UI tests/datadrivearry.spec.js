import { test, expect } from '@playwright/test';
import data from "../../testData/login.json"
import addjobtitledata from "../../testData/admindata/jobtitle.json"


  const Jobtitles  = ["CEO I", "COO I", "CFO I" ]

  for (let jobtitle of Jobtitles ) {

  test(`Verify Admin Can add Job title - ${jobtitle}`, async ({ page }) => {

    //  test.setTimeout(120_000)
      
  // launch the url 
  await page.goto("/web/index.php/auth/login")
  
  //filling username 
  await page.locator("input[name='username']").fill(data.username)
  
  //filling password
  await page.locator("input[type='password']").fill(data.password)
  // click on login button
  await page.locator("button[type='submit']").click()
  
  //Whether we are navigated to dashbaord page or not 
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index", { timeout: 30_000 })
  
  await page.locator("//span[text()='Admin']").click()
  
  await page.locator("//span[normalize-space(text())='Job']").click()
  
  await page.locator("//a[normalize-space(text())='Job Titles']").click()
  
  await page.locator("//button[contains(.,'Add')]").click()
  let r = (Math.random() + 1).toString(36).substring(7);

  
  await page.locator("(//label[normalize-space(text())='Job Title']/following::input)[1]").fill(jobtitle +r)
  
  await page.locator("//textarea[@placeholder='Type description here']").fill(addjobtitledata.jobdescription)
  
  await page.locator("//button[@type='submit']").click()
  
  await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")
  
  })

   
  }