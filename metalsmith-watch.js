'use strict';

var metalsmith = require('metalsmith');
var watch = require('metalsmith-watch');

metalsmith(__dirname)
    .use(
    watch({
        paths: {
            './src/html/content/**/*': true,
            './src/html/layouts/**/*': '**/*'
        },
        livereload: true
    })
    )
    .build();
