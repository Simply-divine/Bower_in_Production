module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        concat: {
            js: {
                src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/moment/min/moment.min.js','bower_components/fontawesome/js/all.min.js','bower_components/bootstrap/dist/js/bootstrap.min.js'],
                dest: 'build/app.js',
            }
        },
        uglify: {
            build: {
                src: 'build/app.js',
                dest: 'dist/app.min.js'
            }
        },
        cssmin: {
            options: {
                mergeIntoShorthands: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'dist/theme.css': ['bower_components/fontawesome/css/all.min.css','bower_components/bootstrap/dist/css/bootstrap.min.css','css/main.css'],
                }
            }
        },
        watch: {
            scripts: {
                files: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/moment/min/moment.min.js','bower_components/fontawesome/js/all.min.js','bower_components/bootstrap/dist/js/bootstrap.min.js','bower_components/fontawesome/css/all.min.css','bower_components/bootstrap/dist/css/bootstrap.min.css','css/main.css'],
                tasks: ['concat', 'uglify', 'cssmin'],
            },
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};
