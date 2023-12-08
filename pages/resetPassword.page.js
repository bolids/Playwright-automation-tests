import { BasePage } from './base.page';

export class ResetPasswordPage extends BasePage {
    constructor(page) { 
        super();
      
        this.page = page;
        
        this.pageURL = "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login";

        this.forgotPasLinkLocator = page.getByText('Forgot your password?')
        
        this.forgotPasFormNameLocator = page.getByRole('heading', { name: 'Reset Password' }) //header for the form
        //this.forgotPasFormNameLocator = "//form[h6[contains(., 'Reset Password')]]/h6";

        this.usernameResetPFieldLocator = page.getByPlaceholder('Username')
        //this.usernameResetPFieldLocator = "//div[@class='orangehrm-forgot-password-wrapper']//input[@name='username']";

        this.cancelBtnResetPLocator = page.getByRole('button', { name: 'Cancel' });
        //this.cancelBtnResetPLocator = "//div[@class='orangehrm-forgot-password-wrapper']//button[contains(., ' Cancel ')]";
        
        this.submitBtnResetPLocator = page.getByRole('button', { name: 'Reset Password' });
        //this.submitBtnResetPXpath = "//button[contains(., ' Reset Password ')]";
        //this.submitBtnResetPLocator = page.locator(this.submitBtnResetPXpath);
    }
}

