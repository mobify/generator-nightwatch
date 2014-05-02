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
                return true;
            }
        },{
            type: 'input',
            name: 'bundleUrl',
            message: 'What is the URL of your Mobify bundle?',
            default: 'http://localhost:8080'
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

    this.directory('nightwatch', 'tests/integration');
    this.template('_site.json', 'tests/integration/site.json');
};

module.exports = NightwatchGenerator;
