import { Airbnb } from './airbnbObject/airbnbObject';
const page = new Airbnb();



describe("Airbnb: Experiences", () => {

    beforeEach(async () => {
        await page.navigate();
    });
    afterAll(async () => {
        await page.quit();
    });

    it("Find an Experiences Zoom in", async () => {
        await page.clickExperience();
        await page.driver.sleep(500);
        await page.takeScreenshot("Pre_Map_Zoomed_In");
        await page.clickZoomIn();
        await page.clickZoomIn();
        await page.takeScreenshot("Post_Map_Zoomed_In");
    });

    it("Find an Experiences Zoom out", async () => {
        await page.clickExperience();
        await page.driver.sleep(500);
        await page.takeScreenshot("Pre_Map_Zoomed_Out");
        await page.clickZoomOut();
        await page.clickZoomOut();
        await page.takeScreenshot("Post_Map_Zoomed_Out");
    });

    it("Find an Experiences", async () => {
        await page.clickExperience();
        await page.driver.sleep(500);
        await page.takeScreenshot("Pre_OneExperiences");
        await page.clickOnOneExperience();
    });
});