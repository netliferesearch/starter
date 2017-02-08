
const metalsmith = require('metalsmith');
const define = require('metalsmith-define');
const layouts = require('metalsmith-layouts');
const inplace = require('metalsmith-in-place');
const watch = require('metalsmith-watch');
const filenames = require('metalsmith-filenames');
const serve = require('metalsmith-serve');
const assets = require('metalsmith-assets');
const config = require('./metalsmith.config');

const dev = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production');

const ms = metalsmith(__dirname)
    .clean(true)
    .source(config.src.content)
    .use(filenames())
    .use(define({
        development: dev ? true : null,
    }))
    .use(inplace({
        engine: 'handlebars',
        partials: config.src.partials,
        pattern: '**/*.html',
    }))
    .use(layouts({
        engine: 'handlebars',
        default: 'default.html',
        directory: config.src.layout,
        partials: config.src.partials,
    }))
    .use(assets({
        source: config.src.assets,
        destination: config.dist.assets,
    }))
    .destination(config.dist.html);

if (dev) {
    ms.use(watch({
        paths: config.src.watch,
        livereload: true,
    }))
    .use(serve(config));
}

ms.build((err) => {
    if (err) throw err;
});
