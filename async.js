var async = require('async');

var concurrentCount = 0;
var fetchUrl = function(url, callback) {
  var delay = parseInt((Math.random() * 100000) % 2000, 10);
  concurrentCount++;
  console.log(`现在的并发数是 ${concurrentCount},正在抓取 ${url}, 延时是 ${delay}`);
  setTimeout(function(){
    concurrentCount--;
    callback(null, url+'html content');
  }, delay);
}
var urls = [];
for(var i = 0; i < 30; i++) {
  urls.push('http://datasource_' + i);
};

async.mapLimit(urls, 5, function(url, callback){
  fetchUrl(url, callback);
}, function(err, result){
  console.log('final:');
  console.log(result);
})