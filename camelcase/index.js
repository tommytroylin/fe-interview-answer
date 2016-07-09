'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  console.log(camelcase('HELLO WORLD')); // helloWorld
 *
 *  console.log(camelcase('HELLO         WORLD')); // helloWorld
 *
 *  console.log(camelcase('drunkman')); // drunkman
 *
 *  console.log(camelcase('hi----you')); // hiYou
 *
 **/
var camelcase = function (str) {
  const connector = ' -';
  let result = str.toLowerCase();
  for (const c of connector) {
    result = result.replace(new RegExp(`${c}+`), c);
    result = result.split(c).reduce((p, v) => p + v.slice(0, 1).toUpperCase() + v.slice(1));
  }
  return result;
};

module.exports = camelcase;
