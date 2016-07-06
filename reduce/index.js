'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  reduce([1, 2], function(previous, i){ return previous + i;} )                                         = [2, 4]
 *  reduce([{name: 'nan', age: 2}, {name: 'fang', age: 3}], function(previous, i){ return previous + i.name;  }, 'Hello ') = Hello nanfeng
 *
 **/
var reduce = function(arr, func, initialValue) {
  let value, arrLoop;
  if (typeof initialValue === 'undefined') {
    switch (typeof arr[0]) {
      case 'number':
        value = arr[0];
        break;
      default:
        value = arr[0].toString();
        break;
    }
    arrLoop = arr.slice(1);
  } else {
    value = initialValue;
    arrLoop = arr.slice(0);
  }
  for (let e of arrLoop) {
    value = func(value, e);
  }
  return value;
};

module.exports = reduce;