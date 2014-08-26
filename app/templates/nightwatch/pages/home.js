var selectors = require('../../../tests/system/pageObjects/selectors');

var Home = require('../../../tests/system/pageObjects/home');

var home;

module.exports = {
    'setUp': function(browser) {
        browser.preview();

        home = new Home(browser);
    },

    'Home - Verify Elements Present': function(browser) {
        // Page level tests go here, product index, PDP, etc
        // Change to the selector for your header
        browser
            .verify.elementsPresent(
            selectors.body
        )
            .end();
    }
};
