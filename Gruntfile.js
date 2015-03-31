var destination = 'www/';
module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        copy: {
          main: {
          	expand: true,
            dot: true,
            src: 'public/**',
            dest: destination
          },
        },
        jshint: {
            dev: {
                src: [
                    destination+'public/js/custom/*.js',
                    destination+'public/js/angular/**/**.js'
                ]
            }
        },
        uglify: {
              minify: {
                files: [{
                    expand: true,
                    src: [destination+'public/js/plugins.js',destination+'public/js/unique.js']
                }]
              }
        },
        cssmin: {
          target: {
            files: [{
                expand: true,
                src: [destination+'/public/css/style.css'],
                dest: ''
            }]
          }
        },
        htmlmin: {
		      multiple: {
		      	options: {
		          removeComments: true,
		          collapseWhitespace: true
		        },
		        files: [{                            
		          expand: true,
		          cwd: destination+'public',
		          src: '**/*.html',
		          dest: destination+'public'
		        }]
		      }
		    }
    });
    
    grunt.registerTask('build_all', ['copy','uglify','cssmin:target','htmlmin']);
};