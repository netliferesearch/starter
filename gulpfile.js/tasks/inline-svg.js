'use strict';

var gulp = require('gulp'),
    svgstore = require('gulp-svgstore'),
    svgmin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    inject = require('gulp-inject'),
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
      .src('./src/layout/partials/svg-icons.nunjucks')
      .pipe(inject(svgs, { transform: fileContents }))
      .pipe(gulp.dest('./src/layout/partials/'));
};
