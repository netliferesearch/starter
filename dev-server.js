const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');

const config = require(
    process.env.npm_lifecycle_event === 'start' ?
    './webpack.config' :
    './webpack.hot.config'
);

const port = process.env.PORT || 8081;
let initialCompileFinished = false;

new WebpackDevServer(webpack(config, (err) => {
    if (err) {
        return;
    }

    if (!initialCompileFinished) {
        setTimeout(() => {
            console.log(`Compile done. Open http://localhost:${port}/ 🚀`); }, 0);
        initialCompileFinished = true;
    }
}), {
    proxy: {
        '**': 'http://localhost:8080',
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

    return console.log('Doing the initial compile... ⏳');
});
