
var gulp = require('gulp'),
    config = require('../config'), 
    nunjucksRender = require('gulp-nunjucks-render'),
    data = require('gulp-data'),
    browserSync = require('browser-sync');

gulp.task('nunjucks', function() {
    nunjucksRender.nunjucks.configure(config.src.layout);
    return gulp.src(config.src.pages)
    .pipe(data(function() {
      return require(config.src.data)
    }))
    .pipe(nunjucksRender())
    .pipe(gulp.dest(config.dist.pages))
});