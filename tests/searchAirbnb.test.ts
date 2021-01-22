import { convertToObject, isBreakStatement } from 'typescript';
import { Airbnb } from './airbnbObject/airbnbObject';
import * as vacations from "./vacations.json";
const page = new Airbnb();




describe("Airbnb: Search Location, Date, Guests", () => {

  beforeEach(async () => {
    await page.navigate();
  });
  afterAll(async () => {
    await page.quit();
  });


  vacations.forEach((go) => {
    it("Search location, startDate, endDate & guest", async () => {
      await page.addVacation(go);

      /* Location */
      let city = await page.verifyLocation("Sedona");
      expect(go.location).toEqual(city);

      /* StartDate, EndDate, Guest */

      const sedonaHouse = "Amazing Views in the Heart of West Sedona"
      await page.clickHouse(sedonaHouse);

      let data = await page.verifyDatesGuest();

      let firstDate = go.startDate;
      let start = firstDate.split("-");
      let dataStart = data[0].split("/");


      let endDate = go.endDate;
      let end = endDate.split("-");


      let word;
      switch (dataStart[0]) {
        case "1":
          word = "01"
          break;
        case "2":
          word = "02"
          break;
        case "3":
          word = "03"
          break;
        case "4":
          word = "04"
          break;
        case "5":
          word = "05"
          break;
        case "6":
          word = "06"
          break;
        case "7":
          word = "07"
          break;
        case "8":
          word = "08"
          break;
        case "9":
          word = "09"
          break;
        case "10":
          word = "10"
          break;
        case "11":
          word = "11"
          break;
        case "12":
          word = "12"
          break;
        default:
          word = ""
      }

      expect(word).toContain(start[1]);
      expect(word).toContain(end[1]);
      expect(start[2]).toContain("20");
      expect(end[2]).toContain("25");
      expect(data[2]).toEqual("2 guests");

    });
  });

});