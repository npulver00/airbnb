import { Builder, By, Capabilities, until, WebDriver, WebElement } from "selenium-webdriver";
import { elementLocated } from "selenium-webdriver/lib/until";
const chromedriver = require("chromedriver");

// const driver = new Builder().withCapabilities(Capabilities.chrome()).build()



export interface Vacation {
    location: string;
    startDate: string;
    endDate: string;
  }


export class Airbnb {
    driver: WebDriver;
    homePage: string = "https://www.airbnb.com/";
    // url: any;

    /*----searchAirbnb----*/

    location: By = By.css("#bigsearch-query-detached-query");
    checkIn: By = By.xpath("//div[@data-testid='structured-search-input-field-split-dates-0']");
    pickStartDate: By = By.xpath("//div[@data-testid='datepicker-day-2021-02-20']");

    // checkOut: By = By.xpath("//div[@data-testid='structured-search-input-field-split-dates-1']");
    pickEndDate: By = By.xpath("//div[@data-testid='datepicker-day-2021-02-25']")

    guestButton: By = By.css("._37ivfdq");
    plusOneAdult: By = By.xpath("//button[@data-testid='stepper-adults-increase-button']");
    subtractOneAdult: By = By.xpath("//button[@data-testid='stepper-adults-decrease-button']");

    verifyStartdate: By = By.xpath("(//div[@class='_1g8031c'])[1]");
    verifyEnddate: By = By.xpath("(//div[@class='_1g8031c'])[2]");
    verifyGuests: By = By.xpath("//div[@class='_1ir6ymk']/span");

    clearGuest: By = By.xpath("//div[@class='_e296pg']");

    searchButton: By = By.css("._163rr5i");
    // query: By = By.xpath("//a[@aria-label='Thunder Mountain Retreat - Blue Room']");
    reserve: By = By.xpath("//span[@class='_19di23v'][1]");


    dates:By = By.xpath("//*[@class='_11wiged']")


    finalPageLocation: By = By.xpath("//h1[text()='Stays in Sedona']")
    // startDateOption: By = By.xpath( `"//div[@data-testid='datepicker-day-${vacation.startDate}']"`)

    homeLogo: By = By.css("");
    // Logo changes each name for class

    /*---experiences---*/

    experiences: By = By.xpath("//span[text()='Experiences']");
    experiencesButton: By = By.xpath("//a[@class='_1gwzhbum']");

    /*---cabins&cottages---*/

    selectCabinCottages: By = By.xpath("//span[text()='Cabins and cottages']");
    clickCabin: By = By.xpath("(//*[@class='_15tommw'])[1]")


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


 /* <--------General Methods-------> */

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element;
    };

    async click(elementBy: By): Promise<void> {
        let element = await this.getElement(elementBy);
        await this.driver.wait(until.elementIsEnabled(element));
        return await element.click();
    };

  /**
   * returns an element's attribute value after waiting for the element to be visible
   * @param {By} elementBy 
   * @param {string} attribute 
   */

  async getAttribute(elementBy: By, attribute: string): Promise<string> {
    let element = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(element));
    return element.getAttribute(attribute);
  };
   
 /* <--------Search-------> */

    async addVacation(vacation: Vacation) {
        let input = await this.getElement(this.location);
        let startDateOption = `//div[@data-testid='datepicker-day-${vacation.startDate}']`;
        let endDateOption = `//div[@data-testid='datepicker-day-${vacation.endDate}']`;
    
            await input.sendKeys(vacation.location, "\n");
            await this.click(By.xpath(startDateOption));
            await this.click(By.xpath(endDateOption));
            await this.click(this.guestButton);
            await this.click(this.plusOneAdult);
            await this.click(this.plusOneAdult);
            await this.click(this.searchButton);
            return this

    };

    async verifyLocation(city): Promise<any> {
        let theCity = `//*[text()='${city}']`;
        await this.driver.wait(until.elementLocated(By.xpath(theCity)));
        let location = await this.driver.findElement(By.xpath(theCity)).getText();
        return location
    };

    async clickHouse(name: string): Promise<void> {
        let query = `//a[@aria-label='${name}']`;
        return await this.click(By.xpath(query));
    };

    async verifyDatesGuest(): Promise<any> {
        await this.driver.get("https://www.airbnb.com/rooms/30586386?adults=2&check_in=2021-02-20&check_out=2021-02-25&source_impression_id=p3_1610940096_ISnE%2FILZmRwTPIC7&guests=1")
    await this.driver.wait(until.elementLocated(By.xpath("//div[@class='_1g8031c']")));

    let getDatesGuest: Array<string> =[]

     let  start =  await this.driver.findElement(By.xpath("(//div[@class='_1g8031c'])[1]")).getText();
     let  end =  await this.driver.findElement(By.xpath("(//div[@class='_1g8031c'])[2]")).getText();
     let  guests =  await this.driver.findElement(By.xpath(" //div[@class='_1ir6ymk']/span")).getText();
     getDatesGuest.push(start,end, guests);
       return getDatesGuest;
    }

    //  async verifyLocation (city: string): Promise<void> {
    //    let finalPageLocation = `//h1[text()='Stays in ${city}']`
    //   await this.driver.findElement(By.xpath(finalPageLocation));
  
    // }

      // async clearGuestInput(): Promise<void> {
    //     return await this.click(this.clearGuest);
    // };

   

    // async  verifySearchData(){
    //     // await this.driver.sleep(500);
    //     await this.driver.wait(until.elementLocated(By.xpath('//*[text()="Sedona"]')));
    //     let myText = await this.driver.findElement(By.xpath('//*[text()="Sedona"]')).getText()
    //     let myTextOne = await this.driver.findElement(By.xpath('//div[@class="_1g5ss3l"])[2]')).getText()
    //     console.log("mytext: ", myText)


    // //    const searchLocation= await (await (await driver).findElement(By.xpath('//div[text()="Sedona"]'))).getText()
    //     // let searchLocation = await this.driver.findElement(By.xpath('//div[text()="Sedona"]'));
    //     // searchLocation.location = await this.getAttribute(By.xpath(('//div[text() = "Sedona"]')), "value");
    //     // searchLocation.startDate = await this.getAttribute(this.dates, "value");
    //     // searchLocation.endDate = await this.getAttribute(this.pickEndDate, "value");
    //     // $x(`(//div[@class="_1g5ss3l"])[1]`)

    //     return myText;
    //   }

    // async clickReserve(): Promise<void> {
    //     return await this.click(this.reserve);
    // };

    


    /* <--------Experience-------> */

    async clickExperience(): Promise<void> {
        return await this.click(this.experiences);
    };


    /* <----------Cabin------------> */

    async getCabinAndCottages(): Promise<any> {
        /* Make sure the element exist and loads before clicking on the element */
        await this.driver.sleep(500);
        await this.driver.wait(until.elementLocated(this.selectCabinCottages));
        let getCabinCottagesOption = await this.driver.findElement(this.selectCabinCottages).getText();
        return getCabinCottagesOption
    };

    async selectCabinPageloads(): Promise<any> {
        /* <---- Issues with the page loading fast enough to see the selectors ----> */
         await this.driver.get('https://www.airbnb.com/s/homes?ne_lat=55.00787453041205&ne_lng=-86.23464340984017&sw_lat=11.889325469587948&sw_lng=-137.91195659015983&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=4&property_type_id%5B%5D=22&property_type_id%5B%5D=60&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE');

         await this.driver.wait(until.elementLocated(By.xpath("//span[text()='Price']")));
        
         let  start =  await this.driver.findElement(By.xpath("//span[text()='Price']")).getText();
         return start;
    };

    async checkFinalPage(): Promise<any> {

        await this.driver.get("https://www.airbnb.com/rooms/27830332?source_impression_id=p3_1610927480_xwF5029Kfs5RutJd&guests=1&adults=1");
        await this.driver.sleep(500);
        await this.driver.wait(until.elementLocated(By.xpath("//div[text()='Entire home']")));

        let final: Array<string> =[]

        let check1 = await this.driver.findElement(By.xpath("//div[text()='Entire home']")).getText();
        let check2 = await this.driver.findElement(By.xpath("//div[text()='Self check-in']")).getText();
        let check3 = await this.driver.findElement(By.xpath("//div[text()='Cancellation policy']")).getText();
        let check4 = await this.driver.findElement(By.xpath("//div[text()='House rules']")).getText();
        final.push(check1, check2, check3, check4);
      
         return final;
    };

    async checkResultPage() {
        let result: Array<string> =[];
        await this.driver.wait(until.elementLocated(By.xpath("//div[@class='_1isz8pdq']")));
        let filterresults = await this.driver.findElements(By.xpath("//div[@class='_1isz8pdq']"));
        for(let i= 0; i < filterresults.length; i++){
            await result.push(await filterresults[i].getText())
        };
        return result;
    };



}