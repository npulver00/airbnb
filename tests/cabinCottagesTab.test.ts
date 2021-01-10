import { Airbnb } from './airbnbObject/airbnbObject';
const page = new Airbnb();



  describe("Airbnb: Cabin & Cottages", ()=>{

    beforeEach(async () => {
        await page.navigate();
      });
    afterAll(async () => {
        await page.quit();
      });

      it("Find a rental home on Cabins & Cottage page", async()=>{
          console.log("Cabin")

      });


  });