'use strict';

var gulp = require('gulp'),
    sassLint = require('gulp-sass-lint');

var config = require('../config');

module.exports = function() {
    gulp.src(config.src.scss)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError());
};
