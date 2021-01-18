import {Builder, By, Capabilities, until} from "selenium-webdriver"

const chromedriver = require("chromedriver")

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

// test("Example", async () => {
//     await driver.get('https://www.airbnb.com/s/Sedona--AZ--United-States/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&query=Sedona%2C%20AZ%2C%20United%20States&place_id=ChIJDbBC-TKhLYcR_Y5s-iPFSFU&checkin=2021-01-28&checkout=2021-02-24&source=structured_search_input_header&search_type=autocomplete_click')
//     let myText = await (await (await driver).findElement(By.xpath('//div[text()="Sedona"]'))).getText()
//     // console.log(myText)
//     await (await driver).quit()
// })
test("Example", async () => {
    await driver.get('https://www.airbnb.com/s/homes?ne_lat=55.00787453041205&ne_lng=-86.23464340984017&sw_lat=11.889325469587948&sw_lng=-137.91195659015983&room_types%5B%5D=Entire%20home%2Fapt&property_type_id%5B%5D=4&property_type_id%5B%5D=22&property_type_id%5B%5D=60&search_type=NAVIGATION_CARD&title_type=CURATED_PROPERTY_TYPE')
    let myText = await (await (await driver).findElement(By.xpath('//*[@target="listing_35263487"]')))
    // console.log(myText)
    // await (await driver).quit()
})