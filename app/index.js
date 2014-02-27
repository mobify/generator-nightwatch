'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var NightwatchGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.npmInstall();
      }
    });
  },

  askFor: function () {
    console.log(this.yeoman);

    console.log(chalk.magenta('Generating Nightwatch integration test infrastructure.'));
  },

  app: function () {
    this.mkdir('tests');

    this.copy('package.json', 'package.json');
    this.copy('Gruntfile.js', 'GruntFile.js');

    this.directory('nightwatch', 'tests/integration');
    this.template('_site.json', 'tests/integration/site.json');
  },

  projectfiles: function () {
  }
});

module.exports = NightwatchGenerator;
