module.exports = function (grunt) {

    require('load-grunt-config')(grunt, {
        jitGrunt: true
    });

    grunt.config.set("jshint.options.reporter", require('jshint-stylish'));

}