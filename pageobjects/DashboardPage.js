const { expect } = require('@playwright/test');

exports.DashboardPage = class DashboardPage {
    constructor(page) {
        this.page = page;
        this.pimMenu = page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[2]/a');
        this.adminMenu = page.locator('//a[@href="/web/index.php/admin/viewAdminModule"]')
    }

    async navigateToPIM() {
        await this.pimMenu.click();
    }

    async navigateToAdmin() {
        await this.adminMenu.click();
    }
}