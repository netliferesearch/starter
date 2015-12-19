
var gulp = require('gulp'),
    config = require('../config'),
    concat = require('gulp-concat'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');

gulp.task('javascripts', function() {
  gulp.src([config.bower+'modernizr/modernizr.js',
            config.bower+'jquery/dist/jquery.js',
            config.bower+'/fastclick/lib/fastclick.js',
            config.bower+'/bower-webfontloader/webfont.js',
            config.src.js])
  .pipe(concat('main.js'))
  .pipe(gulp.dest(config.dist.js))
  .pipe(uglify())
  .pipe(rename('main.min.js'))
  .pipe(gulp.dest(config.dist.js))
});
