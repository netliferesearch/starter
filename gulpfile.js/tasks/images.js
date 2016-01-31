'use strict';

var gulp = require('gulp'),
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin');

var config = require('../config');

module.exports = function() {
    return gulp.src(config.src.images)
        .pipe(newer(config.dist.images))
        .pipe(imagemin())
        .pipe(gulp.dest(config.dist.images));
};
