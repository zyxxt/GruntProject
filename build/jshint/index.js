/**
 * Created by zyt on 2014/7/25.
 */
module.exports = function (grunt) {
    grunt.config.merge({
        "jshint": {
            options: {
                reporterOutput: 'log/jshint.log',
                jshintrc: ".jshintrc"      // 外部配置文件
            },
            src: [
                "./src/**/*.js"
            ]
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
};