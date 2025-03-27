import { test, expect } from '@playwright/test';

import {LoginPage} from "../pageobjects/LoginPage"

import { DashboardPage } from "../pageobjects/DashboardPage"

import {jobTitlePage} from "../pageobjects/admin/JobTitlePage"

import addjobtitledata from "../testData/admindata/jobtitle.json"

import logindata from "../testData/login.json"


test('Verify Add Jobtitle - POM', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const dashboardPage = new DashboardPage(page);
    const addjobtitle = new jobTitlePage(page);

    // Launch the URL
    await loginPage.launchApplication()

    // Perform login
    await loginPage.login(logindata.username, logindata.password);
    
    await loginPage.verifyLoginSuccess()
    // Navigate to PIM and add employee
    await dashboardPage.navigateToAdmin();
   
    await addjobtitle.navigatetoAddJobtitle()

    let randomtext = (Math.random() + 1).toString(36).substring(7);

    await addjobtitle.addjobTitle(addjobtitledata.jobtitle+randomtext, addjobtitledata.jobdescription)

    await addjobtitle.verifyJobtitleCreationSuccess()

});
