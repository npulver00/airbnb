import { Airbnb } from './airbnbObject/airbnbObject';
const page = new Airbnb();



  describe("Airbnb: Search Location, Date, Guests", ()=>{

    beforeEach(async () => {
        await page.navigate();
      });
    afterAll(async () => {
        await page.quit();
      });

      it("Search location, date & guests", async()=>{
          console.log("Search location")

    });
      it("CLear and change Location", async()=>{
        console.log("Search location")

    });
      it("Clear Guests X", async()=>{
        console.log("Search location")

    });


  });