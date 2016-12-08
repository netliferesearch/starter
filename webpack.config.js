/*
 This is the webpack config for the production build.
 */
'use strict'
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        './src/js/main.js',
    ],
    output: {
        filename: '[name].js',
        path: path.join(__dirname, './dist'),
        publicPath: '/dist/',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
        },
        {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'style-loader',
                'css-loader!postcss-loader!sass-loader'
            ),
        }, {
            test: /\.(otf|eot|svg|ttf|woff|woff2)$/,
            loader: 'file?name=[name].[ext]&publicPath=/'
        }],
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
    ],
    postcss: [
        autoprefixer({
            browsers: ['last 2 versions'],
        }),
    ],
    resolve: {
        extensions: ['', '.js', '.sass'],
        root: [path.join(__dirname, './src')],
    },
};
