import { test, expect } from '@playwright/test';
const { LoginPage } = require('../pages/login.page');
const { LoginStep } = require('../steps/login.step');
const { DashboardPage } = require('../pages/dashboard.page');
const loginInfo = JSON.parse(JSON.stringify(require('./LoginTestData.json')))

test.describe('First Playwright Tests - Auth to App and check page name and url', () => {

    test('Login Test', async ({page}) => {
        //Arrange
        const loginPage = new LoginPage(page);
        const loginStep = new LoginStep(page);
        const dashboardPage = new DashboardPage(page);

        const expectedTitle = "OrangeHRM";
        const expectedURL = "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index";
        const expectedText = "Dashboard";

        //Act

        //Login Steps (commented because of calling the login steps from loginStep.js)
        // await loginPage.goto();
        // await loginPage.setUserName(loginInfo.username);
        // await loginPage.setUserPassword(loginInfo.password);
        // await loginPage.clickByXpath(loginPage.loginSubmitButtonXpath);

        await loginStep.login(loginInfo.username, loginInfo.password);
        console.log("Set user name and password: " + loginInfo.username +  ", " + loginInfo.password);

        await page.waitForTimeout(3000);

        //Assert
        const actualURL = page.url();
        console.log("actualURL: " + actualURL);
        await expect(page).toHaveURL(expectedURL);

        const actualTitle = await page.title();
        console.log("actualTitle: " + actualTitle);
        expect(expectedTitle).toBe(actualTitle);

        const actualText = await dashboardPage.dashboardTextLocator.textContent();
        console.log("actualText: " + actualText)
        await expect(dashboardPage.dashboardTextLocator).toHaveText(expectedText);
    });
});
