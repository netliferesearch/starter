/* eslint-disable */

const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

module.exports = {
    devtool: 'source-map',
    entry: [
        'webpack/hot/only-dev-server',
        './src/js/main.js',
    ],
    output: {
        path: path.resolve(__dirname, './build/'),
        filename: 'bundle.js',
        publicPath: '/dist/',
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'src/js'),
        },
        {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!postcss-loader',
        }],
        postcss: function () {
            return [autoprefixer];
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
};

/* eslint-enable */
