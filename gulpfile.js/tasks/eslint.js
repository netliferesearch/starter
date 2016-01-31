'use strict';

var gulp = require('gulp'),
    eslint = require('gulp-eslint');

var config = require('../config');

module.exports = function() {
    return gulp.src([config.gulpFiles, config.src.js])
        .pipe(eslint())
        .pipe(eslint.format());
};
