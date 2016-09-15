'use strict'

/**
 * gen-array
 * @param {Function} fn
 * @param {Number} [len=1]        - array length
 * @param {Boolean} [ignore=true] - ignore null and undefined
 * @return {Array}
 */
module.exports = function () {
  var arr = []
  var fn = arguments[0]
  var len = arguments.length < 2 ? 1 : Math.floor(isNaN(arguments[1]) || arguments[1])
  var ignore = arguments[2] !== false

  if (Object.prototype.toString.call(fn) !== '[object Function]') {
    throw new TypeError('[gen-array] first argument should be a function.')
  }

  for (var i = 0; i < len; i++) {
    var val = fn(i)

    if (!ignore || (val !== null && val !== undefined)) {
      arr.push(val)
    }
  }

  return arr
}
