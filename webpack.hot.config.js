/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sassLoaders = [
    'css-loader',
    'postcss-loader',
    'sass-loader',
];

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/js/main.js',
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
        },
        {
            test: /\.scss$/,
            loaders: ["style", "css", "sass"],
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    postcss: [
    autoprefixer({
            browsers: ['last 2 versions']
        })
    ],
    resolve: {
        extensions: ['', '.js', '.sass'],
        root: [path.join(__dirname, './src')]
    }
}


/* eslint-enable */
