'use strict';

/**
 *
 *  尝试完成如下功能：
 *
 *  var fullUrl = 'https://github.com/tj/lkk?tab=repositories&date=20160118&ttt=sss';
 *
 *  urlparser(fullUrl) // { protocol: 'https', host: 'github.com', path: '/tj/lkk', query: { tab: 'repositories', date: '20160118', ttt: 'sss' } }
 *
 *  var simpleUrl = 'http://www.baidu.com';
 *
 *  urlparser(simpleUrl) // { protocol: 'http', host: 'www.baidu.com' }
 *
 **/
var urlparser = function (url) {
  const result = {};
  let restUrl = url;
  const sliceUrlFromIndex = function (index, separatorLengh = 0) {
    let result;
    if (index === -1) {
      result = restUrl;
      restUrl = '';
      return result;
    }
    result = restUrl.slice(0, index);
    restUrl = restUrl.slice(index + separatorLengh);
    return result;
  };
  result.protocol = sliceUrlFromIndex(restUrl.indexOf('://'), 3);
  if (restUrl.indexOf('/') !== -1) {
    result.host = sliceUrlFromIndex(restUrl.indexOf('/'), 0);
    result.path = sliceUrlFromIndex(restUrl.indexOf('?'), 1);
  } else if (restUrl.indexOf('?') !== -1) {
    result.host = sliceUrlFromIndex(restUrl.indexOf('?'), 1);
  } else {
    result.host = sliceUrlFromIndex(restUrl.indexOf('/'), 0);
  }
  if (!!restUrl) {
    result.query = {};
    const keyValues = restUrl.split('&');
    for (const kv of keyValues) {
      const pair = kv.split('=');
      result.query[pair[0]] = pair[1];
    }
  }
  return result;
};

module.exports = urlparser;
