
var gulp = require('gulp'),
    config = require('../config'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    autoprefixer = require('gulp-autoprefixer'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    browserSync = require('browser-sync'),
    notify = require('gulp-notify'),
    gutil = require('gulp-util');

gulp.task('sass', function() {
    return gulp.src(config.src.scss)
      .pipe(sourcemaps.init())
      .pipe(sass({
        style: 'expanded'
        })
        .on("error", notify.onError(function (error) {
          return "Error: " + error.message;
        }))
        .on('error', sass.logError)
      )
      .pipe(autoprefixer({
          browsers: ['last 2 versions'],
          cascade: false
      }))
      .pipe(sourcemaps.write())
      .pipe(gulp.dest(config.dist.css))
      .pipe(browserSync.reload({stream: true}))
      .pipe(minifyCSS())
      .pipe(rename({
        suffix: '.min'
      }))
      .pipe(gulp.dest(config.dist.css))
      .pipe(sass({errLogToConsole: true}))
});
