var _ = require('lodash');
var selectors = require('../../../tests/system/pageObjects/selectors');

selectors = _.extend(selectors, {
    //home page specific selectors go here
});

function Home(browser) {
    this.browser = browser;
    this.selectors = selectors;
}

module.exports = Home;