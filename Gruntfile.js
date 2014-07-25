"use strict";
module.exports = function (grunt) {
    grunt.config.init({

    });

    grunt.loadTasks('./build/jshint');
    grunt.loadTasks('./build/tabtospace');

    grunt.registerTask('default', '代码审查', ['tabtospace', 'jshint']);
};