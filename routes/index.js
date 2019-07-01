var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  <!--可传递JSON数据-->
  res.render('index', { title: 'Express' });
});

module.exports = router;
