'use strict';
module.exports = function (grunt) {
  // load plugins
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-connect');

  grunt.initConfig({
    sass: {
      dev: {
        options: {
          style: 'expanded',
          lineComments: true
        },
        files: [{
          expand: true,
          cwd: 'app/sass/',
          dest: 'app/css/',
          src: '**/*.scss',
          ext: '.css'
        }]
      }
    }
  });
};