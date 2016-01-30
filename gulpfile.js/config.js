/*------------------------------------------------------*\
  Gulp config
\*------------------------------------------------------*/

// Set paths

module.exports = {
  project: 'dist/',
  npm: 'node_modules/',
  src: {
    js: 'src/js/**/*.js',
    browserify: 'src/js/main.js',
    scss: 'src/scss/**/*.scss',
    layout: 'src/layout/',
    pages: 'src/pages/*.+(html|nunjucks)',
    data: '../../src/data/data.json',
    images: './src/images/**',
    icons: 'src/icons/svg/*.svg',
    styleguide: './styledown/*.md'
  },
  dist: {
    js: 'dist/js/',
    css: 'dist/css/',
    images: 'dist/images/',
    pages: 'dist/',
    styleguide: 'dist/styleguide/'
  }
}
