var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('fortune.html', { root:  'public' });
});

router.get('/fortuneproxy', function(req, res, next){
    let request = require('request');
    let url = "http://fortunecookieapi.herokuapp.com/v1/cookie";
    request(url).pipe(res);
});

module.exports = router;
