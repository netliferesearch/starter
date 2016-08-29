/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const sassLoaders = [
    'css-loader',
    'postcss-loader',
    'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './src'),
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
        path: path.join(__dirname, './build'),
        publicPath: '/build'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin('[name].css')
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
