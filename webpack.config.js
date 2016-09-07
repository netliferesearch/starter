const path = require('path');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const port = process.env.PORT || 8081;

module.exports = {
    devtool: 'source-map',
    entry: [
        `webpack-dev-server/client?http://localhost:${port}`,
        'webpack/hot/dev-server',
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
        }],
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
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
