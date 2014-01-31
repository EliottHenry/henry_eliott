module.exports = function(grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    port: 9001,
                    base: 'www',
                    keepalive: 'true'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

};