'use strict';

var $ = require('jquery-browserify');

$.getJSON('../stats/perf.json', function(data) {
    var items = [];
    $.each(data, function(key, val) {
        items.push('<p>' + key + ': ' + val + '</p>');
    });
    $('<div>', {
        'class': 'perf',
        html: items.join('')
    }).appendTo('body');
});
