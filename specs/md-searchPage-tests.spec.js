const { expect } = require("chai");
const MainPage = require("../page-objects/work-page/MainPage");
const SearchPage = require("../page-objects/work-page/SearchPage");
const mainPage = new MainPage();
const searchPage = new SearchPage();

describe('McDonalds Search Page: ', function () {

    beforeEach(async function () {
        this.timeout(10000)
        await mainPage.open();
    });

    it('should display search results for valid search query', async function () {
        await mainPage.performSearchOf('Nuggets');
        await searchPage.searchResults.waitForElement();
        expect(await searchPage.searchResults.getCount()).to.be.greaterThan(0);
    });

    it('should display "no search results" for invalid search query', async function () {
        await mainPage.performSearchOf('sldk;aslkd');
        expect(await searchPage.noSearchResults.elementIsDisplayed());
    });

    it('should display more results after click on Load More button', async function () {
        await mainPage.performSearchOf('Nuggets');
        await searchPage.searchResults.waitForElement();
        await searchPage.loadMoreResultsButton.waitForElement();
        let amountOfResultsBeforeLoadMore = await searchPage.searchResults.getCount();
        await searchPage.loadMoreResultsButton.click();
        expect(await searchPage.searchResults.getCount()).to.be.greaterThan(amountOfResultsBeforeLoadMore);
    });
});