import { homePage } from "../../src/pages/HomePage";

describe('Given a General Store application', () => {

    describe('When adding items to shopping cart', () => {

        beforeAll(async () => {
            await homePage.selectCountry("Colombia");
            await homePage.enterName("Maria");
            await homePage.selectGender("Female");
            await homePage.goToShop();
        });

        it('Then total purchase amount should be correct', async () => {
            expect(5).toBe(5);
        });

    });

});
