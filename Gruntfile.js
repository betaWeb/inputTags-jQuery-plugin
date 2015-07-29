"use strict";

module.exports = function (grunt) {

    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        cssmin: {
            style: {
                files: { 'css/inputTags.min.css': ['css/inputTags.css'] }
            }
        },
        less: {
            compile: {
                options: {
                    cleancss: true,
                },
                files: [
                    {
                        expand: true,
                        cwd: 'css/',
                        src: ['*.less'],
                        dest: 'css/',
                        ext: '.css'
                    }
                ]
            },
        },
        uglify: {
            app: {
                files: {'js/inputTags.jquery.min.js': 'js/inputTags.jquery.js'}
            }
        }

    });

    grunt.registerTask('default', ['less', 'cssmin', 'uglify']);
}

