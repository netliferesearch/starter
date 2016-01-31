'use strict';

var browserSync = require('browser-sync');

var config = require('../config');

module.exports = function() {
    browserSync.init({
        server: {
            baseDir: config.project
        }
    });
};
