import { BasePage } from '../pages/base.page';

export class LoginPage extends BasePage {
    constructor(page) { 
        super();

        this.page = page;
        this.pageURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

        //this.userNameInputLocator = page.locator('//input[@name = "username"]')//independent from locale
        this.userNameInputLocator = page.getByPlaceholder("username");//locale dependent
        //this.userPasswordInputLocator = page.locator('xpath=//input[@name = "password"]')//independent from locale
        this.userPasswordInputLocator = page.getByPlaceholder("password");//locale dependent
        this.loginSubmitButtonXpath = "//button[@type='submit']";
        this.actualCredsValidationResultInfoLocator = "//div[@class='oxd-alert-content oxd-alert-content--error']";
        this.forgotPasswordLocator = "//p[@class='oxd-text oxd-text--p orangehrm-login-forgot-header']";
        this.actualCredsValidationResultInfoLocator = page.getByText('Invalid credentials');
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }

    async setUserName(username) {
        await this.userNameInputLocator.fill(username);
    }

    async setUserPassword(password) {
        await this.userPasswordInputLocator.fill(password);
    }
}
