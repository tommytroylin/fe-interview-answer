'use strict';

/**
 *
 *  输入： array，例如: [1, [2, [3 ,4], 5], 6]
 *
 *  输出：一个扁平化后的array，例如：[1, 2, 3 ,4, 5, 6]
 *
 **/
var flatten = function (array) {
  let result = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      result.push(...flatten(element));
    } else {
      result.push(element);
    }
  }
  return result;
};

module.exports = flatten;