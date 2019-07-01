var express = require('express');
var router = express.Router();

/* GET login page. */
router.get('/', function (req, res) {
    <!--可传递JSON数据-->
    res.render('login');
});

module.exports = router;
