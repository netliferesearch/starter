var gulp = require('gulp');
var ghPages = require('gulp-gh-pages');
var config = require('../config');

gulp.task('deploy', function() {
    return gulp.src('./' + config.project + '/**/*').pipe(ghPages());
});
