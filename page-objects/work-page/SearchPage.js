const Collection = require("../base-elements/Collection");
const Element = require("../base-elements/Element");
const Page = require("../base-page/Page");

class SearchPage extends Page {
    constructor () {
        super();
        this.searchField = new Element ('Search Field','.mcd-search__input--main[name=search]');
        this.runSearchButton = new Element ('Run Search Button','.mcd-search__button');
        this.clearSearchField = new Element ('Clear Search Field Button','.mcd-search__input--close-btn');
        this.searchResults = new Collection ('Search Results','.mcd-card--result__without-image');
        this.readMoreAboutResultButtons = new Collection ('Read More About Results','.small.link');
        this.loadMoreResultsButton = new Element ('Load More Results Button','.btn[ng-click="loadSearchResults(false)"]');
        this.noSearchResults = new Element ('No Search Results Message','.mcd-search__no-item');
        this.resultsAmount = new Element ('Results Amount','.mcd-filter__carousel__item-link .ng-binding:last-child');
        this.defaultSearch = new Element ('Default Search', 'input.autocomplete-search-field[name=search]');
    }

    async runSearch(searchTerm) {
        if(this.defaultSearch.elementIsDisplayed){
            await this.searchField.sendKeys(' ');
            await this.clearSearchField.click();
        }
        await this.searchField.sendKeys(searchTerm);
        return this.runSearchButton.click();
    }

}

module.exports = SearchPage;