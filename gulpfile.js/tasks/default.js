
var gulp = require('gulp')

gulp.task('default', [
            'browserSync',
            'nunjucks',
            'images',
            'sass',
            'watch',
            'styleguide'
        ]);