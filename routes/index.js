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

router.get('/lottery', function(req, res, next){
    
    //Make the list of possible lottery numbers
    var list = [];
    for (var i = 1; i <= 75; i++) {
        list.push(i);
    }
    list.sort(function() {
        return .5 - Math.random();
    });
    var result = list.slice(0, 5);
    result.push(Math.ceil(Math.random()*75));
    res.status(200).json(result);
});

module.exports = router;
