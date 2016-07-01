'use strict';

/**
 *
 *  1. 让Son继承自Parent，并保证new Son() instanceof Parent === true
 *  2. 给Son类增加一个构造参数childName
 *  3. 并在Son中增加原型方法getChildName，使其返回自己的名字childName
 *
 **/
var Parent = require('./Parent');

var Son = function (parentName, childName) {
  Parent.call(this, parentName); // 调用父类构造函数
  this.childName = childName;
};


// Son.prototype = new Parent(); // 将原型对象指向父类实例
// 一种更好的方式是使用空对象，以节省实例化Parent的内存
var Temp = function () {};
Temp.prototype = Parent.prototype;
Son.prototype = new Temp();
Son.prototype.constructor = Son; // 手动纠正构造器引用

Son.prototype.getChildName = function () {
  return this.childName;
};

module.exports = Son;