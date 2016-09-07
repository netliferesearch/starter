const webpack = require('webpack');
const config = require('./webpack.config');

module.exports = Object.assign({}, config, {
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
