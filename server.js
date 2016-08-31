/* eslint-disable */
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
/* eslint-enable */

const config = require('./webpack.config');

new WebpackDevServer(webpack(config), {
    contentBase: 'http://localhost:8080',
    publicPath: 'http://localhost:3000/dist/',
    historyApiFallback: true,
    hot: true,
    inline: true,
    colors: true,
}).listen(3000, 'localhost', (err) => {
    if (err) {
        return console.log(err);
    }
    return console.log('Open http://localhost:8080/ 🚀');
});
