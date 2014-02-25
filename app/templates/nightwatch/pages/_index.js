module.exports = {
  setUp : function(browser) {
    console.log('Runs before each test...');
  },

  tearDown : function() {
    console.log('Runs after each test...');
  },

  'Enter query' : function (browser) {
    browser
      .url('http://google.com')
      .waitForElementVisible('input[type=search]', 10000)
      .setValue('input[type=search]', 'mobify')
      .waitForElementVisible('button[name=btnG]', 10000);
  },

  'Show search results' : function (browser) {
    browser
      .click('button[name=btnG]')
      .pause(1000)
      .verify.containsText('#main', 'Mobify')
      .end();
  }
};
