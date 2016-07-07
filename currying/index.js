'use strict';

/**
 *
 *  该模块必须完成以下功能：
 *
 *  var currying = require('currying');
 *
 *  var add = function(a, b) {
 *     return a + b;
 *  };
 *
 *  var curried = curry(add);
 *  console.log(curried(1)(2)); // 3
 *
 **/
var currying = function (func) {
  // 获取到目标方法所需参数的个数
  // 如果目标方法使用rest参数，也不影响
  const argslength = func.length;
  // 柯里化方法单元
  // 主要实现方式是，在每个过渡方法（闭包）中保存所有已知参数的数组。
  const curry = function (...args) {
    return function (...lastArgs) {
      const all = [...args, ...lastArgs];
      // 在获取到当前所有已知参数时进行判断
      if (all.length >= argslength) {
        // 如果参数个数已经满足要求，则执行目标方法返回结果
        return func.apply(null, all);
      }
      // 如果参数个数不满足要求，则继续柯里化
      return curry(...all);
    };
  };
  return curry();
};

module.exports = currying;