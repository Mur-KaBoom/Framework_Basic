const Page = require ('../base-page/Page');
const Element = require ('../base-elements/Element');
const { browser, element } = require('protractor');
const { logger } = require("../../config/logger.config");


class LocationPage extends Page {
    constructor () {
        super();
        this.locationFrame = new Element ('Location Frame','rl-map-view');
        this.refreshLocationButton = new Element ('Refresh Location Button','[title="Click to recenter the map"]:not(.recenterMap)');
        this.zoomMapButton = new Element ('Zoom Map Button','.gmnoprint button.gm-control-active:first-child');
        this.locationBar = new Element ('Location Bar','rl-jcr:content-1526839399');
    }

    async moveMap () {
        logger.debug(`Moving map`);
        return browser.actions().click(element(by.id('rl-map-view'))).dragAndDrop(element(by.id('rl-map-view')), {x: -500, y: 0}).perform();
    }

}

module.exports = LocationPage;