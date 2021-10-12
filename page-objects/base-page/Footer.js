const Element = require('../base-elements/Element');
const Collection = require('../base-elements/Collection');

class Footer {
    constructor () {
        this.socialLinks = new Collection ('.footer-social-link');
        this.appleAppStoreButton = new Element ('.icon-apple-app-store');
        this.googlePlayButton = new Element ('.icon-google-play-store');
        this.navigationLinks = new Collection ('.mcd-global-footer__legal .links__item');
        this.copyright = new Element ('.copyright');
        this.leavingMcDonaldsPopup = new Element ('.mcd-legal-bumper');
        this.leavingCancelButton = new Element ('.mcd-legal-bumper .mcd-generic-popup__button--cancel');
        this.leavingContinue = new Element ('.mcd-legal-bumper .mcd-generic-popup__button--continue');
    }
}

module.exports = Footer;