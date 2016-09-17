/* eslint-disable */
'use strict'
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const metalsmith = require('./config');

const config = require(
    process.env.npm_lifecycle_event === 'start' ?
    './webpack.config' :
    './webpack.hot.config'
);

const port = process.env.PORT || 3000;
let initialCompileFinished = false;

new WebpackDevServer(webpack(config, (err) => {
    if (err) {
        return;
    }

    if (!initialCompileFinished) {
        setTimeout(() => { console.log(`Compilation done. Open http://localhost:${port}/ 🚀`); }, 0);
        initialCompileFinished = true;
    }
}), {
    proxy: {
        '**': `http://localhost:${ metalsmith.port }`,
    },
    publicPath: `http://localhost:${port}/dist/`,
    historyApiFallback: true,
    hot: true,
    inline: true,
    colors: true,
}).listen(port, 'localhost', (err) => {
    if (err) {
        return console.error(err);
    }

    return console.log('Doing the initial compilation... ⏳');
});
