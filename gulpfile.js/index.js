/*
  gulpfile.js
  ===========
  To add a new task, simply add a new task in /tasks.
*/

var requireDir = require('require-dir')
requireDir('./tasks', { recurse: true })