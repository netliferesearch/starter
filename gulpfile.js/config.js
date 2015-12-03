module.exports = {
  project: './',
  bower: 'bower_components/',
  src: {
    js: 'js/**/*.js',
    scss: './scss/**/*.scss',
    layout: '../src/layout/',
    pages: '../src/pages/**/*.+(html|nunjucks)',
    data: '../src/data/data.json',
    images: './src/images/**',
    styleguide: './styledown/*.md'
  },
  dist: {
    js: './dist/js/',
    css: './dist/css/',
    images: './dist/images/',
    pages: './dist/',
    styleguide: './dist/styleguide/'
  }
}
