var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var url = require('url');
var router = express.Router();

var cnodeUrl = 'https://cnodejs.org/';
router.get('/', function(req, res, next){
  superagent.get(cnodeUrl)
  .end(function(err, res){
    if(err){
      return console.error(err);
    }
    var topicUrls = [];
    var $ = cheerio.load(res.text);
    $('#topic_list .cell').map(function(index, ele){
      var $ele = ele;
      var href = url.resolve(cnodeUrl, $ele.attr('href'));
      topicUrls.push(href);
    })
    console.log(topicUrls)
  })
})