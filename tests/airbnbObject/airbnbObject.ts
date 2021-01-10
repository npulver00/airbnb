import { Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver";
// import { elementLocated } from "selenium-webdriver/lib/until";
// const chromedriver = require("chromedriver");




export class Airbnb {
    driver: WebDriver;
    homePage: string = "https://www.airbnb.com/";
    // url: any;

    /*searchAirbnb*/

    location: By = By.css("#bigsearch-query-detached-query");
    locationOne: By = By.xpath(`//input[@class="_1xq16jy"]`);
    checkIn: By = By.css("._1akb2mdw")[0];
    pickStartDate: By = By.css("._f8btejl")[1];

    checkOut: By = By.css("._1akb2mdw")[1];
    pickEndDate: By = By.css("._f8btejl")[5]

    guestButton: By = By.css("._37ivfdq`");
    plusOneAdult: By = By.css("._7hhhl3")[1];
    subtractOneAdult: By = By.css("._7hhhl3")[0];

    clearGuest: By = By.css("._phnprf")[1];

    searchButton: By = By.css("._163rr5i");
    query: By = By.css("._8s3ctt")[0];
    reserve: By = By.css("._19di23v")[0];

    homeLogo: By = By.css(""); 
    // Logo changes each name for class

    /*experiences*/

    experiencesButton: By = By.css("._1ea7qej")[1];

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

    async quit(): Promise <void> {
        return this.driver.quit();
    };

}