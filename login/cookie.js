var express = require('express');
var cookieParser = require('cookie-parser');

var app=express();
app.listen(3000);

app.use(cookieParser());
app.get('/', function(req, res){
  if(req.cookies.isVisit){
    console.log(req.cookies);
    res.send('hhh');
  }else{
    res.cookie('isVisit', 1, {maxAge:60*1000});
    res.send('first');
  }
})