const { browser } = require("protractor");
const { logger } = require("../../config/logger.config");


class Collection {

    constructor (collectionName,selector) {
        this.collection = element.all(by.css(selector));
        this.collectionName = collectionName;
    }

    async getCount () {
        const collectionCount = await this.collection.count();
        logger.debug(`Get collection count. Collection count is ${collectionCount}`);
        return collectionCount;
    }

    async getText () {
        const getTextArray = await this.collection.getText();
        logger.debug(`Get array of texts in ${this.collectionName}: ${getTextArray}`);
        return getTextArray;
    }

    waitForElement () {
        logger.debug(`Waiting for ${this.collectionName}`);
        return browser.wait(ExpectedConditions.presenceOf(this.collection), 30000);
    }

    async clickTextInCollection (textToClick) {
        const arrayOfCollectionText = await this.collection.getText();
        const elementToClick = arrayOfCollectionText.indexOf(textToClick);
        logger.debug(`Remembered index of element with ${textToClick} text is ${elementToClick}`);
        if(elementToClick === -1) {
            throw new Error (`No element with expected text ${textToClick}`);
        }
        await this.highlightWithJS(this.collection.get(elementToClick));
        logger.debug(`Click ${textToClick} text in ${this.collectionName}`);
        return this.collection.get(elementToClick).click();
    }

    async clickElementByNumber (numberToClick) {
        const collectionCount = this.collection.count();
        if (numberToClick <= collectionCount && numberToClick > 0) {
            logger.debug(`Click elemnt #${numberToClick} in ${this.collectionName} collection`);
            return this.collection.get(numberToClick).click();
        } else {
            throw new Error (`${numberToClick} is out of array boundaries`)
        }
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
}

module.exports = Collection;