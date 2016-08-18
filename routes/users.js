var express = require('express');
var utility = require('utility');
var router = express.Router();



router.get('/users', function(req, res, next) {
  res.render('use', { name: 'dannisi'})
})

module.exports = router;
