import { BaseStep } from '../steps/base.step';
import { LoginPage } from '../pages/login.page';

export class LoginStep extends BaseStep {
    constructor(page) {
        super();
        this.loginPage = new LoginPage(page);
    }

    async login(username, password) {
        await this.loginPage.goto();
        await this.loginPage.setUserName(username);
        await this.loginPage.setUserPassword(password);
        await this.loginPage.clickByXpath(this.loginPage.loginSubmitButtonXpath);
    }
}