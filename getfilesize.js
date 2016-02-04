'use strict';

var fs = require('fs');
var bytes = require('bytes');

var css = fs.statSync('dist/css/main.min.css');
var js = fs.statSync('dist/js/main.min.js');

var cssByte = css.size;
var jsByte = js.size;

var humanCss = bytes(cssByte);
var humanJs = bytes(jsByte);

var sizes = {
    js: humanCss,
    css: humanJs
};

var outputFilename = 'dist/stats/perf.json';

fs.writeFile(outputFilename, JSON.stringify(sizes), function(err) {
    if (err) {
        /* eslint-disable no-console */
        console.log(err);
    } else {
        console.log('Stats saved!');
        /* eslint-enable no-console */
    }
});
