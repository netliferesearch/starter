
var gulp = require('gulp'),
    config = require('../config'),
    jshint = require('gulp-jshint');

gulp.task('js-hint', function() {
  gulp.src([config.src.js])
  .pipe(jshint('.jshintrc'))
  .pipe(jshint.reporter('jshint-stylish'))
});
