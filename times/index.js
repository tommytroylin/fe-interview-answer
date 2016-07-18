'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  times(1, String); // ['0']
 *
 *  times(3, Boolean); // [false, true, true]
 *
 *  times(4, function(){ return 'Fuck'; }); // ['Fuck', 'Fuck', 'Fuck', 'Fuck']
 *
 *
 **/
var times = function (n, func) {
  const result = [];
  for (let i = 0; i < n; i++) {
    result.push(func(i));
  }
  return result;
};

module.exports = times;
