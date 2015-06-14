'use strict';
// Configuring Grunt tasks:
// http://gruntjs.com/configuring-tasks
module.exports = function (grunt) {
    grunt.loadNpmTasks('grunt-behat');

    grunt.initConfig({
      behat: {
        example: {
          options: {
            output: true,
            failOnUndefined: false,
            failOnFailed: false
          },
          cmd: './vendor/bin/behat',
          features: 'features/'
        },
      }
    });

    grunt.registerTask('default', [
        'behat'
    ]);
};
