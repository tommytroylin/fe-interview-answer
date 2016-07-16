'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var getName = function(){
 *      console.log('Just say hi');
 *      return 'world';
 *  };
 *
 *  var onceCall = once(getName);
 *
 *  onceCall(); //Just say hi
 *  onceCall();
 *
 **/
var once = function (func) {
  let run = false;
  let result;
  return function (...args) {
    if (!run) {
      run = true;
      result = func.bind(this)(args);
      return result;
    }
    return result;
  };
};

module.exports = once;
