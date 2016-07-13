'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var array = [1, 2, 3];
 *
 *  filter(array, function(item){
 *      return item % 2 === 0;
 *  }); // [2]
 *
 *
 **/
var filter = function (arr, iteratee) {
  const result = [];
  for (const e of arr) {
    if (iteratee(e)) {
      result.push(e);
    }
  }
  return result;
};

module.exports = filter;
