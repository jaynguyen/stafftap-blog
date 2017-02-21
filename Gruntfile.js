module.exports = function(grunt){

    var rpath = __dirname,
		theme_destination = rpath + "/wp-content/themes/stafftap";


	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: [
				'Gruntfile.js',
				'dev/js/**/*.js'
			],
			options: {
				'-W105': true
			}
		},
		sass: {
			dev: {
				options:{
					sourcemap: 'auto'
				},
				files: [{
					expand: true,
					cwd: 'dev/css',
					src: ['**/*.sass'],
					dest: "wp-content/themes/stafftap/css",
					ext: '.css'
				}]
			},

		},

		uglify: {

			theme: {
				options: {
					beautify: true,
					sourceMap: true
				},
				files: [{
					expand: true,
					cwd: 'dev/js',
					src: '**/*.js',
					dest: theme_destination + "/js"

				}]
			},


		},

		watch: {
			configFiles: {
				files: ['Gruntfile.js'],
				tasks: ['jshint'],
				options: {
					reload: true,
					spawn: false
				}
			},

			scripts: {
				files: ['dev/js/**/*.js'],
				tasks: ['jshint',
						'uglify:theme'
						],
				options: {
					spawn: false,
					livereload: true
				}
			},
			css: {
				files: ['dev/css/**/*.sass'],
				tasks: ['sass:dev'],
				options: {
					spawn: false,
					livereload: true
				}
			},

		}


	});


	//loading tasks
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-watch');


	//register tasks
	grunt.registerTask('dev',
						[
							'jshint',
							'sass:dev',
							'uglify:theme',
							'watch'
						]);



};
