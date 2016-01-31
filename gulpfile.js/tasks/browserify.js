'use strict';

var browserSync = require('browser-sync'),
    browserify = require('browserify'),
    buffer = require('vinyl-buffer'),
    gulp = require('gulp'),
    notify = require('gulp-notify'),
    rename = require('gulp-rename'),
    source = require('vinyl-source-stream'),
    uglify = require('gulp-uglify');

var config = require('../config');

module.exports = function() {
    var b = browserify();

    b.add(config.src.browserify);

    return b.bundle()
        .on('error', notify.onError(function(error) {
            return '\n' + error.message;
        }))
        .pipe(source('main.js'))
        .pipe(buffer())
        .pipe(gulp.dest(config.dist.js))
        .pipe(uglify())
        .pipe(rename('main.min.js'))
        .pipe(gulp.dest(config.dist.js))
        .pipe(browserSync.reload({stream: true}));
};
