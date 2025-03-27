import { expect } from "@playwright/test";
 exports.LoginPage = class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameField = page.locator("input[name='username']");
        this.passwordField = page.locator("input[type='password']");
        this.loginButton = page.locator("button[type='submit']");
        this.loginerrorMessage = page.locator("//p[text()='Invalid credentials']")
    }

    async launchApplication(){

        await this.page.goto("/web/index.php/auth/login");
    }

    async login(username, password) {
        await this.usernameField.fill(username);
        await this.passwordField.fill(password);
        await this.loginButton.click();
    }

    async verifyloginError(){

        await expect(this.loginerrorMessage).toBeVisible()
    }

    async verifyLoginSuccess(){

        await expect(this.page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index")
    }
}
