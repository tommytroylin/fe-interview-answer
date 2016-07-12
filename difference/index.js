'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var arr1 = [3, 6, 9];
 *  var arr2 = [1, 6, 8];
 *
 *  var diff = difference(arr1, arr2);
 *
 *  console.log(diff); // [3, 9]
 *
 **/
var difference = function (arr1, arr2) {
  return arr1.filter((elem) => !arr2.includes(elem));
};

module.exports = difference;
