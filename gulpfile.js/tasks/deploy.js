'use strict';

var gulp = require('gulp'),
    ghPages = require('gulp-gh-pages');

var config = require('../config');

module.exports = function() {
    return gulp.src('./' + config.project + '/**/*').pipe(ghPages());
};
