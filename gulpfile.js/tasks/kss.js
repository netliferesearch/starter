
var gulp = require('gulp'),
    config = require('../config'),
    browserSync = require('browser-sync'),
    gulpkss = require('gulp-kss');

    gulp.task('kss', function() {
      gulp.src(['scss/**/*.scss'])
          .pipe(gulpkss({
              overview: 'scss/styleguide.md'
          }))
        .pipe(gulp.dest('dist/kss/'));
    });
