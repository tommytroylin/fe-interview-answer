'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  map([1, 2], function(i){ return i * 2;} )                                                    = [2, 4]
 *  map([{name: 'nanfeng', age: 25}, {name: 'beifang', age: 33}], function(i){ return i.age;  }) = [25, 33]
 *  map([5, 7], function(i){ return this + i; }, 2)                                              = [7, 9]
 *
 **/
var map = function (arr, func, ctx) {
  let result = [];
  for (let element of arr) {
    result.push(func.call(ctx, element));
  }
  return result;
};

module.exports = map;