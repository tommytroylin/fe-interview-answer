'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var mw = new Middleware();
 *
 *  mw.use(function(next) {
 *      var self = this;
 *      setTimeout(function() {
 *          self.hook1 = true;
 *          next();
 *      }, 10);
 *  });
 *
 *  mw.use(function(next) {
 *      var self = this;
 *      setTimeout(function() {
 *          self.hook2 = true;
 *          next();
 *      }, 10);
 *  });
 *
 *  var startTime = new Date();
 *
 *  mw.start(function() {
 *      console.log(this.hook1); // true
 *      console.log(this.hook2); // true
 *      console.log(new Date() - startTime); // around 20
 *  });
 *
 **/
var Middleware = function () {
  this.middleware = [];
};

Middleware.prototype.use = function (func) {
  this.middleware.push(func.bind(this));
};

Middleware.prototype.start = function (callback) {
  this.use(callback);
  const next = () => {
    const f = this.middleware.shift();
    return f && f(next);
  };
  return next();
};

module.exports = Middleware;
