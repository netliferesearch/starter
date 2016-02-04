'use strict';

/*
    Gulp config
*/

module.exports = {
    project: 'dist',
    npm: 'node_modules/',
    gulpFiles: 'gulpfile.js/**/*.js',
    src: {
        js: 'src/js/**/*.js',
        browserify: 'src/js/main.js',
        scss: 'src/scss/**/*.scss',
        images: 'src/images/**',
        icons: 'src/icons/svg/*.svg'
    },
    dist: {
        root: 'dist',
        js: 'dist/js/',
        css: 'dist/css/',
        images: 'dist/images/',
        icons: 'src/html/svg-icons'
    }
};
