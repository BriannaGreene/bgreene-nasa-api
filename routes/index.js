var express = require('express');
var router = express.Router();
let data = require('./javascripts/data.json')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(data);
  res.render('index', { title: 'Express' });
});

module.exports = router;
