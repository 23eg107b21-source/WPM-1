var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'College Lost and Found',message:'The College Lost and Found Portal is a digital platform where students and staff can easily report lost items and claim found belongings within the campus.' });
});

module.exports = router;
