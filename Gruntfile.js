module.exports = function (grunt) {

    var js_src_files = [
    ];

    // Project configuration.
    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),


        // within grunt.initConfig

        /*
        concat: {
            options: {
                separator: ';\n',
                mangle: false
            },
            dist: {
                src: js_src_files,
                dest: 'www/assets/lib/angular.js'
            }
        },


        uglify: {
            options: {
                banner: '\n',
                mangle: true
            },
            build: {
                src: js_src_files,
                dest: 'www/assets/js/angular.js'
            }
        },
        */

        less: {
            dev: {
                options: {
                    paths: ["less/css"],
                    compress: false
                },
                files: {
                    "www/assets/css/main.css": "less/main.less"
                }
            },
            build: {
                options: {
                    paths: ["less/css"],

                    modifyVars: {
                        imgPath: '"www/assets/images/"',
                        bgColor: 'red'
                    },
                    compress: true
                },
                files: {
                    "www/assets/css/main.min.css": "less/main.less"
                }
            }
        },

        watch: {
            options: {
                dateFormat: function (time) {
                    grunt.log.writeln('Finished watching in ' + time + ' ms at' + (new Date()).toString());
                },
                livereload: true
            },
            /*
            scripts: {
                files: 'less/js/*.js',
                tasks: ['concurrent:compress']
            },*/

            css: {
                files: 'less/*/*.less',
                tasks: ['concurrent:compress']
            }
        },

        concurrent: {
            //compress: ['less', 'concat'],
            compress: ['less'],
            start: {
                tasks: ['watch'],
                options: {
                    logConcurrentOutput: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-concurrent');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');

    // Default task(s).
    grunt.registerTask('default', ['concurrent']);
};