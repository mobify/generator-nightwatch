module.exports = function(grunt) {
    var child;

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')
    });

    grunt.registerTask('nightwatch', function () {
        var callback = this.async();

        grunt.util.spawn({
            cmd: 'node',
            args: [].concat(['node_modules/nightwatch/bin/runner.js', '-c', 'tests/integration/nightwatch.json'], grunt.option.flags()),
            opts: {stdio: 'inherit'}
        },
        function(error, result, code) {
            if (code !== 0) {
                grunt.fail.fatal('Tests failed', code);
            }
            callback();
        });
    });
};
