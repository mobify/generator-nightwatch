var selectors = require('../../../tests/system/pageObjects/selectors');

var Footer = require('../../../tests/system/pageObjects/footer');

var footer;

module.exports = {
    'setUp': function(browser) {
        browser.preview();

        footer = new Footer(browser);
    },

    'Footer - Verify Elements Present': function(browser) {
        // Resuable component tests go here
        // Change to the selector for your footer
        browser
            .verify.elementsPresent(
            selectors.body
        )
            .end();
    }
};
