
try {
  var each = require('component-each');
} catch (e) {
  // commented out by npm-component: var each = require('each-component');
}


/**
 * Map an array or object.
 *
 * @param {Array|Object} obj
 * @param {Function} iterator
 * @return {Mixed}
 */

module.exports = function map (obj, iterator) {
  var arr = [];
  each(obj, function (o) {
    arr.push(iterator.apply(null, arguments));
  });
  return arr;
};