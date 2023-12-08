import { BasePage } from './base.page';

export class ResetPasswordSuccessPage extends BasePage {

    constructor(page) {
        super();

        this.page = page;
        this.resetPasFormNameLocator = page.getByRole('heading', { name: 'Reset Password link sent' });
    }
}
