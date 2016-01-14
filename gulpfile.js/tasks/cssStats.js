var gulp = require('gulp'),
    config = require('../config'),
    cssstats = require('gulp-cssstats');

gulp.task('cssstats', function() {
  gulp.src(config.dist.css+'main.css')
    .pipe(cssstats())
    .pipe(gulp.dest('./css-stats'));
});
