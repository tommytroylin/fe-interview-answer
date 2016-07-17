'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var what = 'The fuck!';
 *
 *  value(what) === 'The fuck!'
 *
 *  var hello = function() {
 *      return 'world';
 *  };
 *
 * value(hello) === 'world'
 *
 *
 **/
var value = function (anything) {
  switch (typeof anything) {
    case 'function':
      return value(anything());
    default:
      return anything;
  }
};

module.exports = value;
