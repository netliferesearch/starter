//commonjs
var $ = require('jquery-browserify')

var tabs = require('tabs');

//or directly include the script and 'tabs' will be global

// make it tabbable!
var container = document.querySelector('.tab-container')
tabs(container);
