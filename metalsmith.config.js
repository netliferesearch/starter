/* this is the metalsmith config */
module.exports = {
    port: 43565,
    src: {
        content: './src/html/content',
        layout: './src/html/layouts',
        partials: './src/html/layouts/partials',
        icons: './src/icons/svg/*.svg',
        assets: './src/images',
        watch: {
            '${source}/**/*': '**/*',
            './src/html/layouts/**/*': '**/*',
        },
    },
    dist: {
        root: 'dist',
        assets: './images',
        icons: 'src/html/svg-icons',
        html: './dist/',

    },
    icons: 'src/html/svg-icons',
};
