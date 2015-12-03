/*
  gulpfile.js
  ===========
  To add a new task, simply add a new task in /tasks.
  Run `gulp`
*/

var requireDir = require('require-dir')
requireDir('./tasks', { recurse: true })