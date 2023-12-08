import { test, expect } from '@playwright/test';
import { LoginStep } from '../steps/login.step';
import { MyInfoPersonalDetPage } from '../pages/myInfoPersonalDet.page';
const loginInfo = JSON.parse(JSON.stringify(require('./LoginTestData.json')));
const fieldsDataArray = JSON.parse(JSON.stringify(require('./MyPersDetFieldsTestData.json')));

test.describe('Auth to app > My contact details updating and updates checking', () => {

    test.only('Contact details updating and verifying test', async ({page}) => {
        // Arrange
        let loginStep = new LoginStep(page);
        let myInfoPersonalDetPage = new MyInfoPersonalDetPage(page);

        console.log("User name:" + loginInfo.username);
        console.log("User pass:" + loginInfo.password);
        
        const fieldsArray = myInfoPersonalDetPage.fieldsArray
        const expectedCountry = "Ukraine";

        // Act
        console.log("Open login URL and auth to app with valid credentials");
        await loginStep.login(loginInfo.username, loginInfo.password);
        console.log("Set user name and password: " + loginInfo.username +  ", " + loginInfo.password);
        console.log("Navigate to MyInfo page")
        await myInfoPersonalDetPage.clickByXpath(myInfoPersonalDetPage.myInfoLocatorXpath);
        console.log("Navigate from MyInfo page to ContactDetails page")
        await myInfoPersonalDetPage.clickByXpath(myInfoPersonalDetPage.myInfoContDetLocatorXpath);
        await page.waitForTimeout(500);
       
        console.log("Set data to the fields")
        for (let i = 0; i < fieldsArray.length; i++) {
           await myInfoPersonalDetPage.fieldsFillingGettingValue(fieldsArray[i],fieldsDataArray[i]) 
        }

        console.log("Country Dropdown: select and set value")
        await myInfoPersonalDetPage.selectCountry();
        console.log("Submit filled in form page");
        await myInfoPersonalDetPage.clickByXpath(myInfoPersonalDetPage.mySaveBtnLocatorXpath);
        console.log("Toast waiting appearance after form submitting");
        await myInfoPersonalDetPage.toastWait(); 
        await page.waitForTimeout(1000);
        console.log("Page refresh");
        await page.reload();
        await page.waitForTimeout(1000);
        
        console.log("Check fields' values");
        for (let i = 0; i < fieldsArray.length; i++) {
            let actual = await myInfoPersonalDetPage.fieldsFillingGettingValue(fieldsArray[i])
            // Assert for fields saved data
            expect(fieldsDataArray[i]).toBe(actual);
            console.log("Field value: " + fieldsArray[i] + " = " + actual);  
        }

        let actualCountryFieldValue = await page.textContent(myInfoPersonalDetPage.myCountryFieldInputLocatorXpath);
        console.log("ActualCountryFieldValue: " + actualCountryFieldValue);
        //Assert for selected/saved country
        expect(expectedCountry).toBe(actualCountryFieldValue); 
    });
});
