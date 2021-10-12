const { browser } = require("protractor");
const { logger } = require("../../config/logger.config");

class Element {

    constructor (elementName,selector) {
        this.element = element(by.css(selector));
        this.elementName = elementName;
    }

    async click () {
        this.scrollTo();
        await this.element.click();
        logger.debug(`Click on ${this.elementName}`);
        await this.highlightWithJS(this.element);
    }

    highlightWithJS(elementToHighlight) {
        let background;
        return elementToHighlight.getCssValue("backgroundColor").then(function (color) {
            background = color;
        }).then(function () {
            return browser.executeScript("arguments[0].style.backgroundColor = '" + "red" + "'", elementToHighlight)
        }).then(function () {
            return browser.executeScript("arguments[0].style.backgroundColor = '" + background + "'", elementToHighlight);
        })
    }

    sendKeys (searchTerm) {
        logger.debug(`Sending "${searchTerm}" to ${this.elementName}`);
        return this.element.sendKeys(searchTerm);
    }

    waitForElement () {
        logger.debug(`Waiting for ${this.elementName}`);
        return browser.wait(ExpectedConditions.presenceOf(this.element), 30000);
    }

    elementIsDisplayed () {
        logger.debug(`Checking if ${this.elementName} is displayed`);
        return this.element.isDisplayed();
    }

    async getText () {
        const textOfElement = await this.element.getText();
        logger.debug(`Text of ${this.elementName} is: ${textOfElement}`);
        return textOfElement;
    }

    scrollTo() {
        return this.element.getLocation().then((location) => {
            logger.debug(`Scrolling to ${this.elementName}`);
            return browser.driver.executeScript('window.scrollTo(0,arguments[0]);', location.y);
        });
    }
}

module.exports = Element;