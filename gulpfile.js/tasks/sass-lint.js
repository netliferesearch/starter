var gulp = require('gulp'),
    config = require('../config'), 
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint');

  gulp.task('sass-lint', function () {
  gulp.src(config.src.scss)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
});
