var gulp = require('gulp'),  
    config = require('../config'), 
    browserSync = require('browser-sync'),
    styledown = require('gulp-styledown');

gulp.task('styleguide', function() {
    gulp.src(config.src.styleguide)
    .pipe(styledown({
      config: 'styledown/config.md',
      filename: 'index.html'
    }))
    .pipe(gulp.dest(config.dist.styleguide))
    .pipe(browserSync.reload({stream: true}))
});