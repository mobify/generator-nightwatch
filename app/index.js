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



    projectfiles: function () {
    }
});

NightwatchGenerator.prototype.askFor = function askFor() {
    var cb = this.async();

    // Have yeoman greet the user
    console.log(this.yeoman);

    var prompts = [
        {
            type: 'input',
            name: 'siteUrl',
            message: 'What is the URL of your project?',
            validate: function (answer) {
                if (!answer.length) {
                    return 'You must enter a URL.';
                }
                if (answer.substring(0,4) !== 'http') {
                    return 'You must begin your project URL with "http".';
                }
                return true;
            }
        },{
            type: 'input',
            name: 'bundleUrl',
            message: 'What is the URL of your Mobify bundle?',
            default: 'http://localhost:8080',
            validate: function (answer) {
                if (answer.substring(0,4) !== 'http') {
                    return 'You must begin your bundle URL with "http".';
                }
                return true;
            }
        },
    ]

    this.prompt(prompts, function (props) {
        this.siteUrl = props.siteUrl;
        this.bundleUrl = props.bundleUrl;

        console.log(chalk.magenta('Generating Nightwatch integration test infrastructure.'));

        cb();
    }.bind(this));

};

NightwatchGenerator.prototype.app = function app() {
    this.mkdir('tests');

    this.copy('package.json', 'package.json');
    this.copy('Gruntfile.js', 'GruntFile.js');
    this.copy('_circle.yml', 'circle.yml');

    this.directory('nightwatch', 'tests/system');
    this.template('_site.json', 'tests/system/site.json');
};

module.exports = NightwatchGenerator;
