'use strict';

var gulp = require('gulp');
var starterGulp = require('starter-gulp');

starterGulp.extendConfig(require('./config'));
starterGulp.extendTasks(gulp, require('./tasks'));
