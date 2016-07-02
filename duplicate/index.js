'use strict';

/**
 *
 *  输入： array，例如: [1, 2, 3, 4]
 *
 *  输出：一个重复后的array，例如：[1, 2, 3 , 4, 1, 2, 3 ,4]
 *
 **/
var duplicate = function (array) {
  return [...array, ...array];
};

module.exports = duplicate;
