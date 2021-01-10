import { Airbnb } from './airbnbObject/airbnbObject';
const page = new Airbnb();



describe("Airbnb: Experiences", () => {

    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.quit();
    });

    it("Find an Experiences", async () => {
        await page.clickExperience()

    });


});