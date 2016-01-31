'use strict';

var gulp = require('gulp'),
    browserSync = require('browser-sync');

var config = require('../config');

module.exports = function() {
    browserSync.init({
        server: {
            baseDir: config.project
        }
    });
};
