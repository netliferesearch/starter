'use strict';

var gulp = require('gulp'),
    cssstats = require('gulp-cssstats');

var config = require('../config');

module.exports = function() {
    return gulp.src(config.dist.css + 'main.css')
        .pipe(cssstats())
        .pipe(gulp.dest('./dist/stats'));
};
