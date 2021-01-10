import { Airbnb } from './airbnbObject/airbnbObject';
const page = new Airbnb();



  describe("Airbnb: Search Location, Date, Guests", ()=>{

    beforeEach(async () => {
        await page.navigate();
      });
    // afterAll(async () => {
    //     await page.quit();
    //   });

      it("Search location, date & guests", async()=>{
          await page.inputCity(`Sedona \n`);
          await page.clickStartDate();
          await page.clickEndDate();
          await page.clickGuest();
          await page.addAdult();
          await page.addAdult();
          await page.clickSearch();
          await page.clickHouse();
        //   await page.clickReserve();
        //   await page.clearGuestInput()

    });
    //   it("CLear and change Location", async()=>{
    //     console.log("Search location")

    // });
    //   it("Clear Guests X", async()=>{
    //     console.log("Search location")

    // });


  });