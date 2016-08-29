
// NOT IN USE

const metalsmith = require('metalsmith');
const markdown = require('metalsmith-markdown');
const layouts = require('metalsmith-layouts');
const handlebars = require('handlebars');
const handlebarsLayouts = require('handlebars-layouts');
const webpack = require('ms-webpack');
const options = require('../webpack.config');

const config = require('./config');

module.exports = () => {
    handlebars.registerHelper(handlebarsLayouts(handlebars));
    metalsmith('./')
        .source(config.src.content)
        .use(webpack(options))
        .use(markdown())
        .use(layouts({
            engine: 'handlebars',
            directory: config.src.layout,
            partials: config.src.partials,
        }))
        .destination(config.dist)
        .build(err => {
            if (err) throw err;
            console.log('Build finished!');
        });
};
