var _ = require('lodash');
var selectors = require('../../../tests/system/pageObjects/selectors');

selectors = _.extend(selectors, {
    //footer specific selectors go here
});

function Footer(browser) {
    this.browser = browser;
    this.selectors = selectors;
}

module.exports = Footer;