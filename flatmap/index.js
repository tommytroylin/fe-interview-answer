'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var arr1 = ['a', 'b'];
 *
 *  flatmap(arr1, function(item){
 *      return [item, item];
 *  }); // ['a', 'a', 'b', 'b']
 *
 *
 **/
var flatmap = function (array, iteratee) {
  const result = [];
  for (const [i, e] of array.entries()) {
    result.push(...iteratee(e, i));
  }
  return result;
};

module.exports = flatmap;
