

class PageHelper {

    public async getAndroidElementScrollingByText(text: String): Promise<WebdriverIO.Element>{
       const selector = `new UiScrollable(new UiSelector()).scrollIntoView(new UiSelector().textContains(\"${text}\"))`
       return await $(`android=${selector}`);
    }

    /**
     * Method to get android element by text using UiAutomator2
     */
    public async getAndroidElementByText(text: string) {
        const elementSelector = `new UiSelector().text("${text}")`;
        return await $(`android=${elementSelector}`);
    }

    /**
     * switchContext
     */
    public switchContext() {
      driver.switchContext("NATIVE_APP");
    }
}

export const pageHelper: PageHelper = new PageHelper();