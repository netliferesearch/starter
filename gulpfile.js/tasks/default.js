
var gulp = require('gulp')

gulp.task('default', [
            'browserSync',
            'nunjucks',
            'javascripts',
            'images',
            'sass',
            'watch'
        ]);
