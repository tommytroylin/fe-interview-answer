'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var arr1 = [3, 6, 9, 6];
 *
 *  var found1 = findmost(arr1);
 *
 *  console.log(found1); // 6
 *
 *  var arr2 = [{ name: 'ShangHai', size: 6340.5 }, { name: 'BeiJing', size: 16410.54 }, { name: 'ShangHai', size: 6340.5 }];
 *
 *  var found2 = findmost(arr2, function(item){
 *      return item.name;
 *  });
 *
 *  console.log(found2); // { name: 'ShangHai', size: 6340.5 }
 *
 **/
var findmost = function (array, identity) {
  const occurence = [];
  let most = { times: 0 };
  for (const elem of array) {
    const id = identity ? identity(elem) : elem;
    if (!occurence[id]) {
      occurence[id] = { times: 1, raw: elem };
    } else {
      occurence[id].times++;
    }
    if (most && occurence[id].times > most.times) {
      most = occurence[id];
    }
  }
  return most.raw;
};

module.exports = findmost;
