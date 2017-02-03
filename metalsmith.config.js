/* this is the metalsmith config */
module.exports = {
    port: 43565,
    src: {
        content: './src/pages',
        layout: './src/layouts',
        partials: './src/partials',
        icons: './src/assets/icons/svg/*.svg',
        assets: './src/assets/images',
        watch: {
            '${source}/**/*': '**/*',
            './src/layouts/**/*': '**/*',
        },
    },
    dist: {
        root: 'dist',
        assets: './assets/images',
        icons: 'src/html/svg-icons',
        html: './dist/',

    },
    icons: 'src/html/svg-icons',
};
