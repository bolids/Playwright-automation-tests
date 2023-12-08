import { BaseStep } from '../steps/base.step';
import { ResetPasswordPage } from '../pages/resetPassword.page';
import { LoginPage } from '../pages/login.page';

export class ResetPasswordSteps extends BaseStep {
    constructor(page) {
        super();
        this.loginPage = new LoginPage(page);
        this.resetPasswordPage = new ResetPasswordPage(page);
    }

    async resetPasswordSuccess(page, username) {
        await this.loginPage.goto();
        await this.resetPasswordPage.clickByLocator(this.resetPasswordPage.forgotPasLinkLocator);
        await this.resetPasswordPage.usernameResetPFieldLocator.fill(username);
        await this.resetPasswordPage.clickByLocator(this.resetPasswordPage.submitBtnResetPLocator)
    }
}
