const { test, expect } = require('@playwright/test');

const username = "Admin";
const password = "admin123";
let page;

test.describe("Verify Login functionality", async () => {

  test.beforeEach(async ({ browser }) => {

    page = await browser.newPage()
  
    await page.goto('/web/index.php/auth/login');
  })
  
  test.afterEach(async () => {
  
    console.log("Test execution completed")
  })

  test('Verify logo visible',{ tag: "@smoke"},async () => {




    await expect(page.locator("img[alt='company-branding']")).toBeVisible()
  });


  test('Verify login with valid credentials', async () => {


    await page.locator('input[name="username"]').fill("Admin")
    //await page.locator('input[name="username"]').clear()

    // await page.locator('input[name="username"]').press("Control + A")
    // await page.locator('input[name="username"]').press("Backspace")

   //await page.keyboard.press("locator", "Enter")

    //await page.locator('input[name="username"]').fill(username)
    await page.locator("input[type='password']").fill(password)
    await page.locator("input[type='password']").press("Enter")
 // await page.press(input[type='password'], Enter)
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')

  });


  test('Verify login with valid username and invalid password', async () => {



    // Enter username 
    await page.locator("input[name='username']").fill(username)
    //enter password 
    await page.locator("input[type='password']").fill("dfvbndfh")
    //click on login button 
    await page.locator("button[type='submit']").click()

    // verify error message
    await expect(page.getByText('Invalid credentials')).toBeVisible()

  });

  test('Verify login with INvalid username and valid password', async () => {

    await page.locator("//input[@name='username']").fill("hvghv")
    await page.locator("input[type='password']").fill(password)
    await page.locator("button[type='submit']").click()

    await expect(page.getByText('Invalid credentials')).toBeVisible()

  });

  test('Verify login with invalid username and invalid password', async () => {

     test.fail()
    await page.locator("input[name='username']").fill("hbhgv")
    await page.locator("input[type='password']").fill("ghvghvh")
    await page.locator("button[type='submit']").click()

    await expect(page.getByText('Invalid credentials')).toBeVisible()

  });

})







// ctrl + /  - comment the selected lines

// ctrl + / - uncomment the selected lines 