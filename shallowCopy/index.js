'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  shallowCopy([1, 2, 3])                      = [1, 2, 3]
 *  shallowCopy({ name: 'hello', value: 23 })   = { name: 'hello', value: 23 }
 *
 *  var value = [{ name: 'hello', value: 23 }];
 *  var copied = shallowCopy(value);
 *  copied[0].name = 'world';
 *  console.log(value[0].name) //world
 *
 *
 **/
var shallowCopy = function (value) {
  // in ES2017 we can use
  // return Object.create(Object.getPrototypeOf(value), Object.getOwnPropertyDescriptors(value));
  let propDescriptors = {};
  for (let i of Object.getOwnPropertyNames(value)) {
    propDescriptors[i] = Object.getOwnPropertyDescriptor(value, i);
  }
  return Object.create(Object.getPrototypeOf(value), propDescriptors);
};

module.exports = shallowCopy;
