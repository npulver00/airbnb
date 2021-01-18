import { convertToObject, isBreakStatement } from 'typescript';
import { Airbnb } from './airbnbObject/airbnbObject';
import * as vacations from "./vacations.json";
const page = new Airbnb();




  describe("Airbnb: Search Location, Date, Guests", ()=>{

    beforeEach(async () => {
        await page.navigate();
      });
    // afterAll(async () => {
    //     await page.quit();
    //   });


      vacations.forEach((go) => {
       it("Search location, startDate, endDate & guest", async()=>{
       await page.addVacation(go);

             /* Location */
       let city = await page.verifyLocation("Sedona");
       expect(go.location).toEqual(city); 

           /* StartDate, EndDate, Guest */

        // const sedonaHouse = "Big Hit UltimateView Vortex Retreat, Salt Pool";
        const sedonaHouse ="Amazing Views in the Heart of West Sedona"
        await page.clickHouse(sedonaHouse); 

        let data = await page.verifyDatesGuest();

        let starts = go.startDate
        let start1 = starts.split("-")

        let dataStart1 = data[0].split("/")
    let word;
     switch (dataStart1[0]){
        case "1":
           word = "01"
            break;
        case "2":
            word = "02"
            break;     
     }

     if(word === start1[1]){
        expect(true).toBeTruthy();
     } else{
       return  console.log("failed")
     }


    //  if(word === start1[1]){
    //     expect(true).toBeTruthy();
    //      if(dataStart1[1] === start1[2]){
    //         expect(true).toBeTruthy();
    //          if(dataStart1[2] === start1[0]){
    //             expect(true).toBeTruthy();
    //          };
    //      };
    //  } else{
    //    return  expect(false).toBeFalsy();
    //  }
    
        expect(data[2]).toEqual("2 guests")
  
          });
    });
   
  });