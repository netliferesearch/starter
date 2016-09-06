const webpack = require('webpack');
const config = require('./webpack.config');

module.exports = Object.assign({}, config, {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
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
