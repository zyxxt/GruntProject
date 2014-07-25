/**
 * Created by zyt on 2014/7/25.
 */
module.exports = function (grunt) {
    grunt.config.merge({
        "tabtospace": {
            options: {
                spaceCnt: 4
            },
            src: [
                "./src/**/*.js"
            ]
        }
    });

    grunt.loadNpmTasks('grunt-tabtospace');
};