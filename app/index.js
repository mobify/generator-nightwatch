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
    this.mkdir('tests/components');

    this.copy('_package.json', 'package.json');
    this.copy('_settings.json', 'settings.json');
    this.copy('_site.json', 'site.json');

    this.copy('_Gruntfile.js', 'GruntFile.js');

    this.copy('_header.js', 'tests/components/header.js');
    this.copy('_footer.js', 'tests/components/footer.js');
  },

  projectfiles: function () {
  }
});

module.exports = NightwatchGenerator;