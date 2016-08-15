var express = require('express');
var utility = require('utility');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  var q = req.query.q;
  var md5Value = utility.md5(q);
  res.send(md5Value);
});

module.exports = router;
