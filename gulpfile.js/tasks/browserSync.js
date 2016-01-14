
var gulp = require('gulp'),
    config = require('../config'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: config.project
        }
    });
});
