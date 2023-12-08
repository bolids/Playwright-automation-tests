import { chromium, test, expect, getByRole } from '@playwright/test';
import { LoginPage } from '../pages/login.page';
import { LoginStep } from '../steps/login.step';
const creds = JSON.parse(JSON.stringify(require('./LoginCredsValidationTestData.json')))

test.describe('Playwright Test - Auth to App', () => {
    test.only('Login Test - Auth credentials validation', async ({page}) => {
        // Arrange 
        let loginPage = new LoginPage(page);
        let loginStep = new LoginStep(page);

        let expCredsValidText = "Invalid credentials";
        let actualCredsValidationResultInfo = null;

        // Act
       console.log("Open URL");
       await loginPage.goto();

       //await page.pause();

       console.log("Try to auth with wrong creds");
       for (let i = 0; i < creds.length; i++) {
            await loginStep.login(creds[i][0],creds[i][1]);
            await page.waitForTimeout(2000);
            
            console.log("Check if the expected info is displayed for attempt to auth with wrong creds");
            try {
                actualCredsValidationResultInfo = await loginPage.actualCredsValidationResultInfoLocator;
                await expect(loginPage.actualCredsValidationResultInfoLocator).toBeVisible();
                console.log("actualCredsValidationResultInfo: " + actualCredsValidationResultInfo);
            }

            catch (error) {
                console.log("Error Info: " + error);
                actualCredsValidationResultInfo = false;
            }

            if (actualCredsValidationResultInfo) {
                //Assert
                await expect(loginPage.actualCredsValidationResultInfoLocator).toHaveText(expCredsValidText);
            }

            else {
                console.log("Invalid credentials window doesn't exist")
            }

            //Assert
            expect(actualCredsValidationResultInfo).toBeTruthy();
        }
    });
});
