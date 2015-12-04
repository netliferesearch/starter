
var gulp = require('gulp'),
    browserSync = require('browser-sync'),
    config = require('../config');

gulp.task('watch', function() {
    gulp.watch(config.src.scss, ['sass']);
    gulp.watch(config.src.scss, [ 'scripts' ]).on('change', browserSync.reload);
    gulp.watch(config.src.layout, ['nunjucks']);
    gulp.watch(config.src.pages, ['nunjucks']);
    gulp.watch(config.src.styleguide, ['styleguide']);
    gulp.watch(config.src.images, ['images']);
})