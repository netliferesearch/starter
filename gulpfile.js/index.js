/*
  Gulp starter by Netlife Research
  ---------------------------
  https://github.com/netliferesearch/starter
*/

'use strict';

var gulp = require('gulp');

gulp.task('browser-sync', require('./tasks/browser-sync'));

// Assets
gulp.task('images', require('./tasks/images'));
gulp.task('inline-svg', require('./tasks/inline-svg'));
gulp.task('assets', ['images', 'inline-svg']);

// Linting & statistic
gulp.task('sass-lint', require('./tasks/sass-lint'));
gulp.task('eslint', require('./tasks/eslint'));
gulp.task('css-stats', require('./tasks/css-stats'));

// Build
gulp.task('sass', require('./tasks/sass'));
gulp.task('browserify', ['eslint'], require('./tasks/browserify'));

gulp.task('build', ['assets', 'sass-lint', 'browserify', 'sass']);
gulp.task('default', ['build', 'browser-sync', 'watch']);
gulp.task('watch', require('./tasks/watch'));
