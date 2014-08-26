var selectors = require('../../../tests/system/pageObjects/selectors');

var Header = require('../../../tests/system/pageObjects/header');

var header;

module.exports = {
    'setUp': function(browser) {
        browser.preview();

        header = new Header(browser);
    },

    'Header - Verify Elements Present': function(browser) {
        // Resuable component tests go here
        // Change to the selector for your header
        browser
            .verify.elementsPresent(
            selectors.body
        )
            .end();
    }
};
