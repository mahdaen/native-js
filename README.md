Native JS Helper
====

Helper for missing native javascript functions. Can be used on Browser or NodeJS.

Using in browser, all methods will available on `window` object (globally).

Using in NodeJS, all methods will available on both require result and `global` object (globally).


### Usage
***

##### Browser

```html
<script type="text/javascript" src="nativejs/dist/nativejs"><script>
```

```js
var test = function(pa, pb) {
	if (isString(pa) && isFunction(pb) {
		console.log('Cheers!');
	}
}
```

##### NodeJS
```js
var native = require('native-js');

var test = function(pa, pb) {
	if (isString(pa) && isFunction(pb)) {
		console.log('Cheers global!');
	}
	
	if (native.isString(pa) && native.isFunction(pb)) {
		console.log('Cheers local!');
	}
}

```

Read the docs: https://mahdaen.github.io/native-js
