'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var say = function(name, words, callback){
 *      setTimeout(function(){
 *          console.log('Hi ' + name + '! ' + words);
 *          callback({
 *              status: 'FINISHED'
 *          });
 *     });
 *  };
 *
 *  var thunkSay = thunkify(say);
 *
 *  thunkSay('ZhangSan', 'You are freak.')(function(data){
 *      console.log(data); // { status: 'FINISHED' }
 *  });
 *
 **/
var thunkify = function (func) {
  return function (...args) {
    // 此处作用域为实际调用callback之前的作用域，需要和原函数绑定
    return (callback) => {
      // 此处使用try catch捕捉问题并传送给callback
      try {
        return func.bind(this)(...args, callback);
      } catch (e) {
        return callback(e);
      }
    };
  };
};

module.exports = thunkify;
