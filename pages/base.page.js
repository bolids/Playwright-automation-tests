export class BasePage {
    async clickByXpath(buttonXpath) {
        await this.page.click(buttonXpath);
    }

    async clickByLocator(locator) {
        await locator.click();
    }

    async goto() {
        await this.page.goto(this.pageURL);
    }

    async fieldsValuesCheck(foundField) {
        let actual = await foundField.inputValue();
        console.log(actual);
        return actual;
    }
}
