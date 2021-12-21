import { pageHelper } from "../helpers/pageHelper";

class HomePage {

    nameFieldLocator: string = "id:nameField";
    countryDropDownLocator: string = "id:spinnerCountry";
    goToShopButton: string = "id:btnLetsShop";

    public HomePage() {
    }

    public async selectGender(gender: string) {
        const genderOptionElement = await pageHelper.getAndroidElementByText(gender);
        await genderOptionElement.click();
    }

    public async enterName(userName: string) {
        const nameField = await $(this.nameFieldLocator);
        await nameField.setValue(userName);
    }

    public async selectCountry(countryName: string): Promise<void> {
        await $(this.countryDropDownLocator).click();
        if(driver.isAndroid){
            const countryElement = await pageHelper.getAndroidElementScrollingByText(countryName);
            await countryElement.click();
        }
    }

    public async goToShop() {
        await $(this.goToShopButton).click();
    }

}

export const homePage: HomePage = new HomePage();