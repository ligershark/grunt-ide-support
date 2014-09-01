var _ = require('lodash');

module.exports = function (grunt, options) {

    // The options are currently the ones from 'load-grunt-config'.
    options = options || {};

    // enable jitGrunt by default
    if (options.jitGrunt !== false) {
        options.jitGrunt = true;
    }

    // Don't load config automatically. It will be merged.
    options.init = false;

    var config = require('load-grunt-config')(grunt, options);
    grunt.config.set("jshint.options.reporter", require('jshint-stylish'));

    // Merge the config from the .json files with the config in gruntfile.js
    grunt.config.data = _.merge(grunt.config.data, config);

}