var jsdom = require('jsdom');

function fixtureHTML(markup) {
	var frame = document.createElement('iframe');
	frame.frameBorder = 0;

	document.body.appendChild(frame);
	frame.contentDocument.write(markup);

	return frame;
}

module.exports = {
	set: function(markup, callback) {
		var isBrowser = typeof document != 'undefined' && typeof window != 'undefined';
		if(!isBrowser) {
			jsdom.env(markup, [], callback);
		}
		else {
			var frame = fixtureHTML(markup);
			callback(undefined, frame.contentWindow);
		}
	}
};
