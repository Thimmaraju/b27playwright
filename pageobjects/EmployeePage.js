const { expect } = require('@playwright/test');

exports.EmployeePage = class EmployeePage {
    constructor(page) {
        this.page = page;
        this.addEmployeeButton = page.locator("//a[normalize-space(text())='Add Employee']");
        this.firstNameField = page.locator("(//label[normalize-space(text())='Employee Full Name']/following::input)[1]");
        this.lastNameField = page.locator("//input[@placeholder='Last Name']");
        this.saveButton = page.locator("//button[contains(.,'Save')]");
        this.personalDetailsHeader = page.locator("//h6[text()='Personal Details']");
    }

    async addEmployee(firstName, lastName) {
        await this.addEmployeeButton.click();
        await this.firstNameField.fill(firstName);
        await this.lastNameField.fill(lastName);
        await this.saveButton.click();
    }

    async verifyEmployeeAdded() {
        await expect(this.personalDetailsHeader).toBeVisible();
    }
}