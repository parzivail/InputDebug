/**
 * Created by colby on 11/26/2017.
 */
var gulp = require('gulp'),
	gutil = require('gulp-util'),
	sass = require('gulp-sass'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	pump = require('pump');

var sassSources = ['web/scss/style.scss'];

gulp.task('sass', function (cb) {
	pump([
			gulp.src(sassSources),
			sass(),
			concat('style.css'),
			gulp.dest("web/css")
		],
		cb);
});

gulp.task('default', ['sass']);
