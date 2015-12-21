
var gulp = require('gulp'),
    config = require('../config'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    gutil = require('gulp-util');

gulp.task('sass', function() {
    return gulp.src(config.src.scss)
      //.pipe(sourcemaps.init())
      .pipe(sass({
        style: 'expanded'
        })
        .on('error', function(err){
            browserSync.notify(err.message, 10000);
            this.emit('end');
        })
        .on('error', sass.logError)
      )
      //.pipe(sourcemaps.write())
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(gulp.dest(config.dist.css))
      .pipe(minifyCSS())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(config.dist.css))
      .pipe(sass({errLogToConsole: true}))
      .pipe(browserSync.reload({stream: true}))
});
