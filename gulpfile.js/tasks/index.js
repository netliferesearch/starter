'use strict';

var gulp = require('gulp');
var starterGulp = require('starter-gulp');

starterGulp.extendTasks(gulp, {
    ownBuild: [
            ['sass']
    ]
});
