'use strict';
module.exports = function (grunt) {
    [ // load plugins
        'grunt-contrib-sass',
        'grunt-contrib-connect',
        'grunt-contrib-watch',
        'grunt-open'
    ].forEach(grunt.loadNpmTasks);

    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: grunt.option('port') || 8080,
                    hostname: 'localhost',
                    base: ''
                }
            }
        },
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
        },
        watch: {
            sass: {
                files: ['app/sass/*.scss'],
                tasks: ['sass:dev']
            }
        }
    });
};