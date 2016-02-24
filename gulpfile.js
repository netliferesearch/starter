'use strict';

var gulp = require('gulp');
var starterGulp = require('starter-gulp');

starterGulp.extendConfig();

starterGulp.extendTasks(gulp, {
    ownBuild: [
            ['sass']
    ]
});
