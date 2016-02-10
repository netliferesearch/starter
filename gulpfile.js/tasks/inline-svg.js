'use strict';

var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    inject = require('gulp-inject'),
    browserSync = require('browser-sync'),
    path = require('path');

var config = require('../config');

module.exports = function() {
    var svgs = gulp
        .src(config.src.icons)
        .pipe(svgmin(function(file) {
            var prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            };
        }))
        .pipe(cheerio({
            run: function($) {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true }
        }))
        .pipe(svgstore({ inlineSvg: true }));
    function fileContents(filePath, file) {
        return file.contents.toString();
    }
    return gulp
      .src('./src/icons/svg-icons.html')
      .pipe(inject(svgs, { transform: fileContents }))
      .pipe(gulp.dest(config.dist.root))
      .pipe(browserSync.reload({stream: true}));
};
