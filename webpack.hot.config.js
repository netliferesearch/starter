const webpack = require('webpack');
const config = require('./webpack.config');

const port = process.env.PORT || 3000;

module.exports = Object.assign({}, config, {
    devtool: 'eval',
    entry: [
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/dev-server',
        './src/js/main.js',
    ],
    plugins: [new webpack.HotModuleReplacementPlugin()],
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
        }, {
            test: /\.scss$/,
            loaders: ['style', 'css', 'postcss', 'sass'],
        }],
    },
});
