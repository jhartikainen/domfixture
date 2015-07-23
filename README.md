# domfixture
Node.js and browser compatible HTML fixtures for unit tests.

Allows you to run browserified tests easily in both node and browser, even when they are dependent on the DOM.

## Usage

```
//pass the markup you want to use + a callback
domfixture.set('<html>markup goes here</html>', function(errors, window) {
  //errors might contain any errors from jsdom
  //window is a reference to a window, either from jsdom or a created IFRAME
});
```

## Browserify

If you browserify your tests, you can use the exclude flag on `jsdom`. This can speed up the process as jsdom is quite large, and it's not needed when running in a browser.
