'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  isString('hello')              = true
 *  isString(123)                  = false
 *  isString(undefined)            = false
 *  isString(null)                 = false
 *  isString(new String('hello'))  = true
 *
 *
 **/
var isString = function (value) {
  return typeof value === 'string' || !!(typeof value === 'object' && value && Object.prototype.toString.call(value)
      .includes('String'));
};

module.exports = isString;
