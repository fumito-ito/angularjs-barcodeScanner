'use strict';

module.exports = function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        jshint: {
            files: ['Gruntfile.js', 'src/**/*.js'],
            options: {
                globalstrict: true,
                globals: {
                    jQuery: true,
                    console: true,
                    module: true,
                    document: true,
                    expect: true,
                    it: true,
                    spyOn: true,
                    beforeEach: true,
                    angular: true,
                    inject: true,
                    descript: true
                }
            }
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %>*/\n'
            },
            dist: {
                files: {
                    'dist/<%= pkg.name %>.min.js': 'src/barcodeScanner.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.registerTask('default', ['jshint', 'uglify']);
};