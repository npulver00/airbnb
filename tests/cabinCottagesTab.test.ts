import { Airbnb } from './airbnbObject/airbnbObject';
const page = new Airbnb();
import { Builder, By, Capabilities, until } from "selenium-webdriver"




describe("Airbnb: Cabin & Cottages", () => {

  beforeEach(async () => {
    await page.navigate();
  });
  afterAll(async () => {
    await page.quit();
  });

  it("Find a rental home on Cabins & Cottage page", async () => {
    await page.getCabinAndCottages();
    await page.click(By.xpath("//span[text()='Cabins and cottages']"));
    await page.driver.sleep(500);
    await page.selectCabinPageloads();
    let allresults = await page.checkResultPage();

    let actualresults = await page.driver.findElement(By.xpath("//div[@class='_1isz8pdq']")).getText();

    expect(allresults[0]).toBe(actualresults);
  });

  it("Verify last page", async () => {
    let result = await page.checkFinalPage()

    expect(result[0]).toBe("Entire home");
    expect(result[1]).toBe("Self check-in");
    expect(result[2]).toBe("Cancellation policy");
    expect(result[3]).toBe("House rules");
  });

  it("Volume of results", async () => {
    await page.getCabinAndCottages();
    await page.click(By.xpath("//span[text()='Cabins and cottages']"));
    await page.driver.sleep(500);
    await page.selectCabinPageloads();
    let results = await page.checkResultPage();
    let total = results.length;

    expect(total).toBeGreaterThan(0);
  });


});