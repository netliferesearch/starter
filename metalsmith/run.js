
const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const inplace = require('metalsmith-in-place');
const watch = require('metalsmith-watch');
const handlebars = require('handlebars');
const filenames = require('metalsmith-filenames');
const handlebarsLayouts = require('handlebars-layouts');

const webpack = require('metalsmith-webpack');
const options = require('../webpack.config');
const config = require('./config');

module.exports = () => {
    handlebars.registerHelper(handlebarsLayouts(handlebars));

    metalsmith('./')
        .source(config.src.content)
        .use(webpack(options))
        .use(filenames())
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
        .destination(config.dist)
        .use(watch({
            paths: {
                '${source}/**/*': '**/*',
                'src/html/layouts/**/*': '**/*',
            },
            livereload: true,
        }))
        .build((err) => {
            if (err) throw err;
            console.log('Build finished!');
        });
};
