'use strict';
var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('broserSync', function () {
	return browserSync.init({
		server: {
			baseDir: './'
		},
		port: 9000
	});
});

gulp.task('default', ['broserSync']);