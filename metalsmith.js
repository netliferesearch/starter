
const metalsmith = require('metalsmith');
const define = require('metalsmith-define');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const inplace = require('metalsmith-in-place');
const watch = require('metalsmith-watch');
const handlebars = require('handlebars');
const filenames = require('metalsmith-filenames');
const handlebarsLayouts = require('handlebars-layouts');
const serve = require('metalsmith-serve');
const assets = require('metalsmith-assets');
const config = require('./config');

const dev = ((process.env.NODE_ENV || '').trim().toLowerCase() !== 'production');

handlebars.registerHelper(handlebarsLayouts(handlebars));

const ms = metalsmith(__dirname)
    .clean(true)
    .source(config.src.content)
    .use(filenames())
    .use(define({
        development: dev ? true : null,
    }))
    .use(markdown())
    .use(layouts({
        engine: 'handlebars',
        directory: config.src.layout,
        partials: config.src.partials,
    }))
    .use(assets({
        source: config.src.assets,
        destination: config.dist.assets,
    }))
    .use(inplace({
        engine: 'handlebars',
        partials: config.src.partials,
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
