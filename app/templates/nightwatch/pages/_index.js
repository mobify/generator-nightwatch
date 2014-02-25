module.exports = {
  setUp : function(c) {
    console.log('Runs before each test...');
  },

  tearDown : function() {
    console.log('Runs after each test...');
  },

  'Enter query' : function (client) {
    client
      .url('http://google.com')
      .waitForElementVisible('input[type=search]', 10000)
      .setValue('input[type=search]', 'mobify')
      .waitForElementVisible('button[name=btnG]', 10000);
  },

  'Show search results' : function (client) {
    client
      .click('button[name=btnG]')
      .pause(1000)
      .verify.containsText('#main', 'Mobify')
      .end();
  }
};
