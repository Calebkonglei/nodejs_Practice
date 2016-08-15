var express = require('express');
var superagent = require('superagent');
var cheerio = require('cheerio');
var router = express.Router();

router.get('/', function(req, res, next) {
  //superagent抓取https://cnodejs.org/内容

  superagent.get('https://cnodejs.org/')
    .end(function (err, sres) {
      if(err) {
        return next(err);
      }
      var $ = cheerio.load(sres.text);
      var items = [];
      $('#topic_list .cell').map(function () {
        var $tag = $(this).find('a .last_time');
        var $title = $(this).find('.topic_title_wrapper a').text();
        items.push({
          title:$title,
          href:$tag.attr('href')
        });
      });
      res.send(items);
    })
})