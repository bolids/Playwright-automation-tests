import { test, expect } from '@playwright/test';
import { ResetPasswordPage } from '../pages/resetPassword.page';
import { ResetPasswordSteps } from '../steps/resetPassword.step';
import { ResetPasswordSuccessPage } from '../pages/resetPasSuccess.page';
const loginInfo = JSON.parse(JSON.stringify(require('./LoginTestData.json')))
const expectInfo = JSON.parse(JSON.stringify(require('./ResetPasPOM-AssertData.json')))

let resetPasswordPage;
let resetPasswordSteps;
let resetPasswordSuccessPage;

test.describe('Playwright Tests - Auth to App and check page name and url', () => {
    test.beforeEach(async ({ page }) => {
        resetPasswordPage = new ResetPasswordPage(page);
        resetPasswordSteps = new ResetPasswordSteps(page); 
        resetPasswordSuccessPage = new ResetPasswordSuccessPage(page);
    });

    test('Reset password - FE form validation', async ({page}) => {
       // Act
       console.log("Open URL");
       await resetPasswordPage.goto();
       console.log("Navigate to forgot password");       
       await resetPasswordPage.clickByLocator(resetPasswordPage.forgotPasLinkLocator);
       
       console.log("Check URL for forgot password page: ");
       let actualForgPasURL = page.url();
       await page.waitForTimeout(3000);

       console.log("actualURL: " + actualForgPasURL);
       await expect(page).toHaveURL(expectInfo.expForgPasURL);

       console.log("Check Forgot password Form name: ");
       await expect(resetPasswordPage.forgotPasFormNameLocator).toHaveText(expectInfo.expForgPasFormName);

       console.log("Check UsernameResetPField is displayed/visible: ");
       await expect(resetPasswordPage.usernameResetPFieldLocator).toBeVisible();
       
       console.log("Check UsernameResetPField is editable: ");
       await expect(resetPasswordPage.usernameResetPFieldLocator).toBeEditable();

       console.log("Check Cancel btn on reset password form is displayed/visible: ");
       await expect(resetPasswordPage.cancelBtnResetPLocator).toBeVisible();

       console.log("Check Cancel btn on reset password form is enabled: ");
       await expect(resetPasswordPage.cancelBtnResetPLocator).toBeEnabled();

       console.log("Check Submit reset btn on reset password form is displayed/visible: ");
       await expect(resetPasswordPage.submitBtnResetPLocator).toBeVisible();

       console.log("Check Submit reset on reset password form is enabled: ");
       await expect(resetPasswordPage.submitBtnResetPLocator).toBeEnabled();
    }); 
  
    test('Reset password - BE check', async ({page}) => {
        // Act
        await resetPasswordSteps.resetPasswordSuccess(page, loginInfo.username);
        await page.waitForTimeout(3000);
        
        console.log("Check URL for Success reset password page URL: ");
        const actualSuccessResetPasURL = page.url();
        console.log("actualURL: " + actualSuccessResetPasURL);
        await expect(page).toHaveURL(expectInfo.expSuccessResetPasURL);

        console.log("Check Success reset password Form name: ");
        const actualSuccessResetPasFormName = resetPasswordSuccessPage.resetPasFormNameLocator;
        console.log(await (actualSuccessResetPasFormName.textContent()));
        await expect(actualSuccessResetPasFormName).toHaveText(expectInfo.expSuccessResetPasFormName);
    }); 
});
