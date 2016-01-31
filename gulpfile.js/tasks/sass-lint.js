'use strict';

var gulp = require('gulp'),
    config = require('../config'),
    sass = require('gulp-sass'),
    sassLint = require('gulp-sass-lint');

module.exports = function() {
    gulp.src(config.src.scss)
    .pipe(sassLint())
    .pipe(sassLint.format())
    .pipe(sassLint.failOnError())
};
