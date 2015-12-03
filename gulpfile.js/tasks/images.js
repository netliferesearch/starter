var gulp = require('gulp'),
    config = require('../config'), 
    newer = require('gulp-newer'),
    imagemin = require('gulp-imagemin');

gulp.task('images', function() {
  return gulp.src(config.src.images)
      .pipe(newer(config.dist.images))
      .pipe(imagemin())
      .pipe(gulp.dest(config.dist.images)); 
});