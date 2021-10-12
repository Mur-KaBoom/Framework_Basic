const Footer = require ("./Footer");
const Header = require ("./Header");
const { browser } = require("protractor");
const { logger } = require("../../config/logger.config");


class Page {
    constructor () {
        this.header = new Header();
        this.footer = new Footer();
    }

    open (path) {
        return browser.get(path);
    }

    wait (waitInMilliseconds) {
        return browser.sleep(waitInMilliseconds);
    }

    async getCurrentUrl () {
        const currentUrl = await browser.getCurrentUrl();
        logger.debug(`Getting current url. Current URL is:${currentUrl}`)
        return currentUrl;
    }

    async getTitle () {
        const currentTitle = await browser.getTitle();
        logger.debug(`Getting current title. Current Title is:${currentTitle}`)
        return currentTitle;
    }  
}

module.exports = Page;