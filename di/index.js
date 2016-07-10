'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 * var app = new Di();
 *
 * app.register('duck', {
 *     fly: function(){
 *         console.log('fuck flying');
 *     }
 * });
 *
 * app.run(['duck', function(duck){
 *     duck.fly();//fuck flying
 * }]);
 *
 *
 **/
var Di = function () {
  this.dependences = {};
};

Di.prototype.register = function (name, inst) {
  switch (typeof inst) {
    case 'function':
      this.dependences[name] = new inst;
      break;
    default:
      this.dependences[name] = inst;
  }
};

Di.prototype.run = function (arr) {
  const func = arr.pop();
  const args = arr.map((v) => this.dependences[v]);
  if (args.includes(undefined)) {
    throw new Error('unknown dependences');
  }
  const self = args.reduce((p, c) => Object.assign(p, c), {});
  return func.apply(self, args);
};

module.exports = Di;
