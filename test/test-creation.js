/*global describe, beforeEach, it */
'use strict';
var path = require('path');
var helpers = require('yeoman-generator').test;

describe('nightwatch generator', function () {
  beforeEach(function (done) {
    helpers.testDirectory(path.join(__dirname, 'temp'), function (err) {
      if (err) {
        return done(err);
      }

      this.app = helpers.createGenerator('nightwatch:app', [
        '../../app'
      ]);
      done();
    }.bind(this));
  });

  it('creates expected files', function (done) {
    var expected = [
      // add files you expect to exist here.
      'package.json',
      'settings.json'
    ];

    helpers.mockPrompt(this.app, {
      'someOption': true
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
      helpers.assertFile(expected);
      done();
    });
  });

  it('creates the nightwatch files', function(done) {
    var expected = [
        'tests/components/header.js',
        'tests/components/footer.js',
        'tests/pages/index.js',
        'tests/workflows/checkout.js'
    ];

    helpers.mockPrompt(this.app, {
        'projectName': 'test-project',
        'libraryVersion': '1.0.0'
    });
    this.app.options['skip-install'] = true;
    this.app.run({}, function () {
        helpers.assertFile(expected);
        done();
    });
  });
});
