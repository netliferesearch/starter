'use strict';

module.exports = {
    'build': [['assets', 'browserify', 'sass']],
	'default': [['build', 'browser-sync', 'watch']],
	'deploy': [['assets', 'build', 'sass', 'gh-pages']]
};
