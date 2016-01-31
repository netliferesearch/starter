'use strict';

var gulp = require('gulp'),
    cssstats = require('cssstats');

var config = require('../config');

module.exports = function() {
  gulp.src(config.dist.css+'main.css')
    .pipe(cssstats())
    .pipe(gulp.dest('./css-stats'));
};
