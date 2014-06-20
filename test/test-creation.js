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
        'Gruntfile.js'
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
        'tests/system/nightwatch.json',
        'tests/system/site.json',
        'tests/system/components/header.js',
        'tests/system/components/footer.js',
        'tests/system/pages/index.js',
        'tests/system/workflows/checkout.js'
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
