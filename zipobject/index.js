'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  zipobject(['fred', 'barney'], [30, 40]); // { 'fred': 30, 'barney': 40 }
 *
 *  zipobject(['Shanghai', 'Beijing'], [25000000, 30000000, 999]);
 *  // { 'Shanghai': 25000000, 'Beijing':  30000000}
 *
 *
 **/
var zipobject = function (arr1, arr2) {
  const result = {};
  for (const [index, element] of arr1.entries()) {
    result[element.toString()] = arr2[index];
  }
  return result;
};

module.exports = zipobject;
