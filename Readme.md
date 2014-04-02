*This repository is a mirror of the [component](http://component.io) module [ianstormtaylor/map](http://github.com/ianstormtaylor/map). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ianstormtaylor-map`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# map

  Map an object or array.

## Installation

    $ component install ianstormtaylor/map
    $ npm install ianstormtaylor/map

## Example

Arrays:

```js
var map = require('map');

map([1, 2, 3], function (val, i) {
  return 10 + val;
});

// [11, 12, 13]
```

Objects:

```js
var map = require('map');

map({ a: 1, b: 2, c: 3 }, function (key, val) {
  return 10 + val;
});

// [11, 12, 13]
```

## API

### map(obj, iterator)
  Map the `obj` using an `iterator`.

## License

  MIT
