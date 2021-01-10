import { Builder, By, Capabilities, until, WebDriver, WebElement } from "selenium-webdriver";
// import { elementLocated } from "selenium-webdriver/lib/until";
// const chromedriver = require("chromedriver");




export class Airbnb {
    driver: WebDriver;
    homePage: string = "https://www.airbnb.com/";
    // url: any;

    /*searchAirbnb*/

    location: By = By.css("#bigsearch-query-detached-query");
    locationOne: By = By.xpath(`//input[@class="_1xq16jy"]`);
    checkIn: By = By.xpath("//div[@data-testid='structured-search-input-field-split-dates-0']");
    pickStartDate: By = By.xpath("//div[@data-testid='datepicker-day-2021-02-02']");

    checkOut: By = By.xpath("//div[@data-testid='structured-search-input-field-split-dates-1']");
    pickEndDate: By = By.xpath("//div[@data-testid='datepicker-day-2021-02-10']")

    guestButton: By = By.css("._37ivfdq");
    plusOneAdult: By = By.xpath("//button[@data-testid='stepper-adults-increase-button']");
    subtractOneAdult: By = By.xpath("//button[@data-testid='stepper-adults-decrease-button']");;

    clearGuest: By = By.xpath("//div[@class='_e296pg']");

    searchButton: By = By.css("._163rr5i");
    query: By = By.xpath("//a[@aria-label='Contemporary Apt at Square Root Vineyard']");
    reserve: By = By.xpath("//span[@class='_19di23v'][1]");

    homeLogo: By = By.css("");
    // Logo changes each name for class

    /*experiences*/

    experiences: By = By.xpath("//span[text()='Experiences']");
    experiencesButton: By = By.xpath("//a[@class='_1gwzhbum']");

    /*cabins&cottages*/

    selectCabinCottages: By = By.xpath("//span[text()='Cabins and cottages']");


    constructor(driver?: WebDriver) {
        if (driver) this.driver = driver;
        else
            this.driver = new Builder()
                .withCapabilities(Capabilities.chrome())
                .build();
    };

    /**
   * Navigates to the URL 
   * @param url string
   */
    async navigate(url?: string): Promise<void> {
        if (url) this.driver.get(url)
        else return this.driver.get(this.homePage);
    };

    async quit(): Promise<void> {
        return this.driver.quit();
    };

    // SearchBar

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };

    async inputCity(location: string): Promise<void> {
        let input = await this.getElement(this.location);
        await this.driver.wait(until.elementIsEnabled(input));
        return input.sendKeys(location)
    };

    async click(elementBy: By): Promise<void> {
        let element = await this.getElement(elementBy);
        await this.driver.wait(until.elementIsEnabled(element));
        return await element.click();
    };

    async clickStartDate(): Promise<void> {
        return await this.click(this.pickStartDate);
    };

    async clickEndDate(): Promise<void> {
        return await this.click(this.pickEndDate);
    };

    async clickGuest(): Promise<void> {
        return await this.click(this.guestButton);
    };

    async addAdult(): Promise<void> {
        return await this.click(this.plusOneAdult);
    };

    async clearGuestInput(): Promise<void> {
        return await this.click(this.clearGuest);
    };

    async clickSearch(): Promise<void> {
        return await this.click(this.searchButton);
    };

    async clickHouse(): Promise<void> {
        return await this.click(this.query);
    };

    // async clickReserve(): Promise<void> {
    //     return await this.click(this.reserve);
    // };


    /* Experience */

    async clickExperience(): Promise<void> {
        return await this.click(this.experiences);
    };


}