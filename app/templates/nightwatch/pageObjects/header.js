var _ = require('lodash');
var selectors = require('../../../tests/system/pageObjects/selectors');

selectors = _.extend(selectors, {
    //header specific selectors go here
});

function Header(browser) {
    this.browser = browser;
    this.selectors = selectors;
}

module.exports = Header;