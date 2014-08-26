var selectors = require('../../../tests/system/pageObjects/selectors');

var Checkout = require('../../../tests/system/pageObjects/checkout');

var checkout;

module.exports = {
    'setUp': function(browser) {
        browser.preview();

        checkout = new Checkout(browser);
    },

    'Checkout test': function(browser) {
        // Workflows such as a shopping cart checkout go here
        browser
            .verify.elementsPresent(
            selectors.body
        )
            .end();
    }
};
