var gulp = require('gulp'),
    browserSync = require('browser-sync');

// Static server
gulp.task('browserSync', function() {
    browserSync.init({
        server: {
            baseDir: "./dist"
        }
    });
});