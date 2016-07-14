'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var arr1 = [3, 6, 9];
 *
 *  var found1 = findlast(arr1, function(i){
 *      return i > 3;
 *  });
 *
 *  console.log(found1); // 9
 *
 *  var arr2 = [{ name: 'ShangHai', size: 6340.5 }, { name: 'BeiJing', size: 16410.54 }];
 *
 *  var found2 = findlast(arr2, function(i){
 *      return i.name.indexOf('i');
 *  });
 *
 *  console.log(found2); // { name: 'BeiJing', size: 16410.54 }
 *
 **/
var findlast = function (array, func) {
  let result;
  for (let e of array) {
    if (func(e)) {
      result = e;
    }
  }
  return result;
};

module.exports = findlast;
