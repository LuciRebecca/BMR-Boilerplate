module.exports = function(grunt) {

	'use strict';

	// Project configuration.
	grunt.initConfig({
		
		pkg: grunt.file.readJSON('package.json'),

		/* SERVER TASK */
		express: {
			options: {
				port: 8001
			},
			dev: {
				options: {
					script: 'server.js'
				}
			}
		},


		/* WATCH TASKS */
		watch: {
			
			css: {
				files: '**/*.less',
				tasks: ['less']
			},
			js: {
				files: '**/*.js',
				livereload:true
			},

			express: {
	      files:  [ 'public/**/*.js', 'server.js' ],
	      tasks:  [ 'express:dev' ],
	      options: {
	        nospawn: true //Without this option specified express won't be reloaded
	      }
    	}

		},

		/* COPY TASKS */
		copy: {
			bootstrapFonts: {
				expand:true,
				cwd: 'assets/libs/bootstrap/fonts/',
				src: '*',
				dest: 'assets/fonts/',
				flatten:true,
				filter: 'isFile'
			}
		},

		/* LESS TASKS */
		less: {
			development: {
				options: {
					paths: ["assets/css"]
				},
				files: {
					"assets/css/barclaycard.css": "assets/libs/barclaycard/less/barclaycard.less",
					"assets/css/bootstrap.css": "assets/libs/bootstrap/less/bootstrap.less"
				}
			},
			production: {
				options: {
					paths: ["assets/css"],
					yuicompress: true
				},
				files: {
					"assets/css/barclaycard.min.css": "assets/libs/barclaycard/less/barclaycard.less",
					"assets/css/bootstrap.min.css": "assets/libs/bootstrap/less/bootstrap.less"
				}
			}
		}


	});

	//enable tasks
	grunt.loadNpmTasks('grunt-express-server');

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-jasmine');

	 // Default task(s).
	 grunt.registerTask('default', [ 'express:dev', 'watch']);
	 grunt.registerTask('build', ['less:production', 'copy']);

	};