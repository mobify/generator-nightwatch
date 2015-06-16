var _ = require('lodash');
var selectors = require('../../../tests/system/pageObjects/selectors');

selectors = _.extend(selectors, {
    //checkout specific selectors go here
});

function Checkout(browser) {
    this.browser = browser;
    this.selectors = selectors;
}

module.exports = Checkout;