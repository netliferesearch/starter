
var gulp = require('gulp'),
    config = require('../config'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    browserify = require('gulp-browserify'),
    uglify = require('gulp-uglify');

gulp.task('javascripts', function() {
  gulp.src([config.src.browserify])
  .pipe(browserify())
  .pipe(gulp.dest(config.dist.js))
  .pipe(uglify())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest(config.dist.js))
});
