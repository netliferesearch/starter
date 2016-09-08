
const metalsmith = require('metalsmith');
const define = require('metalsmith-define');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const inplace = require('metalsmith-in-place');
const watch = require('metalsmith-watch');
const handlebars = require('handlebars');
const filenames = require('metalsmith-filenames');
const handlebarsLayouts = require('handlebars-layouts');
const config = require('../config');
const serve = require('metalsmith-serve');


handlebars.registerHelper(handlebarsLayouts(handlebars));

metalsmith(__dirname)
    .source(config.src.content)
    .use(filenames())
    .use(define({
        development: true,
    }))
    .use(markdown())
    .use(layouts({
        engine: 'handlebars',
        directory: config.src.layout,
        partials: config.src.partials,
    }))
    .use(inplace({
        engine: 'handlebars',
        partials: config.src.partials,
    }))
    .destination(config.dist.html)
    .use(watch({
        paths: {
            '${source}/**/*': '**/*',
            '../src/html/layouts/**/*': '**/*',
        },
        livereload: true,
    }))
    .use(serve(require('./config')))
    .build((err) => {
        if (err) throw err;
    });
