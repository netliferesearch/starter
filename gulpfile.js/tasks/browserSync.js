
var gulp = require('gulp'),
    browserSync = require('browser-sync');

gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});