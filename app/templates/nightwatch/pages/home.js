
module.exports = {
    'setUp': function(browser) {
        browser.preview()
    },

    'Home test': function(browser) {
        // Page level tests go here, product index, PDP, etc
        // Change to the selector for your header
        browser
            .verify.elementPresent('body')
            .end();
    }
}
