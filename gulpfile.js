/**
 * Created by colby on 11/26/2017.
 */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	pump = require('pump'),
	connect = require('gulp-connect');

require('dotenv').config();

var jsSources = ['web/js/*.js'],
	sassSources = ['web/scss/style.scss'],
	htmlSources = ['docs/**/*.html'];

gulp.task('connect', function() {
	connect.server({
		root: 'docs',
		livereload: true
	});
});

gulp.task('sass', function (cb) {
	pump([
			gulp.src(sassSources),
			sass(),
			concat('style.css'),
			gulp.dest("docs/css"),
			connect.reload()
		],
		cb);
});

gulp.task('js', function (cb) {
	pump([
			gulp.src(jsSources),
			//uglify(),
			gulp.dest("docs/js"),
			connect.reload()
		],
		cb);
});

gulp.task('html', function () {
	connect.reload();
});

gulp.task('watch', function () {
	gulp.watch(jsSources, ['js']);
	gulp.watch(sassSources, ['sass']);
	gulp.watch(htmlSources, ['html']);
});

gulp.task('default', ['sass', 'js', 'connect', 'watch']);
