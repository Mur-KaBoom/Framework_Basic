const Element = require('../base-elements/Element');
const Collection = require('../base-elements/Collection');

class Header {
    constructor () {
        this.mainLinks = new Collection ('Main Links','.desktop-nav a.main-link');
        this.additionalLinks = new Collection ('Additional Links','.desktop-nav a.link');
        this.languageItems = new Collection ('Language Items','.desktop-nav .language-item');
        this.orderNowButton = new Element ('Order Now Button','.desktop-nav .external-delivery');
        this.searchIcon = new Element ('Search Icon','.desktop-nav .icon-search');
        this.viewFullMenuButton = new Element ('View Full Menu Button','.desktop-nav .view-full-menu.d-none .button');
        this.logo = new Element ('Logo','.desktop-nav .component-logo');
        this.spanishLanguageButton = new Element ('Spanish Language Button','.desktop-nav .external-delivery[aria-label = "Ordena Ahora"]');
        this.englishLanguageButton = new Element ('English Language Button','.desktop-nav .external-delivery[aria-label = "Order Now"]');
    }
}

module.exports = Header;