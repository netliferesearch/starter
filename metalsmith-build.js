
const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const handlebars = require('handlebars');
const handlebarsLayouts = require('handlebars-layouts');
const config = require('./config');

handlebars.registerHelper(handlebarsLayouts(handlebars));
metalsmith(__dirname)
    .source(config.src.content)
    .use(markdown())
    .use(layouts({
        engine: 'handlebars',
        directory: config.src.layout,
        partials: config.src.partials,
    }))
    .destination(config.dist.html)
    .build(err => {
        if (err) throw err;
    });
