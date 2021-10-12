const { expect } = require("chai");
const { browser } = require("protractor");
const LocationPage = require("../page-objects/work-page/LocationPage");
const MainPage = require("../page-objects/work-page/MainPage");
const mainPage = new MainPage();
const locationPage = new LocationPage();

describe('McDonalds Locate Page: ', function () {

    beforeEach(async function () {
        this.timeout(10000)
        await mainPage.open();
    });

    it('should display Refresh Map Location button after map drag&drop', async function () {
        await mainPage.header.mainLinks.clickTextInCollection('Locate');
        await locationPage.locationFrame.waitForElement();
        await locationPage.moveMap();
        browser.sleep(5000);
        expect(await locationPage.refreshLocationButton.elementIsDisplayed());
    });

});