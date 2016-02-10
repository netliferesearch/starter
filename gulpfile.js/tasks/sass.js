'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    // sourcemaps = require('gulp-sourcemaps'),
    autoprefixer = require('gulp-autoprefixer'),
    cssnano = require('gulp-cssnano'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify');

var config = require('../config');

module.exports = function() {
    return gulp.src(config.src.scss)
        // .pipe(sourcemaps.init())
        .pipe(sass({
            style: 'expanded'
        })
        .on('error', notify.onError(function(error) {
            return 'Error: ' + error.message;
        }))
        .on('error', sass.logError)
        )
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(sourcemaps.write())
        .pipe(gulp.dest(config.dist.css))
        .pipe(cssnano())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest(config.dist.css))
        .pipe(browserSync.reload({stream: true}));
};
