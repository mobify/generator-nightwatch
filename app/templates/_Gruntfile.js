
module.exports = function(grunt) {
  var child;

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')
  });

  grunt.registerTask('nightwatch', function () {
    var callback = this.async();

    child && child.kill();

    child = grunt.util.spawn({
        cmd: 'node',
        args: ['node_modules/nightwatch/bin/runner.js'],
        opts: {stdio: 'inherit'}
      },
      function() {
        callback();
      });
  });
};