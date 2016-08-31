
const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const inject = require('gulp-inject');
const path = require('path');
const config = require('./config');

gulp.task('svg', () => {
    const svgs = gulp
        .src(config.src.icons)
        .pipe(svgmin(file => {
            const prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: `${prefix} -`,
                        minify: true,
                    },
                }],
            };
        }))
        .pipe(cheerio({
            run: $ => {
                $('[fill]').removeAttr('fill');
            },
            parserOptions: { xmlMode: true },
        }))
        .pipe(svgstore({ inlineSvg: true }));
    function fileContents(filePath, file) {
        return file.contents.toString();
    }
    return gulp
      .src('./src/icons/svg-icons.html')
      .pipe(inject(svgs, { transform: fileContents }))
      .pipe(gulp.dest(config.dist.root));
});
