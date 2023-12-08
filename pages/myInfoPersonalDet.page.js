import { expect } from '@playwright/test';
import { BasePage } from '../pages/base.page';

export class MyInfoPersonalDetPage extends BasePage {
    constructor(page) {
        super();

        this.page = page;
        this.myInfoLocatorXpath = "//a[@href = '/web/index.php/pim/viewMyDetails']";
        this.myInfoContDetLocatorXpath = "//a[@href='/web/index.php/pim/contactDetails/empNumber/7']";
        this.myCountryFieldInputLocatorXpath = "//div[@class='oxd-select-text oxd-select-text--active']//div[@class='oxd-select-text-input']";
        this.mySaveBtnLocatorXpath = "//div[@class='orangehrm-edit-employee-content']/..//button[@type='submit']";
        this.mytoaster1AppearenceLocatorXpath = "//div[@id='oxd-toaster_1']//div[@aria-live='assertive']";
        this.firstXpathPart = ("//div[label[text() = '");
        this.thirdXpathPart = ("']]//following-sibling::div//input[contains(@class,'oxd-input oxd-input--active')]");
        this.selectedCountryXpath = "//div[@class='oxd-form-row']//div[@class= 'oxd-select-text-input']";
        this.listItemXpath = "//div[@role= 'listbox']//span[text()= 'Ukraine']";
        this.fieldsArray = [
            "Street 2",
            "State/Province",
            "Home",
            "Street 1",
            "City",
            "Work Email",
            "Work",
            "Mobile",
            "Other Email",
            "Zip/Postal Code"
        ];
    }

        async fieldsFillingGettingValue(fieldLabel=null,fieldData=null) {
            let locatorOfSomeField = this.firstXpathPart + fieldLabel + this.thirdXpathPart;
            let foundField = this.page.locator(locatorOfSomeField);
            if (fieldData != null) {
                await foundField.fill(fieldData)
            }
            else {
                return await this.fieldsValuesCheck(foundField)
            }            
        }

        async selectCountry(){
            await this.clickByXpath(this.selectedCountryXpath);
            await this.clickByXpath(this.listItemXpath);
        }

        async toastWait() {
            let toasterElement = this.page.locator(this.mytoaster1AppearenceLocatorXpath);
            await expect(toasterElement).toHaveCount(0);
        }
    }
