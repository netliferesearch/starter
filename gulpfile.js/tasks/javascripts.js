
var gulp = require('gulp'),
    config = require('../config'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

gulp.task('javascripts', function() {
  gulp.src([config.npm+'picturefill/dist/picturefill.js',
            config.npm+'jquery/dist/jquery.js',
            config.npm+'webfontloader/webfontloader.js',
            config.src.js])
  .pipe(concat('main.js'))
  .pipe(gulp.dest(config.dist.js))
  .pipe(uglify())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest(config.dist.js))
});
