'use strict';

var DELIMITER_REGEX = /{{(.+?)}}/g;

/**
 * Replaces a string of interpolate delimiters with data.
 *
 * @param  {String}       string    - The template string.
 * @param  {Object|Array} [data={}] - The data to interpolate.
 * @return {String}
 */
module.exports = function tempt(string, data) {
  if (typeof string !== 'string') {
    throw new TypeError('First argument must be a string');
  }
  data = data instanceof Object ? data : {};

  // https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String/replace
  return string.replace(DELIMITER_REGEX, function replacer(match, p1) {
    return data[p1.trim()] || match;
  });
};
