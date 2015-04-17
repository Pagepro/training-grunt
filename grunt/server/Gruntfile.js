'use strict';
module.exports = function (grunt) {
    // load plugins
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: grunt.option('port') || 8080,
                    hostname: 'localhost',
                    base: '',
                    keepalive: true
                }
            }
        }
    });
};