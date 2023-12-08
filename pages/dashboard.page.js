import { BasePage } from '../pages/base.page';

export class DashboardPage extends BasePage {
    constructor(page) {
        super();
        this.page = page;
        this.dashboardTextLocator = page.getByRole('heading', { name: 'Dashboard' });
    } 
}
