import { test, expect } from '@playwright/test';

import {LoginPage } from '../pageobjects/LoginPage';
import {DashboardPage} from '../pageobjects/DashboardPage';
import {EmployeePage} from '../pageobjects/PIM/EmployeePage';


test('Verify Admin Can Add Employee', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const employeePage = new EmployeePage(page);

    const empData = ["Chaitra", "J"];

    // Launch the URL
    await loginPage.launchApplication()

    // Perform login
    await loginPage.login("Admin", "admin123");
    
    await loginPage.verifyLoginSuccess()
    // Navigate to PIM and add employee
    await dashboardPage.navigateToPIM();
    await employeePage.addEmployee(empData[0], empData[1]);

    // Verify employee is added
    await employeePage.verifyEmployeeAdded();
});
