var jsdom = require('jsdom');
var fixtures = require('js-fixtures');

module.exports = {
	set: function(markup, callback) {
		//we'll use js-fixtures if we're in a browser, otherwise jsdom
		var isBrowser = typeof document != 'undefined' && typeof window != 'undefined';
		if(!isBrowser) {
			jsdom.env(markup, [], callback);
		}
		else {
			fixtures.set(markup);
			callback(undefined, fixtures.window());
		}
	}
};
