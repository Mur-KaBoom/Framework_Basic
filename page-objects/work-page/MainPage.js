const Page = require ('../base-page/Page');
const Collection = require ('../base-elements/Collection');
const SearchPage = require ('../work-page/SearchPage');
const searchPage = new SearchPage ();
const {logger} = require("../../config/logger.config");

class MainPage extends Page {

    constructor () {
        super();
        this.titles = new Collection ('.mcd-publication__text-container h2');
        this.articleButtons = new Collection ('.mcd-publication__text-container .button');
    }

    open () {
        logger.debug(`Opening https://www.mcdonalds.com/ page`);
        return super.open('https://www.mcdonalds.com/');
    }

    async performSearchOf (searchTerm) {
        await this.header.searchIcon.click();
        await searchPage.searchField.waitForElement();
        await searchPage.runSearch(searchTerm);
    }

}

module.exports = MainPage;